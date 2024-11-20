import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "TalentPulse Ai| Home",
  description: "This is a blog website exploring the transformative role of AI in Human Resources and workforce management",
};

export default function RootLayou({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body className={inter.className}>
      {children}
      <Footer />
    </body>
  </html>
  );
}