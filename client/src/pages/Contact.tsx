import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PHONE_PRIMARY = "0816116174";
const PHONE_OFFICE_1 = "027540992";
const PHONE_OFFICE_2 = "027540993";
const LINE_URL = "https://line.me/R/ti/p/~0888137777";
const GOOGLE_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=199+หมู่+9+ถนนแบริ่ง+107+สำโรงเหนือ+เมืองสมุทรปราการ+สมุทรปราการ+10270";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ติดต่อเรา</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              เราพร้อมให้คำปรึกษาและดูแลคุณในทุกปัญหาด้านกฎหมายและบัญชี
              กดโทรหรือกด LINE ได้เลย
            </p>
          </div>
        </section>

        {/* CTA Buttons – โทร / LINE / แผนที่ (Static – ไม่มีฟอร์ม ไม่เก็บข้อมูล) */}
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

        {/* ข้อความสงวนสิทธิ์ */}
        <section className="py-8 bg-white">
          <div className="container max-w-2xl">
            <div className="p-4 bg-muted/50 rounded-md text-sm text-muted-foreground">
              <p className="font-medium mb-2">ข้อสงวนสิทธิ์:</p>
              <p>
                ข้อมูลบนเว็บไซต์นี้จัดทำขึ้นเพื่อการให้ความรู้ทั่วไป
                ไม่ถือเป็นคำปรึกษากฎหมายหรือบัญชี/ภาษีเฉพาะราย
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
