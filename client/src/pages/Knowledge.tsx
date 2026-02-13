import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { updateMetaTags, pageMetadata } from "@/lib/seo";

export default function Knowledge() {
  useEffect(() => {
    updateMetaTags(pageMetadata.knowledge);
  }, []);
  const [playingVideoByArticleId, setPlayingVideoByArticleId] = useState<Record<number, boolean>>({});

  type Article = {
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    videoId?: string;
  };

  const articles: Article[] = [
    {
      id: 1,
      title: "คดีรับสภาพหนี้ ทนายความไขคดีปรึกษากฎหมายฟรี14/06/2019 ถามตอบกฎหมายข่าว ทนาย ดร.เกรียงศักดิ์",
      date: "12 กุมภาพันธ์ 2569",
      category: "บัญชีและภาษี",
      excerpt: "สรุปขั้นตอนและเอกสารที่ต้องใช้ในการจดทะเบียนจัดตั้งบริษัทจำกัด พร้อมข้อควรระวังสำหรับผู้เริ่มต้น",
      videoId: "KOm6QCApIJU",
    },
    {
      id: 2,
      title: "คดีต้มสาวซื้อรถยนต์1 05 2564 ถามตอบกฎหมายข่าว คุยสบายสไตล์ทนายเกรียงศักดิ์ 0816116174 1",
      date: "10 กุมภาพันธ์ 2569",
      category: "กฎหมายแพ่ง",
      excerpt: "องค์ประกอบสำคัญที่ต้องมีในสัญญาเงินกู้ยืม เพื่อให้สามารถใช้ฟ้องร้องบังคับคดีได้ตามกฎหมาย",
      videoId: "WHIDtinQRUk",
    },
    {
      id: 3,
      title: "ร้องนักการเมือง ยักยอกรถหรู 2 คัน มูลค่ากว่า 10 ล้าน",
      date: "8 กุมภาพันธ์ 2569",
      category: "กฎหมายครอบครัว",
      excerpt: "ลำดับทายาทโดยธรรมที่มีสิทธิรับมรดก กรณีที่เจ้ามรดกเสียชีวิตโดยไม่ได้ทำพินัยกรรมไว้",
      videoId: "94TxIG9hDE0",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative text-primary-foreground py-16 md:py-24 bg-cover bg-center bg-no-repeat bg-[url('/knowledge-hero-banner.png')]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
          <div className="container relative z-10">
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
                    {article.videoId && (
                      <div className="mb-4 rounded-xl overflow-hidden border border-black/10 shadow-sm aspect-video bg-black">
                        {playingVideoByArticleId[article.id] ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${article.videoId}?autoplay=1&rel=0`}
                            title={`YouTube: ${article.title}`}
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              setPlayingVideoByArticleId((prev) => ({ ...prev, [article.id]: true }))
                            }
                            className="relative w-full h-full block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            aria-label={`เล่นวิดีโอ: ${article.title}`}
                          >
                            <img
                              src={`https://i.ytimg.com/vi/${article.videoId}/hqdefault.jpg`}
                              alt={`ภาพปกวิดีโอ ${article.title}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <span className="absolute inset-0 bg-black/30" />
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600/95 shadow-lg">
                                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white ml-0.5" aria-hidden="true">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </span>
                            </span>
                          </button>
                        )}
                      </div>
                    )}
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
