import Link from "next/link"
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Company / Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <h3 className="text-white font-bold text-lg">
                  ModernSoft Innovations
                </h3>
                <p className="text-sm text-slate-400">
                  Business Software • ERP • POS • SaaS
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-md">
              We build custom business software, ERP, POS, and scalable digital
              systems for growing companies and enterprises worldwide.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-5">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/modernsoftinnovations/",
                  label: "LinkedIn",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/profile.php?id=61572229409047",
                  label: "Facebook",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/Modernsoftin",
                  label: "Twitter",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/modernsoft_innovations/",
                  label: "Instagram",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-blue-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Website Development", href: "/services/websites-seo" },
                { name: "Custom Software", href: "/services/custom-software" },
                { name: "Mobile App Development", href: "/services/mobile-apps" },
                { name: "AI & Automation", href: "/services/ai-automation" },
                { name: "UI/UX Design", href: "/services/ui-ux-design" },
                { name: "QA & Testing", href: "/services/qa-testing" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Collaboration Models", href: "/collaboration-models" },
                { name: "Case Studies", href: "/portfolio" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:contact@modernsoftinnovations.com"
                  className="hover:text-blue-400 break-all"
                >
                  contact@modernsoftinnovations.com
                </a>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+8801765821148" className="hover:text-blue-400">
                  +880 1765-821148
                </a>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>
                  
                  Adabor, Dhaka-1207
                </span>
              </div>

              <div className="flex gap-3">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <a
                  href="https://wa.me/8801765821148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  WhatsApp Chat
                </a>
              </div>

              <div className="flex gap-3">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <a
                  href="https://calendly.com/sadmansakib4112/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 ModernSoft Innovations — Dhaka, Bangladesh</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-blue-400">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-blue-400">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
