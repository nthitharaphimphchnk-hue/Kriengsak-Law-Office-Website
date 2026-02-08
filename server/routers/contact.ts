import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "../_core/trpc";
// Static site: no DB, no Line notify – contact page uses tel/LINE/map only
// import { getDb } from "../db";
// import { contactSubmissions } from "../../drizzle/schema";
// import { notifyOwner } from "../_core/notification";

export const contactRouter = router({
  submit: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "กรุณากรอกชื่อ"),
        phone: z.string().min(9, "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง"),
        subject: z.string().min(1, "กรุณากรอกเรื่องที่ติดต่อ"),
        message: z.string().min(1, "กรุณากรอกรายละเอียด"),
        preferredContact: z.enum(["phone", "line", "email"]),
      })
    )
    .mutation(async () => {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Static site: ฟอร์มติดต่อปิดใช้งาน กรุณาโทรหรือ LINE โดยตรง",
      });
      /* DISABLED – static site
      const db = await getDb();
      if (!db) {
        throw new Error("ไม่สามารถเชื่อมต่อฐานข้อมูลได้");
      }

      // Save to database
      const result = await db.insert(contactSubmissions).values({
        name: input.name,
        phone: input.phone,
        subject: input.subject,
        message: input.message,
        preferredContact: input.preferredContact,
        status: "pending",
      });

      // Send notification to owner via LINE
      const contactMethodLabel = {
        phone: "โทรศัพท์",
        line: "LINE",
        email: "อีเมล",
      }[input.preferredContact];

      const notificationContent = `
📩 มีการติดต่อใหม่จากเว็บไซต์

👤 ชื่อ: ${input.name}
📞 เบอร์: ${input.phone}
📋 เรื่อง: ${input.subject}
💬 ข้อความ: ${input.message}
📱 ช่องทางที่ต้องการ: ${contactMethodLabel}

กรุณาติดต่อกลับโดยเร็วที่สุด
      `.trim();

      try {
        await notifyOwner({
          title: "📩 มีการติดต่อใหม่",
          content: notificationContent,
        });
      } catch (error) {
        console.error("[Contact] Failed to send notification:", error);
        // Don't fail the request if notification fails
      }

      return {
        success: true,
        message: "ส่งข้อมูลเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด",
      };
      */
    }),
});
