"use client";

import { useState, useEffect } from "react";
import UserProfile from "@/components/user-profile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Home,
  Video,
  Phone,
  FileText,
  Plane,
  MessageCircle,
  HelpCircle,
  Star,
  Lock,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  locked?: boolean;
  highlight?: boolean;
}

export default function DashboardSideBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [hasSubscription, setHasSubscription] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const response = await fetch("/api/subscription");
        if (response.ok) {
          const data = await response.json();
          setHasSubscription(
            data.hasSubscription &&
              data.subscription?.status === "active"
          );
        }
      } catch (error) {
        console.error("Error checking subscription:", error);
      }
    };
    checkSubscription();
  }, []);

  // Navigation items for dashboard
  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      label: "My Learning",
      href: "/dashboard/learning",
      icon: Video,
      locked: false,
    },
    {
      label: "Mentorship Calls",
      href: "/dashboard/mentorship",
      icon: Phone,
      locked: !hasSubscription,
    },
    {
      label: "Resources & Templates",
      href: "/dashboard/resources",
      icon: FileText,
      locked: !hasSubscription,
    },
    {
      label: "Visa Tracker",
      href: "/dashboard/visa-tracker",
      icon: Plane,
      locked: !hasSubscription,
    },
    {
      label: "Community",
      href: "/dashboard/community",
      icon: MessageCircle,
      locked: !hasSubscription,
    },
    {
      label: "Support",
      href: "/dashboard/support",
      icon: HelpCircle,
    },
    {
      label: "Upgrade Plan",
      href: "/pricing",
      icon: Star,
      highlight: !hasSubscription,
    },
  ];

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.locked) {
      e.preventDefault();
      router.push("/pricing");
    }
  };

  return (
    <div className="dashboard-sidebar">
      <div className="dashboard-sidebar__container">
        {/* Logo */}
        <div className="dashboard-sidebar__logo">
          <Link href="/" className="dashboard-sidebar__logo-link">
            <Image
              src="/assets/images/Schhol_Abroad_logo.jpeg"
              alt="School Abroad"
              width={180}
              height={50}
              className="dashboard-sidebar__logo-image"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="dashboard-sidebar__nav">
          <ul className="dashboard-sidebar__nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <li key={item.href} className="dashboard-sidebar__nav-item">
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className={cn(
                      "dashboard-sidebar__nav-link",
                      isActive && "dashboard-sidebar__nav-link--active",
                      item.highlight && "dashboard-sidebar__nav-link--highlight",
                      item.locked && "dashboard-sidebar__nav-link--locked"
                    )}
                  >
                    <Icon className="dashboard-sidebar__nav-icon" />
                    <span>{item.label}</span>
                    {item.locked && (
                      <Lock className="dashboard-sidebar__nav-lock" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Progress Indicators */}
        <div className="dashboard-sidebar__progress">
          <div className="dashboard-sidebar__progress-item">
            <div className="dashboard-sidebar__progress-header">
              <span className="dashboard-sidebar__progress-label">
                Profile Complete
              </span>
              <span className="dashboard-sidebar__progress-percent">70%</span>
            </div>
            <div className="dashboard-sidebar__progress-bar">
              <div
                className="dashboard-sidebar__progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <div className="dashboard-sidebar__progress-item">
            <div className="dashboard-sidebar__progress-header">
              <span className="dashboard-sidebar__progress-label">
                Visa Application Progress
              </span>
              <span className="dashboard-sidebar__progress-percent">40%</span>
            </div>
            <div className="dashboard-sidebar__progress-bar">
              <div
                className="dashboard-sidebar__progress-fill"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="dashboard-sidebar__profile">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}