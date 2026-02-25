import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeSection from "@/components/YouTubeSection";
import { updateMetaTags, pageMetadata } from "@/lib/seo";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ปรึกษาทนายต้องเตรียมอะไรบ้าง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ควรเตรียมเอกสารที่เกี่ยวข้อง เช่น สัญญา ใบเสร็จ หลักฐานการติดต่อ หรือข้อมูลเบื้องต้นเกี่ยวกับปัญหา รวมถึงรายละเอียดวันที่และเหตุการณ์สำคัญ สำหรับคดีแพ่งอาจต้องมีสัญญา หนังสือแจ้ง หรือหลักฐานการชำระเงิน",
      },
    },
    {
      "@type": "Question",
      name: "รับว่าความคดีอะไรบ้าง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "รับว่าคดีแพ่ง คดีอาญา คดีครอบครัว รวมถึงคดีเกี่ยวกับสัญญา มรดก ฟ้องหย่า ฉ้อโกง การฟ้องขับไล่ผู้เช่า และคดีอื่นๆ ตามกฎหมาย ให้คำปรึกษาและประเมินแนวทางคดีได้ทันที",
      },
    },
    {
      "@type": "Question",
      name: "ค่าใช้จ่ายในการจ้างทนายคิดอย่างไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ค่าจ้างขึ้นอยู่กับประเภทคดีและความซับซ้อน โดยทั่วไปคดีแพ่งเริ่มต้นประมาณ 15,000–50,000 บาท คดีอาญาหรือครอบครัวอาจสูงขึ้น สำนักงานให้คำปรึกษาเบื้องต้นฟรี เพื่อประเมินและเสนอราคาที่ชัดเจนตามขอบเขตงาน",
      },
    },
    {
      "@type": "Question",
      name: "ติดต่อเพื่อนัดหมายและรับคำปรึกษาได้อย่างไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "โทร 081-611-6174 หรือ LINE 0888137777 หรือมาที่สำนักงาน 1288–1291, 1702/8–9 ถนนสุขุมวิท ตำบลสำโรงเหนือ กรุงเทพฯ 10270 นัดปรึกษาเบื้องต้นได้ฟรี",
      },
    },
  ],
};

