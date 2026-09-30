export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building interfaces and interactive experiences.",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "GSAP",
      "Three.js",
    ],
  },
  {
    title: "Backend",
    description: "Server-side logic and data-driven features.",
    skills: ["Node.js", "Python", "PHP", "Laravel", "REST APIs"],
  },
  {
    title: "Database",
    description: "Storing and structuring application data.",
    skills: ["SQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Tools & Workflow",
    description: "Day-to-day development and design tooling.",
    skills: ["Git", "GitHub", "Figma", "VS Code", "WordPress"],
  },
];
