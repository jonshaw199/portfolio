export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioGalleryItem = {
  title: string;
  caption?: string;
  src?: string;
  alt?: string;
};

export type PortfolioLayout = "case-study" | "build-log" | "field-notes";

type PortfolioSectionBase = {
  title: string;
  column?: "main" | "side";
};

export type PortfolioNarrativeSection = PortfolioSectionBase & {
  type: "narrative";
  paragraphs: string[];
};

export type PortfolioPointsSection = PortfolioSectionBase & {
  type: "points";
  items: string[];
};

export type PortfolioChipsSection = PortfolioSectionBase & {
  type: "chips";
  items: string[];
};

export type PortfolioNoteSection = PortfolioSectionBase & {
  type: "note";
  body: string;
};

export type PortfolioGallerySection = PortfolioSectionBase & {
  type: "gallery";
  items: PortfolioGalleryItem[];
};

export type PortfolioSection =
  | PortfolioNarrativeSection
  | PortfolioPointsSection
  | PortfolioChipsSection
  | PortfolioNoteSection
  | PortfolioGallerySection;

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  layout: PortfolioLayout;
  year: string;
  status: string;
  summary: string;
  tags: string[];
  links: PortfolioLink[];
  facts?: Array<{
    label: string;
    value: string;
  }>;
  sections: PortfolioSection[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "blog-platform",
    title: "Personal blog platform",
    category: "Software",
    layout: "case-study",
    year: "2025",
    status: "Live",
    summary:
      "A custom Next.js blog and publishing workflow with a public reading experience, an authenticated admin system, and a clean editorial UI.",
    tags: ["Next.js", "Supabase", "CMS", "Tailwind"],
    links: [
      { label: "Live blog", href: "https://blog-tan-two-96.vercel.app/blog" },
      { label: "GitHub", href: "https://github.com/jonshaw199/blog" },
    ],
    facts: [
      { label: "Role", value: "Full-stack owner" },
      { label: "Scope", value: "Public blog + admin workflow" },
    ],
    sections: [
      {
        type: "narrative",
        title: "Overview",
        paragraphs: [
          "This project is a personal writing platform built around the idea that the public reading experience should stay simple and focused, while the editing experience is capable enough to support real content operations.",
          "The result is a lightweight content system with public list and post pages, authenticated admin tooling, media support, theming, and a cleaner editorial flow than a generic blog template.",
        ],
      },
      {
        type: "points",
        title: "What makes it useful",
        items: [
          "Public posts and index pages keep the reading experience clean and distraction-free.",
          "The admin workflow supports creating, editing, tagging, and managing content without exposing those tools to normal visitors.",
          "Themable styling and richer metadata make the site feel intentional rather than template-generated.",
        ],
      },
      {
        type: "chips",
        title: "Stack",
        items: ["Next.js", "TypeScript", "Supabase", "React", "Tailwind CSS"],
        column: "side",
      },
      {
        type: "gallery",
        title: "Public reading experience",
        items: [
          {
            title: "Public list page",
            caption: "The public blog index is intentionally simple and editorial, with cards that lead readers to full posts.",
            src: "/projects/blog/public list page.png",
            alt: "Public blog list page screenshot",
          },
          {
            title: "Public post page",
            caption: "The post layout keeps the content front and center while supporting media and clean typography.",
            src: "/projects/blog/public post page.png",
            alt: "Public blog post page screenshot",
          },
          {
            title: "Image library in post editor",
            caption: "The editor supports media reuse and richer posts without forcing a complicated publishing setup.",
            src: "/projects/blog/public post page image library.gif",
            alt: "Blog post image library animation",
          },
          {
            title: "Admin list page",
            caption: "The admin interface makes it easy to review posts, manage drafts, and keep the publishing flow organized.",
            src: "/projects/blog/admin list page.gif",
            alt: "Admin list page animation",
          },
          {
            title: "Admin post editor",
            caption: "The admin editor is where most of the real project work lives: writing, editing, media, and structure.",
            src: "/projects/blog/admin post page.gif",
            alt: "Admin post editor animation",
          },
          {
            title: "Light and dark mode",
            caption: "A light/dark theme toggle keeps the writing and reading experience comfortable without cluttering the design.",
            src: "/projects/blog/light dark mode.gif",
            alt: "Light and dark mode toggle animation",
          },
        ],
      },
      {
        type: "note",
        title: "Why it matters",
        body: "The core idea was to keep a personal blog easy to read while making the authoring flow practical enough for actual publishing. That balance is what makes the project feel like a real product rather than just a template.",
        column: "side",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}