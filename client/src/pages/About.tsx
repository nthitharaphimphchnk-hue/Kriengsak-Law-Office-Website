import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updateMetaTags, pageMetadata } from "@/lib/seo";

export default function About() {
  useEffect(() => {
    updateMetaTags(pageMetadata.about);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative text-primary-foreground py-16 md:py-24 bg-cover bg-center bg-no-repeat bg-[url('/about-hero.png')]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">เกี่ยวกับเรา</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">ประวัติสำนักงาน</h2>
              <p className="text-lg text-muted-foreground mb-6">
                บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด ก่อตั้งขึ้นจากความตั้งใจของ ผู้ช่วยศาสตราจารย์ ดร.เกรียงศักดิ์ พินทุสรศรี ที่จะมอบบริการด้านกฎหมายและบัญชีที่เปี่ยมด้วยคุณภาพและจรรยาบรรณ
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                เราเชื่อมั่นในการทำงานที่โปร่งใส ตรงไปตรงมา และยึดถือประโยชน์ของลูกค้าเป็นที่ตั้ง ด้วยทีมงานที่มีประสบการณ์และความเชี่ยวชาญเฉพาะด้าน เราพร้อมให้คำปรึกษาและดูแลลูกค้าในทุกขั้นตอน
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">ผู้ก่อตั้ง</h2>
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-primary mb-4">ผศ.ดร.เกรียงศักดิ์ พินทุสรศรี</h3>
              <p className="text-muted-foreground mb-6">
                เป็นผู้เชี่ยวชาญที่ได้รับการยอมรับในแวดวงกฎหมายและวิชาการ ด้วยคุณวุฒิและประสบการณ์ที่สั่งสมมาอย่างยาวนาน ท่านจึงมีความเข้าใจในปัญหาที่ซับซ้อนของลูกค้าอย่างลึกซึ้ง และสามารถให้คำแนะนำที่นำไปปฏิบัติได้จริง
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm text-primary">นิติศาสตรดุษฎีบัณฑิต</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">มหาวิทยาลัยรามคำแหง</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm text-primary">นิติศาสตรมหาบัณฑิต</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">มหาวิทยาลัยรามคำแหง</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm text-primary">เนติบัณฑิตไทย</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">สำนักอบรมศึกษากฎหมาย</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">วิสัยทัศน์และพันธกิจ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>คุณภาพ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    มุ่งเน้นคุณภาพของงานเสมอ และยั่งยืนด้วยผลงานคุณภาพ
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>ความพึงพอใจ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    สร้างรากฐานธุรกิจที่มีคุณค่าโดยยึดถือความพึงพอใจของลูกค้า
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>ความเป็นธรรม</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    ทำงานเป็นระบบ โปร่งใส ตรวจสอบได้ และเป็นธรรมต่อทุกฝ่าย
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16 md:py-24 bg-muted/30">
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
