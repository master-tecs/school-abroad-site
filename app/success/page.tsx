"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, PartyPopper, ShieldCheck, Sparkles } from "lucide-react";
import "./SuccessPage.scss";

export default function SuccessPage() {
  const router = useRouter();

  const actions = [
    {
      title: "Book your mentorship call",
      description:
        "Schedule a personal session tailored to your study abroad goals.",
      icon: <Sparkles className="action-icon yellow" />,
    },
    {
      title: "Access premium resources",
      description:
        "Explore visa templates, checklists, and study guides in your dashboard.",
      icon: <Sparkles className="action-icon green" />,
    },
  ];

  return (
    <div className="success-page">
      <div className="success-page__header">
        <div className="badge">
          <ShieldCheck className="badge-icon" />
        </div>
        <h1 className="success-title">You’re officially a member!</h1>
        <p className="success-description">
          Thanks for joining our premium mentorship program. Your membership
          is now active. Check your email for confirmation and next steps.
        </p>
      </div>

      <div className="welcome-card">
        <div className="welcome-header">
          <PartyPopper className="party-icon" />
          <span>Welcome to the Platinum & Diamond lounge</span>
        </div>
        <p>
          You now have access to exclusive mentorship calls, visa resources, and
          member-only community experiences curated for your study-abroad
          journey.
        </p>
      </div>

      <div className="actions-grid">
        {actions.map((action) => (
          <div className="action-card" key={action.title}>
            <div className="action-title">
              {action.icon}
              {action.title}
            </div>
            <p className="action-desc">{action.description}</p>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <button
          className="cta-button"
          onClick={() => router.push("/dashboard")}
        >
          Go to your dashboard <ArrowRight className="arrow-icon" />
        </button>
        <p className="cta-note">
          Need help? Email <span>support@schoolabroad.org</span>
        </p>
      </div>
    </div>
  );
}