"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Video, Star, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MentorshipSectionProps {
  hasSubscription: boolean;
  nextCallDate: string;
  nextCallTime: string;
  callTopic: string;
}

export default function MentorshipSection({
  hasSubscription,
  nextCallDate,
  nextCallTime,
  callTopic,
}: MentorshipSectionProps) {
  const router = useRouter();

  if (hasSubscription) {
    return (
      <div className="mentorship-section mentorship-section--active">
        <div className="mentorship-section__header">
          <h2 className="mentorship-section__title">Mentorship Call</h2>
          <div className="mentorship-section__badge">
            <Star />
            <span>Active</span>
          </div>
        </div>

        <div className="mentorship-section__content">
          <div className="mentorship-section__info">
            <Calendar className="mentorship-section__icon" />
            <div>
              <p className="mentorship-section__date">
                Your next mentorship call is scheduled for{" "}
                <strong>{nextCallDate}, 2025</strong>
              </p>
              <p className="mentorship-section__time">
                Time: <strong>{nextCallTime}</strong>
              </p>
              <p className="mentorship-section__topic">
                Topic: <strong>{callTopic}</strong>
              </p>
            </div>
          </div>

          <div className="mentorship-section__actions">
            <Button size="lg" className="mentorship-section__button">
              <Video />
              Join via Zoom
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="mentorship-section__button"
              onClick={() => router.push("/dashboard/mentorship")}
            >
              View Recordings
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mentorship-section mentorship-section--locked">
      <div className="mentorship-section__header">
        <h2 className="mentorship-section__title">Mentorship Calls</h2>
        <Lock className="mentorship-section__lock-icon" />
      </div>

      <div className="mentorship-section__content">
        <p className="mentorship-section__locked-text">
          Want to speak directly with an expert mentor?
        </p>
        <p className="mentorship-section__locked-description">
          🎓 Join the Platinum Plan for just $25/month to get one-on-one calls,
          visa guides, and premium resources.
        </p>

        <Button
          size="lg"
          className="mentorship-section__button mentorship-section__button--upgrade"
          asChild
        >
          <Link href="/pricing">
            <Star />
            Upgrade to Platinum
          </Link>
        </Button>
      </div>
    </div>
  );
}

