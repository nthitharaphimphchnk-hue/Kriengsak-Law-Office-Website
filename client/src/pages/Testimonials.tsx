import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "นายสมชาย ประสิทธิ์",
      title: "ผู้บริหาร บริษัท ABC จำกัด",
      content: "สำนักงานของ ดร.เกรียงศักดิ์ได้ช่วยเหลือเราในการจัดการเรื่องกฎหมายและบัญชีอย่างมืออาชีพ ทีมงานมีความรู้ความเข้าใจในปัญหาของธุรกิจ และให้คำแนะนำที่เป็นประโยชน์จริง ราคาบริการก็สมควรกับคุณภาพที่ได้รับ",
      rating: 5,
      service: "บริการด้านบัญชีและภาษี",
    },
    {
      id: 2,
      name: "นางสาวสิริวรรณ ใจดี",
      title: "เจ้าของธุรกิจค้าปลีก",
      content: "ฉันมีปัญหาเรื่องสัญญากับพนักงาน ดร.เกรียงศักดิ์ช่วยร่างสัญญาที่เป็นธรรมและปกป้องผลประโยชน์ของฉันได้ดี ตอนนี้ฉันใจเย็นและมั่นใจในการบริหารจัดการธุรกิจ",
      rating: 5,
      service: "ร่างและตรวจสัญญา",
    },
    {
      id: 3,
      name: "นายวิทยา สมบูรณ์",
      title: "วิศวกร ผู้ประกอบการอิสระ",
      content: "เมื่อฉันเจอปัญหาด้านภาษีอากร ฉันติดต่อสำนักงานนี้ ดร.เกรียงศักดิ์ให้คำปรึกษาที่ชัดเจนและช่วยวางแผนภาษีให้ประหยัดได้มาก ทีมงานเป็นกันเอง และตอบคำถามได้ละเอียด",
      rating: 5,
      service: "วางแผนภาษี",
    },
    {
      id: 4,
      name: "นายประเสริฐ เจริงรัตน์",
      title: "ผู้บริหาร บริษัท XYZ จำกัด",
      content: "ในการจัดการคดีแพ่ง ทีมทนายความของ ดร.เกรียงศักดิ์ได้แสดงความเชี่ยวชาญและทำงานอย่างเป็นระบบ ติดตามความคืบหน้าอย่างสม่ำเสมอ ผลสุดท้ายก็ออกมาตามที่คาดหวัง",
      rating: 5,
      service: "ว่าความคดีแพ่ง",
    },
    {
      id: 5,
      name: "นางสาวพัชรา มีสุข",
      title: "ครอบครัวธุรกิจ",
      content: "เมื่อพ่อเสียชีวิต ฉันต้องจัดการเรื่องมรดกที่ซับซ้อน ดร.เกรียงศักดิ์ช่วยให้เข้าใจกฎหมายและดำเนินการให้ถูกต้องตามกฎหมาย ครอบครัวของฉันพอใจกับการบริการมาก",
      rating: 5,
      service: "จัดการมรดก",
    },
    {
      id: 6,
      name: "นายกิตติ ศรีสุข",
      title: "เจ้าของร้านค้า",
      content: "ฉันใช้บริการทำบัญชีของสำนักงานนี้มาหลายปีแล้ว ทีมงานเป็นมืออาชีพ ส่งรายงานตรงเวลา และสามารถตอบคำถามเกี่ยวกับบัญชีได้ทันที ราคาก็เป็นธรรม",
      rating: 5,
      service: "รับทำบัญชี",
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ความคิดเห็นจากลูกค้า</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              ความพึงพอใจของลูกค้าคือสิ่งที่เราภูมิใจที่สุด ดูความคิดเห็นจากลูกค้าที่ได้รับบริการจากสำนักงาน
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-primary text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">{testimonial.content}</p>
                    <div className="pt-4 border-t border-border">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">ลูกค้าที่พึงพอใจ</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">ปีของประสบการณ์</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">ความพึงพอใจของลูกค้า</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">คุณพร้อมที่จะได้รับบริการจากเราแล้วหรือ?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              เข้าร่วมกับลูกค้าหลายร้อยคนที่ได้รับบริการและความพึงพอใจจากสำนักงานของเรา
            </p>
            <a href="/contact">
              <button className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">
                ติดต่อเราเลย
              </button>
            </a>
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
