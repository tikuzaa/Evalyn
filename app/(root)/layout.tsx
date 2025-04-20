// import { redirect } from "next/navigation";
// import { isAuthenticated } from "@/lib/actions/auth.action";

// const isUserAuthenticated = await isAuthenticated();
  // if (!isUserAuthenticated) redirect("/sign-in");

import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evalyn - Master Your Interviews with AI-Powered Practice',
  description: 'Practice for interviews with our AI interviewer. Get personalized feedback and improve your skills.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
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
            <div className="flex-grow min-h-screen lg:max-w-7xl mx-auto">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}