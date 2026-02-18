import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://jansjay.com";

function resolveSiteUrl(): string {
  const rawValue = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawValue) {
    return DEFAULT_SITE_URL;
  }

  const normalizedValue = /^https?:\/\//i.test(rawValue) ? rawValue : `https://${rawValue}`;

  try {
    return new URL(normalizedValue).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "Jansjay LLC",
  description:
    "Portfolio for Jansjay LLC featuring digital project and program leadership work, resume, and contact details.",
  url: resolveSiteUrl(),
  ogImage: "/og/default-og.svg",
};

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildPageMetadata({ title, description, path, image }: BuildPageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image ?? siteConfig.ogImage, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [imageUrl],
    },
  };
}
