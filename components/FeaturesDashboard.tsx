import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiDialogflow } from "react-icons/si";
import { TbAlignBoxBottomCenter } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";

const FeaturesDashboard = () => {
  return (
    <article className="flex flex-col gap-4 mt-16 justify-center items-center bg-gray-custom-two p-16">
      <div className="flex flex-col gap-4 justify-center items-center">
        <span className="text-one opacity-0 text-base font-semibold text-center bg-orange-custom/30 px-3 py-1 rounded-full text-orange-custom">
          Key Features
        </span>
        <h3 className="text-3xl font-semibold">
          Everything You Need to Ace Your Interviews
        </h3>
        <p className="text-xl font-base">
          Our AI-powered platform provides comprehensive tools to help you
          prepare for any interview scenario.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-16">
        <Card className="w-[350px]">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle>
              <SiDialogflow className="h-10 w-10 text-center" />
            </CardTitle>
            <CardDescription>Realistic AI Interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Practice with our AI interviewer that adapts to your responses and
              provides realistic interview experiences.
            </p>
          </CardContent>
        </Card>
        <Card className="w-[350px]">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle>
              <TbAlignBoxBottomCenter className="h-10 w-10 text-center" />
            </CardTitle>
            <CardDescription>Detailed Feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Get comprehensive feedback on your answers, body language, and
              communication skills after each practice session.
            </p>
          </CardContent>
        </Card>
        <Card className="w-[350px]">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle>
              <IoIosTimer className="h-10 w-10 text-center" />
            </CardTitle>
            <CardDescription>On-Demand Practice</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Practice anytime, anywhere with our on-demand platform. No
              scheduling or waiting required.
            </p>
          </CardContent>
        </Card>
      </div>
    </article>
  );
};

export default FeaturesDashboard;
