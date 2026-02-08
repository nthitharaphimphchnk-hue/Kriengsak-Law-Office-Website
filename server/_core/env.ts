// Static site: DATABASE_URL และ JWT_SECRET ไม่ถูกอ่านที่ runtime (ใช้ getter เพื่อไม่โหลด env ถ้าไม่มีใครใช้)
export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  get cookieSecret() {
    return process.env.JWT_SECRET ?? "";
  },
  get databaseUrl() {
    return process.env.DATABASE_URL ?? "";
  },
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
};
