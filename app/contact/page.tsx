import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import FAQ from "@/components/contact/faq"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Modernsoft Innovations",
  description:
    "Contact Modernsoft Innovations for your software development needs. Schedule a free consultation, get a quote, or reach out directly. Response time under 2 hours.",
  keywords: "contact modernsoft innovations, software development quote, free consultation, get in touch",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <ContactHero />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </main>
  )
}
