"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Video, Sparkles, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface WelcomeCardProps {
  userName: string;
  planType: string;
  hasSubscription: boolean;
}

export default function WelcomeCard({
  userName,
  planType,
  hasSubscription,
}: WelcomeCardProps) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState<string | null>(null);

  const handleBookMentorship = () => {
    setIsNavigating("mentorship");
    if (hasSubscription) {
      router.push("/dashboard/mentorship");
    } else {
      router.push("/pricing");
    }
  };

  const handleNavigate = (path: string) => {
    setIsNavigating(path);
    router.push(path);
  };

  return (
    <div className="welcome-card">
      <div className="welcome-card__content">
        <div className="welcome-card__text">
          <h1 className="welcome-card__title">
            Hi {userName}, your study abroad dream is within reach!
          </h1>
          {hasSubscription ? (
            <p className="welcome-card__subtitle">
              Next mentorship call: <strong>Tuesday, Nov 5 at 2:00 PM (ET)</strong>
            </p>
          ) : (
            <p className="welcome-card__subtitle">
              You&apos;re one step away from unlocking mentorship, visa templates,
              and premium study resources.
            </p>
          )}
          <p className="welcome-card__motivation">
            {hasSubscription
              ? "Ready to prepare your next step? Let's go. 🚀"
              : "Choose a plan to start your guided journey abroad. 🌍"}
          </p>
        </div>

        <div className="welcome-card__actions">
          {hasSubscription ? (
            <>
              <Button 
                size="lg" 
                className="welcome-card__button welcome-card__button--primary" 
                onClick={() => handleNavigate("/dashboard/mentorship")}
                disabled={isNavigating === "/dashboard/mentorship"}
              >
                <Video className="welcome-card__button-icon" />
                <span>Join Live Call</span>
                <ArrowRight className="welcome-card__button-arrow" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="welcome-card__button welcome-card__button--secondary"
                onClick={handleBookMentorship}
                disabled={isNavigating === "mentorship"}
              >
                <Calendar className="welcome-card__button-icon" />
                <span>Schedule Session</span>
              </Button>
            </>
          ) : (
            <>
              <Button 
                size="lg" 
                className="welcome-card__button welcome-card__button--primary" 
                onClick={() => handleNavigate("/pricing")}
                disabled={isNavigating === "/pricing"}
              >
                <Sparkles className="welcome-card__button-icon" />
                <span>Start with Platinum</span>
                <span className="welcome-card__button-price">$25/mo</span>
                <ArrowRight className="welcome-card__button-arrow" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="welcome-card__button welcome-card__button--secondary"
                onClick={() => handleNavigate("/pricing")}
                disabled={isNavigating === "/pricing"}
              >
                <Zap className="welcome-card__button-icon" />
                <span>Get Diamond Plan</span>
                <span className="welcome-card__button-price">$45/mo</span>
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="welcome-card__badge">
        <span className="welcome-card__badge-text">
          {hasSubscription ? `${planType} Member` : "Free User"}
        </span>
      </div>
    </div>
  );
}

