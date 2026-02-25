import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updateMetaTags } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { DISCLAIMER_TEXT } from "@/lib/seo-constants";

const PAGE_META = {
  title: "การฟ้องขับไล่ผู้เช่า | ทนายความเชียงใหม่ รับว่าคดีแพ่ง",
  description:
    "การฟ้องขับไล่ผู้เช่าต้องมีเหตุตามสัญญาเช่า เช่น ไม่ชำระค่าเช่า ใช้ผิดวัตถุประสงค์ ทนายความเชียงใหม่ ให้คำปรึกษาคดีเช่าอสังหาริมทรัพย์",
};

const faqs = [
  {
    question: "ฟ้องขับไล่ผู้เช่าใช้เวลากี่เดือน",
    answer:
      "โดยทั่วไปคดีฟ้องขับไล่ผู้เช่าใช้เวลาประมาณ 3–8 เดือน ขึ้นอยู่กับความซับซ้อน การต่อสู้ของฝ่ายจำเลย และภาระงานของศาล กรณีผู้เช่ายอมออกไปก่อน คดีอาจยุติเร็วขึ้น",
  },
  {
    question: "ต้องมีเหตุอะไรถึงฟ้องขับไล่ได้",
    answer:
      "ตามสัญญาเช่าทั่วไป เจ้าของอาจฟ้องขับไล่ได้เมื่อผู้เช่าไม่ชำระค่าเช่า ใช้ที่ดินหรืออาคารผิดวัตถุประสงค์ ทำลายทรัพย์สิน หรือฝ่าฝืนเงื่อนไขสำคัญในสัญญา ควรตรวจสอบสัญญาเช่าและเก็บหลักฐานให้ครบ",
  },
  {
    question: "ส่งหนังสือเตือนก่อนฟ้องหรือไม่",
    answer:
      "โดยทั่วไปควรส่งหนังสือเตือนหรือบอกเลิกสัญญาก่อนฟ้อง เพื่อให้ผู้เช่ามีโอกาสชำระหรือแก้ไข การมีหลักฐานการส่งหนังสือและระยะเวลาที่ให้จะช่วยเสริมความชอบธรรมในการฟ้อง",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function LawyerChiangmaiEviction() {
  useEffect(() => {
    updateMetaTags(PAGE_META);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema-eviction";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.getElementById("faq-schema-eviction")?.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              การฟ้องขับไล่ผู้เช่า
            </h1>
            <p className="text-lg opacity-90 max-w-2xl">
              การฟ้องขับไล่ผู้เช่าต้องมีเหตุตามสัญญาเช่า เช่น ไม่ชำระค่าเช่า ใช้ผิดวัตถุประสงค์ หรือทำลายทรัพย์สิน โดยทั่วไปคดีใช้เวลาประมาณ 3–8 เดือน ขึ้นอยู่กับความซับซ้อนและความร่วมมือของฝ่ายจำเลย
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">เหตุผลที่ฟ้องขับไล่ได้</h2>
            <p className="text-muted-foreground mb-6">
              ตามสัญญาเช่าทั่วไป เจ้าของอาจฟ้องขับไล่ได้เมื่อผู้เช่าไม่ชำระค่าเช่าติดต่อกัน ใช้ที่ดินหรืออาคารผิดวัตถุประสงค์ ทำลายทรัพย์สิน หรือฝ่าฝืนเงื่อนไขสำคัญในสัญญา การมีสัญญาเช่าที่ชัดเจนและหลักฐานการกระทำผิดจะช่วยให้คดีแข็งแรง
            </p>

            <h2 className="text-2xl font-bold mb-4">ขั้นตอนก่อนฟ้อง</h2>
            <p className="text-muted-foreground mb-6">
              โดยทั่วไปควรส่งหนังสือเตือนหรือบอกเลิกสัญญาก่อนฟ้อง เพื่อให้ผู้เช่ามีโอกาสชำระค่าเช่าหรือแก้ไขการกระทำผิด การมีหลักฐานการส่งหนังสือและระยะเวลาที่ให้จะช่วยเสริมความชอบธรรม และอาจทำให้ผู้เช่ายอมออกไปโดยไม่ต้องถึงศาล
            </p>

            <h2 className="text-2xl font-bold mb-4">เอกสารที่ต้องเตรียม</h2>
            <p className="text-muted-foreground mb-8">
              ควรเตรียมสัญญาเช่า หลักฐานการชำระหรือไม่ชำระค่าเช่า หนังสือเตือนหรือบอกเลิกสัญญา และหลักฐานอื่นที่เกี่ยวข้อง เช่น รูปถ่ายความเสียหาย การมีทนายความช่วยตรวจสอบและจัดเตรียมเอกสารจะช่วยเร่งกระบวนการได้
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground">{DISCLAIMER_TEXT}</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">คำถามที่พบบ่อยเกี่ยวกับการฟ้องขับไล่ผู้เช่า</h2>
            <Accordion type="single" collapsible className="w-full mb-12">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                  <AccordionTrigger className="hover:no-underline hover:text-primary py-4">
                    <span className="text-left font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Link href="/contact">
              <a>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  ปรึกษาทนายความเชียงใหม่
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
