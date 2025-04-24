"use client";

import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ButtonBackInterview = () => {
  const router = useRouter();
  return (
    <div className="flex gap-4 items-center">
      <Button variant="outline" size="icon" onClick={() => router.back()}>
        <IoIosArrowBack />
      </Button>
      <h3>Interview generation</h3>
    </div>
  );
};

export default ButtonBackInterview;
