import React from "react";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Navigation } from "@/components/navigation";
import { CaseStudyView } from "@/components/case-study/case-study-view";
import { Footer } from "@/components/footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  const url = `https://yogendrayadav.dev/projects/${project.slug}`;

  return {
    title: `${project.title} // Case Study`,
    description: project.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | Architectural Case Study`,
      description: project.summary,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Architectural Case Study`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: "Yogendra Yadav",
      jobTitle: "Senior React Native Engineer",
    },
    publisher: {
      "@type": "Person",
      name: "Yogendra Yadav",
    },
    proficiencyLevel: "Expert",
    inLanguage: "en-US",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArticle).replace(/</g, "\\u003c"),
        }}
      />
      <Navigation />
      <main id="main-content" className="flex-1">
        <CaseStudyView project={project} />
      </main>
      <Footer />
    </div>
  );
}
