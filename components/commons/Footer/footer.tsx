"use client";

import Image from "next/image";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top CTA */}
      <div className="footer__cta">
        <div className="container d-flex align-items-center justify-content-center flex-column text-center">
          <Image
            src="/assets/images/transparent-logo.png"
            alt="School Abroad Logo"
            width={220}
            height={50}
            className="footer__logo mb-3"
          />
          <p className="footer__tagline">
            Empowering students to study abroad with ease and confidence.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* About */}
          <div className="footer__col">
            <h5 className="footer__title">About Us</h5>
            <p className="footer__text">
              At <strong>School Abroad</strong>, we guide students toward their
              dream education across borders, from applications to visas and
              beyond.
            </p>
            <div className="footer__social">
              <Link href="https://m.facebook.com/schooloutsideng/" target="_blank" aria-label="Facebook">
                <FacebookIcon />
              </Link>
              <Link href="https://www.instagram.com/schooloutside_ng/" target="_blank" aria-label="Instagram">
                <InstagramIcon />
              </Link>
              <Link href="https://linkedin.com/company/schooloutside" target="_blank" aria-label="LinkedIn">
                <LinkedInIcon />
              </Link>
              <Link href="https://www.youtube.com/@schooloutside" target="_blank" aria-label="YouTube">
                <YouTubeIcon />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer__col">
            <h5 className="footer__title">Useful Links</h5>
            <ul className="footer__links">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/student">Our Services</Link></li>
              <li><Link href="/student#destinations">Destinations</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/agency">Agency Partnership</Link></li>
              <li><Link href="/partner">Institution Partnership</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h5 className="footer__title">Contact Us</h5>
            <ul className="footer__contact">
              <li><PhoneIcon /> <a href="tel:+33769020091">+33 769 020 091</a></li>
              <li><PhoneIcon /> <a href="tel:+2347081416069">+234 708 1416 069</a></li>
              <li><EmailIcon /> <a href="mailto:info@schoolabroad.org">info@schoolabroad.org</a></li>
              <li><LocationOnIcon /> Europe: Pierre Vermeir, Antony, Paris, France</li>
              <li><LocationOnIcon /> Africa: 1A Junction Road, Kaduna, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container d-flex justify-content-between flex-wrap">
          <p>© 2025 School Abroad. All Rights Reserved.</p>
          <p>
            Developed by{" "}
            <a href="https://mastertecs.com/" target="_blank" rel="noopener">
              Master Tecs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}