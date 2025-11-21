import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Global Student Migration Platform | School Abroad",
  description:
    "Learn about School Abroad's mission to make studying abroad accessible, affordable, and transparent. Expert guidance for university admission, visa processing, and student settlement worldwide.",
  openGraph: {
    title: "About School Abroad - Global Student Migration Platform",
    description:
      "Learn about School Abroad's mission to make studying abroad accessible, affordable, and transparent for students worldwide.",
    url: "https://schoolabroad.org/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

