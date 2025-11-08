"use client";

import { ReactNode, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  Settings,
  LogOut,
  CreditCard,
  HelpCircle,
  Menu,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardSideBar from "./sidebar";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface User {
  id: string;
  name: string | null;
  email: string | null;
  image?: string | null;
}

export default function DashboardTopNav({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [planType, setPlanType] = useState<string>("Free");
  const [notifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Visa Update",
      message: "Your visa application status has been updated",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      title: "Mentorship Reminder",
      message: "Your mentorship call is scheduled for tomorrow at 2:00 PM",
      time: "5 hours ago",
      read: false,
    },
  ]);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const session = await authClient.getSession();
        if (session.data?.user) {
          setUser(session.data.user);
        }

        // Fetch subscription details
        const response = await fetch("/api/subscription");
        if (response.ok) {
          const data = await response.json();
          if (
            data.hasSubscription &&
            data.subscription?.status === "active"
          ) {
            setPlanType(data.planType || "Premium");
          } else {
            setPlanType("Free");
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
          },
        },
      });
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const getInitials = (name?: string | null, email?: string | null) => {
    if (name) {
      const parts = name.split(" ");
      if (parts.length >= 2) {
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
      }
      return name[0]?.toUpperCase() || "U";
    }
    if (email) {
      return email[0]?.toUpperCase() || "U";
    }
    return "U";
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="dashboard-layout">
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild className="dashboard-mobile-menu-trigger">
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="dashboard-mobile-sidebar">
          <DashboardSideBar />
        </SheetContent>
      </Sheet>

      {/* Top Navigation Bar */}
      <header className="dashboard-navbar">
        <div className="dashboard-navbar__container">
          {/* Welcome Message */}
          <div className="dashboard-navbar__welcome">
            <p className="dashboard-navbar__welcome-text">
              🎓 Welcome back, <span>{user?.name || "Student"}</span>! Continue
              your journey to studying abroad with confidence.
            </p>
          </div>

          <div className="dashboard-navbar__actions">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="dashboard-navbar__notifications">
                  <Bell className="dashboard-navbar__icon" />
                  {unreadCount > 0 && (
                    <span className="dashboard-navbar__badge">{unreadCount}</span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="dashboard-navbar__dropdown dashboard-navbar__dropdown--notifications"
              >
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <DropdownMenuItem
                      key={notification.id}
                      className={cn(
                        "dashboard-navbar__notification-item",
                        !notification.read && "dashboard-navbar__notification-item--unread"
                      )}
                    >
                      <div className="dashboard-navbar__notification-content">
                        <p className="dashboard-navbar__notification-title">
                          {notification.title}
                        </p>
                        <p className="dashboard-navbar__notification-message">
                          {notification.message}
                        </p>
                        <span className="dashboard-navbar__notification-time">
                          {notification.time}
                        </span>
                      </div>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <DropdownMenuItem disabled>
                    No notifications
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="dashboard-navbar__profile-trigger">
                  <Avatar className="dashboard-navbar__avatar">
                    <AvatarImage src={user?.image || undefined} alt={user?.name || "User"} />
                    <AvatarFallback className="dashboard-navbar__avatar-fallback">
                      {getInitials(user?.name, user?.email)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="dashboard-navbar__profile-info">
                    <span className="dashboard-navbar__profile-name">
                      {user?.name || "User"}
                    </span>
                    <span className="dashboard-navbar__profile-plan">
                      {planType} {planType !== "Free" ? "Member" : "User"}
                    </span>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="dashboard-navbar__dropdown dashboard-navbar__dropdown--profile"
              >
                <DropdownMenuLabel>
                  <div className="dashboard-navbar__user-header">
                    <p className="dashboard-navbar__user-name">{user?.name || "User"}</p>
                    <p className="dashboard-navbar__user-email">{user?.email}</p>
                    <span className="dashboard-navbar__user-plan">
                      {planType} {planType !== "Free" ? "Member" : "User"}
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings" className="dashboard-navbar__dropdown-item">
                    <Settings />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/payment" className="dashboard-navbar__dropdown-item">
                    <CreditCard />
                    <span>Subscription</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/support" className="dashboard-navbar__dropdown-item">
                    <HelpCircle />
                    <span>Help & Support</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="dashboard-navbar__dropdown-item dashboard-navbar__dropdown-item--danger">
                  <LogOut />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
}