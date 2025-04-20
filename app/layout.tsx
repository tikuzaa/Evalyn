import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evalyn - Master Your Interviews with AI-Powered Practice",
  description: "Practice for interviews with our AI interviewer. Get personalized feedback and improve your skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${monaSans.className} pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
