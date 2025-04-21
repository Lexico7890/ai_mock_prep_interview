"use client";

import DemoDashboard from "@/components/DemoDashboard";
import useAnimation from "../hooks/useAnimation";
import FeaturesDashboard from "@/components/FeaturesDashboard";
import HowWorkItDashboard from "@/components/HowWorkItDashboard";
import PricingPlansDashboard from "@/components/PricingPlansDashboard";
import TestimonialDashboard from "@/components/TestimonialDashboard";
import ReadyDashboard from "@/components/ReadyDashboard";
import FooterDashboard from "@/components/FooterDashboard";

const Page = () => {
  useAnimation()
  return (
    <section className="flex flex-col gap-16">
      <DemoDashboard />
      <FeaturesDashboard />
      <HowWorkItDashboard />
      <PricingPlansDashboard />
      <TestimonialDashboard />
      <ReadyDashboard />
      <FooterDashboard />
    </section>
  );
};

export default Page;
