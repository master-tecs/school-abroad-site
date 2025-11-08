import { auth } from "@/lib/auth";
import { getSubscriptionDetails } from "@/lib/subscription";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await auth.api.getSession({
      headers: await headers(),
    });

    if (!result?.session?.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const subscriptionDetails = await getSubscriptionDetails();
    
    // Determine plan type
    let planType = "Free";
    if (
      subscriptionDetails.hasSubscription &&
      subscriptionDetails.subscription?.status === "active"
    ) {
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

    return NextResponse.json({
      ...subscriptionDetails,
      planType,
    });
  } catch (error) {
    console.error("Error fetching subscription details:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscription details" },
      { status: 500 }
    );
  }
}