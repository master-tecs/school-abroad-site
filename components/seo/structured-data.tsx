export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "School Abroad",
    alternateName: "School Outside",
    url: "https://schoolabroad.org",
    logo: "https://schoolabroad.org/assets/images/transparent-logo.png",
    description:
      "Global student migration platform helping students access study opportunities in Europe, UK, Canada, and USA.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kaduna",
      addressRegion: "Kaduna State",
      addressCountry: "NG",
      streetAddress: "1A Junction Road",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-708-1416-069",
      contactType: "Customer Service",
      email: "info@schoolabroad.org",
      areaServed: "Worldwide",
      availableLanguage: ["English", "French"],
    },
    sameAs: [
      "https://m.facebook.com/schooloutsideng/",
      "https://www.instagram.com/schooloutside_ng/",
      "https://linkedin.com/company/schooloutside",
      "https://www.youtube.com/@schooloutside",
    ],
  };

  return <StructuredData data={schema} />;
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Study Abroad Services",
    provider: {
      "@type": "EducationalOrganization",
      name: "School Abroad",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Study Abroad Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "University Admission Assistance",
            description:
              "Complete assistance from school selection to admission confirmation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Visa Processing Support",
            description:
              "Support with documentation, application, and interview preparation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Settlement Package",
            description:
              "Guidance on housing, residence permit, and local setup",
          },
        },
      ],
    },
  };

  return <StructuredData data={schema} />;
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "School Abroad",
    url: "https://schoolabroad.org",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://schoolabroad.org/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <StructuredData data={schema} />;
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData data={schema} />;
}

