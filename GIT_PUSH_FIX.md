# วิธี Push ขึ้น GitHub

Repo: `https://github.com/nthitharaphimphchnk-hue/Kriengsak-Law-Office-Website.git`

---

## Push (repo นี้เป็นของบัญชีคุณ)

```bash
git push -u origin main
```

ถ้าถูกถามให้ sign in ให้ใช้บัญชี **nthitharaphimphchnk-hue**

ถ้าติด 403 หรือต้องการใช้ PAT: รัน `.\push.ps1` แล้ววาง token ตอนที่สคริปต์ถาม (สร้าง token ที่ https://github.com/settings/tokens scope **repo**)

### ข้อควรระวังเรื่อง Token

- **ห้าม** วาง token ในโค้ด หรือไฟล์ใดๆ — จะถูก commit และรั่ว
- **เก็บ token ใน password manager** ถ้าต้องใช้ซ้ำ
- **ถ้า token รั่ว** ให้ไป Revoke ที่ GitHub → Settings → Developer settings → Personal access tokens

---

## ตรวจสอบ

- `git remote -v` → `origin` → `https://github.com/nthitharaphimphchnk-hue/Kriengsak-Law-Office-Website.git`
- Branch: `main` → `git push -u origin main`
