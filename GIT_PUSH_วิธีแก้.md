# วิธีแก้เวลา Push ขึ้น GitHub ไม่ได้ (403 Permission denied)

โปรเจคนี้ชี้ไปที่ repo:  
**https://github.com/bulebananaofficial-del/kriengsak-law-office-website**

ถ้า push แล้วขึ้นว่า **Permission denied** แปลว่าบัญชีที่ใช้ push อยู่ (เช่น nthitharaphimphchnk-hue) ยังไม่มีสิทธิ์เขียน repo นี้

## วิธีที่ 1: ใช้บัญชีเจ้าของ repo (แนะนำ)

1. เปิด **Git Credential Manager** หรือล็อกเอาท์ GitHub ในเครื่อง:
   - Windows: ไปที่ **การตั้งค่า (Settings)** → **บัญชี (Accounts)** → **การเข้าสู่ด้วยบัญชีที่ใช้ในที่ทำงานหรือโรงเรียน** แล้วลบบัญชี GitHub ที่ไม่ใช่เจ้าของออก (หรือเพิ่มบัญชี bulebananaofficial-del)
   - หรือใน Command Prompt / PowerShell:  
     `git credential reject` แล้วพิมพ์  
     `protocol=https` กด Enter  
     `host=github.com` กด Enter  
     กด Enter อีกครั้ง แล้วค่อย push ใหม่ จะได้ popup ให้ล็อกอินใหม่

2. ล็อกอินด้วยบัญชี **bulebananaofficial-del** (หรือบัญชีที่เป็นเจ้าของ repo จริง)

3. ในโฟลเดอร์โปรเจค รัน:
   ```bash
   git push -u origin main
   ```

## วิธีที่ 2: ให้เจ้าของ repo เพิ่มสิทธิ์

1. เจ้าของ repo (bulebananaofficial-del) เข้า GitHub → repo **kriengsak-law-office-website**
2. ไปที่ **Settings** → **Collaborators** → **Add people**
3. เพิ่มบัญชี **nthitharaphimphchnk-hue** (หรือบัญชีที่คุณใช้อยู่) เป็น Collaborator
4. รับคำเชิญจากอีเมล แล้วลอง `git push -u origin main` อีกครั้ง

## วิธีที่ 3: ใช้ Personal Access Token (PAT)

1. เข้า GitHub → **Settings** → **Developer settings** → **Personal access tokens** → สร้าง token ใหม่ (เลือก scope **repo**)
2. คัดลอก token (เก็บไว้ใช้ครั้งเดียวตอน push)
3. รัน:
   ```bash
   git push -u origin main
   ```
   เมื่อถาม Username ให้ใส่ชื่อบัญชี GitHub  
   เมื่อถาม Password ให้ใส่ **token** (ไม่ใช่รหัสผ่านบัญชี)

---

หลังจาก push สำเร็จแล้ว สามารถลบไฟล์นี้ได้ถ้าไม่ต้องการเก็บไว้
