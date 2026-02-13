/**
 * Renders JSON-LD structured data (Organization + LocalBusiness/ProfessionalService).
 * Uses VITE_SITE_URL; missing details are placeholders (TODO) or omitted.
 */

import { ORG_LEGAL_NAME } from "@/lib/seo-constants";
import { getBaseUrl } from "@/lib/seo";

function getSiteUrl(): string {
  const env = (import.meta as unknown as { env?: Record<string, string> }).env;
  const url = env?.VITE_SITE_URL;
  if (url) return url.replace(/\/$/, "");
  return getBaseUrl();
}

/** Safely stringify and inject JSON-LD script (no user input in schema). */
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
      telephone: "081-611-6174", // TODO: replace with env or constant if needed
      email: "vokeingsak@hotmail.com", // TODO: replace with env if needed
      contactType: "customer service",
      areaServed: "TH",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: ORG_LEGAL_NAME,
    url,
    image: `${url}/logo.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "199 หมู่ 9 ถ. แบริ่ง 107 ต.สำโรงเหนือ อ.เมืองสมุทรปราการ",
      addressLocality: "สมุทรปราการ",
      postalCode: "10270",
      addressCountry: "TH",
    },
    telephone: "081-611-6174", // TODO: sync with env/constant
    openingHoursSpecification: undefined as undefined | { "@type": string; dayOfWeek: string[]; opens: string; closes: string },
    areaServed: { "@type": "Country", name: "Thailand" },
  };

  // Omit openingHours if not set (TODO: add when available)
  // localBusiness.openingHoursSpecification = { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "17:00" };

  const scripts = [
    { id: "jsonld-organization", data: organization },
    { id: "jsonld-localbusiness", data: localBusiness },
  ];

  return (
    <>
      {scripts.map(({ id, data }) => (
        <script
          key={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
