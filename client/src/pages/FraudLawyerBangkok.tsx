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
  title: "คดีฉ้อโกงในกรุงเทพ มีโทษกี่ปี | ทนายความทั่วประเทศ",
  description:
    "คดีฉ้อโกงมีโทษจำคุกไม่เกิน 5 ปี หรือปรับไม่เกิน 100,000 บาท ตาม ป.อาญา มาตรา 341 ทนายความทั่วประเทศ ให้คำปรึกษาคดีฉ้อโกง",
};

const faqs = [
  {
    question: "ฉ้อโกงกับโกงแตกต่างกันอย่างไร",
    answer:
      "การฉ้อโกงตาม ป.อาญา มาตรา 341 ต้องมีองค์ประกอบคือ ใช้เล่ห์เหลี่ยมหลอกลวง ทำให้บุคคลหลงเชื่อ แล้วยอมให้ทรัพย์ โดยเจตนาเอาเปรียบ",
  },
  {
    question: "ถูกกล่าวหาฉ้อโกงควรทำอย่างไร",
    answer:
      "ควรปรึกษาทนายความโดยเร็ว เพื่อเตรียมหลักฐานและแนวทางต่อสู้คดี การให้การกับพนักงานสอบสวนควรมีทนายความ陪同",
  },
  {
    question: "โทษฉ้อโกงกรณีร้ายแรงเพิ่มขึ้นไหม",
    answer:
      "ใช่ กรณีฉ้อโกงโดยใช้เอกสารปลอม หรือฉ้อโกงประชาชนหลายคน โทษอาจสูงขึ้นตามมาตรา 342–343",
  },
  {
    question: "ผู้เสียหายฟ้องขอค่าเสียหายได้ไหม",
    answer:
      "ได้ นอกจากคดีอาญาแล้ว ผู้เสียหายสามารถฟ้องคดีแพ่งเรียกค่าเสียหายหรือทรัพย์สินคืนได้",
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

export default function FraudLawyerBangkok() {
  useEffect(() => {
    updateMetaTags(PAGE_META);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema-fraud-bangkok";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.getElementById("faq-schema-fraud-bangkok")?.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              คดีฉ้อโกงในกรุงเทพ มีโทษกี่ปี
            </h1>
            <p className="text-lg opacity-90 max-w-2xl">
              คดีฉ้อโกงมีโทษจำคุกไม่เกิน 5 ปี หรือปรับไม่เกิน 100,000 บาท หรือทั้งจำทั้งปรับ ตามประมวลกฎหมายอาญา มาตรา 341
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">องค์ประกอบความผิด</h2>
            <p className="text-muted-foreground mb-6">
              ความผิดฉ้อโกงต้องมีองค์ประกอบคือ ใช้เล่ห์เหลี่ยมหลอกลวง ทำให้บุคคลหลงเชื่อ แล้วยอมให้ทรัพย์สิน โดยผู้กระทำมีเจตนาเอาเปรียบ การพิสูจน์เจตนาและความเชื่อมโยงระหว่างการหลอกลวงกับการได้ทรัพย์เป็นสิ่งสำคัญ
            </p>

            <h2 className="text-2xl font-bold mb-4">ขั้นตอนดำเนินคดี</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
              <li>แจ้งความต่อพนักงานสอบสวน</li>
              <li>สืบสวนและรวบรวมหลักฐาน</li>
              <li>อัยการส่งฟ้องศาล</li>
              <li>สืบพยานและพิพากษา</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">เอกสารหลักฐานที่ควรเตรียม</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
              <li>สัญญา หรือข้อความที่เกี่ยวข้อง</li>
              <li>หลักฐานการโอนเงิน</li>
              <li>หลักฐานการติดต่อ</li>
              <li>พยานบุคคล</li>
            </ul>

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
                  ปรึกษาทนายความทั่วประเทศ
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
