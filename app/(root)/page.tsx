"use client";

import DemoDashboard from "@/components/DemoDashboard";
import useAnimation from "../hooks/useAnimation";
import FeaturesDashboard from "@/components/FeaturesDashboard";
import HowWorkItDashboard from "@/components/HowWorkItDashboard";
import PricingPlansDashboard from "@/components/PricingPlansDashboard";

const Page = () => {
  useAnimation()
  return (
    <section className="flex flex-col gap-16">
      <DemoDashboard />
      <FeaturesDashboard />
      <HowWorkItDashboard />
      <PricingPlansDashboard />
    </section>
  );
};

export default Page;
