import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency Partnership - Recruiting Partners | School Abroad",
  description:
    "Partner with School Abroad as a recruiting agency. Earn commissions by referring students. Transparent contracts, dedicated support, and AI-assisted tracking. Join our partner network today.",
  openGraph: {
    title: "Agency Partnership Program - School Abroad",
    description:
      "Partner with School Abroad as a recruiting agency. Earn commissions by referring students for study abroad services.",
    url: "https://schoolabroad.org/agency",
  },
};

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

