import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Scale, FileText, Home, Users, BarChart3, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";

export default function Services() {
  const legalServices = [
    {
      icon: Scale,
      title: "ว่าความคดีแพ่งและอาญา",
      description: "เป็นตัวแทนในชั้นศาล ทั้งคดีแพ่ง เช่น ละเมิด, สัญญา, ที่ดิน และคดีอาญา",
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
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">บริการของเรา</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              สำนักงานของเราให้บริการด้านกฎหมายและบัญชีอย่างครบวงจร ทั้งสำหรับลูกค้าบุคคลและนิติบุคคล
            </p>
          </div>
        </section>

        {/* Legal Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">บริการด้านกฎหมาย</h2>
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
