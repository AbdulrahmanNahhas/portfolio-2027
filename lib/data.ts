import profile from "@/content/en/profile.json";
import projectData from "@/content/en/projects.json";
import journeyData from "@/content/en/journey.json";
import learning from "@/content/en/learning.json";
import about from "@/content/en/about.json";
import tools from "@/content/en/tools.json";
import notes from "@/content/en/notes.json";
import contact from "@/content/en/contact.json";

// Content stays in JSON. This module only exposes typed views for components.
export const siteConfig = profile;
export const projects = projectData;
export type Project = (typeof projectData)[number] & {
  link?: string;
  github?: string;
  image?: string;
};
export const experiences = journeyData;
export const skillCategories = learning.categories;
export const languages = learning.languages;
export const skillLevels = learning.levels;
export const roadmap = learning.roadmap;
export const currentInterests = learning.current;
export const aboutData = about;
export const usesData = tools;
export type UseItem =
  (typeof tools.main)[number] | (typeof tools.watching)[number];
export const blogPosts = notes;
export const contactConfig = contact;
