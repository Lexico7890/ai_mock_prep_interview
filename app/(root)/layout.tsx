import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUsersAuthenticated = await isAuthenticated();
  if (!isUsersAuthenticated) redirect("/sign-in");
  return (
    <div>
      <header className="flex justify-between bg-background py-2 px-4 items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={38} height={32} />
            <h2 className="text-primary-100 text-base">AI Interview Ninja</h2>
          </Link>
          <nav className="flex justify-center items-center">
            <ul className="flex gap-6">
              <ol>
                <Link href="/questions" className="text-primary-100 hover:border-b-2 hover:border-primary-100">
                  Questions
                </Link>
              </ol>
              <ol>
                <Link href="/interviews" className="text-primary-100 hover:border-b-2 hover:border-primary-100">
                  Interviews
                </Link>
              </ol>
            </ul>
          </nav>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>
      <div className="root-layout">{children}</div>
    </div>
  );
};

export default RootLayout;
