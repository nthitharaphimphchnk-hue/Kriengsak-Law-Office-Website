import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { getDb } from "../db";
import { contactSubmissions } from "../../drizzle/schema";
import { eq, desc, sql } from "drizzle-orm";

// Admin-only procedure
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "คุณไม่มีสิทธิ์เข้าถึงหน้านี้",
    });
  }
  return next({ ctx });
});

export const adminRouter = router({
  // Get all contact submissions
  getContactSubmissions: adminProcedure
    .input(
      z.object({
        status: z.enum(["all", "pending", "contacted", "resolved"]).optional(),
        limit: z.number().min(1).max(100).default(50),
        offset: z.number().min(0).default(0),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "ไม่สามารถเชื่อมต่อฐานข้อมูลได้",
        });
      }

      let query = db.select().from(contactSubmissions);

      // Filter by status if specified
      if (input.status && input.status !== "all") {
        query = query.where(eq(contactSubmissions.status, input.status)) as any;
      }

      const results = await query
        .orderBy(desc(contactSubmissions.createdAt))
        .limit(input.limit)
        .offset(input.offset);

      return results;
    }),

  // Get contact submission by ID
  getContactSubmissionById: adminProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "ไม่สามารถเชื่อมต่อฐานข้อมูลได้",
        });
      }

      const result = await db
        .select()
        .from(contactSubmissions)
        .where(eq(contactSubmissions.id, input.id))
        .limit(1);

      if (result.length === 0) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "ไม่พบข้อมูลการติดต่อนี้",
        });
      }

      return result[0];
    }),

  // Update contact submission status
  updateContactStatus: adminProcedure
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["pending", "contacted", "resolved"]),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "ไม่สามารถเชื่อมต่อฐานข้อมูลได้",
        });
      }

      await db
        .update(contactSubmissions)
        .set({ status: input.status })
        .where(eq(contactSubmissions.id, input.id));

      return {
        success: true,
        message: "อัปเดตสถานะเรียบร้อยแล้ว",
      };
    }),

  // Get contact statistics
  getContactStats: adminProcedure.query(async () => {
    const db = await getDb();
    if (!db) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "ไม่สามารถเชื่อมต่อฐานข้อมูลได้",
      });
    }

    const stats = await db
      .select({
        status: contactSubmissions.status,
        count: sql<number>`count(*)`,
      })
      .from(contactSubmissions)
      .groupBy(contactSubmissions.status);

    const statsMap = {
      pending: 0,
      contacted: 0,
      resolved: 0,
      total: 0,
    };

    stats.forEach((stat) => {
      statsMap[stat.status] = Number(stat.count);
      statsMap.total += Number(stat.count);
    });

    return statsMap;
  }),
});
