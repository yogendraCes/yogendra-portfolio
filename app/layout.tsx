import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profileData } from "@/data/profile";
import { ScrollProgress } from "@/components/scroll-progress";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://yogendra-portfolio-puce.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${profileData.name} // Senior React Native Engineer (iOS & Android)`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.subheadline,
  keywords: [
    "Senior React Native Developer",
    "React Native Engineer",
    "React Native Performance",
    "React Native Real-Time Applications",
    "React Native Mobile Development",
    "React Native D3 SVG Visualization",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "RTK Query",
    "React Navigation",
    "Reanimated",
    "Gesture Handler",
    "D3.js",
    "React Native SVG",
    "Fastlane Match",
    "Firebase",
    "iOS",
    "Android",
    "App Store",
    "Google Play",
    "Duracell Energy",
    "Cloud Energy Software",
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
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLdPerson, jsonLdWebSite]).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A1118] text-[#E8F1F5]">
        <ScrollProgress />
        {/* Accessible Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#101D28] text-[#E8F1F5] text-xs font-semibold rounded-md shadow-md border border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

