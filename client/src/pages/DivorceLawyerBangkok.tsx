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
  title: "ฟ้องหย่ากรุงเทพ ต้องทำอย่างไร ใช้เวลากี่เดือน | ทนายความกรุงเทพ",
  description:
    "คดีฟ้องหย่าในกรุงเทพโดยทั่วไปใช้เวลาประมาณ 6–12 เดือน ทนายความกรุงเทพ ให้คำปรึกษาคดีหย่า ฟ้องหย่า",
};

const faqs = [
  {
    question: "ฟ้องหย่าต้องมีเหตุผลอะไรบ้าง",
    answer:
      "ตาม ป.พ.พ. มาตรา 1516 คู่สมรสอาจฟ้องหย่าได้เมื่อมีเหตุ เช่น คู่สมรสผิดประเวณี ทิ้งร้างเกิน 1 ปี ทำร้ายร่างกาย หรือประพฤติผิดอย่างร้ายแรง",
  },
  {
    question: "หย่าขาดโดยความยินยอมใช้เวลานานไหม",
    answer:
      "การหย่าขาดโดยความยินยอมของทั้งสองฝ่ายจะเร็วกว่าฟ้องหย่า โดยทั่วไปใช้เวลาประมาณ 1–3 เดือน",
  },
  {
    question: "ค่าใช้จ่ายฟ้องหย่าเท่าไร",
    answer:
      "ค่าธรรมเนียมศาลและค่าทนายความขึ้นอยู่กับความซับซ้อน โดยทั่วไปคดีหย่าเริ่มต้นประมาณ 20,000–50,000 บาท",
  },
  {
    question: "ควรปรึกษาทนายเมื่อไหร่",
    answer:
      "ควรปรึกษาทนายความตั้งแต่มีแนวคิดจะหย่า เพื่อประเมินแนวทาง เอกสารที่ต้องใช้ และค่าใช้จ่าย",
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

export default function DivorceLawyerBangkok() {
  useEffect(() => {
    updateMetaTags(PAGE_META);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema-divorce-bangkok";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.getElementById("faq-schema-divorce-bangkok")?.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ฟ้องหย่ากรุงเทพ ต้องทำอย่างไร ใช้เวลากี่เดือน
            </h1>
            <p className="text-lg opacity-90 max-w-2xl">
              คดีฟ้องหย่าในกรุงเทพโดยทั่วไปใช้เวลาประมาณ 6–12 เดือน ขึ้นอยู่กับพยานหลักฐานและความซับซ้อนของคดี
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">ขั้นตอนฟ้องหย่า</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-3 mb-8">
              <li>ปรึกษาทนายความเพื่อประเมินคดีและแนวทาง</li>
              <li>รวบรวมเอกสารและหลักฐาน</li>
              <li>ยื่นคำฟ้องต่อศาลที่มีเขตอำนาจ (ศาลกรุงเทพฯ)</li>
              <li>เข้าร่วมไกล่เกลี่ยและสืบพยานตามนัดศาล</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">เอกสารที่ต้องใช้</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
              <li>ทะเบียนสมรส</li>
              <li>บัตรประชาชน</li>
              <li>หลักฐานการกระทำผิด (ถ้ามี)</li>
              <li>หลักฐานการอยู่ร่วมกันหรือไม่</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">ค่าใช้จ่ายโดยประมาณ</h2>
            <p className="text-muted-foreground mb-8">
              ค่าธรรมเนียมศาลและค่าทนายความขึ้นอยู่กับความซับซ้อน โดยทั่วไปคดีหย่าที่ไม่ซับซ้อน เริ่มต้นประมาณ 20,000–50,000 บาท ติดต่อทนายความกรุงเทพเพื่อขอประเมินราคา
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
