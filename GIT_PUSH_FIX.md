# วิธี Push ขึ้น GitHub (แก้ 403 Permission)

Repo: `https://github.com/bulebananaofficial-del/kriengsak-law-office-websitexxxxxxxxxxxxxxxxxxxx.git`

---

## วิธี (a): เพิ่ม Collaborator (แนะนำ)

เพิ่มผู้ใช้ **nthitharaphimphchnk-hue** เป็น Collaborator สิทธิ์ **Write**

1. ล็อกอิน GitHub ด้วยบัญชี **bulebananaofficial-del**
2. ไปที่ repo นี้ → **Settings** → **Collaborators** (หรือ [settings/access](https://github.com/bulebananaofficial-del/kriengsak-law-office-websitexxxxxxxxxxxxxxxxxxxx/settings/access))
3. คลิก **Add people**
4. พิมพ์ **nthitharaphimphchnk-hue** → เลือกสิทธิ์ **Write** → Add
5. บัญชีที่ถูกเพิ่ม: บนเครื่องตัวเองรัน:
   ```bash
   git push -u origin main
   ```
   ถ้าถูกถามให้ sign in ให้ใช้บัญชี **nthitharaphimphchnk-hue**

---

## วิธี (b): ใช้ Personal Access Token (PAT)

ใช้ PAT จากบัญชี **bulebananaofficial-del** (สิทธิ์ repo)

1. ล็อกอิน GitHub บัญชี **bulebananaofficial-del**
2. ไปที่ **https://github.com/settings/tokens** → **Generate new token (classic)**
3. ตั้งชื่อ, เลือก Expiration, เลือก scope **repo**
4. Generate แล้ว **คัดลอก token ทันที** (ขึ้นต้น `ghp_`)
5. เวลา push ใช้ PAT แทน password — **ห้ามวาง token ในไฟล์**
   - ใช้ครั้งเดียวในเทอร์มินัล เช่น:
     ```powershell
     $env:GITHUB_TOKEN = "ghp_xxx"; git push -u origin main
     ```
   - หรือรัน `.\push.ps1` แล้ววาง token ตอนที่สคริปต์ถาม

### ข้อควรระวังเรื่อง Token

- **ห้าม** วาง token ในโค้ด หรือไฟล์ใดๆ (เช่น `.env`, config) — จะถูก commit และรั่ว
- **เก็บ token ใน password manager** ถ้าต้องใช้ซ้ำ อย่าเก็บใน repo หรือแชท
- **ถ้า token รั่ว** ให้ไป GitHub → Settings → Developer settings → Personal access tokens → **Revoke** ทันที แล้วสร้างใหม่

---

## ตรวจสอบหลังตั้งค่า

- `git remote -v` → ต้องมีแค่ `origin` → `https://github.com/bulebananaofficial-del/kriengsak-law-office-websitexxxxxxxxxxxxxxxxxxxx.git`
- Branch: `main` → push ด้วย `git push -u origin main`
