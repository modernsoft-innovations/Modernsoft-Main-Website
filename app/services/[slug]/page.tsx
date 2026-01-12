import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Check, Building2, ShoppingBag, Heart, GraduationCap, Briefcase, Home, Truck, PiggyBank, CreditCardIcon, Rocket, Layout, User } from "lucide-react"
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

 
> = { 
  
  "website-development": {
  title: "Website Design & Development",
  icon: "🌐",
  img: "/website-dev.png",

  description:
    "Professional websites designed to build trust, attract customers, and grow your business online.",

  overviewTitle: "What is Website Design & Development?",
  overview:
    "Website design and development focuses on creating professional, visually appealing, and user-friendly websites for businesses, agencies, and brands. These websites are built to represent your company online, communicate your services clearly, and convert visitors into customers. Unlike internal software systems, business websites prioritize branding, performance, SEO, and user experience. Whether you need a company profile, agency website, or marketing-focused landing page, we design and develop websites that are fast, secure, and easy to manage.",

  whyimg: "/what-is-website.png",

  industries: [
    {
      name: "Business Websites",
      icon: Building2,
      description:
        "Company profiles, corporate websites, and professional online presence for businesses.",
    },
    {
      name: "Agency Websites",
      icon: Briefcase,
      description:
        "Websites for digital agencies, creative studios, and service-based companies.",
    },
    {
      name: "Startup & Brand Websites",
      icon: Rocket,
      description:
        "Modern websites for startups and brands to validate ideas and attract customers.",
    },
    {
      name: "Landing Pages",
      icon: Layout,
      description:
        "High-conversion landing pages for marketing campaigns and lead generation.",
    },
    {
      name: "Portfolio & Personal Sites",
      icon: User,
      description:
        "Personal websites and portfolios for professionals and creators.",
    },
  ],

  benefits: [
    {
      title: "Strong First Impression",
      description:
        "A professionally designed website builds trust and credibility from the first visit.",
    },
    {
      title: "SEO & Performance Optimized",
      description:
        "Fast-loading, SEO-friendly websites that rank better on search engines.",
    },
    {
      title: "Mobile-Responsive Design",
      description:
        "Your website looks and works perfectly on mobile, tablet, and desktop devices.",
    },
    {
      title: "Easy Content Management",
      description:
        "Manage your website content without technical knowledge.",
    },
  ],

  process: [
    { step: "Discovery", description: "Understand your business, audience, and goals" },
    { step: "UI/UX Design", description: "Create clean, conversion-focused layouts" },
    { step: "Development", description: "Build fast, secure, responsive websites" },
    { step: "SEO Setup", description: "Optimize structure and performance" },
    { step: "Launch", description: "Deploy and test across devices" },
    { step: "Support", description: "Ongoing updates and maintenance" },
  ],

  technologies: [
    { category: "Frontend", items: ["Next.js", "React", "HTML", "CSS", "Tailwind"] },
    { category: "CMS", items: ["Headless CMS", "WordPress", "Custom CMS"] },
    { category: "Hosting", items: ["Vercel", "Netlify", "cPanel"] },
  ],

  faqs: [
    {
      question: "Is this service for ERP or CRM systems?",
      answer:
        "No. This service is strictly for marketing and business websites, not internal software or dashboards.",
    },
    {
      question: "Will my website be SEO-friendly?",
      answer:
        "Yes. All websites are built with SEO best practices and performance optimization.",
    },
    {
      question: "Can I update content myself?",
      answer:
        "Yes. We provide easy-to-manage CMS options for non-technical users.",
    },
  ],
},

  // custom softwaredevelopment
"software-development": {
  title: "Custom Software Development",
  icon: "🌐",
  img: "/software.png",
  description:
    "Enterprise-grade custom software development services for ERP, CRM, SaaS platforms, and scalable business applications",

  overviewTitle: "Custom Software Development for Businesses & Enterprises",
  overview:
    "Custom software development is the process of designing and building tailored software solutions that solve complex business challenges. Unlike generic software, custom-built systems such as ERP, CRM, and internal business applications are developed specifically to match your workflows, data structures, and operational goals. We help startups, enterprises, and growing businesses design, develop, and deploy secure, scalable, and high-performance software solutions. From requirement analysis and system architecture to development, testing, deployment, and long-term support, our team delivers reliable software that improves efficiency, automation, and decision-making across your organization.",
  whyimg: "/what-is-custom.png",

  industries: [
    {
      name: "Enterprise & B2B Solutions",
      icon: Building2,
      description:
        "Enterprise software development including ERP systems, CRM platforms, workflow automation, internal dashboards, and business intelligence tools",
    },
    {
      name: "SaaS Product Development",
      icon: Briefcase,
      description:
        "Custom SaaS application development with multi-tenancy, subscription management, billing, analytics, and scalable cloud architecture",
    },
    {
      name: "Education & eLearning",
      icon: GraduationCap,
      description:
        "Learning management systems (LMS), student portals, online education platforms, assessments, and academic management software",
    },
    {
      name: "Healthcare & Medical Software",
      icon: Heart,
      description:
        "Healthcare software solutions including patient management systems, telemedicine platforms, appointment scheduling, and electronic health records",
    },
    {
      name: "FinTech & Banking",
      icon: CreditCardIcon,
      description:
        "Secure financial software development for payments, accounting systems, transaction processing, compliance, and fintech platforms",
    },
    {
      name: "Retail & eCommerce Operations",
      icon: ShoppingBag,
      description:
        "Retail management software including inventory systems, order management, customer portals, and omnichannel retail solutions",
    },
    {
      name: "Real Estate & Property Management",
      icon: Home,
      description:
        "Property management systems, real estate CRM software, tenant portals, lease tracking, and workflow automation",
    },
    {
      name: "Logistics & Supply Chain",
      icon: Truck,
      description:
        "Supply chain software solutions including fleet management, shipment tracking, warehouse systems, and logistics optimization tools",
    },
  ],

  benefits: [
    {
      title: "Automate & Optimize Business Operations",
      description:
        "Replace manual processes with intelligent automation. Our custom software solutions reduce operational costs, errors, and inefficiencies across departments.",
    },
    {
      title: "Scalable Enterprise Architecture",
      description:
        "We build software designed to scale as your business grows—supporting thousands of users, complex workflows, and high data volumes.",
    },
    {
      title: "Real-Time Insights & Analytics",
      description:
        "Advanced reporting and analytics dashboards provide real-time business insights, enabling faster and smarter decision-making.",
    },
    {
      title: "Security, Compliance & Reliability",
      description:
        "Enterprise-grade security with encryption, access control, and compliance with GDPR, HIPAA, and industry regulations.",
    },
  ],

  process: [
    {
      step: "Requirement Analysis & Discovery",
      description:
        "We analyze your business needs, workflows, and goals to define a clear software development strategy",
    },
    {
      step: "System Architecture & UI/UX Design",
      description:
        "Design scalable system architecture and intuitive user interfaces tailored for productivity and usability",
    },
    {
      step: "Custom Software Development",
      description:
        "Develop secure, high-performance software using modern frameworks and best engineering practices",
    },
    {
      step: "Testing & Quality Assurance",
      description:
        "Comprehensive testing ensures reliability, performance, and security across all use cases",
    },
    {
      step: "Deployment & Integration",
      description:
        "Deploy to cloud or on-premise environments and integrate with existing systems seamlessly",
    },
    {
      step: "Ongoing Support & Enhancement",
      description:
        "Continuous maintenance, performance optimization, feature upgrades, and long-term support",
    },
  ],

  technologies: [
    { category: "Frontend Technologies", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend Technologies", items: ["ASP.NET Core", "Node.js", "Laravel", "Django", "Express.js"] },
    { category: "Databases", items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "Cloud & DevOps", items: ["AWS", "Microsoft Azure", "Vercel", "DigitalOcean"] },
  ],

  faqs: [
    {
      question: "What types of software do you develop?",
      answer:
        "We develop ERP systems, CRM software, SaaS platforms, internal business tools, enterprise dashboards, and custom workflow automation software.",
    },
    {
      question: "How long does custom software development take?",
      answer:
        "Project timelines depend on complexity. Small systems take 2–3 months, while large enterprise software may take 6–12 months or more.",
    },
    {
      question: "Can you modernize or replace our existing software?",
      answer:
        "Yes. We specialize in legacy software modernization, system migration, and rebuilding outdated platforms with modern technologies.",
    },
    {
      question: "Is custom software secure?",
      answer:
        "Absolutely. We implement best-in-class security practices including encryption, authentication, access control, and compliance standards.",
    },
    {
      question: "Will the software scale as our business grows?",
      answer:
        "Yes. All software is built with scalability, performance, and future growth in mind using cloud-native architecture.",
    },
    {
      question: "Do you provide long-term support?",
      answer:
        "Yes. We offer ongoing maintenance, updates, performance optimization, and feature enhancements after launch.",
    },
  ],
},


  // mobile app development
"mobile-development": {
  title: "Mobile App Development",
  icon: "📱",
  img: "/mobile-app-development.png",
  description: "High-performance iOS & Android apps built for growth, engagement, and scalability",

  overviewTitle: "What is Mobile App Development?",
  overview:
    "Mobile app development is the process of designing, building, and maintaining applications for smartphones and tablets. Modernsoft Innovations create secure, fast, and user-friendly mobile apps that help businesses connect with customers, streamline operations, and unlock new revenue opportunities. From idea validation and UI/UX design to development, testing, and app store launch, we deliver end-to-end mobile solutions tailored to your goals. Whether you need a customer-facing app or a complex business solution, we ensure performance, scalability, and long-term success.",
  whyimg: "/what-is-mobile-app.png",

  industries: [
    {
      name: "Startups & SaaS",
      icon: Building2,
      description:
        "MVP apps, SaaS companion apps, user onboarding, subscriptions, and analytics-driven mobile products",
    },
    {
      name: "E-commerce & Retail",
      icon: ShoppingBag,
      description:
        "Shopping apps, mobile payments, order tracking, loyalty programs, and personalized product experiences",
    },
    {
      name: "Healthcare & Fitness",
      icon: Heart,
      description:
        "Telemedicine apps, fitness tracking, appointment booking, patient portals, and wellness platforms",
    },
    {
      name: "On-Demand Services",
      icon: Briefcase,
      description:
        "Food delivery, ride-sharing, home services, booking systems, and real-time tracking apps",
    },
    {
      name: "Education & Learning",
      icon: GraduationCap,
      description:
        "E-learning apps, course platforms, quizzes, live classes, and student engagement tools",
    },
  ],

  benefits: [
    {
      title: "Stronger Customer Engagement",
      description:
        "Mobile apps deliver personalized experiences, push notifications, and faster interactions—resulting in up to 3x higher engagement than mobile websites.",
    },
    {
      title: "Faster Business Growth",
      description:
        "A well-built app helps you reach users instantly, improve retention, and increase customer lifetime value.",
    },
    {
      title: "Cross-Platform Efficiency",
      description:
        "Using Flutter and React Native, we build apps that work seamlessly across iOS and Android while reducing development cost and time.",
    },
    {
      title: "Secure & Scalable Architecture",
      description:
        "We build apps with enterprise-grade security, cloud scalability, and future-ready architecture.",
    },
  ],

  process: [
    {
      step: "Idea Validation & Planning",
      description:
        "We analyze your idea, define features, and create a clear product roadmap",
    },
    {
      step: "UI/UX Design",
      description:
        "Design intuitive, visually appealing interfaces focused on user experience",
    },
    {
      step: "App Development",
      description:
        "Build robust mobile apps using clean code and modern frameworks",
    },
    {
      step: "Testing & QA",
      description:
        "Extensive testing across devices to ensure performance, stability, and security",
    },
    {
      step: "App Store Launch",
      description:
        "Publish your app on Apple App Store and Google Play with full compliance",
    },
    {
      step: "Maintenance & Growth",
      description:
        "Ongoing updates, performance optimization, and feature enhancements",
    },
  ],

  technologies: [
    { category: "Mobile Frameworks", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
    { category: "Backend", items: ["Node.js", "ASP.NET Core", "Firebase", "GraphQL"] },
    { category: "Databases", items: ["Firebase Firestore", "PostgreSQL", "MongoDB", "SQLite"] },
    { category: "DevOps & Tools", items: ["Fastlane", "CI/CD", "App Store Connect", "Google Play Console"] },
  ],

  faqs: [
    {
      question: "Do you build apps for both Android and iOS?",
      answer:
        "Yes. We develop native apps as well as cross-platform apps that run smoothly on both Android and iOS devices.",
    },
    {
      question: "How much does mobile app development cost?",
      answer:
        "Costs depend on features and complexity. Simple apps start from $3,000–$5,000, while advanced apps range higher. We provide transparent pricing after discovery.",
    },
    {
      question: "Can you build an MVP first?",
      answer:
        "Absolutely. We specialize in MVP development to help startups validate ideas quickly and cost-effectively.",
    },
    {
      question: "Will you handle app store submission?",
      answer:
        "Yes, we manage the entire submission process and ensure compliance with Apple and Google guidelines.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. We offer ongoing maintenance, bug fixes, updates, and feature improvements.",
    },
    {
      question: "Can the app scale as users grow?",
      answer:
        "Yes. Our apps are built with cloud-based, scalable architecture to support future growth.",
    },
  ],
},


// ----------------- ai development


 "ai-development": {
  title: "AI & Business Automation",
  icon: "🤖",
  img: "/ai-business.png",
whyimg: "/what-is-ai-business.png",
  description:
    "AI-powered business automation solutions including chatbots, AI assistants, data intelligence, and workflow automation for modern companies.",

  overviewTitle: "AI & Automation for Business Growth",
  overview:
    "Business AI and automation focus on using artificial intelligence to streamline operations, reduce manual work, and improve decision-making. We help businesses integrate practical AI solutions such as AI chatbots, virtual assistants, intelligent search, document automation, and predictive analytics. Unlike experimental AI, our solutions are designed for real business use—improving efficiency, customer experience, and profitability. From AI-powered customer support to internal automation and data intelligence, we design, build, and integrate AI systems that work seamlessly with your existing software and workflows.",

  industries: [
    {
      name: "Customer Support & Sales",
      icon: Heart,
      description:
        "AI chatbots, virtual assistants, lead qualification, automated customer support, and sentiment analysis",
    },
    {
      name: "E-commerce & Online Businesses",
      icon: ShoppingBag,
      description:
        "Product recommendations, AI search, personalized offers, demand forecasting, and customer behavior analysis",
    },
    {
      name: "Business Operations & Admin",
      icon: Briefcase,
      description:
        "Document processing, data extraction, workflow automation, internal AI tools, and reporting automation",
    },
    {
      name: "Finance, Legal & Compliance",
      icon: Building2,
      description:
        "AI-powered document review, fraud detection, risk analysis, contract automation, and compliance monitoring",
    },
  ],

  benefits: [
    {
      title: "Automate Repetitive Business Tasks",
      description:
        "Reduce manual workload by automating customer support, data processing, and internal operations using AI-driven workflows.",
    },
    {
      title: "Improve Customer Experience",
      description:
        "Provide instant, accurate, and personalized responses with AI chatbots and assistants available 24/7.",
    },
    {
      title: "Make Data-Driven Decisions",
      description:
        "AI analyzes business data to deliver insights, predictions, and recommendations that support smarter decisions.",
    },
    {
      title: "Scale Operations Without Hiring",
      description:
        "AI automation allows businesses to handle more customers and data without increasing operational costs.",
    },
  ],

  process: [
    { step: "Business Use Case Discovery", description: "Identify automation and AI opportunities in your business" },
    { step: "Data & System Assessment", description: "Evaluate existing data, tools, and workflows" },
    { step: "AI Solution Design", description: "Design practical AI systems aligned with business goals" },
    { step: "Development & Integration", description: "Build and integrate AI into your existing software" },
    { step: "Testing & Optimization", description: "Fine-tune accuracy, performance, and reliability" },
    { step: "Deployment & Continuous Improvement", description: "Launch AI systems and improve them over time" },
  ],

  technologies: [
    { category: "AI & LLM Platforms", items: ["OpenAI GPT", "LangChain", "Anthropic Claude", "Google Gemini"] },
    { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"] },
    { category: "Backend & APIs", items: ["Python", "FastAPI", "Node.js", "Flask"] },
    { category: "Cloud & AI Infrastructure", items: ["AWS", "Azure AI", "Google Cloud AI"] },
  ],

  faqs: [
    {
      question: "What types of businesses can use AI automation?",
      answer:
        "Almost any business can benefit—from startups and eCommerce stores to enterprises. AI is commonly used for customer support, sales automation, reporting, and internal workflows.",
    },
    {
      question: "Do you build AI chatbots for websites and WhatsApp?",
      answer:
        "Yes. We build AI chatbots for websites, mobile apps, WhatsApp, and internal business systems.",
    },
    {
      question: "Do we need large datasets to use AI?",
      answer:
        "Not always. Many business AI solutions use existing APIs like OpenAI and work well with minimal data. Custom models require more data.",
    },
    {
      question: "Is AI expensive to implement?",
      answer:
        "Costs depend on complexity. Simple AI automation starts affordable, while advanced custom solutions require higher investment. We recommend cost-effective solutions based on your needs.",
    },
    {
      question: "Can AI integrate with our existing software?",
      answer:
        "Yes. We integrate AI with CRMs, ERPs, websites, mobile apps, databases, and third-party tools.",
    },
    {
      question: "Can AI solutions be improved over time?",
      answer:
        "Yes. We implement monitoring and continuous improvement so AI systems become smarter and more accurate over time.",
    },
  ],
},



// -------------ecommerce solutions
 "ecommerce-solutions": {
  title: "E-commerce Website Development",
  icon: "🛒",
  img: "/electro.png",
  whyimg: "/what-is-website.png",
  description:
    "High-converting e-commerce websites designed to sell products, build trust, and grow online revenue",

  overview:
    "We design and develop modern e-commerce websites that help businesses sell online with confidence. From clean product pages and smooth checkout experiences to secure payments and mobile-first design, our e-commerce solutions focus on usability, performance, and conversions. Whether you're launching a new online store or upgrading an existing one, we build scalable, fast, and visually compelling shopping experiences that turn visitors into customers.",

  industries: [
    {
      name: "Retail & Fashion Brands",
      icon: ShoppingBag,
      description:
        "Online fashion stores, product catalogs, size guides, collections, seasonal campaigns, and brand-focused shopping experiences",
    },
    {
      name: "Food & Beverage Businesses",
      icon: Heart,
      description:
        "Restaurant ordering websites, specialty food stores, subscription boxes, coffee brands, and packaged food e-commerce",
    },
    {
      name: "Small & Medium Businesses",
      icon: Building2,
      description:
        "Local and global businesses selling physical products online with simple management and growth-ready stores",
    },
    {
      name: "Digital Products & Services",
      icon: Briefcase,
      description:
        "Websites for selling courses, ebooks, templates, design assets, memberships, and downloadable products",
    },
  ],

  benefits: [
    {
      title: "Sell Online 24/7",
      description:
        "Your store works around the clock, allowing customers to browse and purchase anytime, from anywhere in the world.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Conversion-focused layouts, clear CTAs, fast loading speeds, and optimized checkout flows help increase sales.",
    },
    {
      title: "Mobile-First Shopping Experience",
      description:
        "We design responsive e-commerce websites that look and perform perfectly on mobile, tablet, and desktop devices.",
    },
    {
      title: "Easy Store Management",
      description:
        "Simple dashboards make it easy to manage products, prices, orders, and content without technical knowledge.",
    },
  ],

  process: [
    {
      step: "Business & Product Discovery",
      description:
        "We understand your products, audience, competitors, and sales goals before planning the store structure.",
    },
    {
      step: "UX & Store Design",
      description:
        "Design a clean, brand-aligned shopping experience focused on usability and trust.",
    },
    {
      step: "Website Development",
      description:
        "Build the e-commerce website with fast performance, secure checkout, and scalable architecture.",
    },
    {
      step: "Payment & Checkout Setup",
      description:
        "Integrate secure payment gateways and optimize checkout for minimal friction.",
    },
    {
      step: "Testing & Optimization",
      description:
        "Test responsiveness, speed, usability, and purchasing flows across all devices.",
    },
    {
      step: "Launch & Growth Support",
      description:
        "Launch your store smoothly and provide ongoing support for improvements and scaling.",
    },
  ],

  technologies: [
    {
      category: "E-commerce Platforms",
      items: ["Shopify", "WooCommerce", "Custom Next.js Storefront"],
    },
    {
      category: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      category: "Payments",
      items: ["Stripe", "PayPal", "Local Payment Gateways"],
    },
    {
      category: "Marketing & Growth Tools",
      items: ["Email Automation", "Analytics", "SEO Optimization"],
    },
  ],

  faqs: [
    {
      question: "Is this service only for online stores?",
      answer:
        "Yes. This service focuses purely on e-commerce websites designed to sell products online. It does not include ERP or CRM software development.",
    },
    {
      question: "Should I choose Shopify or a custom e-commerce website?",
      answer:
        "Shopify is ideal for fast launches and ease of use. Custom e-commerce websites offer more design flexibility and performance control. We help you choose based on your business goals.",
    },
    {
      question: "Will my e-commerce website be mobile-friendly?",
      answer:
        "Absolutely. Every store we build is fully responsive and optimized for mobile shopping experiences.",
    },
    {
      question: "Can I manage products and orders myself?",
      answer:
        "Yes. We build user-friendly admin panels so you can easily manage products, pricing, images, and orders.",
    },
    {
      question: "Do you optimize e-commerce websites for SEO?",
      answer:
        "Yes. We implement SEO best practices, fast loading speeds, and clean structures to help your store rank better on search engines.",
    },
    {
      question: "Can you redesign my existing e-commerce website?",
      answer:
        "Yes. We can redesign or rebuild existing online stores to improve design, performance, and conversions.",
    },
  ],
},

  // "cloud-services": {
  //   title: "Cloud Services & DevOps",
  //   icon: "☁️",
  //   description: "Scalable cloud infrastructure and DevOps solutions",
  //   overview:
  //     "Deploy, monitor, and scale your applications with confidence. We provide comprehensive cloud services including infrastructure setup, CI/CD pipelines, auto-scaling, monitoring, and security. Whether you're on AWS, Azure, or Google Cloud, we ensure your applications run smoothly, scale automatically, and remain secure 24/7.",
  //   industries: [
  //     {
  //       name: "SaaS Companies",
  //       icon: Briefcase,
  //       description: "Multi-tenant infrastructure, auto-scaling, high availability, and global deployment",
  //     },
  //     {
  //       name: "E-commerce",
  //       icon: ShoppingBag,
  //       description: "Handle traffic spikes, CDN setup, database optimization, and payment processing infrastructure",
  //     },
  //     {
  //       name: "Startups",
  //       icon: Building2,
  //       description: "Cost-effective infrastructure, rapid deployment, CI/CD pipelines, and scalable architecture",
  //     },
  //     {
  //       name: "Enterprise",
  //       icon: Building2,
  //       description: "Cloud migration, hybrid cloud, disaster recovery, compliance, and enterprise security",
  //     },
  //   ],
  //   benefits: [
  //     {
  //       title: "Reduce Infrastructure Costs",
  //       description:
  //         "Cloud optimization reduces infrastructure costs by 40-60%. Pay only for what you use with auto-scaling and right-sizing.",
  //     },
  //     {
  //       title: "Improve Reliability",
  //       description:
  //         "99.9% uptime guarantee with automated failover, load balancing, and disaster recovery. Minimize downtime and revenue loss.",
  //     },
  //     {
  //       title: "Deploy Faster",
  //       description:
  //         "CI/CD pipelines enable multiple deployments per day instead of per month. Ship features faster and respond to market changes quickly.",
  //     },
  //     {
  //       title: "Scale Automatically",
  //       description:
  //         "Handle traffic spikes effortlessly. Auto-scaling adjusts resources in real-time, ensuring performance during peak demand.",
  //     },
  //   ],
  //   process: [
  //     { step: "Infrastructure Assessment", description: "Analyze your current setup and identify improvements" },
  //     { step: "Architecture Design", description: "Design scalable and secure cloud architecture" },
  //     { step: "Migration Planning", description: "Plan the migration strategy with minimal downtime" },
  //     { step: "Implementation", description: "Set up cloud infrastructure and deploy applications" },
  //     { step: "Automation", description: "Implement CI/CD pipelines and automation tools" },
  //     { step: "Monitoring & Support", description: "Continuous monitoring and optimization" },
  //   ],
  //   technologies: [
  //     { category: "Cloud Providers", items: ["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean"] },
  //     { category: "DevOps Tools", items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
  //     { category: "Monitoring", items: ["CloudWatch", "Datadog", "New Relic", "Prometheus"] },
  //     { category: "Infrastructure", items: ["Terraform", "Ansible", "CloudFormation", "Nginx"] },
  //   ],
  //   faqs: [
  //     {
  //       question: "Which cloud provider should we choose - AWS, Azure, or Google Cloud?",
  //       answer:
  //         "Each has strengths. AWS is most popular, Azure integrates well with Microsoft products, Google Cloud excels at data analytics. We recommend based on your tech stack.",
  //     },
  //     {
  //       question: "How much will cloud infrastructure cost?",
  //       answer:
  //         "Costs vary based on usage. We optimize to reduce costs by 40-60%. Typical costs range from $500-5000/month depending on scale.",
  //     },
  //     {
  //       question: "What about data security and compliance?",
  //       answer:
  //         "We implement encryption, secure authentication, regular backups, and compliance with GDPR, HIPAA, and SOC 2 standards.",
  //     },
  //     {
  //       question: "How do we migrate from on-premise to cloud?",
  //       answer:
  //         "We plan migrations carefully to minimize downtime. We typically use a phased approach with parallel running during transition.",
  //     },
  //     {
  //       question: "What's included in your DevOps support?",
  //       answer:
  //         "CI/CD pipelines, automated deployments, monitoring, alerting, performance optimization, and 24/7 support.",
  //     },
  //     {
  //       question: "Can we scale automatically during traffic spikes?",
  //       answer:
  //         "Yes, we set up auto-scaling that automatically adds resources during high traffic and removes them when demand drops.",
  //     },
  //   ],
  // },
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
  "website-development": "website-development",
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
    {/* <Link
      href="/services"
      className="inline-flex items-center gap-2 text-black-500 hover:text-slate-400 mb-15"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Services
    </Link> */}

    {/* MAIN GRID */}
    <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
      
      {/* LEFT — TEXT */}
      <div className="text-left">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-black-800 mb-6">

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
  <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-10 text-center leading-tight">
    <span className="block text-lg sm:text-2xl font-semibold text-primary mb-2">
      What is
    </span>
    <span className="block">
      {service.title} Service
    </span>
  </h2>



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
                    <Check className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
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
                      <span key={item} className="px-3 py-1 bg-yellow-500 text-black-700 rounded-full text-sm font-medium">
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
