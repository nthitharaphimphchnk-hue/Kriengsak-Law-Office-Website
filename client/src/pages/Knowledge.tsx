import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";

export default function Knowledge() {
  const articles = [
    {
      id: 1,
      title: "การจดทะเบียนบริษัทต้องทำอย่างไร?",
      date: "12 กุมภาพันธ์ 2569",
      category: "บัญชีและภาษี",
      excerpt: "สรุปขั้นตอนและเอกสารที่ต้องใช้ในการจดทะเบียนจัดตั้งบริษัทจำกัด พร้อมข้อควรระวังสำหรับผู้เริ่มต้น",
    },
    {
      id: 2,
      title: "สัญญาเงินกู้ยืมที่ถูกต้องตามกฎหมาย",
      date: "10 กุมภาพันธ์ 2569",
      category: "กฎหมายแพ่ง",
      excerpt: "องค์ประกอบสำคัญที่ต้องมีในสัญญาเงินกู้ยืม เพื่อให้สามารถใช้ฟ้องร้องบังคับคดีได้ตามกฎหมาย",
    },
    {
      id: 3,
      title: "รู้หรือไม่? มรดกที่ไม่มีพินัยกรรมจะตกเป็นของใคร",
      date: "8 กุมภาพันธ์ 2569",
      category: "กฎหมายครอบครัว",
      excerpt: "ลำดับทายาทโดยธรรมที่มีสิทธิรับมรดก กรณีที่เจ้ามรดกเสียชีวิตโดยไม่ได้ทำพินัยกรรมไว้",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">บทความและสาระน่ารู้</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              รวบรวมบทความด้านกฎหมายและบัญชีที่น่าสนใจ เพื่อเป็นแนวทางและความรู้เบื้องต้นสำหรับประชาชนและผู้ประกอบการ
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 max-w-3xl">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-primary text-xl mb-2">{article.title}</CardTitle>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Tag size={16} />
                            {article.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <button className="text-primary font-semibold hover:underline text-sm">
                        อ่านต่อ →
                      </button>
                      <ShareButtons title={article.title} />
                    </div>
                  </CardContent>
                </Card>
              ))}
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
