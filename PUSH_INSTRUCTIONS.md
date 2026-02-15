# วิธี Push โค้ดขึ้น GitHub

ถ้า `git push` ติด **Permission denied (403)** ให้ใช้วิธีใดวิธีหนึ่งด้านล่าง

---

## วิธีที่ 1: ใช้ Personal Access Token (แนะนำ)

1. สร้าง PAT ในบัญชี **bulebananaofficial-del** (เจ้าของ repo):
   - เข้า https://github.com/settings/tokens
   - คลิก **Generate new token (classic)**
   - เลือก scope `repo` (ให้สิทธิ์ push)
   - คัดลอก token ที่ได้ (ขึ้นต้น `ghp_`)

2. เปิด PowerShell ในโฟลเดอร์โปรเจกต์ แล้วรัน:
   ```powershell
   $env:GITHUB_TOKEN = "ghp_ใส่tokenของคุณตรงนี้"
   .\push.ps1
   ```

3. หลัง push เสร็จ อย่าแชร์ token ให้ผู้อื่น

---

## วิธีที่ 2: เพิ่ม Collaborator (ถ้ามีคนอื่นช่วย push)

1. เจ้าของ repo เข้า https://github.com/bulebananaofficial-del/kriengsak-law-office-website/settings/access  
2. คลิก **Add people**  
3. พิมพ์ชื่อผู้ใช้ GitHub ที่ต้องการให้สิทธิ์ แล้วกด Add

4. คนที่ถูกเพิ่มให้ล็อกอิน GitHub ใหม่บนเครื่อง แล้วรัน:
   ```powershell
   git push -u origin main
   ```

---

## วิธีที่ 3: ล็อกอินบัญชีเจ้าของ repo

ถ้าคุณเป็นเจ้าของ repo (bulebananaofficial-del):

1. ล้าง credential เก่า:  
   Windows Credential Manager → หา `git:https://github.com` → ลบ

2. รัน:
   ```powershell
   git push -u origin main
   ```

3. เมื่อถูกถามให้ sign in ให้ใช้บัญชี **bulebananaofficial-del**
