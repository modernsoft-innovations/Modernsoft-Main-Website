import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Check, Building2, ShoppingBag, Heart, GraduationCap, Briefcase, Home, Truck, PiggyBank, CreditCardIcon } from "lucide-react"
import { ServiceFAQ } from "@/components/services/service-faq"
import CTASection from "@/components/cta-section"
import Image from "next/image"

const servicesData: Record<
  string,
  {
    title: string
    img?: string
    whyimg?: string
    icon: string
    description: string
    overviewTitle?: string
    overview: string

    industries: { name: string; icon: any; description: string }[]
    benefits: { title: string; description: string }[]
    process: { step: string; description: string }[]
    technologies: { category: string; items: string[] }[]
    faqs: { question: string; answer: string }[]
  }

  // customWebApplications
> = {
  "software-development": {
    title: "Custom Software Development Services",
    icon: "🌐",
    img: "/software.png",
    description: "Build powerful, scalable web applications tailored to your business needs",
    overviewTitle: "What is Custom Software Development?",
    overview:
      "Custom software development involves creating web applications specifically designed to meet the unique requirements of your business. Unlike off-the-shelf solutions, custom software is built from the ground up to align with your workflows, processes, and goals. Our team of expert developers works closely with you to understand your needs and deliver a solution that drives efficiency, scalability, and growth. From initial concept and design to development, testing, and deployment, we handle every aspect of the software development lifecycle. Whether you need a customer portal, internal management system, or complex enterprise application, we leverage modern technologies and best practices to deliver high-quality software that gives you a competitive edge.",
      whyimg: "/what-is-custom.png",
    industries: [
      {
        name: "Enterprise & B2B",
        icon: Building2,
        description:
          "ERP systems, CRM platforms, project management tools, and internal dashboards for large organizations",
      },
      {
        name: "SaaS Platforms",
        icon: Briefcase,
        description: "Multi-tenant applications, subscription management, billing systems, and analytics dashboards",
      },
      {
        name: "Education",
        icon: GraduationCap,
        description: "Learning management systems, student portals, online course platforms, and assessment tools",
      },
      {
        name: "Healthcare",
        icon: Heart,
        description: "Patient management systems, telemedicine platforms, appointment scheduling, and health records",
      },
      {
  name: "FinTech & Banking",
  icon: CreditCardIcon,
  description:
    "Secure financial software including payment systems, accounting platforms, transaction management, and compliance-driven applications",
},
{
  name: "Retail & eCommerce",
  icon: ShoppingBag,
  description:
    "Inventory management, order processing systems, customer portals, and omnichannel retail software solutions",
},
{
  name: "Real Estate & Property Management",
  icon: Home,
  description:
    "Property management systems, tenant portals, CRM solutions, and real estate workflow automation",
},
{
  name: "Logistics & Supply Chain",
  icon: Truck,
  description:
    "Fleet management, shipment tracking, warehouse systems, and supply chain optimization software",
},

    ],
    benefits: [
      {
        title: "Boost Operational Efficiency",
        description:
          "Automate manual processes and streamline workflows, reducing operational costs by up to 40% and freeing your team to focus on strategic initiatives.",
      },
      {
        title: "Scale Without Limits",
        description:
          "Our applications grow with your business. Handle 10 users or 10 million with the same reliability and performance through cloud-native architecture.",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Real-time analytics and reporting dashboards give you instant insights into your business metrics, enabling faster and smarter decisions.",
      },
      {
        title: "Enhanced Security & Compliance",
        description:
          "Enterprise-grade security with encryption, authentication, and compliance with GDPR, HIPAA, and industry standards to protect your data.",
      },
    ],
    process: [
      {
        step: "Discovery & Planning",
        description: "We analyze your requirements, define project scope, and create a detailed roadmap",
      },
      { step: "UI/UX Design", description: "Our designers create intuitive interfaces and engaging user experiences" },
      {
        step: "Development",
        description: "Our developers build your application using best practices and modern technologies",
      },
      { step: "Testing & QA", description: "Rigorous testing ensures your application is bug-free and performs well" },
      {
        step: "Deployment",
        description: "We deploy your application to production and ensure everything runs smoothly",
      },
      {
        step: "Support & Maintenance",
        description: "Ongoing support and updates to keep your application running perfectly",
      },
    ],
    technologies: [
      { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["ASP.NET Core", "Node.js", "Laravel", "Django", "Express.js"] },
      { category: "Database", items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"] },
      { category: "Cloud", items: ["AWS", "Azure", "Vercel", "DigitalOcean"] },
    ],
    faqs: [
      {
        question: "How long does it take to build a custom web application?",
        answer:
          "Timeline depends on complexity and scope. Simple applications take 2-3 months, while complex enterprise systems can take 6-12 months. We provide detailed timelines during the discovery phase.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes, we specialize in integrating with existing systems and APIs. We can connect to your current databases, payment processors, CRM, and other business tools seamlessly.",
      },
      {
        question: "What happens after the application is launched?",
        answer:
          "We provide ongoing support and maintenance including bug fixes, performance optimization, security updates, and new feature development based on your needs.",
      },
      {
        question: "How do you ensure the application is secure?",
        answer:
          "We implement enterprise-grade security including encryption, secure authentication, regular security audits, and compliance with industry standards like GDPR and HIPAA.",
      },
      {
        question: "Can the application scale as our business grows?",
        answer:
          "Absolutely. We build applications with scalability in mind using cloud-native architecture, microservices, and auto-scaling capabilities to handle growth.",
      },
      {
        question: "What if we need to change requirements during development?",
        answer:
          "We use agile development methodology which allows for flexibility. We can accommodate reasonable changes and prioritize them in upcoming sprints.",
      },
    ],
  },

  // mobile app development
  "mobile-development": {
    title: "Mobile App Development",
    icon: "📱",
    description: "Native and cross-platform mobile apps for iOS and Android",
        

    overview:
      "Create stunning mobile applications that your users will love. We develop both native and cross-platform apps using Flutter and React Native, ensuring your app performs beautifully on iOS and Android. From concept to App Store deployment, we handle every aspect of mobile app development with expertise and attention to detail.",
    industries: [
      {
        name: "E-commerce & Retail",
        icon: ShoppingBag,
        description: "Shopping apps, product catalogs, mobile payments, loyalty programs, and order tracking",
      },
      {
        name: "Health & Fitness",
        icon: Heart,
        description: "Workout tracking, nutrition apps, telemedicine, appointment booking, and wellness platforms",
      },
      {
        name: "On-Demand Services",
        icon: Briefcase,
        description: "Food delivery, ride-sharing, home services, booking platforms, and marketplace apps",
      },
      {
        name: "Social & Entertainment",
        icon: Building2,
        description: "Social networking, content sharing, streaming apps, gaming, and community platforms",
      },
    ],
    benefits: [
      {
        title: "Reach Customers Anywhere",
        description:
          "Mobile apps put your business in your customers' pockets. With 85% of internet time spent on mobile, reach users where they are most engaged.",
      },
      {
        title: "Increase Customer Engagement",
        description:
          "Push notifications, personalized content, and seamless experiences keep users coming back. Mobile apps see 3x higher engagement than mobile websites.",
      },
      {
        title: "Build Brand Loyalty",
        description:
          "A well-designed app creates a direct channel to your customers, building stronger relationships and increasing lifetime value by up to 30%.",
      },
      {
        title: "Unlock New Revenue Streams",
        description:
          "In-app purchases, subscriptions, and mobile-first features open new monetization opportunities that drive business growth.",
      },
    ],
    process: [
      { step: "Concept & Strategy", description: "Define your app's purpose, target audience, and key features" },
      { step: "Design & Prototyping", description: "Create beautiful UI designs and interactive prototypes" },
      { step: "Development", description: "Build your app with clean code and best practices" },
      { step: "Testing", description: "Test on real devices to ensure quality and performance" },
      { step: "App Store Submission", description: "Handle the submission process for both iOS and Android" },
      { step: "Post-Launch Support", description: "Monitor performance and release updates as needed" },
    ],
    technologies: [
      { category: "Mobile Frameworks", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
      { category: "Backend", items: ["Firebase", "Node.js", "ASP.NET Core", "GraphQL"] },
      { category: "Database", items: ["SQLite", "Realm", "Firebase Firestore", "PostgreSQL"] },
      { category: "Tools", items: ["Xcode", "Android Studio", "Fastlane", "TestFlight"] },
    ],
    faqs: [
      {
        question: "Should we build native or cross-platform apps?",
        answer:
          "Native apps offer best performance but require separate development for iOS and Android. Cross-platform (Flutter/React Native) is faster and more cost-effective. We recommend based on your specific needs.",
      },
      {
        question: "How long does it take to launch an app?",
        answer:
          "Simple apps take 3-4 months, while feature-rich apps take 6-9 months. App Store review adds 1-2 weeks. We provide detailed timelines during planning.",
      },
      {
        question: "What about app store approval and guidelines?",
        answer:
          "We handle the entire submission process and ensure your app complies with Apple and Google guidelines. We have experience navigating app store requirements.",
      },
      {
        question: "Can we update the app after launch?",
        answer:
          "Yes, we provide ongoing support and can release updates regularly. We use CI/CD pipelines to streamline the update process.",
      },
      {
        question: "How do you handle user data and privacy?",
        answer:
          "We implement industry-standard security practices including encryption, secure authentication, and compliance with GDPR and app store privacy requirements.",
      },
      {
        question: "What analytics and tracking can we get?",
        answer:
          "We integrate analytics tools like Firebase Analytics, Mixpanel, or custom solutions to track user behavior, crashes, and performance metrics.",
      },
    ],
  },
  "ai-development": {
    title: "AI & Machine Learning",
    icon: "🤖",
    description: "Integrate cutting-edge AI capabilities into your applications",
    overview:
      "Harness the power of artificial intelligence to transform your business. We integrate advanced AI capabilities including chatbots, natural language processing, computer vision, and predictive analytics. Using OpenAI, LangChain, and TensorFlow, we build intelligent systems that automate tasks, provide insights, and enhance user experiences.",
    industries: [
      {
        name: "Customer Service",
        icon: Heart,
        description: "AI chatbots, virtual assistants, sentiment analysis, and automated support ticket routing",
      },
      {
        name: "E-commerce",
        icon: ShoppingBag,
        description:
          "Product recommendations, visual search, demand forecasting, and personalized shopping experiences",
      },
      {
        name: "Healthcare",
        icon: Heart,
        description: "Medical image analysis, patient diagnosis assistance, drug discovery, and health monitoring",
      },
      {
        name: "Finance & Legal",
        icon: Briefcase,
        description: "Document analysis, fraud detection, risk assessment, contract review, and compliance automation",
      },
    ],
    benefits: [
      {
        title: "Reduce Operational Costs",
        description:
          "AI automation handles repetitive tasks 24/7, reducing support costs by up to 70% while improving response times from hours to seconds.",
      },
      {
        title: "Enhance Customer Experience",
        description:
          "Provide instant, personalized responses to customer queries. AI-powered chatbots resolve 80% of common questions without human intervention.",
      },
      {
        title: "Unlock Business Insights",
        description:
          "AI analyzes vast amounts of data to uncover patterns and trends humans might miss, enabling predictive analytics and smarter decision-making.",
      },
      {
        title: "Stay Competitive",
        description:
          "Companies using AI see 50% faster growth. Implement AI now to gain a competitive advantage and future-proof your business.",
      },
    ],
    process: [
      { step: "Use Case Analysis", description: "Identify the best AI solutions for your specific needs" },
      { step: "Data Preparation", description: "Collect and prepare data for training AI models" },
      { step: "Model Development", description: "Build and train custom AI models or integrate existing APIs" },
      { step: "Integration", description: "Integrate AI capabilities into your applications" },
      { step: "Testing & Optimization", description: "Test and fine-tune models for optimal performance" },
      { step: "Deployment & Monitoring", description: "Deploy to production and monitor performance" },
    ],
    technologies: [
      { category: "AI Platforms", items: ["OpenAI GPT", "LangChain", "Anthropic Claude", "Google AI"] },
      { category: "ML Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"] },
      { category: "Backend", items: ["Python", "FastAPI", "Node.js", "Flask"] },
      { category: "Cloud AI", items: ["AWS SageMaker", "Azure AI", "Google Cloud AI"] },
    ],
    faqs: [
      {
        question: "Do we need to train custom AI models or can we use existing APIs?",
        answer:
          "It depends on your needs. For most use cases, existing APIs like OpenAI GPT work great. Custom models are needed for specialized tasks with proprietary data.",
      },
      {
        question: "How much data do we need to train an AI model?",
        answer:
          "For simple models, 1000-10000 examples work. Complex models need 100,000+ examples. We assess your data during the discovery phase.",
      },
      {
        question: "What's the cost of implementing AI?",
        answer:
          "Costs vary based on complexity. API-based solutions start at $500-2000/month. Custom models cost $10,000-50,000+ depending on requirements.",
      },
      {
        question: "How accurate are AI models?",
        answer:
          "Accuracy depends on data quality and model type. We typically achieve 85-95% accuracy for most business use cases. We provide accuracy metrics during testing.",
      },
      {
        question: "Can AI models be updated and improved over time?",
        answer:
          "Yes, AI models improve with more data and feedback. We implement continuous learning systems that improve accuracy as they process more data.",
      },
      {
        question: "What about AI bias and fairness?",
        answer:
          "We implement bias detection and mitigation strategies. We test models for fairness across different demographics and adjust as needed.",
      },
    ],
  },
  "ecommerce-solutions": {
    title: "E-commerce Solutions",
    icon: "🛒",
    description: "Complete e-commerce platforms that convert visitors into customers",
    overview:
      "Build a powerful online store that drives sales and grows your business. We create complete e-commerce solutions with secure payment processing, inventory management, order tracking, and analytics. Whether you need a simple online store or a complex multi-vendor marketplace, we deliver solutions that are secure, scalable, and conversion-optimized.",
    industries: [
      {
        name: "Retail & Fashion",
        icon: ShoppingBag,
        description: "Online stores, product catalogs, size guides, virtual try-on, and fashion marketplaces",
      },
      {
        name: "Food & Beverage",
        icon: Heart,
        description: "Restaurant ordering, grocery delivery, meal kits, subscription boxes, and catering platforms",
      },
      {
        name: "B2B Wholesale",
        icon: Building2,
        description: "Bulk ordering, tiered pricing, quote requests, account management, and distributor portals",
      },
      {
        name: "Digital Products",
        icon: Briefcase,
        description: "Software licenses, online courses, ebooks, templates, and digital download platforms",
      },
    ],
    benefits: [
      {
        title: "Increase Sales & Revenue",
        description:
          "Optimized checkout flows and conversion-focused design increase sales by 35%. Sell 24/7 without geographical limitations.",
      },
      {
        title: "Reduce Cart Abandonment",
        description:
          "Streamlined checkout, multiple payment options, and trust signals reduce cart abandonment from 70% to under 40%.",
      },
      {
        title: "Automate Operations",
        description:
          "Automated inventory management, order processing, and shipping integration save 20+ hours per week on manual tasks.",
      },
      {
        title: "Scale Your Business",
        description:
          "Handle seasonal traffic spikes and business growth seamlessly. Our platforms support from 10 to 10,000+ orders per day.",
      },
    ],
    process: [
      { step: "Requirements Gathering", description: "Understand your products, target market, and business goals" },
      { step: "Platform Selection", description: "Choose the best e-commerce platform for your needs" },
      { step: "Design & Branding", description: "Create a beautiful store that reflects your brand" },
      { step: "Development", description: "Build your store with all necessary features and integrations" },
      { step: "Payment Setup", description: "Configure secure payment gateways and shipping options" },
      { step: "Launch & Marketing", description: "Launch your store and implement marketing strategies" },
    ],
    technologies: [
      { category: "Platforms", items: ["Custom Next.js", "WooCommerce", "Shopify", "Magento"] },
      { category: "Payments", items: ["Stripe", "PayPal", "Square", "Razorpay"] },
      { category: "Backend", items: ["Node.js", "ASP.NET Core", "Laravel", "PostgreSQL"] },
      { category: "Tools", items: ["Inventory Management", "Shipping APIs", "Email Marketing", "Analytics"] },
    ],
    faqs: [
      {
        question: "Should we use Shopify or build a custom e-commerce platform?",
        answer:
          "Shopify is great for quick launches and simple stores. Custom platforms offer more flexibility and control. We recommend based on your specific needs and budget.",
      },
      {
        question: "How do we handle payment processing securely?",
        answer:
          "We integrate with PCI-compliant payment gateways like Stripe and PayPal. All transactions are encrypted and secure. We never store credit card data.",
      },
      {
        question: "Can we integrate with our existing inventory system?",
        answer:
          "Yes, we can integrate with most inventory management systems. Real-time sync ensures accurate stock levels across all channels.",
      },
      {
        question: "How do we manage shipping and logistics?",
        answer:
          "We integrate with shipping providers like FedEx, UPS, and DHL. Customers get tracking information automatically.",
      },
      {
        question: "What about abandoned cart recovery?",
        answer:
          "We implement automated email reminders for abandoned carts, which typically recover 10-15% of lost sales.",
      },
      {
        question: "How do we optimize for conversions?",
        answer:
          "We implement A/B testing, optimize checkout flows, add trust signals, and use analytics to identify and fix conversion bottlenecks.",
      },
    ],
  },
  "cloud-services": {
    title: "Cloud Services & DevOps",
    icon: "☁️",
    description: "Scalable cloud infrastructure and DevOps solutions",
    overview:
      "Deploy, monitor, and scale your applications with confidence. We provide comprehensive cloud services including infrastructure setup, CI/CD pipelines, auto-scaling, monitoring, and security. Whether you're on AWS, Azure, or Google Cloud, we ensure your applications run smoothly, scale automatically, and remain secure 24/7.",
    industries: [
      {
        name: "SaaS Companies",
        icon: Briefcase,
        description: "Multi-tenant infrastructure, auto-scaling, high availability, and global deployment",
      },
      {
        name: "E-commerce",
        icon: ShoppingBag,
        description: "Handle traffic spikes, CDN setup, database optimization, and payment processing infrastructure",
      },
      {
        name: "Startups",
        icon: Building2,
        description: "Cost-effective infrastructure, rapid deployment, CI/CD pipelines, and scalable architecture",
      },
      {
        name: "Enterprise",
        icon: Building2,
        description: "Cloud migration, hybrid cloud, disaster recovery, compliance, and enterprise security",
      },
    ],
    benefits: [
      {
        title: "Reduce Infrastructure Costs",
        description:
          "Cloud optimization reduces infrastructure costs by 40-60%. Pay only for what you use with auto-scaling and right-sizing.",
      },
      {
        title: "Improve Reliability",
        description:
          "99.9% uptime guarantee with automated failover, load balancing, and disaster recovery. Minimize downtime and revenue loss.",
      },
      {
        title: "Deploy Faster",
        description:
          "CI/CD pipelines enable multiple deployments per day instead of per month. Ship features faster and respond to market changes quickly.",
      },
      {
        title: "Scale Automatically",
        description:
          "Handle traffic spikes effortlessly. Auto-scaling adjusts resources in real-time, ensuring performance during peak demand.",
      },
    ],
    process: [
      { step: "Infrastructure Assessment", description: "Analyze your current setup and identify improvements" },
      { step: "Architecture Design", description: "Design scalable and secure cloud architecture" },
      { step: "Migration Planning", description: "Plan the migration strategy with minimal downtime" },
      { step: "Implementation", description: "Set up cloud infrastructure and deploy applications" },
      { step: "Automation", description: "Implement CI/CD pipelines and automation tools" },
      { step: "Monitoring & Support", description: "Continuous monitoring and optimization" },
    ],
    technologies: [
      { category: "Cloud Providers", items: ["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean"] },
      { category: "DevOps Tools", items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
      { category: "Monitoring", items: ["CloudWatch", "Datadog", "New Relic", "Prometheus"] },
      { category: "Infrastructure", items: ["Terraform", "Ansible", "CloudFormation", "Nginx"] },
    ],
    faqs: [
      {
        question: "Which cloud provider should we choose - AWS, Azure, or Google Cloud?",
        answer:
          "Each has strengths. AWS is most popular, Azure integrates well with Microsoft products, Google Cloud excels at data analytics. We recommend based on your tech stack.",
      },
      {
        question: "How much will cloud infrastructure cost?",
        answer:
          "Costs vary based on usage. We optimize to reduce costs by 40-60%. Typical costs range from $500-5000/month depending on scale.",
      },
      {
        question: "What about data security and compliance?",
        answer:
          "We implement encryption, secure authentication, regular backups, and compliance with GDPR, HIPAA, and SOC 2 standards.",
      },
      {
        question: "How do we migrate from on-premise to cloud?",
        answer:
          "We plan migrations carefully to minimize downtime. We typically use a phased approach with parallel running during transition.",
      },
      {
        question: "What's included in your DevOps support?",
        answer:
          "CI/CD pipelines, automated deployments, monitoring, alerting, performance optimization, and 24/7 support.",
      },
      {
        question: "Can we scale automatically during traffic spikes?",
        answer:
          "Yes, we set up auto-scaling that automatically adds resources during high traffic and removes them when demand drops.",
      },
    ],
  },
  "seo-marketing": {
    title: "SEO & Digital Marketing",
    icon: "📈",
    description: "Drive organic traffic and improve your online visibility",
    overview:
      "Increase your online visibility and drive qualified traffic to your website. Our comprehensive SEO and digital marketing services include technical SEO, content optimization, link building, and analytics. We use data-driven strategies to improve your search rankings, increase organic traffic, and convert visitors into customers.",
    industries: [
      {
        name: "E-commerce",
        icon: ShoppingBag,
        description: "Product SEO, category optimization, shopping feeds, and conversion rate optimization",
      },
      {
        name: "Local Businesses",
        icon: Home,
        description: "Local SEO, Google My Business, local citations, and location-based marketing",
      },
      {
        name: "SaaS & B2B",
        icon: Briefcase,
        description: "Content marketing, lead generation, thought leadership, and B2B SEO strategies",
      },
      {
        name: "Service Providers",
        icon: Building2,
        description: "Service page optimization, review management, and local service ads",
      },
    ],
    benefits: [
      {
        title: "Increase Organic Traffic",
        description:
          "SEO drives 53% of all website traffic. Rank on page 1 of Google and see 10x more visitors without paying for ads.",
      },
      {
        title: "Generate Quality Leads",
        description:
          "SEO leads have a 14.6% close rate vs 1.7% for outbound. Attract customers actively searching for your solutions.",
      },
      {
        title: "Build Brand Authority",
        description:
          "High search rankings establish credibility and trust. 75% of users never scroll past the first page of search results.",
      },
      {
        title: "Long-Term ROI",
        description:
          "Unlike paid ads, SEO provides lasting results. Maintain rankings with ongoing optimization and see compounding returns over time.",
      },
    ],
    process: [
      { step: "SEO Audit", description: "Comprehensive analysis of your website's current SEO status" },
      { step: "Keyword Research", description: "Identify high-value keywords for your business" },
      { step: "On-Page Optimization", description: "Optimize content, meta tags, and site structure" },
      { step: "Technical SEO", description: "Fix technical issues and improve site performance" },
      { step: "Content Creation", description: "Create high-quality, SEO-optimized content" },
      { step: "Link Building", description: "Build authoritative backlinks to improve rankings" },
    ],
    technologies: [
      { category: "SEO Tools", items: ["Google Search Console", "SEMrush", "Ahrefs", "Moz"] },
      { category: "Analytics", items: ["Google Analytics", "Google Tag Manager", "Hotjar", "Mixpanel"] },
      { category: "Content", items: ["WordPress", "Content Management", "Schema Markup", "Sitemap"] },
      { category: "Marketing", items: ["Email Marketing", "Social Media", "PPC Campaigns", "A/B Testing"] },
    ],
    faqs: [
      {
        question: "How long does it take to see SEO results?",
        answer:
          "SEO is a long-term strategy. You typically see initial results in 3-6 months, with significant improvements in 6-12 months.",
      },
      {
        question: "What's the difference between SEO and paid ads?",
        answer:
          "SEO is organic and takes time but provides lasting results. Paid ads are immediate but stop working when you stop paying.",
      },
      {
        question: "How do you choose keywords to target?",
        answer:
          "We research keywords based on search volume, competition, and relevance to your business. We focus on high-intent keywords that convert.",
      },
      {
        question: "What about local SEO for my business?",
        answer:
          "We optimize your Google My Business profile, build local citations, and implement location-based keywords to dominate local search.",
      },
      {
        question: "How do you build backlinks?",
        answer:
          "We use white-hat techniques including guest posting, resource pages, broken link building, and relationship outreach.",
      },
      {
        question: "What metrics do you track?",
        answer:
          "We track rankings, organic traffic, leads, conversions, bounce rate, and ROI. We provide monthly reports with detailed analytics.",
      },
    ],
  },
  "qa-testing": {
    title: "QA & Testing Services",
    icon: "✅",
    description: "Ensure your software is bug-free and performs flawlessly",
    overview:
      "Deliver high-quality software with comprehensive testing services. We provide manual testing, automated testing, performance testing, and security audits to ensure your application is bug-free, secure, and performs exceptionally well. Our QA experts use industry-standard tools and methodologies to catch issues before they reach your users.",
    industries: [
      {
        name: "SaaS Platforms",
        icon: Briefcase,
        description: "Regression testing, API testing, integration testing, and continuous testing in CI/CD",
      },
      {
        name: "E-commerce",
        icon: ShoppingBag,
        description: "Payment testing, checkout flows, inventory systems, and multi-device compatibility",
      },
      {
        name: "Mobile Apps",
        icon: Heart,
        description: "Device compatibility, performance testing, app store compliance, and user acceptance testing",
      },
      {
        name: "Enterprise Software",
        icon: Building2,
        description: "Security testing, load testing, compliance validation, and enterprise integration testing",
      },
    ],
    benefits: [
      {
        title: "Reduce Development Costs",
        description:
          "Finding bugs early saves 10x the cost of fixing them in production. Comprehensive QA reduces post-launch issues by 80%.",
      },
      {
        title: "Protect Your Reputation",
        description:
          "88% of users won't return after a bad experience. Ensure flawless performance to maintain customer trust and loyalty.",
      },
      {
        title: "Accelerate Time to Market",
        description:
          "Automated testing enables faster release cycles. Deploy with confidence knowing your software has been thoroughly tested.",
      },
      {
        title: "Ensure Security & Compliance",
        description:
          "Security testing identifies vulnerabilities before hackers do. Meet compliance requirements and protect sensitive data.",
      },
    ],
    process: [
      { step: "Test Planning", description: "Define test strategy, scope, and test cases" },
      { step: "Test Environment Setup", description: "Set up testing environments and tools" },
      { step: "Manual Testing", description: "Exploratory and functional testing by QA experts" },
      { step: "Automated Testing", description: "Create and run automated test suites" },
      { step: "Performance Testing", description: "Test application performance under load" },
      { step: "Reporting & Fixes", description: "Document issues and verify fixes" },
    ],
    technologies: [
      { category: "Automation", items: ["Selenium", "Cypress", "Playwright", "Jest"] },
      { category: "Performance", items: ["JMeter", "LoadRunner", "K6", "Artillery"] },
      { category: "Mobile Testing", items: ["Appium", "XCTest", "Espresso", "Detox"] },
      { category: "Tools", items: ["Postman", "JIRA", "TestRail", "BrowserStack"] },
    ],
    faqs: [
      {
        question: "What's the difference between manual and automated testing?",
        answer:
          "Manual testing is exploratory and catches edge cases. Automated testing is fast and repeatable. We use both for comprehensive coverage.",
      },
      {
        question: "How much does QA testing cost?",
        answer:
          "Costs depend on project complexity. Typically 15-25% of development cost. We provide detailed quotes based on scope.",
      },
      {
        question: "Can you test our existing application?",
        answer:
          "Yes, we provide comprehensive testing for existing applications including regression testing, performance testing, and security audits.",
      },
      {
        question: "What about testing on different devices and browsers?",
        answer:
          "We test on real devices and browsers using BrowserStack. We ensure compatibility across all major platforms.",
      },
      {
        question: "How do you handle security testing?",
        answer:
          "We perform penetration testing, vulnerability scanning, and security audits to identify and fix security issues.",
      },
      {
        question: "What's your testing process?",
        answer:
          "We create test plans, execute tests, document issues, track fixes, and verify resolutions. We provide detailed test reports.",
      },
    ],
  },
}

// Map new slugs to existing service data
const serviceAliases: Record<string, keyof typeof servicesData> = {
  // ===== Core Services =====
  
  "software-development": "software-development",
  "websites-seo": "web-applications",
  "website-development": "web-applications",
  "ui-ux-design": "web-applications",
  "uiux": "web-applications",

  "mobile-apps": "mobile-development",
  "mobile-app": "mobile-development",

  "ai-automation": "ai-development",
  "ai-development": "ai-development",

  "ecommerce": "ecommerce-solutions",
  "ecommerce-solutions": "ecommerce-solutions",

  "seo-marketing": "seo-marketing",

  "qa-testing": "qa-testing",
  "software-testing": "qa-testing",

  // ===== Enterprise Services =====
  "erp": "web-applications",
  "crm": "web-applications",
  "business-management": "web-applications",
}


type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  let slug = params.slug as keyof typeof servicesData
  
  // Check if slug is an alias
  if (slug in serviceAliases) {
    slug = serviceAliases[slug as keyof typeof serviceAliases]
  }
  
  const service = servicesData[slug]

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | Modernsoft Innovations`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params, searchParams }: Props) {
  let slug = params.slug as keyof typeof servicesData
  
  // Check if slug is an alias
  if (slug in serviceAliases) {
    slug = serviceAliases[slug as keyof typeof serviceAliases]
  }
  
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      
<section className="relative py-24 overflow-hidden">
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-linear-to-br from-white-950 via-white-800/90 to-slate-white/90" />

  {/* Background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <Link
      href="/services"
      className="inline-flex items-center gap-2 text-black-500 hover:text-yellow-400 mb-12"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Services
    </Link>

    {/* MAIN GRID */}
    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      
      {/* LEFT — TEXT */}
      <div className="text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-yellow-800 mb-6">

          {service.title}
        </h1>

    <p className="text-base sm:text-lg text-black-300 leading-relaxed mb-8">

                  {service.description}
        </p>

<div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://calendly.com/sadmansakib4112/30min?month=2025-12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-600 text-black">
              Get Started
            </Button>
          </a>

          <Link href="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-orange-800 hover:bg-white/10 bg-transparent"
            >
              View Our Work
            </Button>
          </Link>
        </div>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="flex justify-center lg:justify-end">
        {service.img ? (
         <Image
  src={service.img}
  alt={service.title}
  width={420}
  height={320}
  className="w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl rounded-xl"
  priority
/>

        ) : (
          <div className="text-7xl">{service.icon}</div>
        )}
      </div>
    </div>
  </div>
</section>
      {/* Overview */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      
                 <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-10 text-center">
What is {service.title}</h2>


      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT — IMAGE */}
        <div className="flex justify-center lg:justify-start">
          {service.img ? (
            <Image
              src={service.whyimg || service.img}
              alt={service.title}
              width={460}
              height={340}
              className="object-contain rounded-xl shadow-lg"
            />
          ) : (
            <div className="w-[460px] h-[340px] bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
              Image Placeholder
            </div>
          )}
        </div>

        {/* RIGHT — TEXT */}
        <div>
          <p className="text-lg text-slate-700 leading-relaxed">
            {service.overview}
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
      </section>

      {/* Industries */}
      <section className="py-16 bg-[#0B1C2D]">
        <div className="container mx-auto px-4 ">
         
                    <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center">
Industries We Serve</h2>
            <p className="text-lg text-slate-100 mb-12 text-center max-w-3xl mx-auto">
              Our {service.title.toLowerCase()} solutions are trusted across diverse industries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {service.industries.map((industry) => (
               <Card
  key={industry.name}
  className="h-full p-6 flex flex-col bg-[#12263F] border border-white/10 
             hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>
  <div className="flex items-start gap-5">
    <div className="w-12 h-12 bg-yellow-500/90 rounded-lg flex items-center justify-center shrink-0">
      <industry.icon className="w-6 h-6 text-black" />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">
        {industry.name}
      </h3>

      <p className="text-slate-300 leading-relaxed">
        {industry.description}
      </p>
    </div>
  </div>
</Card>

              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Why Your Business Needs This</h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
              Transform your business with measurable results and competitive advantages
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {service.benefits.map((benefit) => (
                <Card key={benefit.title} className="p-8 border-2 border-slate-200 hover:shadow-lg transition-all">
                 <div className="flex items-start gap-3 mb-4 flex-wrap sm:flex-nowrap">
                    <Check className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
     <section className="py-16 bg-slate-50">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
        Our Process
      </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {service.process.map((step, index) => (
          <div key={step.step} className="relative flex">
            {/* Card */}
            <Card className="p-6 border-2 border-slate-200 w-full">
<div className="flex flex-col items-center text-center gap-3 px-2">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step.step}
                </h3>

                <p className="text-slate-700">
                  {step.description}
                </p>
              </div>
            </Card>

            {/* Arrow (desktop only, except last item) */}
            {index < service.process.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-slate-400"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Technologies We Use</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.technologies.map((tech) => (
                <Card key={tech.category} className="p-6 border-2 border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ faqs={service.faqs} />

      {/* CTA */}
      <CTASection />
    </main>
  )
}
