export type Project = {
  number: string;
  title: string;
  description: string;
  year: string;
  category: string;
  technology: string;
  image: string;
  imageAlt: string;
  liveUrl: string;
  repositoryUrl: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const siteConfig = {
  name: "Ajay",
  fullName: "Ajay Pandey",
  role: "Software Engineer",
  location: "India",
  description:
    "I design and build fast, useful digital products with careful attention to detail.",
  bio: "I’m a software engineer who enjoys solving practical problems and making products feel clear and easy to use. I care about solid engineering, honest collaboration and finishing the details properly.",
  email: "hello@example.com",
  siteUrl: "https://ajay-portfolio-alpha-ten.vercel.app",
  availability: "Available for select projects",
  portrait: {
    src: "/images/portrait-placeholder.webp",
    alt: "Portrait of Ajay",
  },
  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
  },
  stats: [
    { label: "Experience", value: "4+ Years" },
    { label: "Projects", value: "20+ Built" },
    { label: "Focus", value: "Frontend / Full Stack" },
  ],
  projects: [
    {
      number: "01",
      title: "Forma",
      description:
        "A fast online store with a simple catalogue and a focused checkout experience.",
      year: "2026",
      category: "Digital commerce",
      technology: "Next.js / TypeScript",
      image: "/images/project-01.webp",
      imageAlt: "Warm editorial product composition for the Forma project",
      liveUrl: "https://example.com",
      repositoryUrl: "https://github.com/",
    },
    {
      number: "02",
      title: "North",
      description:
        "A shared workspace that helps operations teams organise their daily work.",
      year: "2026",
      category: "Product platform",
      technology: "React / Node.js",
      image: "/images/project-02.webp",
      imageAlt: "Dark interface study for the North platform",
      liveUrl: "https://example.com",
      repositoryUrl: "https://github.com/",
    },
    {
      number: "03",
      title: "Frame",
      description:
        "A flexible publishing platform for photographers and independent creatives.",
      year: "2025",
      category: "Creative tools",
      technology: "Next.js / PostgreSQL",
      image: "/images/project-03.webp",
      imageAlt: "Minimal gallery composition for the Frame platform",
      liveUrl: "https://example.com",
      repositoryUrl: "https://github.com/",
    },
  ] satisfies Project[],
  testimonials: [
    {
      quote:
        "Ajay brought clarity to a difficult product. He asked the right questions, communicated well and cared about every detail through launch.",
      name: "Client Name",
      role: "Product Lead, Company",
    },
    {
      quote:
        "The final experience felt simple because the thinking behind it was thorough. The work was thoughtful, reliable and genuinely collaborative.",
      name: "Client Name",
      role: "Founder, Company",
    },
  ] satisfies Testimonial[],
  seo: {
    title: "Ajay | Software Engineer",
    description:
      "Software engineer building fast and reliable digital products.",
    keywords: [
      "software engineer",
      "frontend developer",
      "Next.js developer",
      "portfolio",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
