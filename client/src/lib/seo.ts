/**
 * SEO Utilities for managing meta tags dynamically
 */

interface SEOMetaTags {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

/**
 * Update document meta tags for SEO and social sharing
 */
export function updateMetaTags(seo: SEOMetaTags) {
  const {
    title,
    description,
    image = "https://kriengsaklaw.manus.space/logo.jpg",
    url = typeof window !== "undefined" ? window.location.href : "https://kriengsaklaw.manus.space",
    type = "website",
  } = seo;

  // Update title
  document.title = title;

  // Update or create meta tags
  updateMetaTag("description", description);
  updateMetaTag("og:title", title, "property");
  updateMetaTag("og:description", description, "property");
  updateMetaTag("og:image", image, "property");
  updateMetaTag("og:url", url, "property");
  updateMetaTag("og:type", type, "property");
  updateMetaTag("twitter:title", title);
  updateMetaTag("twitter:description", description);
  updateMetaTag("twitter:image", image);

  // Update canonical URL
  updateCanonicalUrl(url);
}

/**
 * Update or create a single meta tag
 */
function updateMetaTag(
  name: string,
  content: string,
  type: "name" | "property" = "name"
) {
  let element = document.querySelector(`meta[${type}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(type, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

/**
 * Update canonical URL
 */
function updateCanonicalUrl(url: string) {
  let link = document.querySelector("link[rel='canonical']");

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

/**
 * SEO metadata for different pages
 */
export const pageMetadata = {
  home: {
    title: "สำนักงานกฎหมายและบัญชี - ดร.เกรียงศักดิ์ พินทุสรศรี",
    description:
      "สำนักงานกฎหมายและบัญชีสำหรับบุคคลและธุรกิจ บริการว่าความคดีแพ่งและอาญา ที่ปรึกษากฎหมาย บัญชี ภาษี มรดก โดยทีมมืออาชีพ",
  },
  services: {
    title: "บริการ - สำนักงานกฎหมายและบัญชี",
    description:
      "บริการด้านกฎหมายและบัญชี ว่าความคดีแพ่งและอาญา ที่ปรึกษากฎหมาย ร่างสัญญา บัญชี ภาษี มรดก และอื่นๆ",
  },
  about: {
    title: "เกี่ยวกับเรา - สำนักงานกฎหมายและบัญชี",
    description:
      "ดร.เกรียงศักดิ์ พินทุสรศรี ผู้ก่อตั้งสำนักงานกฎหมายและบัญชี มีประสบการณ์กว่า 20 ปีในการให้บริการทางกฎหมายและบัญชี",
  },
  knowledge: {
    title: "บทความและสาระน่ารู้ - สำนักงานกฎหมายและบัญชี",
    description:
      "บทความด้านกฎหมายและบัญชีที่น่าสนใจ เพื่อเป็นแนวทางและความรู้เบื้องต้นสำหรับประชาชนและผู้ประกอบการ",
  },
  contact: {
    title: "ติดต่อเรา - สำนักงานกฎหมายและบัญชี",
    description:
      "ติดต่อสำนักงานกฎหมายและบัญชี ดร.เกรียงศักดิ์ พินทุสรศรี โทร 081-611-6174 LINE 0888137777 อีเมล info@kriengsaklaw.com",
  },
  faq: {
    title: "คำถามที่พบบ่อย - สำนักงานกฎหมายและบัญชี",
    description:
      "คำถามที่พบบ่อยเกี่ยวกับบริการกฎหมายและบัญชี ค่าบริการ ระยะเวลา เอกสาร และอื่นๆ",
  },
  testimonials: {
    title: "ความคิดเห็นจากลูกค้า - สำนักงานกฎหมายและบัญชี",
    description:
      "ความคิดเห็นและประสบการณ์จากลูกค้าที่พึงพอใจกับบริการของสำนักงานกฎหมายและบัญชี",
  },
};
