import React from "react";
import { Button } from "./ui/button";

const ReadyDashboard = () => {
  return (
    <article className="flex flex-col gap-4 items-center justify-center text-center p-16 bg-gray-custom-two">
      <h2 className="text-4xl">Ready to Ace Your Next Interview?</h2>
      <p className="text-xl">
        Start practicing with InterviewAI today and gain the confidence you need
        to succeed.
      </p>
      <div className="flex gap-4 mt-8">
        <Button className="bg-orange-custom/30 border-1 border-orange-custom text-orange-custom">
          Get Started
        </Button>
        <Button variant="secondary">Try a Demo</Button>
      </div>
    </article>
  );
};

export default ReadyDashboard;
