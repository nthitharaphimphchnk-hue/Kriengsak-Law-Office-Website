import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updateMetaTags } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { DISCLAIMER_TEXT } from "@/lib/seo-constants";

const PAGE_META = {
  title: "ทนายความกรุงเทพ รับว่าความคดีแพ่ง อาญา ครอบครัว | สำนักงานกฎหมายเกรียงศักดิ์",
  description:
    "ทนายความกรุงเทพ (สำโรงเหนือ สุขุมวิท) รับว่าความคดีแพ่ง อาญา ครอบครัว ให้คำปรึกษาโดยตรง นัดหมายได้ทันที",
};

const ADDRESS = "1288–1291, 1702/8–9 ถนนสุขุมวิท ตำบลสำโรงเหนือ กรุงเทพฯ 10270";
const TELEPHONE = "081-611-6174";

const faqs = [
  {
    question: "ค่าใช้จ่ายจ้างทนายเท่าไร",
    answer:
      "ค่าใช้จ่ายขึ้นอยู่กับประเภทคดี โดยคดีแพ่งเริ่มต้นประมาณ 15,000–50,000 บาท คดีอาญาหรือครอบครัวอาจสูงขึ้น สำนักงานให้คำปรึกษาเบื้องต้นฟรี เพื่อประเมินและเสนอราคาที่ชัดเจน",
  },
  {
    question: "ปรึกษาทนายต้องเตรียมอะไรบ้าง",
    answer:
      "ควรเตรียมเอกสารที่เกี่ยวข้อง เช่น สัญญา ใบเสร็จ หลักฐานการติดต่อ หรือข้อมูลเบื้องต้นเกี่ยวกับปัญหา รวมถึงรายละเอียดวันที่และเหตุการณ์สำคัญ",
  },
  {
    question: "รับว่าความคดีอะไรบ้าง",
    answer:
      "รับว่าคดีแพ่ง คดีอาญา คดีครอบครัว คดีสัญญา มรดก ฟ้องหย่า ฉ้อโกง การฟ้องขับไล่ผู้เช่า และคดีอื่นๆ ตามกฎหมาย",
  },
  {
    question: "ติดต่อเพื่อนัดหมายได้อย่างไร",
    answer:
      "โทร 081-611-6174 หรือ LINE 0888137777 หรือมาที่สำนักงาน 1288–1291, 1702/8–9 ถนนสุขุมวิท ตำบลสำโรงเหนือ กรุงเทพฯ 10270 นัดปรึกษาเบื้องต้นได้ฟรี",
  },
  {
    question: "ทำไมควรเลือกสำนักงานกฎหมายเกรียงศักดิ์",
    answer:
      "นำโดย ผศ.ดร.เกรียงศักดิ์ ผู้มีประสบการณ์กว่า 20 ปี ทำงานเป็นระบบ โปร่งใส ให้คำปรึกษาเบื้องต้นฟรี และประเมินแนวทางคดีอย่างชัดเจน",
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

export default function LawyerBangkok() {
  useEffect(() => {
    updateMetaTags(PAGE_META);

    const url = typeof window !== "undefined" ? window.location.origin : "https://www.kriengsaklawconsult.com";

    const legalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "สำนักงานกฎหมายเกรียงศักดิ์",
      url: `${url}/lawyer-bangkok`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1288–1291, 1702/8–9 ถนนสุขุมวิท ตำบลสำโรงเหนือ",
        addressLocality: "กรุงเทพฯ",
        postalCode: "10270",
        addressCountry: "TH",
      },
      telephone: "+66-81-611-6174",
      areaServed: { "@type": "City", name: "กรุงเทพฯ", addressCountry: "TH" },
    };

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema-lawyer-bangkok";
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const legalScript = document.createElement("script");
    legalScript.type = "application/ld+json";
    legalScript.id = "legal-schema-lawyer-bangkok";
    legalScript.textContent = JSON.stringify(legalServiceSchema);
    document.head.appendChild(legalScript);

    return () => {
      document.getElementById("faq-schema-lawyer-bangkok")?.remove();
      document.getElementById("legal-schema-lawyer-bangkok")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ทนายความกรุงเทพ รับว่าความคดีแพ่ง อาญา ครอบครัว
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mb-4">
              สำนักงานกฎหมายเกรียงศักดิ์ ให้บริการทนายความในกรุงเทพฯ (สำโรงเหนือ สุขุมวิท) รับว่าความคดีแพ่ง คดีอาญา คดีครอบครัว และคดีสัญญา ให้คำปรึกษาโดยตรงและประเมินแนวทางคดีอย่างเป็นระบบ
            </p>
            <div className="flex flex-wrap gap-4 text-base opacity-90">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {ADDRESS}
              </span>
              <a href={`tel:${TELEPHONE.replace(/-/g, "")}`} className="flex items-center gap-2 hover:underline">
                <Phone className="h-4 w-4" />
                โทร {TELEPHONE}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">รับคดีอะไรบ้าง</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
              <li>คดีแพ่ง (สัญญา หนี้สิน ละเมิด)</li>
              <li>คดีอาญา (ฉ้อโกง ทำร้ายร่างกาย ฯลฯ)</li>
              <li>คดีครอบครัว (หย่า มรดก เลี้ยงดูบุตร)</li>
              <li>คดีสัญญา (ผิดสัญญา ฟ้องขับไล่ผู้เช่า)</li>
              <li>ที่ปรึกษากฎหมายและร่างสัญญา</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">ขั้นตอนการติดต่อ</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-8">
              <li>โทรหรือ LINE เพื่อนัดหมาย</li>
              <li>มาปรึกษาที่สำนักงาน (หรือนัดหมายตามสะดวก)</li>
              <li>รับคำปรึกษาเบื้องต้นฟรี และประเมินแนวทางคดี</li>
              <li>รับใบเสนอราคาและแผนการดำเนินงาน</li>
              <li>ลงนามสัญญาและเริ่มดำเนินการ</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">ค่าใช้จ่ายเบื้องต้น</h2>
            <p className="text-muted-foreground mb-8">
              ค่าจ้างขึ้นอยู่กับประเภทคดีและความซับซ้อน โดยทั่วไปคดีแพ่งเริ่มต้นประมาณ 15,000–50,000 บาท คดีอาญาหรือครอบครัวอาจสูงขึ้น สำนักงานให้คำปรึกษาเบื้องต้นฟรี เพื่อประเมินและเสนอราคาที่ชัดเจนตามขอบเขตงาน
            </p>

            <h2 className="text-2xl font-bold mb-4">เหตุผลที่ควรเลือกเรา</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">นำโดย ผศ.ดร.เกรียงศักดิ์ ผู้มีประสบการณ์กว่า 20 ปี</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">ทำงานเป็นระบบ โปร่งใส ตรวจสอบได้</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">ให้คำปรึกษาเบื้องต้นฟรี</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">ตั้งอยู่ใกล้ BTS สุขุมวิท สะดวกในการเดินทาง</span>
              </li>
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

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <a>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    นัดปรึกษา
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </Link>
              <a href={`tel:${TELEPHONE.replace(/-/g, "")}`}>
                <Button variant="outline">โทร {TELEPHONE}</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
