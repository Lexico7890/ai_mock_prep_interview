import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiCircleCheck } from "react-icons/ci";

const PricingPlansDashboard = () => {
  return (
    <article className="flex flex-col gap-4 mt-16 justify-center items-center bg-gray-custom-two p-16">
      <div className="flex flex-col gap-4 justify-center items-center text-features">
        <span className="text-one opacity-0 text-base font-semibold text-center bg-orange-custom/30 px-3 py-1 rounded-full text-orange-custom">
          Pricing Plans
        </span>
        <h3 className="text-3xl font-semibold">
          Choose the Right Plan for You
        </h3>
        <p className="text-xl font-base">
          We offer flexible pricing options to meet your interview preparation
          needs.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-16 justify-center">
        <Card className="w-[350px]">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle className="text-2xl">Free</CardTitle>
            <CardDescription>
              Basic interview practice to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">
              <span className="text-orange-custom">$0 </span>/month
            </p>
            <ol className="flex flex-col gap-2 mt-4">
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />3
                practice interviews per month
              </li>
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />3 Basic
                feedback
              </li>
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />3
                General interview questions
              </li>
            </ol>
          </CardContent>
        </Card>
        <Card className="w-[350px] bg-orange-custom/30">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle className="text-2xl">Pro</CardTitle>
            <CardDescription>
              Comprehensive interview preparation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">
              <span className="text-orange-custom">$10 </span>/month
            </p>
            <ol className="flex flex-col gap-2 mt-4">
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />
                Unlimited practice interviews
              </li>
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />
                Detailed feedback and analysis
              </li>
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />
                Industry-specific questions
              </li>
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />
                Interview recording and review
              </li>
            </ol>
          </CardContent>
        </Card>
        <Card className="w-[350px]">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle>Enterprise</CardTitle>
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

export default PricingPlansDashboard;
