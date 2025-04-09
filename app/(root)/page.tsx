"use client";

import DemoDashboard from "@/components/DemoDashboard";
import useAnimation from "../hooks/useAnimation";
import FeaturesDashboard from "@/components/FeaturesDashboard";

const Page = () => {
  useAnimation()
  return (
    <section className="flex flex-col gap-16">
      <DemoDashboard />
      <FeaturesDashboard />
    </section>
  );
};

export default Page;
