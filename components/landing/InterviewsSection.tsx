"use client";

import React from "react";
// import InterviewCard from "@/components/landing/InterviewCard";
import InterviewCard from "@/components/landing/InterviewCard";
import { motion } from "framer-motion";

interface InterviewsSectionProps {
  title: string;
  interviews: Array<any>;
  emptyMessage: string;
  hasPastInterviews: boolean;
}

export default function InterviewsSection({
  title,
  interviews,
  emptyMessage,
  hasPastInterviews
}: InterviewsSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>

      {hasPastInterviews ? (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {interviews.map((interview) => (
            <motion.div key={interview.id} variants={item}>
              <InterviewCard {...interview} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border/50 rounded-lg p-10 text-center"
        >
          <p className="text-muted-foreground">{emptyMessage}</p>
        </motion.div>
      )}
    </section>
  );
}