// import dayjs from "dayjs";
// import Link from "next/link";
// import Image from "next/image";
// import { redirect } from "next/navigation";

// import {
//   getFeedbackByInterviewId,
//   getInterviewById,
// } from "@/lib/actions/general.action";
// import { Button } from "@/components/ui/button";
// import { getCurrentUser } from "@/lib/actions/auth.action";

// export const Feedback = async ({ params }: RouteParams) => {
//   const { id } = await params;
//   const user = await getCurrentUser();

//   const interview = await getInterviewById(id);
//   if (!interview) redirect("/");

//   const feedback = await getFeedbackByInterviewId({
//     id,
//     userId: user?.id!,
//   });

//   return (
//     <section className="section-feedback">
//       <div className="flex flex-row justify-center">
//         <h1 className="text-4xl font-semibold">
//           Feedback on the Interview -{" "}
//           <span className="capitalize">{interview.role}</span> Interview
//         </h1>
//       </div>

//       <div className="flex flex-row justify-center ">
//         <div className="flex flex-row gap-5">
//           {/* Overall Impression */}
//           <div className="flex flex-row gap-2 items-center">
//             <Image src="/star.svg" width={22} height={22} alt="star" />
//             <p>
//               Overall Impression:{" "}
//               <span className="text-primary-200 font-bold">
//                 {feedback?.totalScore}
//               </span>
//               /100
//             </p>
//           </div>

//           {/* Date */}
//           <div className="flex flex-row gap-2">
//             <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
//             <p>
//               {feedback?.createdAt
//                 ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
//                 : "N/A"}
//             </p>
//           </div>
//         </div>
//       </div>

//       <hr />

//       <p>{feedback?.finalAssessment}</p>

//       {/* Interview Breakdown */}
//       <div className="flex flex-col gap-4">
//         <h2>Breakdown of the Interview:</h2>
//         {feedback?.categoryScores?.map((category, index) => (
//           <div key={index}>
//             <p className="font-bold">
//               {index + 1}. {category.name} ({category.score}/100)
//             </p>
//             <p>{category.comment}</p>
//           </div>
//         ))}
//       </div>

//       <div className="flex flex-col gap-3">
//         <h3>Strengths</h3>
//         <ul>
//           {feedback?.strengths?.map((strength, index) => (
//             <li key={index}>{strength}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex flex-col gap-3">
//         <h3>Areas for Improvement</h3>
//         <ul>
//           {feedback?.areasForImprovement?.map((area, index) => (
//             <li key={index}>{area}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="buttons">
//         <Button className="btn-secondary flex-1">
//           <Link href="/" className="flex w-full justify-center">
//             <p className="text-sm font-semibold text-primary-200 text-center">
//               Back to dashboard
//             </p>
//           </Link>
//         </Button>

//         <Button className="btn-primary flex-1">
//           <Link
//             href={`/interview/${id}`}
//             className="flex w-full justify-center"
//           >
//             <p className="text-sm font-semibold text-black text-center">
//               Retake Interview
//             </p>
//           </Link>
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default Feedback;

import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getFeedbackByInterviewId, getInterviewById } from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CalendarIcon, StarIcon, ArrowLeftIcon, RefreshCwIcon } from "lucide-react";

const Feedback = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    id,
    userId: user?.id!,
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <Card className="border-none shadow-none">
        <CardContent className="space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Interview Feedback
              <span className="block text-xl md:text-2xl text-muted-foreground mt-2 capitalize">
                {interview.role} Position
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-yellow-500" />
                <span>
                  Overall Score:{" "}
                  <span className="font-semibold text-foreground">
                    {feedback?.totalScore}/100
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                <span>
                  {feedback?.createdAt
                    ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Final Assessment */}
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">{feedback?.finalAssessment}</p>
              </CardContent>
            </Card>

            {/* Interview Breakdown */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Performance Breakdown</h2>
              <div className="space-y-6">
                {feedback?.categoryScores?.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{category.name}</h3>
                      <span className="text-sm font-medium">{category.score}/100</span>
                    </div>
                    <Progress value={category.score} className="h-2" />
                    <p className="text-sm text-muted-foreground mt-2">{category.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
                  <ul className="space-y-3">
                    {feedback?.strengths?.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-sm">
                          ✓
                        </span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Areas to Improve</h3>
                  <ul className="space-y-3">
                    {feedback?.areasForImprovement?.map((area, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild variant="outline" className="flex-1">
              <Link href="/">
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <Button asChild className="flex-1">
              <Link href={`/interview/${id}`}>
                <RefreshCwIcon className="w-4 h-4 mr-2" />
                Retake Interview
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Feedback;