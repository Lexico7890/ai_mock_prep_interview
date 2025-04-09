"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaAmazon, FaFacebook, FaGoogle } from "react-icons/fa";
import { animate, createScope, createSpring } from "animejs";

const Page = () => {
  useEffect(() => {
    createScope({}).add(() => {
      animate(".facebook", {
        scale: [
          { to: 1.25, ease: "inOut(3)", duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) },
        ],
        loop: true,
        loopDelay: 350,
      });
      animate(".google", {
        scale: [
          { to: 1.25, ease: "inOut(3)", duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) },
        ],
        loop: true,
        loopDelay: 240,
      });
      animate(".amazon", {
        scale: [
          { to: 1.25, ease: "inOut(3)", duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) },
        ],
        loop: true,
        loopDelay: 280,
      });
    });
  }, []);
  return (
    <section className="flex gap-4 py-10">
      <article className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="flex flex-col gap-6 justify-start items-start">
          <span className="text-base font-semibold text-center bg-orange-custom/30 px-3 py-1 rounded-full text-orange-custom">
            AI-Powered Interview Practice
          </span>
          <p className="text-5xl font-bold">
            Master Your Interviews with AI Feedback
          </p>
          <p className="text-lg">
            Practice interviews with our AI interviewer and get real-time
            feedback to improve your skills and land your dream job.
          </p>
          <div className="flex gap-4">
            <Button>Start Practicing Now</Button>
            <Button variant="outline">Watch Demo</Button>
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <FaFacebook className="facebook absolute top-1/3 right-1/10 h-14 w-14 text-blue-600" />
          <FaGoogle className="google absolute top-2/3 left-1/12 h-18 w-18 text-green-600" />
          <FaAmazon className="amazon absolute top-0 left-1/8 h-12 w-12 text-yellow-600"/>
          <Image
            src="/robot.png"
            alt="robo-dude"
            width={350}
            height={350}
            className="max-sm:hidden"
          />
          <div className="flex gap-2 items-center mt-4">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </span>
            <p className="relative">AI Interviewer is ready</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Page;
