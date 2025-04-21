import Image from "next/image";
import React from "react";

const FooterDashboard = () => {
  return (
    <footer className="p-4">
      <div className="flex">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="flex gap-2 justify-center items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-8 h-8"
            />
            <h2 className="text-xl font-bold text-center">
              AI Interview Ninja
            </h2>
          </div>
          <p className="text-sm mt-2 max-w-64 text-justify">
            AI-powered interview practice platform to help you prepare for your
            next job interview.
          </p>
        </div>
        <div className="w-full flex justify-evenly gap-16">
          <ol>
            <li className="text-white">Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ol>
          <ol>
            <li className="text-white">Legal</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Cookie Policy</li>
          </ol>
        </div>
      </div>
      <div className="h-[1px] bg-orange-custom/50 w-full mt-16" />
      <div className="flex text-sm justify-between items-center p-6">
        <p>© 2025 AI Interview Ninja. All rights reserved.</p>
        <p>Made with ❤️ for job seekers everywhere</p>
      </div>
    </footer>
  );
};

export default FooterDashboard;
