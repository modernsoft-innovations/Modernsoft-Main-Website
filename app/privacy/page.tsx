import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Modernsoft Innovations - how we collect, use, and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
            <p className="text-slate-600 mb-8">Last updated: January 2025</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you fill out a contact form, request a
              consultation, or communicate with us. This may include your name, email address, phone number, company
              name, and project details.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use the information we collect to respond to your inquiries, provide our services, send you updates
              about our services, and improve our website and offerings.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              with service providers who assist us in operating our website and conducting our business.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Your Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You have the right to access, correct, or delete your personal information. Contact us at
              contact@modernsoftinnovations.com to exercise these rights.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us at contact@modernsoftinnovations.com
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
