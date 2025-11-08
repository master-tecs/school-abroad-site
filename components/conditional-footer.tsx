"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/commons/Footer/footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Hide footer on dashboard routes (dashboard already has its own navigation)
  const isDashboardRoute = pathname?.startsWith("/dashboard");
  
  if (isDashboardRoute) {
    return null;
  }
  
  return <Footer />;
}