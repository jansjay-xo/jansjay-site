import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/seo";

const headingFont = localFont({
  src: "./fonts/WorkSans-VariableFont_wght.ttf",
  variable: "--font-heading",
  display: "swap",
  weight: "100 900",
});

const bodyFont = localFont({
  src: "./fonts/GoogleSans-VariableFont_GRAD_opsz_wght.ttf",
  variable: "--font-body",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Jansjay LLC | Program & Project Leadership",
    template: "%s | Jansjay LLC",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg" }],
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Jansjay LLC | Program & Project Leadership",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Jansjay LLC social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jansjay LLC | Program & Project Leadership",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-[var(--font-body)] text-base antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="site-shell grid-accent min-h-screen">
          <Navbar />
          <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
