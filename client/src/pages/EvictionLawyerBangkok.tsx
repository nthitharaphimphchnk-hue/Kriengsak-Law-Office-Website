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
  title: "ฟ้องขับไล่ผู้เช่ากรุงเทพ ต้องทำอย่างไร | ทนายความกรุงเทพ",
  description:
    "การฟ้องขับไล่ผู้เช่าในกรุงเทพต้องยื่นคำฟ้องต่อศาลเมื่อผู้เช่าผิดสัญญา ทนายความกรุงเทพ ให้คำปรึกษาคดีเช่าอสังหาริมทรัพย์",
};

const faqs = [
  {
    question: "ฟ้องขับไล่ผู้เช่าใช้เวลากี่เดือน",
    answer:
      "โดยทั่วไปคดีฟ้องขับไล่ผู้เช่าใช้เวลาประมาณ 3–8 เดือน ขึ้นอยู่กับความซับซ้อน การต่อสู้ของฝ่ายจำเลย และภาระงานของศาล",
  },
  {
    question: "ต้องมีเหตุอะไรถึงฟ้องขับไล่ได้",
    answer:
      "ตามสัญญาเช่าทั่วไป เจ้าของอาจฟ้องขับไล่ได้เมื่อผู้เช่าไม่ชำระค่าเช่า ใช้ผิดวัตถุประสงค์ ทำลายทรัพย์สิน หรือฝ่าฝืนเงื่อนไขสำคัญในสัญญา",
  },
  {
    question: "ส่งหนังสือเตือนก่อนฟ้องหรือไม่",
    answer:
      "โดยทั่วไปควรส่งหนังสือเตือนหรือบอกเลิกสัญญาก่อนฟ้อง เพื่อให้ผู้เช่ามีโอกาสชำระหรือแก้ไข การมีหลักฐานการส่งหนังสือจะช่วยเสริมความชอบธรรม",
  },
  {
    question: "ค่าใช้จ่ายฟ้องขับไล่เท่าไร",
    answer:
      "ค่าธรรมเนียมศาลและค่าทนายความขึ้นอยู่กับความซับซ้อน โดยทั่วไปเริ่มต้นประมาณ 15,000–40,000 บาท",
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

export default function EvictionLawyerBangkok() {
  useEffect(() => {
    updateMetaTags(PAGE_META);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema-eviction-bangkok";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.getElementById("faq-schema-eviction-bangkok")?.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ฟ้องขับไล่ผู้เช่ากรุงเทพ ต้องทำอย่างไร
            </h1>
            <p className="text-lg opacity-90 max-w-2xl">
              การฟ้องขับไล่ผู้เช่าในกรุงเทพต้องยื่นคำฟ้องต่อศาลเมื่อผู้เช่าผิดสัญญา เช่น ค้างค่าเช่า หรือหมดสัญญาแล้วไม่ย้ายออก
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">ขั้นตอนฟ้องขับไล่</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
              <li>ส่งหนังสือเตือนหรือบอกเลิกสัญญา</li>
              <li>รวบรวมหลักฐานการผิดสัญญา</li>
              <li>ยื่นคำฟ้องต่อศาลที่มีเขตอำนาจ</li>
              <li>เข้าร่วมไกล่เกลี่ยและสืบพยาน</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">ระยะเวลา</h2>
            <p className="text-muted-foreground mb-6">
              โดยทั่วไปคดีฟ้องขับไล่ผู้เช่าใช้เวลาประมาณ 3–8 เดือน ขึ้นอยู่กับความซับซ้อน การต่อสู้ของฝ่ายจำเลย และภาระงานของศาล กรณีผู้เช่ายอมออกไปก่อน คดีอาจยุติเร็วขึ้น
            </p>

            <h2 className="text-2xl font-bold mb-4">ค่าใช้จ่าย</h2>
            <p className="text-muted-foreground mb-8">
              ค่าธรรมเนียมศาลและค่าทนายความขึ้นอยู่กับความซับซ้อน โดยทั่วไปเริ่มต้นประมาณ 15,000–40,000 บาท ติดต่อทนายความกรุงเทพเพื่อขอประเมินราคา
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-12">
              <p className="text-sm text-muted-foreground">{DISCLAIMER_TEXT}</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">คำถามที่พบบ่อย</h2>
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
                  ปรึกษาทนายความกรุงเทพ
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
