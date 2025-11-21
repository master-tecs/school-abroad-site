import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institution Partnership - Partner with Us | School Abroad",
  description:
    "Partner with School Abroad as an educational institution. Connect with universities, colleges, and language schools. Expand your reach and connect with qualified international students.",
  openGraph: {
    title: "Institution Partnership Program - School Abroad",
    description:
      "Partner with School Abroad as an educational institution. Connect with qualified international students worldwide.",
    url: "https://schoolabroad.org/partner",
  },
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

