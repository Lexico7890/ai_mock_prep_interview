import React, { ReactNode } from "react";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import Header from "@/components/Header";


const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUsersAuthenticated = await isAuthenticated();
  // if (!isUsersAuthenticated) redirect("/sign-in");
  return (
    <div>
      <Header />
      <div className="">{children}</div>
    </div>
  );
};

export default RootLayout;
