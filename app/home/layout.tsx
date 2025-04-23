import React, { ReactNode } from "react";
import Header from "@/components/Header";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="">{children}</div>
    </div>
  );
};

export default RootLayout;
