import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profileData } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://yogendrayadav.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${profileData.name} // Senior React Native Engineer (iOS & Android)`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.subheadline,
  keywords: [
    "React Native Engineer",
    "React Native Developer",
    "Mobile Infrastructure",
    "iOS Developer",
    "Android Developer",
    "Redux Toolkit",
    "RTK Query",
    "React Native SVG",
    "D3.js",
    "Fastlane",
    "Duracell Energy",
    "Yogendra Yadav",
  ],
  authors: [{ name: profileData.name, url: baseUrl }],
  creator: profileData.name,
  publisher: profileData.name,
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: `${profileData.name} // Senior React Native Engineer`,
    description: profileData.subheadline,
    url: baseUrl,
    siteName: `${profileData.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profileData.name} - Senior React Native Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} // Senior React Native Engineer`,
    description: profileData.subheadline,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data for Person & WebSite
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.title,
    url: baseUrl,
    worksFor: {
      "@type": "Organization",
      name: "Cloud Energy Software",
    },
    knowsAbout: profileData.coreStack,
    email: profileData.email,
    sameAs: [profileData.github, profileData.linkedin],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profileData.name} Developer Portfolio`,
    url: baseUrl,
    author: {
      "@type": "Person",
      name: profileData.name,
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLdPerson, jsonLdWebSite]).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#08090A] text-[#F3F4F6]">
        {/* Accessible Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#D97706] text-[#08090A] font-mono text-xs font-bold rounded"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

