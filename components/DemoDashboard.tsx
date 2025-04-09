"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaAmazon, FaFacebook, FaGoogle } from "react-icons/fa";

import { CiCircleCheck } from "react-icons/ci";

const DemoDashboard = () => {
  return (
    <article className="grid grid-cols-2 gap-4 justify-center items-center px-16 mt-24">
        <div className="flex flex-col gap-6 justify-start items-start">
          <span className="text-one opacity-0 text-base font-semibold text-center bg-orange-custom/30 px-3 py-1 rounded-full text-orange-custom">
            AI-Powered Interview Practice
          </span>
          <h3 className="text-two opacity-0 text-5xl font-bold">
            Master Your Interviews with AI Feedback
          </h3>
          <p className="text-three opacity-0 text-lg">
            Practice interviews with our AI interviewer and get real-time
            feedback to improve your skills and land your dream job.
          </p>
          <div className="div-buttons opacity-0 flex gap-4">
            <Button>Start Practicing Now</Button>
            <Button variant="outline">Watch Demo</Button>
          </div>
          <div className="div-checks opacity-0 flex gap-4 text-sm">
            <span className="flex gap-2 items-center justify-center">
              <CiCircleCheck className="h-6 w-6 text-orange-custom" />
              No credit card required
            </span>
            <span className="flex gap-2 items-center justify-center">
              <CiCircleCheck className="h-6 w-6 text-orange-custom" />
              Free trial available
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <FaFacebook className="facebook absolute top-1/3 right-1/10 h-14 w-14 text-blue-600" />
          <FaGoogle className="google absolute top-2/3 left-1/12 h-18 w-18 text-green-600" />
          <FaAmazon className="amazon absolute top-0 left-1/8 h-12 w-12 text-yellow-600" />
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
  )
}

export default DemoDashboard