import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updateMetaTags, pageMetadata } from "@/lib/seo";
import { DISCLAIMER_TEXT } from "@/lib/seo-constants";

const PHONE_PRIMARY = "0816116174";
const PHONE_OFFICE_1 = "027540992";
const PHONE_OFFICE_2 = "027540993";
const LINE_URL = "https://line.me/R/ti/p/~0888137777";
const GOOGLE_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=199+หมู่+9+ถนนแบริ่ง+107+สำโรงเหนือ+เมืองสมุทรปราการ+สมุทรปราการ+10270";

export default function Contact() {
  useEffect(() => {
    updateMetaTags(pageMetadata.contact);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative text-primary-foreground py-16 md:py-24 bg-cover bg-center bg-no-repeat bg-[url('/contact-hero-sign.png')]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ติดต่อเรา</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              เราพร้อมรับฟังและประเมินข้อมูลเบื้องต้นของคุณ
              กดโทรหรือกด LINE ได้เลย
            </p>
          </div>
        </section>

        {/* Disclaimer above contact content (site-wide requirement) */}
        <section className="py-8 bg-white">
          <div className="container max-w-2xl">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-sm text-amber-900">
              <p className="font-medium mb-1">ข้อสงวนสิทธิ์</p>
              <p>{DISCLAIMER_TEXT}</p>
            </div>
          </div>
        </section>

        {/* CTA Buttons – โทร / LINE / แผนที่ */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-primary">
                    <Phone className="h-5 w-5" />
                    โทรศัพท์
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href={`tel:${PHONE_PRIMARY}`}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      โทร 081-611-6174
                    </Button>
                  </a>
                  <div className="text-sm text-muted-foreground">
                    <a href={`tel:${PHONE_OFFICE_1}`} className="hover:text-primary">
                      02-754-0992
                    </a>
                    {" · "}
                    <a href={`tel:${PHONE_OFFICE_2}`} className="hover:text-primary">
                      02-754-0993
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-primary">
                    <MessageCircle className="h-5 w-5" />
                    LINE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full border-green-500 text-green-700 hover:bg-green-50"
                    >
                      กดแชท LINE
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">ID: 0888137777</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-primary">
                    <MapPin className="h-5 w-5" />
                    แผนที่
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={GOOGLE_MAP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      เปิด Google Map
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground mt-2 text-left">
                    199 หมู่ 9 ถ. แบริ่ง 107 ต.สำโรงเหนือ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Info & Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด</h2>
              <p className="text-lg text-muted-foreground mb-6">
                โดย ดร.เกรียงศักดิ์ พินทุสรศรี (ทนายความ)
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-4">บริการของเรา</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                  <div>• รับปรึกษากฏหมาย</div>
                  <div>• รับเป็นที่ปรึกษากฏหมาย</div>
                  <div>• รับทำบัญชี</div>
                  <div>• รับจดทะเบียนบริษัท-ห้างหุ้นส่วน</div>
                  <div className="md:col-span-2">• รับร่างสัญญาต่างๆ</div>
                </div>
              </div>
              <div className="bg-muted/50 rounded-md p-4 text-sm text-muted-foreground mb-8">
                <p className="font-medium mb-2">ติดต่อ:</p>
                <p>โทร: 02-7540992-3</p>
                <p>FAX: 02-7540325</p>
                <p>มือถือ: 081-6116174</p>
                <p>Line ID: 0888137777</p>
                <p className="mt-2">
                  <a href="https://www.krienksaklawyer.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.krienksaklawyer.com
                  </a>
                </p>
              </div>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-sm text-amber-900 mb-8">
              <p className="font-medium mb-1">ข้อสงวนสิทธิ์</p>
              <p>{DISCLAIMER_TEXT}</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>ส่งข้อความ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">ชื่อ-นามสกุล</Label>
                  <Input id="contact-name" placeholder="ชื่อ-นามสกุล" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="contact-email">อีเมล</Label>
                  <Input id="contact-email" type="email" placeholder="อีเมล" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="contact-message">ข้อความ</Label>
                  <Textarea id="contact-message" placeholder="รายละเอียดที่ต้องการติดต่อ" className="mt-1 min-h-[120px]" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">ส่งข้อความ</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
