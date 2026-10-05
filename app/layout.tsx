import type { Metadata } from "next";
import { Bebas_Neue, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = new URL("https://jonshaw199.com");

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Jon Shaw | Portfolio",
    template: "%s | Jon Shaw Portfolio",
  },
  description:
    "Portfolio of software, systems, and product work by Jon Shaw.",
  alternates: {
    canonical: "https://jonshaw199.com/portfolio",
  },
  keywords: [
    "Jon Shaw",
    "portfolio",
    "software engineer",
    "systems",
    "product design",
    "hardware projects",
  ],
  openGraph: {
    title: "Jon Shaw | Portfolio",
    description: "Portfolio of software, systems, and product work by Jon Shaw.",
    url: "https://jonshaw199.com/portfolio",
    siteName: "Jon Shaw",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 2400,
        height: 1260,
        alt: "Jon Shaw portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jon Shaw | Portfolio",
    description: "Portfolio of software, systems, and product work by Jon Shaw.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${spaceGrotesk.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
