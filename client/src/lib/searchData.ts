/**
 * Search data for the website
 * Contains all searchable content from services, articles, and pages
 */

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: "service" | "article" | "faq" | "page";
  url: string;
  keywords: string[];
}

export const searchData: SearchResult[] = [
  // Services - Legal
  {
    id: "service-1",
    title: "ว่าความคดีแพ่ง",
    description: "บริการว่าความคดีแพ่งทั่วไป ข้อพิพาท สัญญา ที่ดิน อสังหาริมทรัพย์",
    category: "service",
    url: "/services",
    keywords: ["ว่าความ", "คดีแพ่ง", "พิพาท", "สัญญา", "ที่ดิน"],
  },
  {
    id: "service-2",
    title: "ว่าความคดีอาญา",
    description: "บริการว่าความคดีอาญา ป้องกันสิทธิ์ตามกฎหมายอาญา",
    category: "service",
    url: "/services",
    keywords: ["ว่าความ", "คดีอาญา", "ป้องกัน", "สิทธิ์"],
  },
  {
    id: "service-3",
    title: "ร่างสัญญาและเอกสาร",
    description: "ร่างสัญญาต่างๆ เช่น สัญญาซื้อขาย สัญญาเช่า สัญญาจ้าง",
    category: "service",
    url: "/services",
    keywords: ["ร่าง", "สัญญา", "เอกสาร", "ซื้อขาย", "เช่า", "จ้าง"],
  },
  {
    id: "service-4",
    title: "จัดการมรดก",
    description: "บริการจัดการมรดก ทำพินัยกรรม แบ่งมรดก ตรวจสอบสิทธิ์",
    category: "service",
    url: "/services",
    keywords: ["มรดก", "พินัยกรรม", "แบ่ง", "สิทธิ์", "ทายาท"],
  },
  {
    id: "service-5",
    title: "ที่ปรึกษากฎหมายทั่วไป",
    description: "ให้คำปรึกษาด้านกฎหมายทั่วไป เพื่อป้องกันปัญหาทางกฎหมาย",
    category: "service",
    url: "/services",
    keywords: ["ปรึกษา", "กฎหมาย", "คำแนะนำ", "ป้องกัน"],
  },

  // Services - Accounting
  {
    id: "service-6",
    title: "บัญชีและการจัดการบัญชี",
    description: "บริการจัดทำบัญชี วิเคราะห์บัญชี ตรวจสอบบัญชี",
    category: "service",
    url: "/services",
    keywords: ["บัญชี", "จัดทำ", "วิเคราะห์", "ตรวจสอบ"],
  },
  {
    id: "service-7",
    title: "บริการภาษีและการวางแผนภาษี",
    description: "บริการยื่นภาษีอากร วางแผนภาษี ลดหย่อนภาษี",
    category: "service",
    url: "/services",
    keywords: ["ภาษี", "ยื่น", "วางแผน", "ลดหย่อน", "อากร"],
  },
  {
    id: "service-8",
    title: "บริการจดทะเบียนบริษัท",
    description: "จดทะเบียนบริษัท สหกิจ ห้างหุ้นส่วน ให้เป็นไปตามกฎหมาย",
    category: "service",
    url: "/services",
    keywords: ["จดทะเบียน", "บริษัท", "สหกิจ", "ห้าง", "กฎหมาย"],
  },
  {
    id: "service-9",
    title: "บริการตรวจสอบบัญชีและการตรวจสอบภายใน",
    description: "ตรวจสอบบัญชี ประเมินความเสี่ยง ปรับปรุงระบบบัญชี",
    category: "service",
    url: "/services",
    keywords: ["ตรวจสอบ", "บัญชี", "ความเสี่ยง", "ปรับปรุง"],
  },

  // Articles
  {
    id: "article-1",
    title: "สิทธิและหน้าที่ของผู้บริหารบริษัท",
    description: "บทความเกี่ยวกับสิทธิและหน้าที่ของผู้บริหารบริษัท ตามกฎหมายบริษัท",
    category: "article",
    url: "/knowledge",
    keywords: ["ผู้บริหาร", "บริษัท", "สิทธิ", "หน้าที่", "กฎหมาย"],
  },
  {
    id: "article-2",
    title: "วิธีการจัดการข้อพิพาทแบบสันติ",
    description: "บทความเกี่ยวกับวิธีการจัดการข้อพิพาทแบบสันติ ไกล่เกลี่ย ปรึกษาหารือ",
    category: "article",
    url: "/knowledge",
    keywords: ["พิพาท", "สันติ", "ไกล่เกลี่ย", "ปรึกษา", "วิธีการ"],
  },
  {
    id: "article-3",
    title: "ความรู้เบื้องต้นเกี่ยวกับภาษีอากร",
    description: "บทความเกี่ยวกับภาษีอากร ประเภท อัตรา การคำนวณ การยื่นแบบแสดงรายการ",
    category: "article",
    url: "/knowledge",
    keywords: ["ภาษี", "อากร", "ประเภท", "อัตรา", "การคำนวณ"],
  },

  // FAQ
  {
    id: "faq-1",
    title: "ค่าบริการเท่าไหร่",
    description: "คำถามเกี่ยวกับค่าบริการของสำนักงาน ค่าปรึกษา ค่าว่าความ",
    category: "faq",
    url: "/faq",
    keywords: ["ค่า", "บริการ", "ราคา", "ปรึกษา", "ว่าความ"],
  },
  {
    id: "faq-2",
    title: "ระยะเวลาการให้บริการนานเท่าไหร่",
    description: "คำถามเกี่ยวกับระยะเวลาการให้บริการ ระยะเวลาการจัดการคดี",
    category: "faq",
    url: "/faq",
    keywords: ["ระยะเวลา", "บริการ", "คดี", "ระหว่าง"],
  },
  {
    id: "faq-3",
    title: "ต้องเตรียมเอกสารอะไรบ้าง",
    description: "คำถามเกี่ยวกับเอกสารที่ต้องเตรียม เอกสารที่จำเป็น",
    category: "faq",
    url: "/faq",
    keywords: ["เอกสาร", "เตรียม", "จำเป็น", "ต้อง"],
  },

  // Pages
  {
    id: "page-1",
    title: "หน้าแรก",
    description: "หน้าแรกของสำนักงานกฎหมายและบัญชี ดร.เกรียงศักดิ์ พินทุสรศรี",
    category: "page",
    url: "/",
    keywords: ["หน้าแรก", "สำนักงาน", "กฎหมาย", "บัญชี"],
  },
  {
    id: "page-2",
    title: "เกี่ยวกับเรา",
    description: "ข้อมูลเกี่ยวกับสำนักงาน ประวัติ ผู้ก่อตั้ง วิสัยทัศน์ พันธกิจ",
    category: "page",
    url: "/about",
    keywords: ["เกี่ยวกับ", "ประวัติ", "ผู้ก่อตั้ง", "วิสัยทัศน์"],
  },
  {
    id: "page-3",
    title: "ติดต่อเรา",
    description: "ข้อมูลติดต่อ เบอร์โทร LINE อีเมล ที่อยู่สำนักงาน",
    category: "page",
    url: "/contact",
    keywords: ["ติดต่อ", "เบอร์", "โทร", "ที่อยู่", "อีเมล"],
  },
];

/**
 * Search function to find results based on query
 */
export function searchContent(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const lowerQuery = query.toLowerCase().trim();

  return searchData
    .filter((item) => {
      // Search in title
      if (item.title.toLowerCase().includes(lowerQuery)) {
        return true;
      }

      // Search in description
      if (item.description.toLowerCase().includes(lowerQuery)) {
        return true;
      }

      // Search in keywords
      if (item.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery))) {
        return true;
      }

      return false;
    })
    .sort((a, b) => {
      // Prioritize title matches
      const aTitle = a.title.toLowerCase().includes(lowerQuery);
      const bTitle = b.title.toLowerCase().includes(lowerQuery);

      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;

      return 0;
    });
}
