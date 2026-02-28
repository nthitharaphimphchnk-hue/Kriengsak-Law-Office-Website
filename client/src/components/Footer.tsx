import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">สำนักงาน</h3>
            <p className="text-sm opacity-90">
              บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด
            </p>
            <p className="text-sm opacity-90 mt-2">
              ให้บริการด้านกฎหมายและบัญชีอย่างครบวงจร
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">เมนู</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:underline">หน้าแรก</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:underline">บริการ</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:underline">เกี่ยวกับเรา</a>
                </Link>
              </li>
              <li>
                <Link href="/knowledge">
                  <a className="hover:underline">ความรู้</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="hover:underline">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/testimonials">
                  <a className="hover:underline">ความคิดเห็น</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">ติดต่อ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0816116174" className="hover:underline">
                  081-611-6174
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0275400992" className="hover:underline">
                  02-754-0992
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a
                  href="https://line.me/R/ti/p/~0888137777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LINE: 0888137777
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:vokeingsak@hotmail.com" className="hover:underline">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">ที่อยู่</h3>
            <div className="flex gap-2 text-sm">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <p className="opacity-90">
                199 หมู่ 9 ถนนสุขุมวิท 107 (ซอยแบริ่ง 35-37) ตำบลสำโรงเหนือ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10270, Samut Prakan, Thailand
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-6">
          <p className="text-xs opacity-75 text-center">
            ข้อมูลบนเว็บไซต์นี้จัดทำขึ้นเพื่อการให้ความรู้ทั่วไป ไม่ถือเป็นคำปรึกษากฎหมายหรือบัญชี/ภาษีเฉพาะราย
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-75">
          <p>© 2569 บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด สงวนลิขสิทธิ์</p>
        </div>
      </div>
    </footer>
  );
}