export default function Home() {
  useEffect(() => {
    updateMetaTags(pageMetadata.home);

    // STEP 2: ใส่ FAQ Schema ใน <head> สำหรับ AI/AEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema-home";
    script.textContent = JSON.stringify(homeFaqSchema);
    document.head.appendChild(script);
    return () => {
      document.getElementById("faq-schema-home")?.remove();
    };
  }, []);

  const youtube = {
    channelName: "ผศ.ดร.เกรียงศักดิ์ พินทุสรรค์",
    channelUrl:
      "https://www.youtube.com/@%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B9%8C%E0%B8%94%E0%B8%A3.%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A8%E0%B8%B1%E0%B8%81",
    videos: [
      { title: "ทนายความไขคดี 1", videoId: "KOm6QCApIJU" },
      { title: "ทนายความไขคดี 2", videoId: "uB_7_syzhQM" },
      { title: "ทนายความไขคดี 3", videoId: "7bV3eV6MRPo" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-primary-foreground py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/home-hero-bg.png)', minHeight: '400px' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ทนายความกรุงเทพ ให้คำปรึกษากฎหมายโดยตรง
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-4">
                สำนักงานกฎหมายเกรียงศักดิ์ ให้บริการทนายความในกรุงเทพฯ (สำโรงเหนือ สุขุมวิท) รับว่าความคดีแพ่ง คดีอาญา คดีครอบครัว และให้คำปรึกษากฎหมายโดยตรงอย่างเป็นระบบ นัดหมายเพื่อประเมินแนวทางคดีและเอกสารที่ต้องใช้ได้ทันที
              </p>
              <p className="text-base md:text-lg opacity-90 mb-8">
                ที่อยู่: 1288–1291, 1702/8–9 ถนนสุขุมวิท ตำบลสำโรงเหนือ กรุงเทพฯ 10270
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <a>
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                      ติดต่อเพื่อประเมินข้อมูล
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </Link>
                <a
                  href="https://line.me/R/ti/p/~0888137777"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    LINE: 0888137777
                  </Button>
                </a>
                <a href="tel:0816116174">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" />
                    โทร: 081-611-6174
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Highlights */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              ทนายความกรุงเทพ ที่ลูกค้าไว้วางใจ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    ประสบการณ์ยาวนาน
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  นำโดย ผศ.ดร.เกรียงศักดิ์ พินทุสรศรี ผู้มีประสบการณ์ในแวดวงกฎหมายและบัญชีกว่า 20 ปี
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    ทีมงานมืออาชีพ
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  ทีมทนายความและนักบัญชีผู้เชี่ยวชาญ พร้อมให้คำปรึกษาและบริการอย่างเต็มความสามารถ
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    บริการครบวงจร
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  ครอบคลุมทั้งด้านกฎหมายและบัญชี ตอบโจทย์ทุกความต้องการของลูกค้าบุคคลและธุรกิจ
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* บริการหลักของเรา */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">บริการหลักของเรา</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              ทนายความกรุงเทพ ที่สำนักงานกฎหมายเกรียงศักดิ์ พร้อมให้คำปรึกษาและรับว่าความคดีแพ่ง อาญา ครอบครัว
            </p>
            <Link href="/lawyer-bangkok">
              <a>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  ดูรายละเอียดทนายความกรุงเทพ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </Link>
          </div>
        </section>

        {/* FAQ Section - AEO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              คำถามที่พบบ่อย
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1" className="border-b border-border">
                  <AccordionTrigger className="hover:no-underline hover:text-primary py-4">
                    <span className="text-left font-semibold text-foreground">ปรึกษาทนายต้องเตรียมอะไรบ้าง?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 space-y-3">
                    <p className="font-medium text-foreground">
                      ควรเตรียมเอกสารที่เกี่ยวข้อง เช่น สัญญา ใบเสร็จ หลักฐานการติดต่อ หรือข้อมูลเบื้องต้นเกี่ยวกับปัญหา รวมถึงรายละเอียดวันที่และเหตุการณ์สำคัญ
                    </p>
                    <p>
                      สำหรับคดีแพ่งอาจต้องมีสัญญา หนังสือแจ้ง หรือหลักฐานการชำระเงิน สำหรับคดีอาญาหรือครอบครัว เอกสารบัตรประชาชน ทะเบียน และหลักฐานที่เกี่ยวข้องจะช่วยให้ทนายประเมินได้แม่นยำขึ้น
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2" className="border-b border-border">
                  <AccordionTrigger className="hover:no-underline hover:text-primary py-4">
                    <span className="text-left font-semibold text-foreground">รับว่าความคดีอะไรบ้าง?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 space-y-3">
                    <p className="font-medium text-foreground">
                      รับว่าคดีแพ่ง คดีอาญา คดีครอบครัว รวมถึงคดีเกี่ยวกับสัญญา มรดก ฟ้องหย่า ฉ้อโกง การฟ้องขับไล่ผู้เช่า และคดีอื่นๆ ตามกฎหมาย
                    </p>
                    <p>
                      ให้คำปรึกษาและประเมินแนวทางคดีได้ทันที โทรหรือ LINE เพื่อนัดหมายมาปรึกษาที่สำนักงาน สำโรงเหนือ สุขุมวิท ได้เลย
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3" className="border-b border-border">
                  <AccordionTrigger className="hover:no-underline hover:text-primary py-4">
                    <span className="text-left font-semibold text-foreground">ค่าใช้จ่ายในการจ้างทนายคิดอย่างไร?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 space-y-3">
                    <p className="font-medium text-foreground">
                      ค่าจ้างขึ้นอยู่กับประเภทคดีและความซับซ้อน โดยทั่วไปคดีแพ่งเริ่มต้นประมาณ 15,000–50,000 บาท คดีอาญาหรือครอบครัวอาจสูงขึ้น
                    </p>
                    <p>
                      สำนักงานให้คำปรึกษาเบื้องต้นฟรี เพื่อประเมินและเสนอราคาที่ชัดเจนตามขอบเขตงาน คุณสามารถโทรหรือ LINE เพื่อขอใบเสนอราคาได้
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4" className="border-b border-border">
                  <AccordionTrigger className="hover:no-underline hover:text-primary py-4">
                    <span className="text-left font-semibold text-foreground">ติดต่อเพื่อนัดหมายและรับคำปรึกษาได้อย่างไร?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 space-y-3">
                    <p className="font-medium text-foreground">
                      โทร 081-611-6174 หรือ LINE 0888137777 หรือมาที่สำนักงาน 1288–1291, 1702/8–9 ถนนสุขุมวิท ตำบลสำโรงเหนือ กรุงเทพฯ 10270
                    </p>
                    <p>
                      นัดปรึกษาเบื้องต้นได้ฟรี เราพร้อมประเมินแนวทางคดีและเอกสารที่ต้องใช้ให้คุณทันที
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">บริการทนายความกรุงเทพ</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              สำนักงานกฎหมายเกรียงศักดิ์ รับว่าคดีแพ่ง คดีอาญา คดีครอบครัว ให้บริการครบวงจร
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">บริการด้านกฎหมาย</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>• ว่าความคดีแพ่งและอาญา</div>
                  <div>• ที่ปรึกษากฎหมาย</div>
                  <div>• ร่างและตรวจสัญญา</div>
                  <div>• ดำเนินการอสังหาริมทรัพย์</div>
                  <div>• คดีครอบครัวและมรดก</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">บริการด้านบัญชีและภาษี</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>• รับทำบัญชี</div>
                  <div>• วางแผนภาษี</div>
                  <div>• ตรวจสอบบัญชี</div>
                  <div>• จดทะเบียนธุรกิจ</div>
                  <div>• ให้คำปรึกษาด้านการเงิน</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Link href="/services">
                <a>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    ดูบริการทั้งหมด
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              3 ขั้นตอนเริ่มต้นใช้บริการ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">ประเมินข้อมูลเบื้องต้น</h3>
                <p className="text-muted-foreground">
                  ติดต่อเราเพื่อพูดคุยและประเมินความต้องการของคุณ
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">วางแผนการทำงาน</h3>
                <p className="text-muted-foreground">
                  เราจะนำเสนอแนวทางและแผนการดำเนินงานที่เหมาะสมกับคุณ
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">เริ่มต้นดำเนินการ</h3>
                <p className="text-muted-foreground">
                  ทีมงานของเราจะเริ่มดำเนินการตามแผนที่วางไว้ พร้อมรายงานความคืบหน้า
                </p>
              </div>
            </div>
          </div>
        </section>

        <YouTubeSection
          channelName={youtube.channelName}
          channelUrl={youtube.channelUrl}
          videos={youtube.videos}
        />

        {/* Testimonials Preview */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ความคิดเห็นจากลูกค้า</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">ลูกค้าของเราพึงพอใจกับบริการและความเป็นมืออาชีพของทีมงาน</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm">"สำนักงานของ ดร.เกรียงศักดิ์ได้ช่วยเหลือเราในการจัดการเรื่องกฎหมายและบัญชีอย่างมืออาชีพ ทีมงานมีความรู้ความเข้าใจในปัญหาของธุรกิจ"</p>
                <div>
                  <p className="font-semibold text-primary text-sm">นายสมชาย ประสิทธิ์</p>
                  <p className="text-xs text-muted-foreground">ผู้บริหาร บริษัท ABC จำกัด</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm">"ฉันมีปัญหาเรื่องสัญญากับพนักงาน ดร.เกรียงศักดิ์ช่วยร่างสัญญาที่เป็นธรรมและปกป้องผลประโยชน์ของฉันได้ดี"</p>
                <div>
                  <p className="font-semibold text-primary text-sm">นางสาวสิริวรรณ ใจดี</p>
                  <p className="text-xs text-muted-foreground">เจ้าของธุรกิจค้าปลีก</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm">"เมื่อฉันเจอปัญหาด้านภาษีอากร ฉันติดต่อสำนักงานนี้ ดร.เกรียงศักดิ์ให้คำปรึกษาที่ชัดเจน"</p>
                <div>
                  <p className="font-semibold text-primary text-sm">นายวิทยา สมบูรณ์</p>
                  <p className="text-xs text-muted-foreground">วิศวกร ผู้ประกอบการอิสระ</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/testimonials">
                <a>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    ดูความคิดเห็นทั้งหมด
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-20">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              พร้อมให้คำปรึกษาและบริการคุณแล้ววันนี้
            </h2>                      <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              ติดต่อเราผ่านช่องทางที่สะดวกของคุณ เราพร้อมรับฟังและประเมินข้อมูลเบื้องต้น
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a>
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    ติดต่อเรา
                  </Button>
                </a>
              </Link>
              <a
                href="https://line.me/R/ti/p/~0888137777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  LINE
                </Button>
              </a>
              <a href="tel:0816116174">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 h-4 w-4" />
                  โทร
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
