/**
 * Renders JSON-LD structured data (Organization + LegalService for Local SEO).
 * Injects into <head> for AI/AEO. Uses VITE_SITE_URL; targets ทนายความเชียงใหม่.
 */

import { useEffect } from "react";
import { ORG_LEGAL_NAME } from "@/lib/seo-constants";
import { getBaseUrl } from "@/lib/seo";

const TELEPHONE = "+66-81-611-6174";

function getSiteUrl(): string {
  const env = (import.meta as unknown as { env?: Record<string, string> }).env;
  const url = env?.VITE_SITE_URL;
  if (url) return url.replace(/\/$/, "");
  return getBaseUrl();
}

/** Injects JSON-LD script into document.head */
function injectSchema(id: string, data: object) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function JsonLd() {
  const url = getSiteUrl();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_LEGAL_NAME,
    url,
    logo: `${url}/logo.jpg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: TELEPHONE,
      email: "vokeingsak@hotmail.com",
      contactType: "customer service",
      areaServed: "TH",
    },
  };

  /** LegalService schema สำหรับ Local SEO ทนายความกรุงเทพ (สำโรงเหนือ สุขุมวิท) */
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "สำนักงานกฎหมายเกรียงศักดิ์",
    image: `${url}/og.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1288–1291, 1702/8–9 ถนนสุขุมวิท ตำบลสำโรงเหนือ",
      addressLocality: "กรุงเทพฯ",
      postalCode: "10270",
      addressCountry: "TH",
    },
    telephone: TELEPHONE,
    areaServed: { "@type": "City", name: "กรุงเทพฯ", addressCountry: "TH" },
  };

  useEffect(() => {
    injectSchema("jsonld-organization", organization);
    injectSchema("jsonld-legalservice", legalService);
    return () => {
      document.getElementById("jsonld-organization")?.remove();
      document.getElementById("jsonld-legalservice")?.remove();
    };
  }, []);

  return null;
}
