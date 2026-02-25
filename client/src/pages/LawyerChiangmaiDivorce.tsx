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
  title: "ฟ้องหย่าใช้เวลากี่เดือน | ทนายความเชียงใหม่ รับว่าคดีหย่า",
  description:
    "คดีฟ้องหย่าใช้เวลาประมาณ 6–12 เดือน ขึ้นอยู่กับความซับซ้อน ทนายความเชียงใหม่ ให้คำปรึกษาคดีหย่า ฟ้องหย่า",
};

const faqs = [
  {
    question: "ฟ้องหย่าต้องมีเหตุผลอะไรบ้าง",
    answer:
      "ตาม ป.พ.พ. มาตรา 1516 คู่สมรสอาจฟ้องหย่าได้เมื่อมีเหตุ เช่น คู่สมรสผิดประเวณี ทิ้งร้างเกิน 1 ปี ทำร้ายร่างกาย หรือประพฤติผิดอย่างร้ายแรง การมีเหตุที่ชัดเจนจะช่วยให้คดีดำเนินไปได้เร็วขึ้น",
  },
  {
    question: "หย่าขาดโดยความยินยอมใช้เวลานานไหม",
    answer:
      "การหย่าขาดโดยความยินยอมของทั้งสองฝ่ายจะเร็วกว่าฟ้องหย่า โดยทั่วไปใช้เวลาประมาณ 1–3 เดือน ขึ้นอยู่กับความพร้อมของเอกสารและกำหนดนัดของศาล",
  },
  {
    question: "ค่าใช้จ่ายฟ้องหย่าเท่าไร",
    answer:
      "ค่าธรรมเนียมศาลและค่าทนายความขึ้นอยู่กับความซับซ้อนของคดี โดยทั่วไปคดีหย่าที่ไม่ซับซ้อน เริ่มต้นประมาณ 20,000–50,000 บาท ติดต่อทนายความเชียงใหม่เพื่อขอประเมินราคา",
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

export default function LawyerChiangmaiDivorce() {
  useEffect(() => {
    updateMetaTags(PAGE_META);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema-divorce";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.getElementById("faq-schema-divorce")?.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ฟ้องหย่าใช้เวลากี่เดือน
            </h1>
            <p className="text-lg opacity-90 max-w-2xl">
              โดยทั่วไปคดีฟ้องหย่าใช้เวลาประมาณ 6–12 เดือน ขึ้นอยู่กับความซับซ้อนของคดี การยินยอมของคู่สมรส และภาระงานของศาล กรณีคู่สมรสยินยอมหย่าด้วยกัน กระบวนการจะเร็วขึ้น
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">ขั้นตอนการฟ้องหย่า</h2>
            <p className="text-muted-foreground mb-6">
              การฟ้องหย่าต้องยื่นคำฟ้องต่อศาลที่มีเขตอำนาจ โดยทั่วไปคือศาลที่มีภูมิลำเนาของโจทก์หรือจำเลย หลังจากยื่นฟ้อง ศาลจะนัดไกล่เกลี่ยก่อน หากไกล่เกลี่ยไม่สำเร็จ จึงจะมีการสืบพยานและพิพากษา
            </p>

            <h2 className="text-2xl font-bold mb-4">เหตุผลที่ฟ้องหย่าได้</h2>
            <p className="text-muted-foreground mb-6">
              ตามประมวลกฎหมายแพ่งและพาณิชย์ มาตรา 1516 คู่สมรสอาจฟ้องหย่าได้เมื่อมีเหตุ เช่น คู่สมรสผิดประเวณี ทิ้งร้างเกิน 1 ปี ทำร้ายร่างกาย หรือประพฤติผิดอย่างร้ายแรง การมีหลักฐานและเหตุผลที่ชัดเจนจะช่วยให้คดีดำเนินไปได้อย่างราบรื่น
            </p>

            <h2 className="text-2xl font-bold mb-4">เรื่องทรัพย์สินและบุตร</h2>
            <p className="text-muted-foreground mb-8">
              คดีหย่าที่มีข้อพิพาทเรื่องการแบ่งทรัพย์สินหรือการเลี้ยงดูบุตร อาจใช้เวลานานกว่าคดีที่ทั้งสองฝ่ายยินยอม การมีทนายความช่วยประเมินและเตรียมเอกสารจะช่วยเร่งกระบวนการได้
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground">{DISCLAIMER_TEXT}</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">คำถามที่พบบ่อยเกี่ยวกับคดีหย่า</h2>
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
