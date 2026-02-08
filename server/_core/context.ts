import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
// JWT/OAuth disabled for static site – no auth
// import { sdk } from "./sdk";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  // Static site: no DB/JWT – always unauthenticated
  return {
    req: opts.req,
    res: opts.res,
    user: null,
  };
}
