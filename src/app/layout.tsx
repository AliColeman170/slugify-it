import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
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
  title: "Slugify.it - Convert Text to SEO-Friendly Slugs",
  description:
    "Convert any text into SEO-friendly slugs instantly. Perfect for URLs, filenames, and web development. Free online tool with real-time conversion.",
  keywords: [
    "slug generator",
    "url slug",
    "seo friendly urls",
    "text to slug",
    "url converter",
    "slug maker",
    "seo tools",
    "web development",
    "filename converter",
    "permalink generator"
  ],
  authors: [{ name: "Slugify.it" }],
  creator: "Slugify.it",
  publisher: "Slugify.it",
  category: "Web Development Tools",
  classification: "SEO Tools",
  robots: "index, follow",
  openGraph: {
    title: "Slugify.it - Convert Text to SEO-Friendly Slugs",
    description: "Convert any text into SEO-friendly slugs instantly. Perfect for URLs, filenames, and web development. Free online tool with real-time conversion.",
    type: "website",
    locale: "en_US",
    siteName: "Slugify.it",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Slugify.it - Convert Text to SEO-Friendly Slugs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slugify.it - Convert Text to SEO-Friendly Slugs",
    description: "Convert any text into SEO-friendly slugs instantly. Perfect for URLs, filenames, and web development.",
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: undefined, // Add Google Search Console verification ID here if needed
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
