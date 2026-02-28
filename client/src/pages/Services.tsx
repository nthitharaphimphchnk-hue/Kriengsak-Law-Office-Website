import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Scale, FileText, Home, Users, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { updateMetaTags, pageMetadata } from "@/lib/seo";

const SERVICE_CATEGORIES = [
  { slug: "accounting", title: "รับทำบัญชี", description: "บริการรับทำบัญชีรายเดือน (ข้อมูลทั่วไป)", href: "/services/accounting", icon: BarChart3 },
  { slug: "audit", title: "ตรวจสอบ/ทบทวนบัญชี", description: "บริการตรวจสอบ/ทบทวนเอกสารบัญชี (ข้อมูลทั่วไป)", href: "/services/audit", icon: FileText },
  { slug: "legal", title: "ด้านกฎหมาย", description: "บริการด้านกฎหมาย (ข้อมูลทั่วไป)", href: "/services/legal", icon: Scale },
] as const;

export default function Services() {
  useEffect(() => {
    updateMetaTags(pageMetadata.services);
  }, []);
  const legalServices = [
    {
      icon: Scale,
      title: "ให้คำปรึกษาและว่าความคดีแพ่งและอาญา",
      description: "เป็นตัวแทนในชั้นศาล ทั้งคดีแพ่ง เช่น ละเมิด, สัญญา, ที่ดิน, ครอบครัว, คดีหุ้นส่วนในบริษัท และคดีอาญา เช่น คดีฟอกเงิน, คดีฉ้อโกง, ยักยอก และอื่นๆ รับทุกคดี พร้อมให้คำปรึกษา และรับว่าความคดี",
    },
    {
      icon: Briefcase,
      title: "ที่ปรึกษากฎหมาย",
      description: "ให้คำปรึกษาและแนะนำข้อกฎหมายที่เกี่ยวข้องกับการดำเนินชีวิตและธุรกิจ",
    },
    {
      icon: FileText,
      title: "ร่างและตรวจสัญญา",
      description: "จัดทำและตรวจสอบสัญญาต่างๆ เพื่อให้รัดกุมและเป็นธรรม",
    },
    {
      icon: Home,
      title: "อสังหาริมทรัพย์",
      description: "ดำเนินการจดทะเบียนสิทธิและนิติกรรมเกี่ยวกับที่ดินและอสังหาริมทรัพย์",
    },
    {
      icon: Users,
      title: "คดีครอบครัวและมรดก",
      description: "จัดการเรื่องมรดก, พินัยกรรม, การหย่า และสินสมรส",
    },
  ];

  const accountingServices = [
    {
      icon: BarChart3,
      title: "รับทำบัญชี",
      description: "จัดทำบัญชีรายเดือนและรายปี ตามมาตรฐานการบัญชีที่รับรองทั่วไป",
    },
    {
      icon: CheckCircle2,
      title: "วางแผนภาษี",
      description: "ให้คำปรึกษาเพื่อวางแผนภาษีอากรให้ถูกต้องและประหยัดที่สุด",
    },
    {
      icon: FileText,
      title: "ตรวจสอบบัญชี",
      description: "บริการตรวจสอบบัญชีโดยผู้สอบบัญชีรับอนุญาต",
    },
    {
      icon: Briefcase,
      title: "จดทะเบียนธุรกิจ",
      description: "รับจดทะเบียนจัดตั้งบริษัท, ห้างหุ้นส่วน และการเปลี่ยนแปลงต่างๆ",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[420px] md:min-h-[480px] flex items-center text-primary-foreground bg-cover bg-center bg-no-repeat bg-[url('/hero-sign-1920x800.jpg')]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">บริการของเรา</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              สำนักงานของเราให้บริการด้านกฎหมายและบัญชีอย่างครบวงจร ทั้งสำหรับลูกค้าบุคคลและนิติบุคคล
            </p>
          </div>
        </section>

        {/* Service categories – internal links to detail pages */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">หมวดบริการหลัก</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICE_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Card key={cat.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-primary">{cat.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{cat.description}</p>
                      <Link href={cat.href}>
                        <a>
                          <Button variant="outline" size="sm">
                            รายละเอียด
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Legal Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">บริการด้านกฎหมาย</h2>
            <p className="text-muted-foreground mb-12">ให้คำปรึกษา, รับว่าความ, และจัดทำเอกสารทางกฎหมาย</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-primary">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="pt-4 border-t border-border">
                        <ShareButtons title={service.title} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Accounting Services */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">บริการด้านบัญชีและภาษี</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accountingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-primary">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="pt-4 border-t border-border">
                        <ShareButtons title={service.title} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4">ข้อสงวนสิทธิ์</h3>
              <p className="text-muted-foreground">
                "ข้อมูลบนเว็บไซต์นี้จัดทำขึ้นเพื่อการให้ความรู้ทั่วไป ไม่ถือเป็นคำปรึกษากฎหมายหรือบัญชี/ภาษีเฉพาะราย"
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
