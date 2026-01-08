import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Modernsoft Innovations - terms and conditions for using our services.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
            <p className="text-slate-600 mb-8">Last updated: January 2025</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              By accessing and using the Modernsoft Innovations website and services, you accept and agree to be bound
              by these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Services</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Modernsoft Innovations provides software development services including but not limited to custom web
              applications, mobile app development, AI integration, cloud services, and related consulting services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Project Agreements</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Specific project terms, deliverables, timelines, and pricing will be outlined in separate project
              agreements or statements of work.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Upon full payment, clients receive ownership of custom code developed specifically for their project.
              Pre-existing code, frameworks, and tools remain the property of their respective owners.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Confidentiality</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We maintain strict confidentiality of all client information and project details. Non-disclosure
              agreements are available upon request.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Modernsoft Innovations shall not be liable for any indirect, incidental, special, or consequential damages
              arising from the use of our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Contact</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              For questions about these Terms of Service, contact us at contact@modernsoftinnovations.com
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
