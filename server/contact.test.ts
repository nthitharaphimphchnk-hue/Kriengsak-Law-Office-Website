import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("should successfully submit contact form with valid data", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "ทดสอบ ระบบ",
      phone: "0812345678",
      subject: "ทดสอบการติดต่อ",
      message: "นี่คือข้อความทดสอบ",
      preferredContact: "phone",
    });

    expect(result).toEqual({
      success: true,
      message: "ส่งข้อมูลเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด",
    });
  });

  it("should reject submission with empty name", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        phone: "0812345678",
        subject: "ทดสอบการติดต่อ",
        message: "นี่คือข้อความทดสอบ",
        preferredContact: "phone",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with invalid phone number", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "ทดสอบ ระบบ",
        phone: "123", // Too short
        subject: "ทดสอบการติดต่อ",
        message: "นี่คือข้อความทดสอบ",
        preferredContact: "phone",
      })
    ).rejects.toThrow();
  });

  it("should accept LINE as preferred contact method", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "ทดสอบ ระบบ",
      phone: "0812345678",
      subject: "ทดสอบการติดต่อ",
      message: "นี่คือข้อความทดสอบ",
      preferredContact: "line",
    });

    expect(result.success).toBe(true);
  });

  it("should accept email as preferred contact method", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "ทดสอบ ระบบ",
      phone: "0812345678",
      subject: "ทดสอบการติดต่อ",
      message: "นี่คือข้อความทดสอบ",
      preferredContact: "email",
    });

    expect(result.success).toBe(true);
  });
});
