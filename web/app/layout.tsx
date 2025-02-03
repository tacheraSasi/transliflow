import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import Header from "@/components/Header";
import NextTopLoader from 'nextjs-toploader';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transliflow",
  description:
    "AI-powered collaborative translation platform. Seamlessly manage translations, automate workflows, and enhance productivity with real-time collaboration and intelligent suggestions. Built with Go, Next.js, and TypeScript for speed and scalability. 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
        >
          <NextTopLoader color="#74f5a1" showSpinner={false}/>

          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
