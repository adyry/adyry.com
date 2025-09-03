'use client';

import { Lato } from "next/font/google";
import { useEffect } from 'react';
import "./globals.css";
import Header from "../components/layout/Header";
import PageTransition from "../components/ui/PageTransition";
import GradientAnimation from "../components/ui/GradientAnimation";
import { measureWebVitals } from "@/utils/performance";

const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    measureWebVitals();
  }, []);

  return (
    <html lang="en">
      <body className={`${lato.className} min-h-screen`}>
        <GradientAnimation />
        <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col">
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <div className="text-center py-5 px-4 text-black/70 text-sm md:text-base mt-auto">
            &copy; 2024{" "}
            <a href="mailto:adrian@adyry.com" className="text-black/80 no-underline transition-colors duration-300 hover:text-black">
              Adrian Kowalczewski
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
