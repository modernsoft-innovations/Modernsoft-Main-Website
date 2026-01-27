import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TechStackSection from "@/components/tech-stack-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";
import StatsSection from "@/components/stats-section";
import IndustriesSection from "@/components/industries-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import StructuredData from "@/components/structured-data";
import CollaborationModels from "@/components/CollaborationModels";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import { ScrollToTop } from "@/components/scroll-to-top";
import WhatWeBuiltSection from "@/components/WhatWeBuiltSection";
import ScrollStack from "@/components/scroll-stack";

export const metadata: Metadata = {
  title:
    "Offshore Software & Web Development Company | Modernsoft Innovations",

  description:
    "Modernsoft Innovations is a leading software and web development company providing custom solutions for startups and enterprises worldwide.",


  alternates: {
  canonical: "https://www.modernsoftinnovations.com",
  languages: {
    "en-US": "https://www.modernsoftinnovations.com",
    "en-GB": "https://www.modernsoftinnovations.com/uk",
    "en-AU": "https://www.modernsoftinnovations.com/au",
  },
},
  keywords: [
  "software development agency",
  "offshore software development",
  "web development agency",
  "web development company in Bangladesh",
  "hire dedicated developers",
  "mvp development for startups",
  "project based software development",
  "team augmentation services",
  "web application development",
  "mobile app development agency",
  "AI software development",
  "custom software solutions",
  "Bangladesh software agency",
],

  openGraph: {
    title: "Custom Software Development Company – Modernsoft Innovations",
    description:
      "We help startups and enterprises build scalable software products using modern web, mobile and AI technologies.",
    images: [
      {
        url: "https://www.modernsoftinnovations.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Modernsoft Innovations Software Team",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Modernsoft Innovations",
  url: "https://www.modernsoftinnovations.com",
  logo: "https://www.modernsoftinnovations.com/favicon.png",
  description:
    "Modernsoft Innovations is a global software development company providing web, mobile, AI and enterprise solutions.",
  sameAs: ["https://www.linkedin.com/company/modernsoft-innovations"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Development",
  provider: {
    "@type": "Organization",
    name: "Modernsoft Innovations",
    url: "https://www.modernsoftinnovations.com",
  },

  areaServed: [
    "United States",
    "United Kingdom",
    "Australia",
    "Canada",
    "Germany",
    "Singapore",
    "United Arab Emirates",
    "Switzerland",
    "New Zealand",
    "South Africa",
    "Bangladesh",
    "Global",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Applications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Development & Integration",
        },
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={serviceSchema} />
      <main className="min-h-screen">
        <HeroSection />

        <WhatWeBuiltSection />
        <ServicesSection />
        <CollaborationModels />
        <IndustriesSection />
        <TechStackSection />
        <DevelopmentProcess />
        <StatsSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <CTASection />
        <ScrollToTop />
      </main>
    </>
  );
}
