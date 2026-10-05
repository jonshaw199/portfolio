import type { Metadata } from "next";
import Link from "next/link";

import { portfolioProjects } from "@/app/_lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio home page for project case studies and work samples.",
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-10 sm:px-8 lg:px-10">
      <section className="border border-border bg-surface-strong px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:px-8 sm:py-10 lg:px-10">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent-strong">
              Jon Shaw
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.88] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              Selected projects.
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            A focused collection of product work, systems, and tools with context,
            screenshots, and links to each project.
          </p>
        </div>
      </section>

      <section className="mt-8">

        <div className="grid gap-5 lg:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col border border-border bg-surface px-6 py-6 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-surface-strong"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted">
                    {String(index + 1).padStart(2, "0")} / {project.category}
                  </p>
                  <h3 className="mt-3 text-3xl leading-tight text-foreground">
                    {project.title}
                  </h3>
                </div>
                <span className="shrink-0 border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent-strong">
                  {project.status}
                </span>
              </div>

              <p className="mt-4 text-base leading-7 text-muted">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-foreground/90">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-3 py-1 text-xs uppercase tracking-[0.18em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4 text-sm text-muted">
                <span>{project.year}</span>
                <span className="text-foreground transition-transform group-hover:translate-x-0.5">
                  View project -&gt;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
