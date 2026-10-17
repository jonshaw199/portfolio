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
    slug: "deputy",
    title: "Deputy",
    category: "AI / automation",
    layout: "case-study",
    year: "2025",
    status: "Open source",
    summary:
      "A local autonomous coding daemon that watches Jira or GitHub Issues for ready work, uses pluggable trackers and agent commands, stacks dependent tickets into PR chains, spins up isolated git worktrees, surfaces review and decision points, and opens draft PRs while you stay in control.",
    tags: ["Node.js", "AI agents", "GitHub", "Jira", "Automation"],
    links: [{ label: "GitHub", href: "https://github.com/jonshaw199/deputy" }],
    facts: [
      { label: "Role", value: "Full-stack owner" },
      { label: "Scope", value: "Autonomous issue-to-PR loop" },
    ],
    sections: [
      {
        type: "narrative",
        title: "Overview",
        paragraphs: [
          "Deputy is a local daemon that watches a tracker for ready work and resolves each item autonomously. It creates an isolated git worktree, runs the agent, pushes a branch, opens a draft PR, and keeps the case journaled so it can survive restarts or pauses without losing context. The tracker layer is pluggable and the agent command is swappable, so the workflow can adapt to Jira, GitHub Issues, Claude, or another backend without being rewritten.",
          "The current system is built around real operational states, not just happy-path automation: it can stack dependent tickets, run sibling work in parallel, surface review comments, let it pause when it needs your call, and recover failed or stopped cases from the dashboard.",
        ],
      },
      {
        type: "points",
        title: "Why it matters",
        items: [
          "It turns ready-to-work tickets into actual pull requests without requiring copy-paste prompts into a chat window.",
          "It can turn a whole epic into a chain of stacked PRs, then keep the children moving in parallel as dependencies land.",
          "Trackers and agent runners are pluggable, so the same workflow can adapt to Jira, GitHub Issues, Claude, or another command.",
          "Each case runs in an isolated worktree, or resumes an existing branch when one already exists, so the main repo stays clean.",
          "It surfaces unresolved review comments, asks for help when it needs a decision, and keeps those states visible instead of burying them in logs.",
          "It can recover from failing CI and preserve failed or stopped cases as retryable dashboard cards instead of dropping them on the floor.",
        ],
      },
      {
        type: "chips",
        title: "Stack",
        items: ["Node.js", "TypeScript", "GitHub API", "Jira", "Claude Agent SDK"],
        column: "side",
      },
      {
        type: "gallery",
        title: "Dashboard, review, and recovery",
        items: [
          {
            title: "Deputy dashboard",
            caption: "The dashboard shows each deputy, its active cases, and the current status of the autonomous work being performed.",
            src: "/projects/deputy/dashboard.png",
            alt: "Deputy dashboard screenshot",
          },
          {
            title: "Live chat with a deputy",
            caption: "The case view keeps the conversation and context attached to the live run so you can steer implementation without leaving the dashboard.",
            src: "/projects/deputy/chat.png",
            alt: "Deputy live chat screenshot",
          },
          {
            title: "Review comments surfaced on the case",
            caption: "Review feedback is shown on the case itself, so Deputy can react to comments without replying directly on the pull request.",
            src: "/projects/deputy/review.png",
            alt: "Deputy review comments screenshot",
          },
          {
            title: "Needs your call state",
            caption: "When the agent hits a decision point it cannot safely guess, it pauses and asks for a human answer in the same thread.",
            src: "/projects/deputy/needs-input.png",
            alt: "Deputy needs input screenshot",
          },
          {
            title: "Failed case kept for retry",
            caption: "Broken runs are preserved as failed cards with their error context, which keeps them visible and easy to rerun later.",
            src: "/projects/deputy/failed.png",
            alt: "Deputy failed case screenshot",
          },
        ],
      },
      {
        type: "note",
        title: "Why it belongs here",
        body: "This project sits squarely in the middle of product thinking and system design: it is not only an agent script, but a workflow that turns backlog items into working software with observability, isolation, review handling, human intervention, and retryable failure states. That makes it a strong example of practical automation in a portfolio.",
        column: "side",
      },
    ],
  },
  {
    slug: "blog-platform",
    title: "Personal Blog",
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
  {
    slug: "rrscraper",
    title: "RadioReference Scraper",
    category: "Systems / tooling",
    layout: "build-log",
    year: "2024",
    status: "Open source",
    summary:
      "A simple Python scraper for RadioReference that exports raw data and optional OP25 / Chirp-ready formats for SDR and radio workflows.",
    tags: ["Python", "Radio", "Scraping", "OP25", "Chirp"],
    links: [{ label: "GitHub", href: "https://github.com/jonshaw199/rrscraper" }],
    facts: [
      { label: "Inputs", value: "/sid, /ctid, /aid URLs" },
      { label: "Outputs", value: "CSV + OP25 + Chirp" },
    ],
    sections: [
      {
        type: "narrative",
        title: "Overview",
        paragraphs: [
          "This project is a straightforward scraper for RadioReference pages. It takes a single system, county, or agency URL and exports structured data in a format that is easier to work with downstream.",
          "The project is intentionally narrow in scope: it does not crawl the whole site, it scrapes a specific page and then optionally formats the result for OP25 or Chirp-based workflows.",
        ],
      },
      {
        type: "points",
        title: "Why it matters",
        items: [
          "It turns RadioReference data into usable CSV or TSV output for radio and SDR workflows.",
          "It can export OP25-friendly trunk data for systems and talkgroup mapping.",
          "It can also export Chirp-ready data for conventional radio setups.",
        ],
      },
      {
        type: "chips",
        title: "Stack",
        items: ["Python", "BeautifulSoup", "Requests", "CSV export", "OP25 tooling"],
        column: "side",
      },
      {
        type: "note",
        title: "Why it belongs here",
        body: "This is a real, useful utility with clear public value. It is not generic scraping for the sake of it; it solves a very specific problem in the radio / SDR ecosystem and is exactly the kind of project that has value in a portfolio.",
        column: "side",
      },
    ],
  },
  {
    slug: "slack-assistant",
    title: "Slack Assistant",
    category: "AI / workflow tooling",
    layout: "build-log",
    year: "2025",
    status: "Open source",
    summary:
      "A Slack bot that watches channels in real time, uses a plain-English profile to decide what matters to you, and suggests either a reply or a lightweight emoji reaction.",
    tags: ["Ruby", "Slack", "Claude", "Socket Mode", "Automation"],
    links: [{ label: "GitHub", href: "https://github.com/jonshaw199/slack-assistant" }],
    facts: [
      { label: "Core flow", value: "Monitor → filter → draft → act" },
      { label: "Primary use", value: "Relevant message triage" },
    ],
    sections: [
      {
        type: "narrative",
        title: "Overview",
        paragraphs: [
          "Slack Assistant connects to Slack through Socket Mode and watches the channels you care about in real time. Instead of hardcoding one workflow, it uses a plain-English relevance prompt where you describe your role, your team, and the kinds of messages you care about.",
          "That makes it more general than a one-off bot: it can triage direct mentions, semantically relevant questions, and routine operational chatter, then route the result to a private review channel with a suggested action." 
        ],
      },
      {
        type: "points",
        title: "What it does",
        items: [
          "Monitors channels without polling and without exposing a public callback URL.",
          "Uses a profile-style relevance prompt so you can describe yourself and what matters, instead of maintaining brittle channel rules.",
          "Can suggest a concise reply or, when that is more appropriate, a simple emoji reaction for fast acknowledgment.",
          "Can post alerts with context, keep a human in the loop with review actions, or auto-send the response when appropriate.",
        ],
      },
      {
        type: "chips",
        title: "Stack",
        items: ["Ruby", "Slack Web API", "Socket Mode", "Claude", "Anthropic API"],
        column: "side",
      },
      {
        type: "gallery",
        title: "Demo",
        items: [
          {
            title: "Alert review flow in Slack",
            caption:
              "The bot surfaces a relevant message in a private review channel, explains why it was flagged, and suggests either a response or a lightweight acknowledgment flow with quick actions.",
            src: "/projects/slack-assistant/alert workflow.png",
            alt: "Slack Assistant alert card with message preview, suggested reply, and Send Edit Dismiss actions",
          },
        ],
      },
      {
        type: "note",
        title: "Why it belongs here",
        body: "This is a strong portfolio piece because it shows product judgment as much as implementation detail: the useful part is not just Slack automation, it is turning a personal description of priorities into triage, suggested actions, and lower-friction responses.",
        column: "side",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}