import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug, portfolioProjects } from "@/app/_lib/projects";
import ProjectDetailPage from "@/app/projects/_components/ProjectDetailPage";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/portfolio/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Jon Shaw`,
      description: project.summary,
      url: `/portfolio/projects/${project.slug}`,
    },
    twitter: {
      title: `${project.title} | Jon Shaw`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}