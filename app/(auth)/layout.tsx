import {ReactNode} from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const inter = Inter({ subsets: ['latin'] });

const AuthLayout = async({children}: {children: ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated();
    if (isUserAuthenticated) redirect("/");
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
                <div className="flex-grow min-h-screen mt-12">
                  {children}
                </div>
                <Footer />
              </div>
            </ThemeProvider>
          </body>
        </html>
  );
}
export default AuthLayout;