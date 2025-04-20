import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    Master Your Interviews
                  </span>
                  <span className="block mt-2">with AI-Powered Practice</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Practice with our AI interviewer and get instant, personalized feedback to improve your interview skills.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  <Link href="/home">
                    Get Started Free
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#how-it-works">
                    Learn More
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-5 w-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-5 w-5 text-green-500" />
                  <span>Free practice interviews</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl overflow-hidden flex items-center justify-center">
                  <Image 
                    src="/robot.png" 
                    alt="AI Interview Assistant" 
                    width={550} 
                    height={550}
                    className="object-contain transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose InterviewAI?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practice with confidence using our advanced AI interviewer and get detailed feedback to improve your skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "AI-Powered Interviews",
    description: "Practice with our intelligent AI interviewer that adapts to your responses and provides realistic scenarios.",
    icon: <CheckCircle2Icon className="h-6 w-6 text-primary" />
  },
  {
    title: "Instant Feedback",
    description: "Get detailed feedback on your performance, including strengths and areas for improvement.",
    icon: <CheckCircle2Icon className="h-6 w-6 text-primary" />
  },
  {
    title: "Industry-Specific Questions",
    description: "Practice with questions tailored to your industry and experience level.",
    icon: <CheckCircle2Icon className="h-6 w-6 text-primary" />
  },
  {
    title: "Progress Tracking",
    description: "Monitor your improvement over time with detailed analytics and performance metrics.",
    icon: <CheckCircle2Icon className="h-6 w-6 text-primary" />
  },
  {
    title: "Flexible Practice",
    description: "Practice anytime, anywhere, and as often as you need to build confidence.",
    icon: <CheckCircle2Icon className="h-6 w-6 text-primary" />
  },
  {
    title: "Interview Resources",
    description: "Access a library of resources and tips to help you prepare for your interviews.",
    icon: <CheckCircle2Icon className="h-6 w-6 text-primary" />
  }
];