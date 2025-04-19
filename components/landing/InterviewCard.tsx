"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CalendarIcon, ClockIcon, BarChart3Icon } from "lucide-react";

interface InterviewCardProps {
  id: string;
  title: string;
  description?: string;
  date?: string;
  duration?: string;
  status?: string;
  score?: number;
}

export default function InterviewCard({ 
  id, 
  title, 
  description, 
  date, 
  duration, 
  status,
  score
}: InterviewCardProps) {
  
  const getStatusColor = (status?: string) => {
    if (!status) return "bg-muted text-muted-foreground";
    
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "scheduled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "failed":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full overflow-hidden border border-border/50 hover:border-primary/30 transition-colors duration-300 hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-xl line-clamp-1">{title}</CardTitle>
            {status && (
              <Badge variant="outline" className={`${getStatusColor(status)} px-2 py-1 text-xs font-medium rounded-full`}>
                {status}
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="pb-4">
          {description && (
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{description}</p>
          )}
          
          <div className="flex flex-wrap gap-3 text-sm">
            {date && (
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <CalendarIcon className="h-4 w-4" />
                <span>{date}</span>
              </div>
            )}
            
            {duration && (
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <ClockIcon className="h-4 w-4" />
                <span>{duration}</span>
              </div>
            )}
            
            {score !== undefined && (
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <BarChart3Icon className="h-4 w-4" />
                <span>Score: {score}%</span>
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter>
          <Button asChild variant="default" size="sm" className="w-full">
            <Link href={`/interview/${id}`}>
              {status === "completed" ? "View Results" : "Start Interview"}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}