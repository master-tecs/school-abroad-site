import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Membership Plans - Study Abroad Services | School Abroad",
  description:
    "Choose from our Platinum or Diamond membership plans for study abroad mentorship and support. Starting at $25/month. Access expert guidance, resources, and community support.",
  openGraph: {
    title: "Pricing & Membership Plans - School Abroad",
    description:
      "Choose from our Platinum or Diamond membership plans for study abroad mentorship. Starting at $25/month.",
    url: "https://schoolabroad.org/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

