import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import { isAuthenticated } from "@/lib/actions/authSupabase.action";

async function Home() {
  const { user } = await isAuthenticated();

  const [userInterviews, allInterview] = await Promise.all([
    user?.id ? getInterviewsByUserId(user.id) : [],
    user?.id ? getLatestInterviews({ userId: user.id }) : [],
  ]);

  const hasPastInterviews = (userInterviews?.length ?? 0) > 0;
  const hasUpcomingInterviews = allInterview && allInterview.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href={`/${user?.id}/interview`}>Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={350}
          height={350}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8 p-4">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <div className="flex flex-col w-full items-center justify-center gap-4 p-4 border rounded-lg">
              <p>You haven&apos;t taken any interviews yet</p>
            </div>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8 p-4">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <div className="flex flex-col w-full items-center justify-center gap-4 p-4 border rounded-lg">
              <p>There are no interviews available</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
