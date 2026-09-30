export type ProjectCategory = "Frontend" | "Full Stack" | "Web Apps" | "UI / UX";

export interface Project {
  slug: string;
  name: string;
  description: string;
  problem: string;
  image: string;
  categories: ProjectCategory[];
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    slug: "job-application-tracker",
    name: "Job Application Tracker",
    description:
      "A professional job application management platform that helps job seekers organize and track their applications from first contact to offer.",
    problem:
      "Job seekers often lose track of where they applied, follow-up dates and outcomes across dozens of applications. This tool centralizes the entire process in one visual workflow.",
    image: "/images/project-job-tracker.jpg",
    categories: ["Full Stack", "Web Apps"],
    technologies: ["React", "Node.js", "PostgreSQL", "dnd-kit"],
    features: [
      "Kanban board with Applied / Interview / Offer / Rejected stages",
      "Drag and drop between stages",
      "Application notes and reminders",
      "Search and filtering across applications",
      "Analytics dashboard with response rate",
      "Time-spent-per-stage tracking",
      "Funnel visualization of the hiring pipeline",
    ],
    github: "https://github.com/fayssal-elbouhamedy/job-application-tracker",
    demo: "https://job-tracker-demo.fayssal-elbouhamedy.dev",
  },
  {
    slug: "business-website",
    name: "Business Website",
    description:
      "A modern, responsive website built for a real-world business to present its products and services and generate qualified contact requests.",
    problem:
      "The business needed a fast, mobile-friendly online presence that clearly communicates its services and makes it easy for customers to get in touch.",
    image: "/images/project-business.jpg",
    categories: ["Frontend", "UI / UX"],
    technologies: ["React", "Tailwind CSS", "Vite"],
    features: [
      "Fully responsive layout for mobile, tablet and desktop",
      "Product and service presentation sections",
      "Contact form with validation",
      "Accessible mobile navigation menu",
      "SEO-friendly semantic structure",
      "Optimized assets for fast load times",
      "Subtle scroll and hover animations",
    ],
    github: "https://github.com/fayssal-elbouhamedy/business-website",
    demo: "https://business-site-demo.fayssal-elbouhamedy.dev",
  },
  {
    slug: "developer-productivity-tool",
    name: "Developer Productivity Tool",
    description:
      "A web application built to speed up a repetitive developer workflow: importing, searching and exporting structured data through a clean dashboard.",
    problem:
      "Manually processing and filtering data files was slow and error-prone. This tool provides a fast, searchable interface with export options for daily use.",
    image: "/images/project-devtool.jpg",
    categories: ["Frontend", "Web Apps"],
    technologies: ["React", "JavaScript", "REST APIs"],
    features: [
      "Modern dashboard layout",
      "File and data processing pipeline",
      "Live search across large datasets",
      "Advanced filtering options",
      "CSV / JSON export functionality",
      "Fully responsive interface",
    ],
    github: "https://github.com/fayssal-elbouhamedy/dev-productivity-tool",
    demo: "https://devtool-demo.fayssal-elbouhamedy.dev",
  },
];

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "Frontend",
  "Full Stack",
  "Web Apps",
  "UI / UX",
];
