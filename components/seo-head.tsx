import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noindex?: boolean
}

export default function SEOHead({
  title = "Custom Software Development Company | AI, Web & Mobile Apps | Modernsoft Innovations",
  description = "Expert software development agency specializing in AI solutions, custom web applications, mobile apps, and cloud services. 5+ years experience, 30+ engineers.",
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  noindex = false,
}: SEOHeadProps) {
  const siteUrl = "https://modernsoft-innovations.com"
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Modernsoft Innovations" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  )
}
