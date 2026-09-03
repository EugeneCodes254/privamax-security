import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://privamaxsecurity.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Privamax Security Firm Limited | Security Company in Kenya",
    template: "%s | Privamax Security",
  },
  description:
    "Privamax Security Firm Limited provides professional security services across Kenya, including security guarding, CCTV surveillance, access control, electric fencing, fire alarms, private investigations, cyber security, drone surveillance and cash in transit.",
  keywords: [
    "Privamax Security",
    "Privamax Security Firm Limited",
    "security company Kenya",
    "security company Nairobi",
    "security services Kenya",
    "private security Kenya",
    "security guards Kenya",
    "CCTV installation Kenya",
    "access control Kenya",
    "electric fencing Kenya",
    "private investigation Kenya",
    "cyber security Kenya",
    "cash in transit Kenya",
  ],
  applicationName: "Privamax Security Firm Limited",
  authors: [{ name: "Privamax Security Firm Limited" }],
  creator: "Privamax Security Firm Limited",
  publisher: "Privamax Security Firm Limited",
  category: "Security Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Privamax Security Firm Limited",
    title: "Privamax Security Firm Limited | Security Company in Kenya",
    description:
      "Professional security services and technology-enabled protection for people, property, assets and business operations across Kenya.",
    images: [
      {
        url: "/privamax-logo.png",
        width: 1200,
        height: 630,
        alt: "Privamax Security Firm Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privamax Security Firm Limited | Security Company in Kenya",
    description:
      "Professional security services and technology-enabled protection across Kenya.",
    images: ["/privamax-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: "Privamax Security Firm Limited",
  url: siteUrl,
  logo: `${siteUrl}/privamax-logo.png`,
  description:
    "Professional security services and technology-enabled protection across Kenya.",
  telephone: ["+254733669260", "+254202070030"],
  email: "info@privamaxsecurity.com",
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ndovu Lane, Ndovu Close",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [
    "https://www.linkedin.com/company/privamax-security-firm-ltd/",
    "https://www.facebook.com/profile.php?id=100094909293959",
    "https://instagram.com/privamaxsecurityke",
    "https://www.tiktok.com/@privamaxsecurityke",
    "https://twitter.com/PrivamaxS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
