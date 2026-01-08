import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Insights & Expertise | Modernsoft Innovations",
  description:
    "Industry trends, technical guides, and thought leadership from our software development experts. Learn about AI, web development, mobile apps, and more.",
  keywords: "software development blog, AI insights, web development tutorials, tech trends",
}

const blogPosts = [
  {
    slug: "ai-chatbots-business-2025",
    title: "How AI Chatbots Are Transforming Customer Service in 2025",
    excerpt:
      "Discover how businesses are leveraging AI-powered chatbots to provide 24/7 customer support, reduce costs, and improve customer satisfaction.",
    category: "AI & Machine Learning",
    date: "January 15, 2025",
    readTime: "5 min read",
    image: "/ai-chatbot-customer-service-dashboard.jpg",
  },
  {
    slug: "nextjs-15-features",
    title: "Next.js 15: What's New and Why It Matters",
    excerpt:
      "Explore the latest features in Next.js 15 including improved performance, better developer experience, and new capabilities for building modern web applications.",
    category: "Web Development",
    date: "January 10, 2025",
    readTime: "7 min read",
    image: "/next-js-15-code-editor-modern-web-development.jpg",
  },
  {
    slug: "mobile-app-trends-2025",
    title: "Top Mobile App Development Trends to Watch in 2025",
    excerpt:
      "From AI integration to cross-platform development, learn about the trends shaping the future of mobile app development.",
    category: "Mobile Development",
    date: "January 5, 2025",
    readTime: "6 min read",
    image: "/mobile-app-development-trends-smartphone.jpg",
  },
  {
    slug: "ecommerce-conversion-optimization",
    title: "10 Proven Strategies to Boost E-commerce Conversion Rates",
    excerpt:
      "Learn practical techniques to optimize your online store and turn more visitors into paying customers with these proven strategies.",
    category: "E-commerce",
    date: "December 28, 2024",
    readTime: "8 min read",
    image: "/ecommerce-shopping-cart-conversion-optimization.jpg",
  },
  {
    slug: "cloud-migration-guide",
    title: "The Complete Guide to Cloud Migration for Small Businesses",
    excerpt:
      "Planning to move your business to the cloud? This comprehensive guide covers everything you need to know about cloud migration.",
    category: "Cloud Services",
    date: "December 20, 2024",
    readTime: "10 min read",
    image: "/cloud-computing-migration-servers.jpg",
  },
  {
    slug: "seo-best-practices-2025",
    title: "SEO Best Practices for 2025: What's Changed and What Hasn't",
    excerpt:
      "Stay ahead of the curve with the latest SEO strategies and best practices to improve your website's search engine rankings.",
    category: "SEO & Marketing",
    date: "December 15, 2024",
    readTime: "6 min read",
    image: "/seo-search-engine-optimization-analytics.jpg",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/blog-workspace-background.jpg"
            alt="Blog workspace background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 mix-blend-overlay opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Insights & Expertise</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Industry trends, technical guides, and thought leadership from our experts
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden border-2 border-slate-200 hover:border-cyan-500 transition-all group"
              >
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest insights, tutorials, and industry trends delivered to your
            inbox.
          </p>
          <Link href="/contact" className="inline-block">
            <button className="px-8 py-4 bg-white text-cyan-600 hover:bg-slate-100 font-semibold rounded-lg transition-colors">
              Subscribe Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
