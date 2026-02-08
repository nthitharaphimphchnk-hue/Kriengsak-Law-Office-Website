import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { appRouter } from "./routers";
import { getDb } from "./db";
import { contactSubmissions, users } from "../drizzle/schema";
import { eq } from "drizzle-orm";

describe("Admin Router", () => {
  let testUserId: string;
  let adminUserId: string;
  let testContactId: number;

  beforeAll(async () => {
    const db = await getDb();
    if (!db) throw new Error("Database connection failed");

    // Create test users
    const regularUser = await db
      .insert(users)
      .values({
        openId: "test-user-" + Date.now(),
        name: "Test User",
        email: "testuser@example.com",
        role: "user",
      })
      .$returningId();
    testUserId = regularUser[0].id;

    const adminUser = await db
      .insert(users)
      .values({
        openId: "test-admin-" + Date.now(),
        name: "Test Admin",
        email: "testadmin@example.com",
        role: "admin",
      })
      .$returningId();
    adminUserId = adminUser[0].id;

    // Create test contact submission
    const contact = await db
      .insert(contactSubmissions)
      .values({
        name: "Test Contact",
        phone: "0812345678",
        email: "test@example.com",
        subject: "Test Subject",
        message: "Test Message",
        preferredContact: "phone",
        status: "pending",
      })
      .$returningId();
    testContactId = contact[0].id;
  });

  afterAll(async () => {
    const db = await getDb();
    if (!db) return;

    // Clean up test data
    await db.delete(contactSubmissions).where(eq(contactSubmissions.id, testContactId));
    await db.delete(users).where(eq(users.id, testUserId));
    await db.delete(users).where(eq(users.id, adminUserId));
  });

  it("should deny access to non-admin users", async () => {
    const caller = appRouter.createCaller({
      user: {
        id: testUserId,
        openId: "test-user",
        name: "Test User",
        email: "testuser@example.com",
        role: "user",
        createdAt: new Date(),
      },
      req: {} as any,
      res: {} as any,
    });

    await expect(
      caller.admin.getContactSubmissions({ status: "all" })
    ).rejects.toThrow("คุณไม่มีสิทธิ์เข้าถึงหน้านี้");
  });

  it("should allow admin to get contact submissions", async () => {
    const caller = appRouter.createCaller({
      user: {
        id: adminUserId,
        openId: "test-admin",
        name: "Test Admin",
        email: "testadmin@example.com",
        role: "admin",
        createdAt: new Date(),
      },
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.admin.getContactSubmissions({ status: "all" });
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("should allow admin to get contact submission by ID", async () => {
    const caller = appRouter.createCaller({
      user: {
        id: adminUserId,
        openId: "test-admin",
        name: "Test Admin",
        email: "testadmin@example.com",
        role: "admin",
        createdAt: new Date(),
      },
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.admin.getContactSubmissionById({ id: testContactId });
    expect(result).toBeDefined();
    expect(result.id).toBe(testContactId);
    expect(result.name).toBe("Test Contact");
  });

  it("should allow admin to update contact status", async () => {
    const caller = appRouter.createCaller({
      user: {
        id: adminUserId,
        openId: "test-admin",
        name: "Test Admin",
        email: "testadmin@example.com",
        role: "admin",
        createdAt: new Date(),
      },
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.admin.updateContactStatus({
      id: testContactId,
      status: "contacted",
    });
    expect(result.success).toBe(true);
    expect(result.message).toBe("อัปเดตสถานะเรียบร้อยแล้ว");

    // Verify the status was updated
    const updated = await caller.admin.getContactSubmissionById({ id: testContactId });
    expect(updated.status).toBe("contacted");
  });

  it("should allow admin to get contact statistics", async () => {
    const caller = appRouter.createCaller({
      user: {
        id: adminUserId,
        openId: "test-admin",
        name: "Test Admin",
        email: "testadmin@example.com",
        role: "admin",
        createdAt: new Date(),
      },
      req: {} as any,
      res: {} as any,
    });

    const stats = await caller.admin.getContactStats();
    expect(stats).toBeDefined();
    expect(stats.total).toBeGreaterThan(0);
    expect(stats.pending).toBeGreaterThanOrEqual(0);
    expect(stats.contacted).toBeGreaterThanOrEqual(0);
    expect(stats.resolved).toBeGreaterThanOrEqual(0);
  });

  it("should filter contact submissions by status", async () => {
    const caller = appRouter.createCaller({
      user: {
        id: adminUserId,
        openId: "test-admin",
        name: "Test Admin",
        email: "testadmin@example.com",
        role: "admin",
        createdAt: new Date(),
      },
      req: {} as any,
      res: {} as any,
    });

    const contacted = await caller.admin.getContactSubmissions({ status: "contacted" });
    expect(Array.isArray(contacted)).toBe(true);
    contacted.forEach((submission) => {
      expect(submission.status).toBe("contacted");
    });
  });
});
