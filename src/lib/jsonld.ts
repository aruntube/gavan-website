import { site } from "@/content/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    email: site.email,
    slogan: site.tagline,
    description: site.description,
    founder: {
      "@type": "Person",
      name: site.founder.name,
      jobTitle: site.founder.title,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: ["IN", "Worldwide"],
    knowsAbout: [
      "Software engineering",
      "Mobile application development",
      "UI/UX design",
      "Quality engineering",
      "Cloud architecture and DevOps",
      "Data engineering and applied AI",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      contactType: "sales",
      availableLanguage: ["English"],
    },
  };
}
