"use client";

import React, { useEffect, useState, MouseEvent, useCallback } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import "./header.scss";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isCanvasExpanded, setIsCanvasExpanded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<{ name?: string | null; email?: string | null; image?: string | null } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const checkAuth = useCallback(async () => {
    try {
      const session = await authClient.getSession();
      if (session.data?.user) {
        setIsAuthenticated(true);
        setUser(session.data.user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch {
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
    // Re-check auth when route changes
    const interval = setInterval(checkAuth, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [checkAuth]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCanvasMenu = (e: MouseEvent<HTMLAnchorElement | HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsCanvasExpanded((prev) => !prev);
  };

  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            setIsAuthenticated(false);
            setUser(null);
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

  return (
    <header className={`header ${isSticky ? "header--sticky" : ""}`}>
      {/* ---------- Topbar ---------- */}
      <div className="header__topbar">
        <div className="header__container">
          <div className="header__contact">
            <ul className="header__contact-list">
              <li className="header__contact-item">
                <EmailIcon className="header__icon" />
                <a href="mailto:info@schoolabroad.org">info@schoolabroad.org</a>
              </li>
              <li className="header__contact-item">
                <PhoneIcon className="header__icon" />
                <a href="tel:+33769020091">+33 769 020 091</a>
                <span className="header__divider">|</span>
                <a href="tel:+2347081416069">+234 708 1416 069</a>
              </li>
            </ul>
          </div>

          <div className="header__social">
            <ul className="header__social-list">
              <li>
                <a
                  href="https://m.facebook.com/schooloutsideng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/schooloutside_ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/schooloutside"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@schooloutside"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <YouTubeIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Navbar ---------- */}
      <div className="header__navbar">
        <div className="header__container">
          <div className="header__logo">
            <Link href="/" className="header__logo-link">
              <Image
                height={45}
                width={200}
                src="/assets/images/Schhol_Abroad_logo.jpeg"
                alt="School Abroad Logo"
                priority
                className="header__logo-image"
              />
            </Link>
          </div>

          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <Link href="/">Home</Link>
              </li>
              <li className="header__menu-item">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="header__menu-item">
                <Link href="/student">Students</Link>
              </li>
              <li className="header__menu-item">
                <Link href="/agency">Partners</Link>
              </li>
              <li className="header__menu-item">
                <Link href="/partner">Institutions</Link>
              </li>
              <li className="header__menu-item">
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            {!loading && (
              <>
                {isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="header__user-trigger">
                        <Avatar className="header__avatar">
                          <AvatarImage
                            src={user?.image || undefined}
                            alt={user?.name || "User"}
                          />
                          <AvatarFallback className="header__avatar-fallback">
                            {getInitials(user?.name, user?.email)}
                          </AvatarFallback>
                        </Avatar>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="header__dropdown">
                      <DropdownMenuLabel>
                        <div className="header__user-info">
                          <p className="header__user-name">
                            {user?.name || "User"}
                          </p>
                          <p className="header__user-email">{user?.email}</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard" className="header__dropdown-item">
                          <DashboardIcon />
                          <span>Dashboard</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/settings" className="header__dropdown-item">
                          <SettingsIcon />
                          <span>Settings</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut} className="header__dropdown-item">
                        <LogoutIcon />
                        <span>Sign Out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div className="header__auth-buttons">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="header__sign-in-btn"
                    >
                      <Link href="/sign-in">Sign In</Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="header__sign-up-btn"
                    >
                      <Link href="/sign-up">Get Started</Link>
                    </Button>
                  </div>
                )}
              </>
            )}

            <button
              className="header__hamburger"
              onClick={toggleCanvasMenu}
              aria-label="Toggle menu"
            >
              {isCanvasExpanded ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Overlay ---------- */}
      <div
        className={`header__overlay ${isCanvasExpanded ? "header__overlay--active" : ""}`}
        onClick={toggleCanvasMenu}
      ></div>

      {/* ---------- Offcanvas ---------- */}
      <div className={`header__offcanvas ${isCanvasExpanded ? "header__offcanvas--expanded" : ""}`}>
        <div className="header__offcanvas-header">
          <Link href="/" onClick={toggleCanvasMenu}>
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={150}
              height={50}
            />
          </Link>
          <button onClick={toggleCanvasMenu} className="header__offcanvas-close">
            <CloseIcon />
          </button>
        </div>

        <nav className="header__offcanvas-menu">
          <ul className="header__offcanvas-list">
            <li className="header__offcanvas-item">
              <Link href="/" onClick={toggleCanvasMenu}>Home</Link>
            </li>
            <li className="header__offcanvas-item">
              <Link href="/about-us" onClick={toggleCanvasMenu}>About Us</Link>
            </li>
            <li className="header__offcanvas-item">
              <Link href="/student" onClick={toggleCanvasMenu}>Students</Link>
            </li>
            <li className="header__offcanvas-item">
              <Link href="/agency" onClick={toggleCanvasMenu}>Partners</Link>
            </li>
            <li className="header__offcanvas-item">
              <Link href="/partner" onClick={toggleCanvasMenu}>Institutions</Link>
            </li>
            <li className="header__offcanvas-item">
              <Link href="/contact-us" onClick={toggleCanvasMenu}>Contact</Link>
            </li>
          </ul>

          <div className="header__offcanvas-auth">
            {!loading && (
              <>
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={toggleCanvasMenu}
                      className="header__offcanvas-link"
                    >
                      <DashboardIcon />
                      Dashboard
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      onClick={toggleCanvasMenu}
                      className="header__offcanvas-link"
                    >
                      <SettingsIcon />
                      Settings
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="header__offcanvas-signout"
                    >
                      <LogoutIcon />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/sign-in"
                      onClick={toggleCanvasMenu}
                      className="header__offcanvas-link"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/sign-up"
                      onClick={toggleCanvasMenu}
                      className="header__offcanvas-link header__offcanvas-link--primary"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}