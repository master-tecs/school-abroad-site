import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Service - University Admission & Visa Processing | School Abroad",
  description:
    "Request study abroad services from School Abroad. Choose from university admission assistance, visa processing, settlement packages, or our complete study abroad bundle. Get started today!",
  openGraph: {
    title: "Request Service - School Abroad",
    description:
      "Request study abroad services: university admission, visa processing, and settlement support. Get expert guidance for your study abroad journey.",
    url: "https://schoolabroad.org/request-service",
  },
};

export default function RequestServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

