import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amicizia Life Science | Home",
  description: "Amicizia Life Science: Providing scientific, technical, and clinical solutions for livestock, poultry, and companion animal health.",
  verification: {
    google: "vp4zmRBhQJOkuSWz_vvcvbdLcQuCRLg6dzVQJPUVrEI",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Amicizia Life Science | Home",
    description: "Amicizia Life Science: Providing scientific, technical, and clinical solutions for livestock, poultry, and companion animal health.",
    url: "https://www.amicizialifescience.com",
    siteName: "Amicizia Life Science",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Amicizia Life Science Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Amicizia Life Science",
  url: "https://www.amicizialifescience.com",
  logo: "https://www.amicizialifescience.com/logo.png",
  description: "Providing scientific, technical, and clinical solutions for livestock, poultry, and companion animal health.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
