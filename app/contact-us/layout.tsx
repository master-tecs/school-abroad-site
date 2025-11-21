import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | School Abroad",
  description:
    "Contact School Abroad for expert study abroad guidance. Reach out via phone, email, or visit our offices in Nigeria and France. We're here to help with your study abroad journey.",
  openGraph: {
    title: "Contact School Abroad - Get Expert Study Abroad Guidance",
    description:
      "Contact School Abroad for expert study abroad guidance. Reach out via phone, email, or visit our offices.",
    url: "https://schoolabroad.org/contact-us",
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

