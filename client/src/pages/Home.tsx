import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeSection from "@/components/YouTubeSection";
import { updateMetaTags, pageMetadata } from "@/lib/seo";

export default function Home() {
  useEffect(() => {
    updateMetaTags(pageMetadata.home);
  }, []);

  const youtube = {
    channelName: "ผศ.ดร.เกรียงศักดิ์ พินทุสรรค์",
    channelUrl: "https://www.youtube.com/",
    videos: [
      { title: "คลิปหลัก", videoId: "dQw4w9WgXcQ" },
      { title: "คลิปรอง 1", videoId: "dQw4w9WgXcQ" },
      { title: "คลิปรอง 2", videoId: "dQw4w9WgXcQ" },
    ],
  };

  return (    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-primary-foreground py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.jpg)', minHeight: '400px' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                สำนักงานกฎหมายและบัญชีสำหรับบุคคลและธุรกิจ
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                ทำงานเป็นระบบ โปร่งใส ตรวจสอบได้
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
              ความไว้วางใจจากลูกค้า คือสิ่งที่เราให้ความสำคัญสูงสุด
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

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">บริการของเรา</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              สำนักงานของเราให้บริการด้านกฎหมายและบัญชีอย่างครบวงจร ทั้งสำหรับลูกค้าบุคคลและนิติบุคคล
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
