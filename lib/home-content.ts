import { Code2, Cpu, Globe } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";

export const homeContent = {
  hero: {
    eyebrow: "Portfolio",
    code: "AN-01",
    note: "Student developer log",
    primaryAction: "View Projects",
    secondaryAction: "Get in Touch",
    status: "Learning and building",
    systemRows: [
      { label: "Stack", value: "Next.js / TypeScript" },
      { label: "Focus", value: "Web / Firmware / Systems" },
      { label: "Intent", value: "Useful tools and steady progress" },
    ],
    directives: [
      { label: "Interface", value: "Clear" },
      { label: "Build", value: "Reliable" },
      { label: "Mode", value: "Student" },
    ],
    stats: [
      { label: "Years Learning", value: stats.yearsExperience },
      { label: "Projects Built", value: stats.projectsCompleted },
      { label: "Tools Explored", value: stats.technologiesUsed },
      { label: "Open to Learn", value: "Yes" },
    ],
  },
  about: {
    label: "About",
    title: "A student developer learning by building useful things",
    paragraphs: [
      `I'm ${siteConfig.name}, a software developer from ${siteConfig.location} focused on clean web interfaces, practical full-stack projects, and embedded systems experiments.`,
      "This portfolio is a record of what I am learning, building, and improving over time. I care about readable code, thoughtful interfaces, and projects that help real people.",
    ],
    primaryAction: "About me",
    secondaryAction: "All Skills",
    highlights: [
      {
        icon: Globe,
        title: "Web Interfaces",
        description: "Building responsive applications with Next.js, React, and TypeScript.",
      },
      {
        icon: Cpu,
        title: "Embedded Systems",
        description: "Learning firmware and IoT workflows with ESP32 and Arduino projects.",
      },
      {
        icon: Code2,
        title: "Full-Stack Practice",
        description: "Connecting data, APIs, and interfaces into maintainable applications.",
      },
    ],
    stats: [
      { value: "student", label: "Current Stage" },
      { value: stats.yearsExperience, label: "Years Coding" },
      { value: stats.projectsCompleted, label: "Projects Built" },
      { value: "remote", label: "Collaboration" },
    ],
  },
  contact: {
    label: "Connect",
    title: "Want to talk about code, learning, or a project?",
    description:
      "I am open to collaboration, feedback, internships, volunteer work, and conversations with people building useful things.",
    primaryAction: "Send Email",
    secondaryAction: "Mastodon",
  },
} as const;
