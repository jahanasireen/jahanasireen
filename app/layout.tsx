import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Custom Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Jahana Sireen N",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        
        </body>
    </html>
  );
}
