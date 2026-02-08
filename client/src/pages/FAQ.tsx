import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQ() {
  const faqs = [
    {
      id: "faq-1",
      question: "ต้องติดต่อสำนักงานอย่างไรเพื่อขอคำปรึกษา?",
      answer: "คุณสามารถติดต่อเราผ่านหลายช่องทาง ได้แก่ โทรศัพท์ (081-611-6174, 02-754-0992, 02-754-0993), LINE (0888137777), อีเมล (vokeingsak@hotmail.com) หรือมาที่สำนักงานโดยตรง ที่ 199 หมู่ 9 ถ. แบริ่ง 107 ต.สำโรงเหนือ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270",
    },
    {
      id: "faq-2",
      question: "การปรึกษาครั้งแรกเสียค่าใช้จ่ายหรือไม่?",
      answer: "เราให้บริการปรึกษาเบื้องต้นแบบไม่เสียค่าใช้จ่าย เพื่อให้เราสามารถประเมินความต้องการของคุณและเสนอแนวทางที่เหมาะสม หลังจากนั้นเราจะให้ข้อมูลค่าบริการตามขอบเขตงานที่ชัดเจน",
    },
    {
      id: "faq-3",
      question: "ต้องใช้เวลานานแค่ไหนในการจัดการคดี?",
      answer: "ระยะเวลาในการจัดการคดีขึ้นอยู่กับความซับซ้อนของคดี ประเภทของคดี และความพร้อมของเอกสารต่างๆ คดีแพ่งอาจใช้เวลาตั้งแต่หลายเดือนถึงหลายปี ขึ้นอยู่กับสถานการณ์ เราจะให้ข้อมูลประมาณการเวลาและความคืบหน้าแก่คุณอย่างสม่ำเสมอ",
    },
    {
      id: "faq-4",
      question: "ค่าบริการทำบัญชีคิดอย่างไร?",
      answer: "ค่าบริการทำบัญชีขึ้นอยู่กับปริมาณและความซับซ้อนของธุรกิจของคุณ เช่น จำนวนใบเสร็จ จำนวนรายการ และประเภทของธุรกิจ เราจะให้ใบเสนอราคาที่ชัดเจนหลังจากประเมินข้อมูลของคุณแล้ว",
    },
    {
      id: "faq-5",
      question: "สัญญาที่เราทำไว้มีความสำคัญทางกฎหมายหรือไม่?",
      answer: "สัญญาที่ร่างและตรวจสอบโดยทนายความของเรา มีความสำคัญทางกฎหมายและสามารถใช้ฟ้องร้องได้ตามกฎหมาย เราจะตรวจสอบให้แน่ใจว่าสัญญามีองค์ประกอบที่ถูกต้องตามกฎหมายและปกป้องผลประโยชน์ของคุณ",
    },
    {
      id: "faq-6",
      question: "ต้องเตรียมเอกสารอะไรบ้างเมื่อมาปรึกษา?",
      answer: "เอกสารที่ต้องเตรียมขึ้นอยู่กับเรื่องที่ปรึกษา เช่น สำหรับเรื่องกฎหมายอาจต้องเตรียมสัญญา เอกสารที่เกี่ยวข้อง หรือข้อมูลเบื้องต้นเกี่ยวกับปัญหา สำหรับเรื่องบัญชี ต้องเตรียมใบเสร็จ ใบสำคัญรับจ่าย และเอกสารทางบัญชี เราจะแจ้งรายละเอียดเพิ่มเติมเมื่อคุณติดต่อมา",
    },
    {
      id: "faq-7",
      question: "มรดกที่ไม่มีพินัยกรรมจะจัดการอย่างไร?",
      answer: "มรดกที่ไม่มีพินัยกรรมจะตกเป็นของทายาทโดยธรรมตามลำดับที่กำหนดในกฎหมาย ได้แก่ บุตร พ่อแม่ สามี/ภรรยา พี่น้อง และญาติอื่นๆ ตามลำดับ เราสามารถช่วยในการจัดการและแบ่งมรดก รวมถึงดำเนินการลงทะเบียนสิทธิต่างๆ ให้ถูกต้องตามกฎหมาย",
    },
    {
      id: "faq-8",
      question: "ความเป็นส่วนตัวของข้อมูลลูกค้าได้รับการปกป้องหรือไม่?",
      answer: "ใช่ เราให้ความสำคัญสูงสุดกับความเป็นส่วนตัวและความลับของลูกค้า ข้อมูลทั้งหมดจะถูกเก็บรักษาเป็นความลับตามจรรยาบรรณวิชาชีพและกฎหมายที่เกี่ยวข้อง เราจะไม่เปิดเผยข้อมูลของคุณให้บุคคลที่สามโดยไม่ได้รับความยินยอม",
    },
    {
      id: "faq-9",
      question: "สามารถติดต่อสำนักงานนอกเวลาราชการได้หรือไม่?",
      answer: "สำนักงานปกติเปิดทำการในวันธรรมชาติ ส่วนการติดต่อนอกเวลาปกติสามารถทำได้ผ่าน LINE หรือส่งข้อความทางอีเมล เราจะตอบกลับโดยเร็วที่สุด สำหรับเรื่องเร่งด่วน โปรดติดต่อโดยตรงเพื่อให้เราสามารถช่วยเหลือได้ทันท่วงที",
    },
    {
      id: "faq-10",
      question: "ต้องทำสัญญาจ้างกับสำนักงานหรือไม่?",
      answer: "สำหรับบริการส่วนใหญ่ เราจะทำสัญญาจ้างที่ชัดเจนเพื่อให้ทั้งสำนักงานและลูกค้าเข้าใจขอบเขตงาน ระยะเวลา และค่าบริการอย่างชัดเจน สัญญาจะช่วยปกป้องผลประโยชน์ของทั้งสองฝ่าย",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">คำถามที่พบบ่อย (FAQ)</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              รวบรวมคำถามและคำตอบเกี่ยวกับบริการกฎหมายและบัญชีของเรา
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-b border-border">
                    <AccordionTrigger className="hover:no-underline hover:text-primary py-4">
                      <span className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ยังมีคำถามอื่นๆ หรือไม่?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              หากคุณมีคำถามเพิ่มเติมหรือต้องการปรึกษาเรื่องเฉพาะ โปรดติดต่อเราโดยตรง เราพร้อมให้คำปรึกษาอย่างเต็มความสามารถ
            </p>
            <a href="/contact">
              <button className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">
                ติดต่อเราเลย
              </button>
            </a>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4">ข้อสงวนสิทธิ์</h3>
              <p className="text-muted-foreground">
                ข้อมูลบนเว็บไซต์นี้จัดทำขึ้นเพื่อการให้ความรู้ทั่วไป ไม่ถือเป็นคำปรึกษากฎหมายหรือบัญชี/ภาษีเฉพาะราย
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
