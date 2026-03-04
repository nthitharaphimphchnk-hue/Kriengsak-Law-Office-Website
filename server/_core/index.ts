import "dotenv/config";
import express from "express";
import fs from "fs";
import path from "path";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

const ROOT = path.resolve(import.meta.dirname, "../..");

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth/JWT disabled for static site
  // registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // robots.txt and sitemap.xml – serve before SPA catch-all (dev + prod)
  const publicDir =
    process.env.NODE_ENV === "development"
      ? path.join(ROOT, "client", "public")
      : path.join(ROOT, "dist", "public");
  app.get("/robots.txt", (_req, res) => {
    const p = path.join(publicDir, "robots.txt");
    if (fs.existsSync(p)) {
      res.type("text/plain").sendFile(p);
    } else {
      res.type("text/plain").status(200).send("User-agent: *\nAllow: /\n\nSitemap: https://kriengsaklawconsult.com/sitemap.xml");
    }
  });
  app.get("/sitemap.xml", (_req, res) => {
    const p = path.join(publicDir, "sitemap.xml");
    if (fs.existsSync(p)) {
      res.type("application/xml").sendFile(p);
    } else {
      res.status(404).end();
    }
  });
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
