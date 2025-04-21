import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PiStarThin } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const TestimonialDashboard = () => {
  return (
    <article className="flex flex-col gap-4 justify-center items-center p-8 ">
      <div className="flex flex-col gap-4 justify-center items-center text-features">
        <span className="text-one opacity-0 text-base font-semibold text-center bg-orange-custom/30 px-3 py-1 rounded-full text-orange-custom">
          Testimonials
        </span>
        <h3 className="text-3xl font-semibold">What Our Users Say</h3>
        <p className="text-xl font-base">
          Hear from people who have improved their interview skills with AI
          Interview Ninja.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-16 justify-center cards">
        <Card className="w-[350px]">
          <CardHeader className="flex justify-center items-start flex-col gap-4">
            <CardTitle className="flex gap-2 items-center justify-center">
              {Array.from({ length: 5 }, (_, i) => (
                <PiStarThin key={i} className="h-6 w-6 text-orange-custom" />
              ))}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              &quot;InterviewAI helped me prepare for my software engineering
              interviews. The feedback was incredibly helpful and I landed my
              dream job!&quot;
            </p>
          </CardContent>
          <CardFooter className="flex gap-4 items-center justify-start">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://randomuser.me/api/portraits/men/20.jpg"
                alt="user testimonial one"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">Alex Johnson</p>
              <p className="text-sm font-semibold">Software Engineer</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="w-[350px]">
          <CardHeader className="flex justify-center items-start flex-col gap-4">
            <CardTitle className="flex gap-2 items-center justify-center">
              {Array.from({ length: 5 }, (_, i) => (
                <PiStarThin key={i} className="h-6 w-6 text-orange-custom" />
              ))}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              &quot;The realistic interview scenarios and detailed feedback
              helped me identify my weaknesses and improve significantly. Highly
              recommended!&quot;
            </p>
          </CardContent>
          <CardFooter className="flex gap-4 items-center justify-start">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="user testimonial two"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">Michael Chen</p>
              <p className="text-sm font-semibold">Product Manager</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="w-[350px]">
          <CardHeader className="flex justify-center items-start flex-col gap-4">
            <CardTitle className="flex gap-2 items-center justify-center">
              {Array.from({ length: 5 }, (_, i) => (
                <PiStarThin key={i} className="h-6 w-6 text-orange-custom" />
              ))}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              &quot;As someone who gets nervous during interviews, practicing
              with InterviewAI helped me build confidence and perform better in
              real interviews.&quot;
            </p>
          </CardContent>
          <CardFooter className="flex gap-4 items-center justify-start">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://randomuser.me/api/portraits/women/52.jpg"
                alt="user testimonial three"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">Emily Rodriguez</p>
              <p className="text-sm font-semibold">Marketing Specialist</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </article>
  );
};

export default TestimonialDashboard;
