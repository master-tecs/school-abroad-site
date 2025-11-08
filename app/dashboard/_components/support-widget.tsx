"use client";

import { HelpCircle, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SupportWidget() {
  return (
    <div className="support-widget">
      <div className="support-widget__icon">
        <HelpCircle />
      </div>
      <div className="support-widget__content">
        <h3 className="support-widget__title">Need help?</h3>
        <p className="support-widget__text">
          Chat with an advisor now.
        </p>
        <div className="support-widget__contact">
          <a
            href="mailto:support@schoolabroad.org"
            className="support-widget__link"
          >
            <Mail />
            support@schoolabroad.org
          </a>
          <a
            href="https://wa.me/2347081416069"
            target="_blank"
            rel="noopener noreferrer"
            className="support-widget__link"
          >
            <MessageCircle />
            WhatsApp: +234 708 1416 069
          </a>
        </div>
        <Button size="sm" className="support-widget__button" asChild>
          <Link href="/dashboard/support">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
}

