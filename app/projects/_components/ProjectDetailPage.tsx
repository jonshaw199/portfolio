"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type {
  PortfolioLayout,
  PortfolioProject,
  PortfolioSection,
} from "@/app/_lib/projects";

type ProjectDetailPageProps = {
  project: PortfolioProject;
};

const layoutClasses: Record<
  PortfolioLayout,
  {
    shell: string;
    aside: string;
    main: string;
  }
> = {
  "case-study": {
    shell: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr]",
    aside: "space-y-6",
    main: "space-y-8",
  },
  "build-log": {
    shell: "grid gap-10 lg:grid-cols-[1.15fr_0.85fr]",
    aside: "space-y-6 lg:order-2",
    main: "space-y-8 lg:order-1",
  },
  "field-notes": {
    shell: "grid gap-10 lg:grid-cols-[1.05fr_0.95fr]",
    aside: "space-y-6",
    main: "space-y-8",
  },
};

function renderSection(
  section: PortfolioSection,
  onOpenImage?: (src: string, alt: string) => void,
) {
  if (section.type === "narrative") {
    return (
      <section key={section.title}>
        <p className="text-sm uppercase tracking-[0.24em] text-muted">
          {section.title}
        </p>
        <div className="mt-4 space-y-4 text-base leading-8 text-foreground/92">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    );
  }

  if (section.type === "points") {
    return (
      <section key={section.title}>
        <p className="text-sm uppercase tracking-[0.24em] text-muted">
          {section.title}
        </p>
        <div className="mt-4 grid gap-3">
          {section.items.map((item) => (
            <div
              key={item}
              className="border border-border bg-surface px-4 py-4 text-base leading-7 text-foreground/92"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.type === "chips") {
    return (
      <section key={section.title}>
        <p className="text-sm uppercase tracking-[0.24em] text-muted">
          {section.title}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {section.items.map((item) => (
            <span
              key={item}
              className="border border-border px-3 py-2 text-sm text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    );
  }

  if (section.type === "gallery") {
    return (
      <section key={section.title}>
        <p className="text-sm uppercase tracking-[0.24em] text-muted">
          {section.title}
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item) => (
            <figure
              key={`${section.title}-${item.title}`}
              className="border border-border bg-surface"
            >
              {item.src ? (
                <button
                  type="button"
                  onClick={() =>
                    onOpenImage?.(item.src ?? "", item.alt ?? item.title)
                  }
                  className="block w-full cursor-pointer text-left"
                  aria-label={`Open larger view of ${item.title}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border">
                    <Image
                      src={item.src}
                      alt={item.alt ?? item.title}
                      fill
                      className="object-cover transition-transform duration-200 hover:scale-[1.02]"
                    />
                  </div>
                </button>
              ) : (
                <div className="flex aspect-[4/3] w-full items-end border-b border-dashed border-border bg-[linear-gradient(135deg,rgba(255,90,54,0.08),transparent_52%),linear-gradient(0deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] p-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-accent-strong">
                      Media slot
                    </div>
                    <div className="mt-2 text-lg text-foreground">{item.title}</div>
                  </div>
                </div>
              )}
              <figcaption className="space-y-2 px-4 py-4">
                <div className="text-sm font-medium text-foreground">
                  {item.title}
                </div>
                {item.caption ? (
                  <p className="text-sm leading-6 text-muted">{item.caption}</p>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section key={section.title}>
      <p className="text-sm uppercase tracking-[0.24em] text-muted">
        {section.title}
      </p>
      <div className="mt-4 border border-dashed border-border px-4 py-4 text-base leading-7 text-muted">
        {section.body}
      </div>
    </section>
  );
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  const layout = layoutClasses[project.layout];
  const mainSections = project.sections.filter(
    (section) => section.column !== "side",
  );
  const sideSections = project.sections.filter(
    (section) => section.column === "side",
  );

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-10 sm:px-8 lg:px-10">
      <Link
        href="/"
        className="mb-6 inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.24em] text-muted hover:text-foreground"
      >
        &lt;- Back to index
      </Link>

      <section className="border border-border bg-surface-strong px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:px-8 sm:py-10 lg:px-10">
        <div className={layout.shell}>
          <aside className={layout.aside}>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-accent-strong">
                {project.category}
              </p>
              <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-tight text-foreground sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
                {project.summary}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="border border-border bg-surface px-4 py-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted">
                  Status
                </div>
                <div className="mt-2 text-2xl text-foreground">
                  {project.status}
                </div>
              </div>
              <div className="border border-border bg-surface px-4 py-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted">
                  Year
                </div>
                <div className="mt-2 text-2xl text-foreground">{project.year}</div>
              </div>
              {project.facts?.map((fact) => (
                <div
                  key={fact.label}
                  className="border border-border bg-surface px-4 py-4"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-muted">
                    {fact.label}
                  </div>
                  <div className="mt-2 text-2xl text-foreground">{fact.value}</div>
                </div>
              ))}
            </div>

            <section>
              <p className="text-sm uppercase tracking-[0.24em] text-muted">
                Tags
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-3 py-2 text-sm text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {project.links.length > 0 ? (
              <div className="flex flex-col gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between border border-border bg-surface px-4 py-3 text-sm uppercase tracking-[0.18em] text-foreground hover:border-accent/60 hover:bg-surface-strong"
                  >
                    <span>{link.label}</span>
                    <span>↗</span>
                  </a>
                ))}
              </div>
            ) : null}

            {project.layout === "build-log"
              ? sideSections.map((section) =>
                  renderSection(section, (src, alt) =>
                    setSelectedImage({ src, alt }),
                  ),
                )
              : null}
          </aside>

          <div className={layout.main}>
            {mainSections.map((section) =>
              renderSection(section, (src, alt) => setSelectedImage({ src, alt })),
            )}
            {project.layout !== "build-log"
              ? sideSections.map((section) =>
                  renderSection(section, (src, alt) =>
                    setSelectedImage({ src, alt }),
                  ),
                )
              : null}
          </div>
        </div>
      </section>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden border border-border bg-surface-strong shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 border border-border bg-surface px-2 py-1 text-xs uppercase tracking-[0.2em] text-foreground"
              aria-label="Close image preview"
            >
              Close
            </button>
            <div className="relative w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1400}
                height={1000}
                className="max-h-[92vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}