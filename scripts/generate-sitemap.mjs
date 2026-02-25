#!/usr/bin/env node
/**
 * Generate sitemap.xml from VITE_SITE_URL at build time.
 * Run before vite build so sitemap uses correct production URL.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Load .env (Vite doesn't load it for Node scripts)
try {
  const { config } = await import("dotenv");
  config();
} catch {
  // dotenv optional
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SITEMAP_PATH = join(ROOT, "client", "public", "sitemap.xml");

const BASE_URL = (process.env.VITE_SITE_URL || "https://www.kriengsaklawconsult.com").replace(/\/$/, "");

const ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.8" },
  { path: "/services/accounting", changefreq: "monthly", priority: "0.7" },
  { path: "/services/audit", changefreq: "monthly", priority: "0.7" },
  { path: "/services/legal", changefreq: "monthly", priority: "0.7" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/knowledge", changefreq: "weekly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/testimonials", changefreq: "monthly", priority: "0.6" },
  { path: "/lawyer-chiangmai-divorce", changefreq: "monthly", priority: "0.8" },
  { path: "/lawyer-chiangmai-fraud", changefreq: "monthly", priority: "0.8" },
  { path: "/lawyer-bangkok", changefreq: "monthly", priority: "0.9" },
  { path: "/lawyer-chiangmai-eviction", changefreq: "monthly", priority: "0.8" },
];

const lastmod = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated from VITE_SITE_URL at build time -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
).join("\n")}
</urlset>
`;

writeFileSync(SITEMAP_PATH, xml, "utf-8");
console.log(`[generate-sitemap] Wrote sitemap.xml (${BASE_URL})`);
