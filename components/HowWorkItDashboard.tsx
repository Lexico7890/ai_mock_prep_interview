import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HowWorkItDashboard = () => {
  return (
    <article className="flex flex-col gap-4 justify-center items-center p-8">
      <div className="flex flex-col gap-4 justify-center items-center text-features">
        <span className="text-one opacity-0 text-base font-semibold text-center bg-orange-custom/30 px-3 py-1 rounded-full text-orange-custom">
          Simple Process
        </span>
        <h3 className="text-3xl font-semibold">How AI Interview Ninja Works</h3>
        <p className="text-xl font-base">
          Our platform makes interview preparation simple, effective, and
          tailored to your needs.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-8 justify-center text-center">
        <Card className="card-one w-[350px] bg-transparent border-none shadow-none">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle>
              <div className="flex justify-center items-center bg-orange-custom/30 h-10 w-10 rounded-full text-orange-custom">
                1
              </div>
            </CardTitle>
            <CardDescription>Create your own interview</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              You can create the interview to your liking, the role you aspire
              to, the level and number of questions,
            </p>
          </CardContent>
        </Card>
        <Card className="card-two w-[350px] bg-transparent border-none shadow-none">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle>
              <div className="flex justify-center items-center bg-orange-custom/30 h-10 w-10 rounded-full text-orange-custom">
                2
              </div>
            </CardTitle>
            <CardDescription>Select Interview Type</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Choose from various interview types including technical,
              behavioral, or industry-specific interviews.
            </p>
          </CardContent>
        </Card>
        <Card className="card-three w-[350px] bg-transparent border-none shadow-none">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle>
              <div className="flex justify-center items-center bg-orange-custom/30 h-10 w-10 rounded-full text-orange-custom">
                3
              </div>
            </CardTitle>
            <CardDescription>Practice with AI</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Engage in a realistic interview with our AI interviewer that
              adapts to your responses.
            </p>
          </CardContent>
        </Card>
        <Card className="card-four w-[350px] bg-transparent border-none shadow-none">
          <CardHeader className="flex justify-center items-center flex-col gap-4">
            <CardTitle>
              <div className="flex justify-center items-center bg-orange-custom/30 h-10 w-10 rounded-full text-orange-custom">
                4
              </div>
            </CardTitle>
            <CardDescription>Get Detailed Feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Receive comprehensive feedback and actionable insights to improve
              your interview performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </article>
  );
};

export default HowWorkItDashboard;
