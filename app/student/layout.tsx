import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Services - Study Abroad Support | School Abroad",
  description:
    "Comprehensive study abroad services for students. Get help with university selection, admission applications, visa processing, and settlement support. Start your journey today!",
  openGraph: {
    title: "Student Services - School Abroad",
    description:
      "Comprehensive study abroad services: university selection, admission, visa processing, and settlement support for students worldwide.",
    url: "https://schoolabroad.org/student",
  },
};

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

