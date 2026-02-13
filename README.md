# สำนักงานกฎหมายและบัญชี ดร.เกรียงศักดิ์

เว็บไซต์สำนักงานกฎหมายและบัญชี (Vite + React + Express)

## SEO Setup

### 1. ตัวแปรสภาพแวดล้อม

ใน `.env` กำหนด URL หลักของเว็บสำหรับ production:

```env
VITE_SITE_URL=https://your-domain.com
```

- ใช้ใน **canonical URL**, **Open Graph url**, **sitemap**, และ **JSON-LD** (Organization / LocalBusiness).
- ถ้าไม่กำหนด ค่า default จะเป็น `https://kriengsaklaw.manus.space`.

### 2. Sitemap และ robots.txt

- **Sitemap**: อยู่ที่ `client/public/sitemap.xml` มีเส้นทางหลักครบ (/, /services, /services/accounting, /services/audit, /services/legal, /about, /contact, /knowledge, /faq, /testimonials).
- **robots.txt**: อยู่ที่ `client/public/robots.txt` ชี้ไปที่ Sitemap แล้ว.
- ถ้า deploy ไป domain อื่น ควรแก้ base URL ใน `sitemap.xml` ให้ตรงกับ `VITE_SITE_URL` (หรือใช้ build script แทนที่ค่าตาม env).

### 3. ส่ง Sitemap ใน Google Search Console

1. เข้า [Google Search Console](https://search.google.com/search-console)
2. เลือก property ของเว็บคุณ
3. ไปที่ **Sitemaps** (เมนูซ้าย)
4. กรอก: `https://your-domain.com/sitemap.xml` แล้วกด **Submit**

### 4. Performance

- **Font**: ใช้ Sarabun (TH) กับ preload ใน `index.html` เพื่อลด FOIT/CLS.
- **รูป**: Logo มี `width`/`height` เพื่อลด CLS; หลีกเลี่ยงรูปขนาดใหญ่ที่ไม่บีบอัดใน `client/public` (ถ้ามีรูปใหญ่ เช่น hero-bg.jpg แนะนำให้ optimize ก่อน deploy).

### 5. รายการที่อาจต้องเติม (TODO)

- **og.jpg**: รูปสำหรับ Open Graph/Twitter (แนะนำขนาดประมาณ 1200×630 px) วางที่ `client/public/og.jpg` ถ้ายังไม่มี ระบบจะ fallback ไปที่ `/og.jpg` (อาจใช้ logo ชั่วคราว).
- **VITE_SITE_URL**: ตั้งใน `.env` ให้ตรงกับ domain จริงก่อน deploy.
- ข้อมูลใน JSON-LD (โทร/อีเมล/ที่อยู่) ปัจจุบันใช้ค่าจากโค้ด/ฟุตเตอร์; ถ้าต้องการให้มาจาก env สามารถเพิ่มใน `.env` แล้วอ้างอิงใน `client/src/components/JsonLd.tsx`.

---

## การรันโปรเจค

```bash
pnpm install
pnpm dev
```

Build:

```bash
pnpm build
pnpm start
```
