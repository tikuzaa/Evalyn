"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Master Your Interviews
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              with AI-Powered Practice
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground">
            Prepare for your dream job with realistic interview scenarios. 
            Practice with our AI interviewer and receive instant, personalized feedback to improve your skills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/interview">
                Start Practicing Now →
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 font-medium px-8 py-6 rounded-xl">
              <Link href="#how-it-works">
                How It Works
              </Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] lg:h-[500px] hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl overflow-hidden flex items-center justify-center">
            <Image 
              src="/robot.png" 
              alt="AI Interview Assistant" 
              width={400} 
              height={400}
              className="object-contain transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

const features = [
  {
    title: "Realistic Scenarios",
    description: "Practice with industry-specific interviews tailored to your experience level",
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-primary"
      >
        <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
        <path d="M9 9h9"></path>
        <path d="M16 19h6"></path>
        <path d="M22 22l-3-3"></path>
      </svg>
    )
  },
  {
    title: "Instant Feedback",
    description: "Get personalized feedback on your answers, delivery, and areas for improvement",
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-primary"
      >
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
      </svg>
    )
  },
  {
    title: "Track Progress",
    description: "Monitor your improvement over time with detailed performance analytics",
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-primary"
      >
        <path d="M2 20h20"></path>
        <path d="m5.6 11.4 4-4"></path>
        <path d="m5.6 11.4-2 2"></path>
        <path d="m18.4 11.4-4-4"></path>
        <path d="m18.4 11.4 2 2"></path>
        <path d="M10 7h4"></path>
        <path d="M2 16h.01"></path>
        <path d="M8 16h.01"></path>
        <path d="M14 16h.01"></path>
        <path d="M20 16h.01"></path>
      </svg>
    )
  }
];