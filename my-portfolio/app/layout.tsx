import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Atriya Sivakumar | Portfolio",
    template: "%s | Atriya Sivakumar",
  },

  description:
    "Computer Science graduate portfolio showcasing projects and experience across Data & BI, Technology & Software, and Cybersecurity & GRC.",

  keywords: [
    "Atriya Sivakumar",
    "Computer Science Graduate",
    "Data Analyst",
    "Business Intelligence",
    "Technology",
    "Software Development",
    "Cybersecurity",
    "GRC",
    "SQL",
    "Python",
    "Django",
    "React",
  ],

  authors: [
    {
      name: "Atriya Sivakumar",
    },
  ],

  creator: "Atriya Sivakumar",

  metadataBase: new URL(
    "https://atriyasivakumarportfolio.vercel.app"
  ),

  openGraph: {
    title: "Atriya Sivakumar | Portfolio",
    description:
      "Portfolio showcasing experience and projects across Data & BI, Technology & Software, and Cybersecurity & GRC.",
    url: "https://atriyasivakumarportfolio.vercel.app",
    siteName: "Atriya Sivakumar Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Atriya Sivakumar | Portfolio",
    description:
      "Computer Science graduate portfolio across Data & BI, Technology & Software, and Cybersecurity & GRC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}