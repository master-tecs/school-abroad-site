"use client";
import React, { useEffect, useState } from "react";
import "./pricing-table.scss";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Check } from "lucide-react";

type SubscriptionDetails = {
  id: string;
  productId: string;
  status: string;
  amount: number;
  currency: string;
  recurringInterval: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  canceledAt: Date | null;
  organizationId: string | null;
};

type SubscriptionDetailsResult = {
  hasSubscription: boolean;
  subscription?: SubscriptionDetails;
  error?: string;
  errorType?: "CANCELED" | "EXPIRED" | "GENERAL";
};

interface PricingTableProps {
  subscriptionDetails: SubscriptionDetailsResult;
}

export default function PricingTable({
  subscriptionDetails,
}: PricingTableProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await authClient.getSession();
        setIsAuthenticated(!!session.data?.user);
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleCheckout = async (productId: string, slug: string) => {
    if (isAuthenticated === false) {
      router.push("/sign-in");
      return;
    }

    try {
      await authClient.checkout({ products: [productId], slug });
    } catch {
      toast.error("Oops, something went wrong");
    }
  };

  const handleManageSubscription = async () => {
    try {
      await authClient.customer.portal();
    } catch {
      toast.error("Failed to open subscription management");
    }
  };

  const PLATINUM_TIER = process.env.NEXT_PUBLIC_PLATINUM_TIER!;
  const PLATINUM_SLUG = process.env.NEXT_PUBLIC_PLATINUM_SLUG!;
  const DIAMOND_TIER = process.env.NEXT_PUBLIC_DIAMOND_TIER!;
  const DIAMOND_SLUG = process.env.NEXT_PUBLIC_DIAMOND_SLUG!;

  const isCurrentPlan = (tierProductId: string) =>
    subscriptionDetails.hasSubscription &&
    subscriptionDetails.subscription?.productId === tierProductId &&
    subscriptionDetails.subscription?.status === "active";

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section className="pricing">
      <div className="pricing__header">
        <h1>Mentorship Plans</h1>
        <p>
          Gain access to visa guidance, mentorship calls, global education
          resources, and a community that supports your study-abroad success
          starting at <strong>$25/month</strong>.
        </p>
      </div>

      <div className="pricing__grid">
        {/* Platinum Plan */}
        <div className={`pricing__card ${isCurrentPlan(PLATINUM_TIER) ? "active" : ""}`}>
          {isCurrentPlan(PLATINUM_TIER) && <span className="badge">Current Plan</span>}

          <h2 className="plan-title platinum">Platinum Plan</h2>
          <p className="plan-subtitle">Perfect for self-paced learners</p>
          <div className="plan-price">
            <span>$25</span>
            <small>/month</small>
          </div>

          <ul className="plan-features">
            {[
              "Monthly mentorship call",
              "Access to premium learning videos",
              "Community access with mentors",
              "Visa templates & how-to guides",
              "Country visa updates and alerts",
              "Exclusive webinars",
              "Visa templates & country updates"
            ].map((feature) => (
              <li key={feature}>
                <Check size={18} />
                {feature}
              </li>
            ))}
          </ul>

          {isCurrentPlan(PLATINUM_TIER) ? (
            <div className="plan-actions">
              <button className="btn btn-outline" onClick={handleManageSubscription}>
                Manage Subscription
              </button>
              {subscriptionDetails.subscription && (
                <p className="plan-date">
                  {subscriptionDetails.subscription.cancelAtPeriodEnd
                    ? `Expires ${formatDate(subscriptionDetails.subscription.currentPeriodEnd)}`
                    : `Renews ${formatDate(subscriptionDetails.subscription.currentPeriodEnd)}`}
                </p>
              )}
            </div>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => handleCheckout(PLATINUM_TIER, PLATINUM_SLUG)}
            >
              {isAuthenticated === false ? "Sign In to Subscribe" : "Join Platinum"}
            </button>
          )}
        </div>

        {/* Diamond Plan */}
        <div className={`pricing__card ${isCurrentPlan(DIAMOND_TIER) ? "active" : ""}`}>
          {isCurrentPlan(DIAMOND_TIER) && <span className="badge">Current Plan</span>}

          <h2 className="plan-title diamond">Diamond Plan</h2>
          <p className="plan-subtitle">Best for dedicated achievers</p>
          <div className="plan-price">
            <span>$45</span>
            <small>/month</small>
          </div>

          <ul className="plan-features">
            {[
              "Bi-weekly mentorship calls",
              "Exclusive video library",
              "Private community access",
              "Early access to updates",
              "Exclusive webinars",
              "Visa templates & country updates",
              "One-on-one visa & application support",
              "40% discount on airport pick-up",
              "Accommodation assistance",
            ].map((feature) => (
              <li key={feature}>
                <Check size={18} />
                {feature}
              </li>
            ))}
          </ul>

          {isCurrentPlan(DIAMOND_TIER) ? (
            <div className="plan-actions">
              <button className="btn btn-outline" onClick={handleManageSubscription}>
                Manage Subscription
              </button>
              {subscriptionDetails.subscription && (
                <p className="plan-date">
                  {subscriptionDetails.subscription.cancelAtPeriodEnd
                    ? `Expires ${formatDate(subscriptionDetails.subscription.currentPeriodEnd)}`
                    : `Renews ${formatDate(subscriptionDetails.subscription.currentPeriodEnd)}`}
                </p>
              )}
            </div>
          ) : (
            <button
              className="btn btn-primary btn-diamond"
              onClick={() => handleCheckout(DIAMOND_TIER, DIAMOND_SLUG)}
            >
              {isAuthenticated === false ? "Sign In to Subscribe" : "Join Diamond"}
            </button>
          )}
        </div>
      </div>

    </section>
  );
}