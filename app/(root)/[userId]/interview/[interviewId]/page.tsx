import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { isAuthenticated } from "@/lib/actions/authSupabase.action";

const InterviewDetails = async ({ params }: RouteParams) => {
  const { interviewId } = await params;
  const { user } = await isAuthenticated()

  const interview = await getInterviewById(interviewId);
  if (!interview) redirect("/home");

  const feedback = await getFeedbackByInterviewId({
    interviewId: interviewId,
    userId: user ? user.id : "",
  });

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>

          <DisplayTechIcons techStack={interview.techstack} />
        </div>

        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
          {interview.type}
        </p>
      </div>

      <Agent
        userName={user?.user_metadata?.name ?? "Guest"}
        userId={user?.id}
        interviewId={interviewId}
        type="interview"
        questions={interview.questions}
        feedbackId={feedback?.id}
      />
    </div>
  );
};

export default InterviewDetails;