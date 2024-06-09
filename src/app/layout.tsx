import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UiFry",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="sticky w-full flex justify-center">
          <Navbar />
        </div>
        <main className="w-full flex-1 flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
