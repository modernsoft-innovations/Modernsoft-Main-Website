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
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Company / Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Logo */}
              
              <div>
                <h3 className="text-white font-bold text-lg">
                  ModernSoft Innovations
                </h3>
                <p className="text-sm text-slate-400">
                  Business Software • ERP • POS • SaaS
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed">
              We build custom business software, ERP, POS, and digital systems
              that help enterprises operate smarter and scale faster.
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
                { name: "Website Design & Development", href: "/services/websites-seo" },
                { name: "Custom Software Development", href: "/services/custom-software" },
                { name: "Mobile App Development", href: "/services/mobile-apps" },
                { name: "AI & Business Automation", href: "/services/ai-automation" },
                { name: "UI/UX Product Design", href: "/services/ui-ux-design" },
                { name: "QA & Software Testing", href: "/services/qa-testing" },
                { name: "SEO & Digital Marketing", href: "/services/websites-seo" },
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

          {/* Collaboration Models */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Collaboration Models
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "White Label Partnership",
                "Staff Augmentation",
                "MVP Development",
                "Solution Partner",
                "Project-Based Development",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/partnerships"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
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
                  Shkhertake, Road 02<br />
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
