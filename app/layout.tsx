import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biplov Ghosh",
  description:
    "Portfolio of Biplov Ghosh - Software Developer specializing in modern web technologies",
  keywords: [
    "Biplov Ghosh",
    "Biplov",
    "Ghosh",
    "Portfolio",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
  ],
  openGraph: {
    title: "Biplov Ghosh - Web Developer",
    description:
      "Portfolio of Biplov Ghosh - Software Developer specializing in modern web technologies",
    type: "website",
    url: "",
    siteName: "",
    locale: "en_US",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    title: "",
    description:
      "",
    card: "summary_large_image",
    site: "",
    creator: "",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
