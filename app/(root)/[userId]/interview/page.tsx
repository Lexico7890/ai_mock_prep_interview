import Agent from "@/components/Agent";
import ButtonBackInterview from "@/components/ButtonBackInterview";
import { isAuthenticated } from "@/lib/actions/authSupabase.action";
import React from "react";


const page = async () => {
  const { user } = await isAuthenticated();
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <section className="p-4 flex flex-col gap-4 bg-gray-custom-two">
      <ButtonBackInterview />
      <Agent
        userName={user?.user_metadata?.name}
        userId={user?.id}
        type="generate"
      />
    </section>
  );
};

export default page;
