import React from "react";
import "./student.scss";
import Hero from "@/components/studentpage/Hero/hero";
import PreArrival from "@/components/studentpage/PreArrival/preArrival";
import PostArrival from "@/components/studentpage/PostArrival/postArrival";
import Pricing from "@/components/studentpage/Pricing/pricing";
import PricingTable from "../pricing/_component/pricing-table";
import { getSubscriptionDetails } from "@/lib/subscription";
// import Membership from "@/components/studentpage/Membership/Membership";
import HowItWorks from "@/components/studentpage/HowItWorks/howItWorks";
import WhyUs from "@/components/studentpage/WhyUs/whyUs";
import Testimonials from "@/components/homepage/Testimonals/testimonals";
import Questions from "@/components/studentpage/Questions/questions";

export default async function StudentPage() {
  const subscriptionDetails = await getSubscriptionDetails();

  return (
    <div className="student-page">
      <Hero />
      <PreArrival />
      <PostArrival />
      <Pricing />
      <PricingTable subscriptionDetails={subscriptionDetails} />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <Questions />
    </div>
  );
}
