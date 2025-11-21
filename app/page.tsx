import { getSubscriptionDetails } from "@/lib/subscription";
import PricingTable from "./pricing/_component/pricing-table";
import Hero from "@/components/homepage/Hero/hero";
import About from "@/components/homepage/About/about";
import Countries from "@/components/homepage/Countries/countries";
import Services from "@/components/homepage/Service/service";
import Testimonials from "@/components/homepage/Testimonals/testimonals";
import Colleges from "@/components/homepage/Colleges/colleges";
import AppointmentForm from "@/components/homepage/AppointmentForm/appointmentForm";
import WhyUs from "@/components/homepage/WhyUs/whyus/whyus";
import { OrganizationSchema, ServiceSchema, WebSiteSchema } from "@/components/seo/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Abroad Services - University Admission & Visa Processing | School Abroad",
  description:
    "Expert study abroad services for students worldwide. Get help with university admission, visa processing, and settlement support for studying in UK, Canada, USA, and Europe. Start your journey today!",
  keywords: [
    "study abroad",
    "university admission",
    "student visa",
    "study in UK",
    "study in Canada",
    "study in USA",
    "study in Europe",
    "visa processing",
    "international education",
  ],
  openGraph: {
    title: "School Abroad - Global Student Migration Platform",
    description:
      "Expert guidance for studying abroad. University admission, visa processing, and settlement support for students worldwide.",
    url: "https://schoolabroad.org",
    siteName: "School Abroad",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "School Abroad - Study Abroad Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Home() {
  const subscriptionDetails = await getSubscriptionDetails();

  return (
    <>
      <OrganizationSchema />
      <ServiceSchema />
      <WebSiteSchema />
      <Hero />
      <About />
      <Services />
      <PricingTable subscriptionDetails={subscriptionDetails} />
      <Countries />
      <WhyUs />
      <Testimonials />
      <Colleges />
      <AppointmentForm />
    </>
  );
}
