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
  title: "คดีฉ้อโกงมีโทษกี่ปี | ทนายความเชียงใหม่ รับว่าคดีอาญา",
  description:
    "การฉ้อโกงมีโทษจำคุกไม่เกิน 5 ปี หรือปรับไม่เกิน 100,000 บาท ตาม ป.อาญา มาตรา 341 ทนายความเชียงใหม่ ให้คำปรึกษาคดีฉ้อโกง",
};

const faqs = [
  {
    question: "ฉ้อโกงกับโกงแตกต่างกันอย่างไร",
    answer:
      "การฉ้อโกงตาม ป.อาญา มาตรา 341 ต้องมีองค์ประกอบคือ ใช้เล่ห์เหลี่ยมหลอกลวง ทำให้บุคคลหลงเชื่อ แล้วยอมให้ทรัพย์หรือทำหรือไม่ทำการอย่างใด โดยเจตนาเอาเปรียบ กรณีโกงทั่วไปอาจเข้าข่ายความผิดอื่น เช่น ยักยอก",
  },
  {
    question: "ถูกกล่าวหาฉ้อโกงควรทำอย่างไร",
    answer:
      "ควรปรึกษาทนายความโดยเร็ว เพื่อเตรียมหลักฐานและแนวทางต่อสู้คดี การให้การกับพนักงานสอบสวนควรมีทนายความ陪同 และไม่ควรให้การใดๆ ที่อาจเป็นผลเสียก่อนปรึกษาทนาย",
  },
  {
    question: "โทษฉ้อโกงกรณีร้ายแรงเพิ่มขึ้นไหม",
    answer:
      "ใช่ กรณีฉ้อโกงโดยใช้เอกสารปลอม หรือฉ้อโกงประชาชนหลายคน โทษอาจสูงขึ้นตามมาตรา 342–343 จำคุกได้ถึง 7 ปี หรือมากกว่า ขึ้นอยู่กับลักษณะการกระทำ",
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

export default function LawyerChiangmaiFraud() {
  useEffect(() => {
    updateMetaTags(PAGE_META);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema-fraud";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.getElementById("faq-schema-fraud")?.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              คดีฉ้อโกงมีโทษกี่ปี
            </h1>
            <p className="text-lg opacity-90 max-w-2xl">
              ตาม ป.อาญา มาตรา 341 การฉ้อโกงมีโทษจำคุกไม่เกิน 5 ปี หรือปรับไม่เกิน 100,000 บาท หรือทั้งจำทั้งปรับ กรณีฉ้อโกงโดยใช้เอกสารปลอมหรือมีลักษณะเป็นการฉ้อโกงประชาชน โทษอาจสูงขึ้น
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">องค์ประกอบความผิดฉ้อโกง</h2>
            <p className="text-muted-foreground mb-6">
              ความผิดฉ้อโกงต้องมีองค์ประกอบคือ ใช้เล่ห์เหลี่ยมหลอกลวง ทำให้บุคคลหลงเชื่อ แล้วยอมให้ทรัพย์สินหรือทำหรือไม่ทำการอย่างใด โดยผู้กระทำมีเจตนาเอาเปรียบ การพิสูจน์เจตนาและความเชื่อมโยงระหว่างการหลอกลวงกับการได้ทรัพย์เป็นสิ่งสำคัญ
            </p>

            <h2 className="text-2xl font-bold mb-4">โทษเพิ่มในกรณีร้ายแรง</h2>
            <p className="text-muted-foreground mb-6">
              มาตรา 342 บัญญัติว่าหากฉ้อโกงโดยใช้เอกสารปลอม โทษจำคุกไม่เกิน 7 ปี มาตรา 343 กรณีฉ้อโกงประชาชนหลายคนหรือโดยแสดงตนเป็นหน่วยงาน โทษอาจสูงขึ้น การมีทนายความช่วยวิเคราะห์คดีจะช่วยประเมินความเสี่ยงและแนวทางต่อสู้ได้
            </p>

            <h2 className="text-2xl font-bold mb-4">ผู้เสียหายและผู้ถูกกล่าวหา</h2>
            <p className="text-muted-foreground mb-8">
              ทั้งผู้เสียหายที่ต้องการฟ้องร้องและผู้ถูกกล่าวหาที่ต้องการต่อสู้คดี ควรปรึกษาทนายความเชียงใหม่เพื่อประเมินหลักฐาน แนวทางดำเนินคดี และสิทธิที่พึงมี
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground">{DISCLAIMER_TEXT}</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">คำถามที่พบบ่อยเกี่ยวกับคดีฉ้อโกง</h2>
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
