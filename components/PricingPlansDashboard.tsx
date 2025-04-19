import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiCircleCheck } from "react-icons/ci";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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
        <Card className="w-[350px] flex flex-col gap-10">
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
          <CardFooter>
            <Button className="w-full" variant="outline">
              Get Started
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px] bg-orange-custom/30 flex flex-col gap-10">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle className="text-2xl flex gap-2 justify-center items-center">
              Pro <Badge className="bg-orange-custom">Popular</Badge>
            </CardTitle>
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
          <CardFooter>
            <Button className="w-full" variant="outline">
              Get Started
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px] flex flex-col gap-10">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle className="text-2xl">Enterprise</CardTitle>
            <CardDescription>For teams and organizations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">
              <span className="text-orange-custom">Custom </span>
            </p>
            <ol className="flex flex-col gap-2 mt-4">
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />
                Everything in Pro
              </li>
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />
                Custom interview scenarios
              </li>
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />
                Team management dashboard
              </li>
              <li className="flex gap-2">
                <CiCircleCheck className="h-6 w-6 text-orange-custom" />
                Priority support
              </li>
            </ol>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Contact Us
            </Button>
          </CardFooter>
        </Card>
      </div>
    </article>
  );
};

export default PricingPlansDashboard;
