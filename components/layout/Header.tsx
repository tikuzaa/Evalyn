"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { isAuthenticated, logoutAndRedirect } from "@/lib/actions/auth.action";
import { Logo } from "../landing/Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const pathname = usePathname();
  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    const findUser = async () => {
      const isUserAuthenticated = await isAuthenticated();
      setUser(isUserAuthenticated);
    };
    findUser();
    console.log("user", user);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const checkAuth = async () => {
      const result = await isAuthenticated();
      setLoggedIn(result);
    };

    checkAuth();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Interviews", href: "/interview" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <h2 className="text-primary-100">Evalyn</h2>
            </Link>


            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              {!user ? (
                <>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/sign-in">Log in</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/sign-up">Sign up</Link>
                  </Button>
                </>
              ) : (
                <Button
                  onClick={async () => {
                    await logoutAndRedirect();
                    setUser(false);
                  }}
                  className="btn"
                >
                  Logout
                </Button>
              )}
            </div>

            <ModeToggle />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col space-y-2 pt-2">
                {!user ? (
                  <>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/sign-in">Log in</Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href="/sign-up">Sign up</Link>
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={async () => {
                      await logoutAndRedirect();
                      setUser(false);
                    }}
                    className="btn"
                  >
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
