import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import LenisScroller from "@/components/LenisScroller";
import ThemeProvider from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Shivam Kumar | AI Engineer & Full Stack Developer",
  description:
    "Luxury editorial portfolio for Shivam Kumar, AI Engineer and Full Stack Developer.",
  openGraph: {
    title: "Shivam Kumar | AI Engineer & Full Stack Developer",
    description:
      "Premium editorial portfolio showcasing AI engineering, full stack development, and problem solving.",
    type: "website",
    url: "https://shivam-portfolio.vercel.app"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Kumar | AI Engineer & Full Stack Developer",
    description:
      "Premium editorial portfolio showcasing AI engineering, full stack development, and problem solving."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <LenisScroller />
          <Navbar />
          <Sidebar />
          {children}
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
