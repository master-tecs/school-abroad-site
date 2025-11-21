import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ChatAssistant from "@/components/commons/ChatAssistant/chatAssistant";
import ConditionalHeader from "@/components/conditional-header-footer";
import ConditionalFooter from "@/components/conditional-footer";
export const metadata: Metadata = {
  metadataBase: new URL("https://schoolabroad.org"),
  title: {
    default: "School Abroad - Global Student Migration Platform | Study Abroad Services",
    template: "%s | School Abroad",
  },
  description:
    "School Abroad helps students worldwide access study opportunities in Europe, UK, Canada, and USA. Expert guidance for university admission, visa processing, and settlement support. Start your study abroad journey today.",
  keywords: [
    "study abroad",
    "international education",
    "student visa",
    "university admission",
    "study in UK",
    "study in Canada",
    "study in USA",
    "study in Europe",
    "student migration",
    "education abroad",
    "visa processing",
    "university application",
    "study abroad services",
    "student counseling",
  ],
  authors: [{ name: "School Abroad" }],
  creator: "School Abroad",
  publisher: "School Abroad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://schoolabroad.org",
    siteName: "School Abroad",
    title: "School Abroad - Global Student Migration Platform",
    description:
      "Expert guidance for studying abroad. University admission, visa processing, and settlement support for students worldwide.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "School Abroad - Study Abroad Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "School Abroad - Global Student Migration Platform",
    description:
      "Expert guidance for studying abroad. University admission, visa processing, and settlement support.",
    images: ["/assets/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://schoolabroad.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
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

  const websiteSchema = {
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

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`font-[-apple-system,BlinkMacSystemFont]antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          forcedTheme="light"
          disableTransitionOnChange
        >
          <ConditionalHeader />
          {children}
          <ConditionalFooter />

          <ChatAssistant />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
