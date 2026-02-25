/**
 * SEO utilities: meta tags, canonical, Open Graph, Twitter, robots.
 * Uses VITE_SITE_URL for canonical/base; production index,follow; preview noindex when applicable.
 */

import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE_TEMPLATE,
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_NAME,
} from "./seo-constants";

const getBaseUrl = (): string => {
  if (typeof window !== "undefined") return window.location.origin;
  const env = (import.meta as unknown as { env?: Record<string, string> }).env;
  const url = env?.VITE_SITE_URL;
  if (url) return url.replace(/\/$/, "");
  return "https://www.kriengsaklawconsult.com";
};

/** Whether current env is preview/non-production (noindex if true). */
const isPreviewEnv = (): boolean => {
  const env = (import.meta as unknown as { env?: Record<string, string> }).env;
  const mode = env?.MODE;
  return mode === "preview" || mode === "staging" || false;
};

export interface SEOMetaTags {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  /** Override robots (default: index,follow in production; noindex in preview). */
  robots?: string;
}

/**
 * Build full page title from template.
 */
export function pageTitle(pagePart: string): string {
  if (!pagePart) return SITE_NAME;
  return DEFAULT_TITLE_TEMPLATE.replace("{Page}", pagePart);
}

/**
 * Update document meta tags for SEO and social sharing.
 */
export function updateMetaTags(seo: SEOMetaTags) {
  const baseUrl = getBaseUrl();
  const fullUrl = seo.url || (typeof window !== "undefined" ? window.location.href : baseUrl);
  const title = seo.title || SITE_NAME;
  const description = seo.description ?? DEFAULT_DESCRIPTION;
  const image = seo.image ?? `${baseUrl}/og.jpg`;
  const type = seo.type ?? "website";
  const robots = seo.robots ?? (isPreviewEnv() ? "noindex, nofollow" : "index, follow");

  document.title = title;

  updateMetaTag("description", description);
  updateMetaTag("robots", robots);

  updateMetaTag("og:site_name", SITE_NAME, "property");
  updateMetaTag("og:title", title, "property");
  updateMetaTag("og:description", description, "property");
  updateMetaTag("og:type", type, "property");
  updateMetaTag("og:url", fullUrl, "property");
  updateMetaTag("og:image", image, "property");

  updateMetaTag("twitter:card", "summary_large_image");
  updateMetaTag("twitter:title", title);
  updateMetaTag("twitter:description", description);
  updateMetaTag("twitter:image", image);

  updateCanonicalUrl(fullUrl);
}

function updateMetaTag(
  name: string,
  content: string,
  type: "name" | "property" = "name"
) {
  let el = document.querySelector(`meta[${type}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(type, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function updateCanonicalUrl(url: string) {
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export { getBaseUrl };

/**
 * Page metadata for each route (safe Thai, educational only).
 */
export const pageMetadata = {
  home: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  services: {
    title: pageTitle("บริการ"),
    description:
      "บริการด้านกฎหมายและบัญชีในเชิงข้อมูลทั่วไป รับทำบัญชี ตรวจสอบ/ทบทวนบัญชี และบริการด้านกฎหมาย สำหรับบุคคลและธุรกิจ",
  },
  servicesAccounting: {
    title: pageTitle("บริการรับทำบัญชี"),
    description:
      "บริการรับทำบัญชีรายเดือน (ข้อมูลทั่วไป) สำหรับบุคคลและธุรกิจ ทำงานเป็นระบบ โปร่งใส ตรวจสอบได้",
  },
  servicesAudit: {
    title: pageTitle("บริการตรวจสอบ/ทบทวนบัญชี"),
    description:
      "บริการตรวจสอบ/ทบทวนเอกสารบัญชี (ข้อมูลทั่วไป) โดยผู้มีความรู้ความสามารถที่เกี่ยวข้อง",
  },
  servicesLegal: {
    title: pageTitle("บริการด้านกฎหมาย"),
    description:
      "บริการด้านกฎหมาย (ข้อมูลทั่วไป) ว่าความ ที่ปรึกษา ร่างสัญญา และงานด้านกฎหมายอื่นๆ สำหรับบุคคลและธุรกิจ",
  },
  about: {
    title: pageTitle("เกี่ยวกับเรา"),
    description:
      "เกี่ยวกับสำนักงานกฎหมายและบัญชี ดร.เกรียงศักดิ์ ทำงานเป็นระบบ โปร่งใส ตรวจสอบได้",
  },
  knowledge: {
    title: pageTitle("บทความและสาระน่ารู้"),
    description:
      "บทความด้านกฎหมายและบัญชีเพื่อการให้ความรู้ทั่วไป ไม่ถือเป็นคำปรึกษาเฉพาะราย",
  },
  contact: {
    title: pageTitle("ติดต่อเรา"),
    description:
      "ติดต่อสำนักงานกฎหมายและบัญชี ดร.เกรียงศักดิ์ ผ่านโทรศัพท์ LINE หรือแบบฟอร์ม",
  },
  faq: {
    title: pageTitle("คำถามที่พบบ่อย"),
    description: "คำถามที่พบบ่อยเกี่ยวกับบริการและขั้นตอนการติดต่อ",
  },
  testimonials: {
    title: pageTitle("ความคิดเห็นจากลูกค้า"),
    description: "ความคิดเห็นจากลูกค้าที่ใช้บริการ",
  },
};
