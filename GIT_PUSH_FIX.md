# วิธี Push ขึ้น GitHub (แก้ 403 Permission)

Repo: `https://github.com/bulebananaofficial-del/kriengsak-law-office-website.git`

---

## วิธี (a): เพิ่ม Collaborator

เหมาะเมื่อมีหลายคนช่วย push หรือใช้บัญชีอื่น push บ่อย

1. เจ้าของ repo ล็อกอิน GitHub บัญชี **bulebananaofficial-del**
2. ไปที่  
   **https://github.com/bulebananaofficial-del/kriengsak-law-office-website/settings/access**
3. คลิก **Add people**
4. พิมพ์ username GitHub ของคนที่จะ push (เช่น `nthitharaphimphchnk-hue`) แล้วกด Add
5. คนที่ถูกเพิ่ม: บนเครื่องตัวเองล้าง credential เก่า (ถ้ามี) แล้วรัน:
   ```bash
   git push -u origin main
   ```
   ถ้าถูกถามให้ sign in ให้ใช้บัญชีที่ถูกเพิ่มเป็น collaborator

---

## วิธี (b): ใช้ Personal Access Token (PAT)

เหมาะเมื่อ push ด้วยบัญชีเจ้าของ repo โดยไม่ล็อกอินผ่าน browser

1. ล็อกอิน GitHub บัญชี **bulebananaofficial-del**
2. ไปที่ **https://github.com/settings/tokens**
3. คลิก **Generate new token (classic)**
4. ตั้งชื่อ (เช่น `kriengsaklaw-push`), เลือก Expiration, เลือก scope **repo**
5. คลิก **Generate token**
6. **คัดลอก token ทันที** (ขึ้นต้น `ghp_`) — หน้าเว็บจะแสดงแค่ครั้งเดียว
7. บนเครื่อง ในโฟลเดอร์โปรเจกต์ รันแบบไม่เก็บ token ลงไฟล์:
   - **PowerShell (ใช้ครั้งเดียว แล้ว token หายจากหน่วยความจำ):**
     ```powershell
     $env:GITHUB_TOKEN = "วาง_token_ตรงนี้"; git push -u origin main
     ```
   - หรือใช้สคริปต์ `.\push.ps1` แล้ววาง token ตอนที่สคริปต์ถาม (สคริปต์ไม่บันทึก token ลงไฟล์)

### ข้อควรระวังเรื่อง Token

- **ห้าม** ใส่ token ลงในไฟล์ใน repo (เช่น `.env`, config, หรือไฟล์อื่น) เพราะจะถูก commit และรั่วบน GitHub
- **ห้าม** แชร์ token ทางแชท อีเมล หรือที่สาธารณะ
- ใช้ token แค่ใน session เดียว (เช่น ตั้งใน `$env:GITHUB_TOKEN` แล้ว push ทันที)
- ถ้า token รั่ว ให้ไปที่ GitHub → Settings → Developer settings → Personal access tokens แล้ว **Revoke** token ตัวนั้นทันที แล้วสร้างใหม่

---

## ตรวจสอบหลังตั้งค่า

- ดู remote: `git remote -v`  
  ต้องมีแค่ `origin` ชี้ไปที่  
  `https://github.com/bulebananaofficial-del/kriengsak-law-office-website.git`
- Branch: ใช้ `main` และ push ด้วย `git push -u origin main`
