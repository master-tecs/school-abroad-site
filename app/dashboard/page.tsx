import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getSubscriptionDetails } from "@/lib/subscription";
import { db } from "@/db/drizzle";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";
import WelcomeCard from "./_components/welcome-card";
import QuickAccessTiles from "./_components/quick-access-tiles";
import MentorshipSection from "./_components/mentorship-section";
import LearningResources from "./_components/learning-resources";
import VisaTracker from "./_components/visa-tracker";
import CommunitySection from "./_components/community-section";
import "./dashboard.scss";

export default async function Dashboard() {
  const result = await auth.api.getSession({
    headers: await headers(),
  });

  if (!result?.session?.userId) {
    redirect("/sign-in");
  }

  // Get user name - try from result.user first, then fetch from DB if needed
  let userName = "Student";
  if (result.user?.name) {
    userName = result.user.name;
  } else if (result.session.userId) {
    // Fetch user from database if not in session
    const userData = await db
      .select()
      .from(user)
      .where(eq(user.id, result.session.userId))
      .limit(1);
    
    if (userData.length > 0 && userData[0].name) {
      userName = userData[0].name;
    }
  }

  const subscriptionDetails = await getSubscriptionDetails();
  const hasActiveSubscription =
    subscriptionDetails.hasSubscription &&
    subscriptionDetails.subscription?.status === "active";
  
  // Determine plan type
  let planType = "Free";
  if (hasActiveSubscription && subscriptionDetails.subscription) {
    const productId = subscriptionDetails.subscription.productId;
    const platinumId = process.env.NEXT_PUBLIC_PLATINUM_TIER;
    const diamondId = process.env.NEXT_PUBLIC_DIAMOND_TIER;

    if (productId === diamondId) {
      planType = "Diamond";
    } else if (productId === platinumId) {
      planType = "Platinum";
    } else {
      planType = "Premium";
    }
  }

  return (
    <div className="dashboard-page">
      {/* Welcome Card */}
      <WelcomeCard
        userName={userName}
        planType={hasActiveSubscription ? planType : "Free"}
        hasSubscription={hasActiveSubscription}
      />

      {/* Quick Access Tiles */}
      <QuickAccessTiles hasSubscription={hasActiveSubscription} />

      {/* Main Content Grid */}
      <div className="dashboard-page__grid">
        {/* Left Column */}
        <div className="dashboard-page__left">
          {/* Mentorship Section */}
          <MentorshipSection
            hasSubscription={hasActiveSubscription}
            nextCallDate="Tuesday, Nov 5"
            nextCallTime="2:00 PM (ET)"
            callTopic="Visa Interview Preparation"
          />

          {/* Learning & Resources */}
          <LearningResources hasSubscription={hasActiveSubscription} />
        </div>

        {/* Right Column */}
        <div className="dashboard-page__right">
          {/* Visa Tracker */}
          <VisaTracker hasSubscription={hasActiveSubscription} />

          {/* Community Section */}
          <CommunitySection hasSubscription={hasActiveSubscription} />
        </div>
      </div>
    </div>
  );
}