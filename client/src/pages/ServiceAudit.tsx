import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updateMetaTags, pageMetadata } from "@/lib/seo";
import { DISCLAIMER_TEXT } from "@/lib/seo-constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServiceAudit() {
  useEffect(() => {
    updateMetaTags(pageMetadata.servicesAudit);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              บริการตรวจสอบ/ทบทวนเอกสารบัญชี (ข้อมูลทั่วไป)
            </h1>
            <p className="text-lg opacity-90 max-w-2xl">
              บริการที่เกี่ยวข้องกับการตรวจสอบหรือทบทวนเอกสารบัญชีในเชิงข้อมูลทั่วไป
              โดยผู้มีความรู้ความสามารถที่เกี่ยวข้อง
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <p className="text-muted-foreground mb-6">
              สำนักงานมีบริการที่เกี่ยวกับการตรวจสอบหรือทบทวนเอกสารบัญชี
              เพื่อให้ลูกค้าเข้าใจแนวทางและขอบเขตการทำงานในลักษณะข้อมูลทั่วไป
            </p>
            <p className="text-muted-foreground mb-8">
              การให้บริการจริงจะพิจารณาตามประเภทงานและความเหมาะสมของแต่ละราย กรุณาติดต่อเราเพื่อประเมินข้อมูลเบื้องต้น
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground">{DISCLAIMER_TEXT}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <a>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    ติดต่อเรา
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </Link>
              <Link href="/services">
                <a>
                  <Button variant="outline">ดูบริการทั้งหมด</Button>
                </a>
              </Link>
              <Link href="/knowledge">
                <a>
                  <Button variant="ghost">บทความที่เกี่ยวข้อง</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
