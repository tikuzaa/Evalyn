// import {ReactNode} from "react";
// import Image from "next/image";
// import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

// const RootLayout =async ({children}: {children: ReactNode}) => {
//   const isUserAuthenticated = await isAuthenticated();
//   if (!isUserAuthenticated) redirect("/sign-in");

//   return (
//     <div className="root-layout">
//       <nav>
//         <Link href="/" className="flex items-center gap-2">
//           <Image src="/logo.svg" alt="logo" width={38} height={32} />
//           <h2 className="text-primary-100">Evalyn</h2>
//         </Link>
//       </nav>
//       {children}
//     </div>
//   );
// }

// export default RootLayout;


import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InterviewAI - Master Your Interviews with AI-Powered Practice',
  description: 'Practice for interviews with our AI interviewer. Get personalized feedback and improve your skills.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow min-h-screen">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}