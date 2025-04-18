import React from "react";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";
import Hero from "@/components/landing/Hero";
import InterviewsSection from "@/components/landing/InterviewsSection";
import AvailableInterviews from "@/components/landing/AvailableInterviews";
import InterviewCard from "@/components/InterviewCard";

export default async function Page() {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! })
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = latestInterviews?.length! > 0;

  return (
    <main className="container mx-auto px-4 py-8 space-y-16 max-w-7xl">
      <Hero />
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You have not given any interviews yet</p>
          )}
        </div>
      </section>
      
      {/* <InterviewsSection 
        title="Your Interviews"
        interviews={userInterviews || []}
        emptyMessage="You haven't taken any interviews yet"
        hasPastInterviews={hasPastInterviews}
      /> */}
      
      {/* <AvailableInterviews 
        interviews={latestInterviews || []}
        hasUpcomingInterviews={hasUpcomingInterviews}
      /> */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Give an Interview</h2>
        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>There are no new interviews available</p>
          )}
        </div>
      </section>
    </main>
  );
}