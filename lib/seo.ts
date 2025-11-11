import type { Metadata } from "next";

const siteConfig = {
  siteUrl: "https://yourdomain.com",
  siteName: "MyBlog",
  title: "MyBlog — Modern Neumorphic Blog",
  description:
    "A modern, SEO-optimized, and accessible blog built with Next.js and Tailwind CSS.",
  author: "Your Name",
  twitterHandle: "@yourhandle",
  keywords: ["Next.js", "SEO", "Blog", "Tailwind CSS", "Web Development"],
};

// ✅ Default site-wide metadata
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [`${siteConfig.siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ Generate per-page metadata
export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  return {
    title: `${title} | ${siteConfig.siteName}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.siteName}`,
      description,
      url,
      type: "article",
      siteName: siteConfig.siteName,
      images: [
        {
          url: `${siteConfig.siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [`${siteConfig.siteUrl}${image}`],
    },
  };
}

// ✅ Generate JSON-LD for BlogPosting
export function generateBlogPostJsonLd({
  title,
  description,
  author = siteConfig.author,
  datePublished,
  slug,
  image = "/og-image.jpg",
}: {
  title: string;
  description: string;
  author?: string;
  datePublished: string;
  slug: string;
  image?: string;
}) {
  const url = `${siteConfig.siteUrl}/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: `${siteConfig.siteUrl}${image}`,
    url,
  };
}
