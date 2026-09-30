export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  points: string[];
  type: "professional" | "development";
}

export const experience: ExperienceItem[] = [
  {
    period: "Recent",
    role: "Mailer Agent",
    organization: "E-market Solution",
    description:
      "Worked as part of the operations team, handling email-based client communication and coordinating tasks that required attention to detail, organization and reliable follow-through.",
    points: [
      "Managed high volumes of client communication in a structured, deadline-driven environment",
      "Developed strong organizational habits and attention to detail",
      "Built discipline and consistency that now carry directly into my development workflow",
    ],
    type: "professional",
  },
  {
    period: "2+ years",
    role: "Self-Directed Web Development",
    organization: "Personal & Practice Projects",
    description:
      "Alongside my professional experience, I have spent over two years learning and building with modern web technologies, focusing on frontend development and practical, real-world projects.",
    points: [
      "Built multiple projects using React, Tailwind CSS and Vite",
      "Practiced component-based architecture and clean code principles",
      "Explored backend fundamentals with Node.js, Python, PHP and Laravel",
      "Worked with SQL databases and REST APIs to build complete features",
      "Used Git and GitHub for version control on every project",
    ],
    type: "development",
  },
];
