"use client";

import { Plane, CheckCircle2, Clock, Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VisaTrackerProps {
  hasSubscription: boolean;
}

export default function VisaTracker({ hasSubscription }: VisaTrackerProps) {
  if (!hasSubscription) {
    return (
      <div className="visa-tracker visa-tracker--locked">
        <div className="visa-tracker__header">
          <h2 className="visa-tracker__title">Visa & Application Progress</h2>
          <Lock className="visa-tracker__lock-icon" />
        </div>

        <div className="visa-tracker__content">
          <p className="visa-tracker__locked-text">
            Track your visa and application status easily with our personalized
            Visa Tracker.
          </p>
          <p className="visa-tracker__locked-subtext">
            🔒 Available in the Diamond Plan.
          </p>

          <Button
            size="lg"
            className="visa-tracker__button visa-tracker__button--upgrade"
            asChild
          >
            <Link href="/pricing">
              <Unlock />
              Unlock Now
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="visa-tracker visa-tracker--active">
      <div className="visa-tracker__header">
        <Plane className="visa-tracker__icon" />
        <h2 className="visa-tracker__title">Visa & Application Progress</h2>
      </div>

      <div className="visa-tracker__content">
        <div className="visa-tracker__application">
          <div className="visa-tracker__application-header">
            <h3 className="visa-tracker__application-title">
              Canada Study Visa
            </h3>
            <span className="visa-tracker__application-status visa-tracker__application-status--processing">
              Processing
            </span>
          </div>

          <div className="visa-tracker__timeline">
            <div className="visa-tracker__timeline-item visa-tracker__timeline-item--completed">
              <CheckCircle2 className="visa-tracker__timeline-icon visa-tracker__timeline-icon--completed" />
              <div className="visa-tracker__timeline-content">
                <p className="visa-tracker__timeline-title">
                  Application Submitted
                </p>
                <p className="visa-tracker__timeline-date">Oct 15, 2025</p>
              </div>
            </div>

            <div className="visa-tracker__timeline-item visa-tracker__timeline-item--completed">
              <CheckCircle2 className="visa-tracker__timeline-icon visa-tracker__timeline-icon--completed" />
              <div className="visa-tracker__timeline-content">
                <p className="visa-tracker__timeline-title">Biometrics Done</p>
                <p className="visa-tracker__timeline-date">Oct 20, 2025</p>
              </div>
            </div>

            <div className="visa-tracker__timeline-item visa-tracker__timeline-item--pending">
              <Clock className="visa-tracker__timeline-icon visa-tracker__timeline-icon--pending" />
              <div className="visa-tracker__timeline-content">
                <p className="visa-tracker__timeline-title">Decision Pending</p>
                <p className="visa-tracker__timeline-date">Expected: Nov 15, 2025</p>
              </div>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="visa-tracker__button"
          asChild
        >
          <Link href="/dashboard/visa-tracker">View Full Details</Link>
        </Button>
      </div>
    </div>
  );
}

