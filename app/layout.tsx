import type React from "react"
import type { Metadata } from "next"
import { Inter,Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
})

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://modernsoftinnovations.com"),

  title: {
    default:
      "Modernsoft Innovations | Custom Software, AI & Web Development Company",
    template: "%s | Modernsoft Innovations",
  },

  description:
    "Modernsoft Innovations is a global software development company delivering custom web, mobile, AI and enterprise solutions. Trusted by startups and enterprises across the US, UK, Australia & Bangladesh.",

  keywords: [
    "custom software development company",
    "software development agency",
    "AI development company",
    "web application development",
    "mobile app development",
    "offshore software development",
    "Bangladesh software company",
    "enterprise software solutions",
    "startup software partner",
  ],

  authors: [{ name: "Modernsoft Innovations" }],
  creator: "Modernsoft Innovations",
  publisher: "Modernsoft Innovations",

  alternates: {
    canonical: "https://modernsoftinnovations.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://modernsoftinnovations.com",
    siteName: "Modernsoft Innovations",
    locale: "en_US",

    title:
      "Modernsoft Innovations – Global Software Development Partner",
    description:
      "Enterprise-grade software solutions with 30+ engineers. We build scalable web, mobile & AI products for global businesses.",

    images: [
      {
        url: "https://modernsoftinnovations.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modernsoft Innovations – Software Development Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modernsoft Innovations – Custom Software & AI Development",
    description:
      "Global software development partner delivering web, mobile & AI solutions.",
    images: ["https://modernsoftinnovations.com/og-image.jpg"],
  },

  verification: {
    google: "ADD_GOOGLE_SEARCH_CONSOLE_CODE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
