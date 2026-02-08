# Google Analytics Setup Guide

## สำนักงานกฎหมายและบัญชี - ดร.เกรียงศักดิ์ พินทุสรศรี

### ขั้นตอนการตั้งค่า Google Analytics

#### 1. สร้าง Google Analytics Property
1. ไปที่ [Google Analytics](https://analytics.google.com)
2. ลงชื่อเข้าใช้ด้วยบัญชี Google
3. คลิก "Start measuring" หรือ "Create property"
4. กรอกข้อมูล:
   - **Property name**: สำนักงานกฎหมายและบัญชี - ดร.เกรียงศักดิ์
   - **Reporting timezone**: Asia/Bangkok
   - **Currency**: Thai Baht (THB)
5. คลิก "Create"

#### 2. สร้าง Web Stream
1. ในส่วน "Data collection and modification" คลิก "Data streams"
2. คลิก "Add stream" > "Web"
3. กรอกข้อมูล:
   - **Website URL**: https://kriengsaklaw.manus.space (หรือโดเมนของคุณ)
   - **Stream name**: kriengsaklaw.com
4. คลิก "Create stream"

#### 3. ได้รับ Measurement ID
1. หลังจากสร้าง stream สำเร็จ คุณจะเห็น **Measurement ID** (รูปแบบ: G-XXXXXXXXXX)
2. คัดลอก Measurement ID นี้

#### 4. อัปเดตเว็บไซต์
1. เปิดไฟล์ `client/index.html`
2. หา `G-XXXXXXXXXX` ทั้ง 2 ที่ (บรรทัด 15 และ 20)
3. แทนที่ด้วย Measurement ID ของคุณ เช่น `G-ABC123DEF45`
4. บันทึกไฟล์

#### 5. ตรวจสอบการทำงาน
1. รีสตาร์ทเว็บไซต์
2. ไปที่ Google Analytics > Realtime
3. เปิดเว็บไซต์ในเบราว์เซอร์ใหม่
4. คุณควรเห็นผู้เข้าชมในหน้า Realtime

### ข้อมูลที่ติดตาม

Google Analytics จะติดตามข้อมูลต่อไปนี้:
- **Users**: จำนวนผู้เข้าชมเว็บไซต์
- **Sessions**: จำนวนครั้งที่ผู้เข้าชมเข้าชมเว็บไซต์
- **Page Views**: จำนวนครั้งที่เข้าชมหน้าต่างๆ
- **Bounce Rate**: เปอร์เซ็นต์ของผู้ที่ออกจากเว็บไซต์โดยไม่มีปฏิสัมพันธ์
- **Average Session Duration**: ระยะเวลาเฉลี่ยที่ผู้เข้าชมอยู่ในเว็บไซต์
- **Geographic Data**: ข้อมูลภูมิศาสตร์ของผู้เข้าชม
- **Device Data**: ประเภทอุปกรณ์ที่ใช้ (Mobile, Desktop, Tablet)
- **Traffic Source**: แหล่งที่มาของผู้เข้าชม (Direct, Organic Search, Social, etc.)

### Manus Built-in Analytics (Umami)

เว็บไซต์ยังใช้ Umami Analytics ซึ่งเป็นบริการ Analytics ที่สร้างมาโดย Manus:
- ไม่จำเป็นต้องตั้งค่าเพิ่มเติม
- ข้อมูลจะปรากฏในแดชบอร์ด Manus Management UI
- ให้ข้อมูลพื้นฐานเกี่ยวกับผู้เข้าชมและการใช้งาน

### หมายเหตุ

- Google Analytics มีการหน่วงเวลา 24-48 ชั่วโมงในการแสดงข้อมูลบางรายการ
- ข้อมูล Realtime จะแสดงในเวลาจริง
- ตั้งค่า "Anonymize IP" เพื่อปกป้องความเป็นส่วนตัวของผู้ใช้
- ตรวจสอบให้แน่ใจว่าเว็บไซต์ของคุณปฏิบัติตามกฎหมายเกี่ยวกับความเป็นส่วนตัวของข้อมูล (GDPR, PDPA ฯลฯ)

### ลิงก์ที่เป็นประโยชน์

- [Google Analytics Documentation](https://support.google.com/analytics)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)
- [Google Analytics Setup Checklist](https://support.google.com/analytics/answer/9306384)
