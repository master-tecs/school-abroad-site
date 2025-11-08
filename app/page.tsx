import FooterSection from "@/components/homepage/footer";
import HeroSection from "@/components/homepage/hero-section";
import Integrations from "@/components/homepage/integrations";
import { getSubscriptionDetails } from "@/lib/subscription";
import PricingTable from "./pricing/_component/pricing-table";
import Hero from "@/components/homepage/Hero/hero";
import About from "@/components/homepage/About/about";
import Countries from "@/components/homepage/Countries/countries";
import Services from "@/components/homepage/Service/service";
import Testimonials from "@/components/homepage/Testimonals/testimonals";
import Colleges from "@/components/homepage/Colleges/colleges";
import Footer from "@/components/homepage/Footer/footer";
import AppointmentForm from "@/components/homepage/AppointmentForm/appointmentForm";
import ChatAssistant from "@/components/commons/ChatAssistant/chatAssistant";
import WhyUs from "@/components/homepage/WhyUs/whyus/whyus";

export default async function Home() {
  const subscriptionDetails = await getSubscriptionDetails();

  return (
    <>
      <Hero />
      <About />
      {/* <HeroSection /> */}
      {/* <Integrations /> */}
      <Services />
      <PricingTable subscriptionDetails={subscriptionDetails} />
      <Countries />
      <WhyUs />
      <Testimonials />
      <Colleges />
      <AppointmentForm />
      {/* <FooterSection /> */}
    </>
  );
}
