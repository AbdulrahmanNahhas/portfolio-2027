import { readFile, readdir } from "node:fs/promises";
import { z } from "zod";

const text = z.string().trim().min(1);
const path = z.string().regex(/^\/(?!\/)/);
const id = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const url = z.union([z.url(), z.literal("")]);
const list = (schema) => z.array(schema);
const read = async (file) =>
  JSON.parse(
    await readFile(new URL(`../content/${file}`, import.meta.url), "utf8"),
  );
const schemas = {
  profile: z.object({
    name: text,
    displayName: text,
    title: text,
    location: text,
    url: z.url(),
    email: z.email(),
    birthDate: z.iso.date(),
    bio: text,
    description: text,
    keywords: list(text),
    social: z.object({ gitlab: z.url(), mastodon: z.url() }),
    socialLabels: z.object({ gitlab: text, mastodon: text }),
  }),
  projects: list(
    z.object({
      id,
      title: text,
      description: text,
      longDescription: text,
      category: text,
      group: z.enum(["personal", "community", "web", "embedded", "other"]),
      art: z.enum([
        "insanps",
        "fatih",
        "car",
        "promise",
        "thabat",
        "mun",
        "drone",
        "supermarket",
        "education",
        "media",
        "nix",
        "rust",
        "portfolio",
        "lms",
      ]),
      kind: z.enum(["project", "repository", "learning"]),
      role: text,
      tags: list(text),
      year: text,
      status: z.enum([
        "in-progress",
        "completed",
        "archived",
        "planning",
        "production",
        "launching",
        "cancelled",
      ]),
      featured: z.boolean(),
      published: z.boolean().optional(),
      link: z.url().optional(),
      github: z.url().optional(),
      organization: z.url().optional(),
    }),
  ),
  "project-art": z.record(
    id,
    z.object({
      window: text,
      heading: text,
      labels: list(text).length(3),
      caption: text,
      sticker: text,
      code: list(text).optional(),
      command: text.optional(),
    }),
  ),
  journey: list(
    z.object({
      id,
      company: text,
      position: text,
      location: text,
      period: text,
      description: text,
      responsibilities: list(text),
    }),
  ),
  learning: z.object({
    levels: list(z.object({ id, label: text, description: text })),
    categories: list(
      z.object({
        id,
        title: text,
        skills: list(z.object({ name: text, level: id })),
      }),
    ),
    languages: list(z.object({ name: text, level: text })),
    roadmap: list(z.object({ name: text, status: text })),
    current: list(
      z.object({
        id,
        symbol: text,
        tag: text,
        title: text,
        description: text,
        href: path,
        linkLabel: text,
        tone: z.enum(["rose", "mint", "butter"]),
      }),
    ),
  }),
  about: z.object({
    paragraphs: list(text),
    interests: list(text),
    facts: list(
      z.object({
        id,
        label: text,
        value: text,
        symbol: text,
        lang: text.optional(),
        dir: z.enum(["ltr", "rtl"]).optional(),
      }),
    ),
    principles: list(z.object({ id, title: text, description: text })),
  }),
  tools: z.object({
    main: list(
      z.object({
        name: text,
        tag: text,
        description: text,
        links: z.object({ website: url, code: url, external: url }).optional(),
      }),
    ),
    watching: list(
      z.object({
        name: text,
        tag: text,
        description: text,
        links: z.object({ website: url, code: url, external: url }).optional(),
      }),
    ),
    stack: list(z.object({ category: text, tools: list(text) })),
  }),
  notes: list(
    z.object({
      slug: id,
      title: text,
      excerpt: text,
      content: text,
      date: z.iso.date(),
      readTime: text,
      tags: list(text),
      featured: z.boolean(),
    }),
  ),
  navigation: z.object({
    main: list(z.object({ id, label: text, href: path })),
    extra: list(z.object({ id, label: text, href: path })),
  }),
  contact: z.object({
    email: z.email(),
    subjects: list(text).min(1),
    salutation: text,
    defaultSubject: text,
  }),
};
const data = {};
for (const [name, schema] of Object.entries(schemas)) {
  data[name] = await read(`en/${name}.json`);
  const result = schema.safeParse(data[name]);
  if (!result.success)
    throw new Error(`${name}.json:\n${z.prettifyError(result.error)}`);
}
const settings = await read("settings.json");
z.object({
  locale: z.literal("en"),
  dateLocale: text,
  textDirection: z.literal("ltr"),
}).parse(settings);
new Intl.DateTimeFormat(settings.dateLocale);
const ui = await read("en/ui.json");
function checkUnique(items, key, label) {
  const values = items.map((item) => item[key]);
  if (new Set(values).size !== values.length)
    throw new Error(`Duplicate ${key} in ${label}`);
}
for (const name of ["projects", "journey"]) checkUnique(data[name], "id", name);
checkUnique(data.projects, "art", "project illustrations");
checkUnique(data.notes, "slug", "notes");
checkUnique(
  [...data.navigation.main, ...data.navigation.extra],
  "id",
  "navigation",
);
for (const key of ["categories", "current"])
  checkUnique(data.learning[key], "id", `learning.${key}`);
for (const key of ["facts", "principles"])
  checkUnique(data.about[key], "id", `about.${key}`);
const routes = new Set([
  "/",
  "/about",
  "/projects",
  "/blog",
  "/uses",
  "/skills",
  "/work",
  "/contact",
  ...data.notes.map((note) => `/blog/${note.slug}`),
]);
for (const item of [
  ...data.navigation.main,
  ...data.navigation.extra,
  ...data.learning.current,
])
  if (!routes.has(item.href))
    throw new Error(`Unknown local destination: ${item.href}`);
async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries
        .filter((entry) => entry.name !== "ui")
        .map(async (entry) =>
          entry.isDirectory()
            ? sourceFiles(`${directory}/${entry.name}`)
            : /\.tsx?$/.test(entry.name)
              ? [`${directory}/${entry.name}`]
              : [],
        ),
    )
  ).flat();
}
for (const file of [
  ...(await sourceFiles("app")),
  ...(await sourceFiles("components")),
]) {
  const source = await readFile(file, "utf8");
  for (const match of source.matchAll(/\bcopy((?:\.[A-Za-z][A-Za-z0-9]*)+)/g)) {
    const keys = match[1].slice(1).split(".");
    let value = ui;
    for (const key of keys) value = value?.[key];
    if (value === undefined)
      throw new Error(`${file}: missing UI key ${keys.join(".")}`);
  }
}
for (const project of data.projects)
  if (!ui.projectCard.statuses[project.status])
    throw new Error(`Missing project status label: ${project.status}`);
for (const filter of ui.projectShelf.filters)
  if (
    filter.value !== "all" &&
    !data.projects.some((project) =>
      filter.value === "archived"
        ? ["archived", "cancelled"].includes(project.status)
        : filter.value === "personal"
          ? project.kind !== "project"
          : project.group === filter.value,
    )
  )
    throw new Error(`Empty configured project filter: ${filter.value}`);
for (const project of data.projects) {
  if (!data["project-art"][project.art])
    throw new Error(`Missing artwork copy for ${project.art}`);
  if (
    project.kind === "repository" &&
    !project.github?.startsWith("https://github.com/")
  )
    throw new Error(`Repository card ${project.id} needs a direct GitHub URL`);
  for (const value of [
    project.link,
    project.github,
    project.organization,
  ].filter(Boolean))
    if (/example\.com|yourname|\.demo(?:\/|$)/.test(value))
      throw new Error(`Placeholder project URL: ${value}`);
}
if (JSON.stringify({ profile: data.profile, ui }).match(/\baqua\b/i))
  throw new Error("Old Aqua identity remains in active copy");

checkUnique(data.learning.levels, "id", "learning.levels");
const levelIds = new Set(data.learning.levels.map((level) => level.id));
for (const category of data.learning.categories) {
  checkUnique(category.skills, "name", `learning.categories.${category.id}`);
  for (const skill of category.skills)
    if (!levelIds.has(skill.level))
      throw new Error(`Unknown level ${skill.level} for ${skill.name}`);
}

console.log(
  `Content OK: 11 JSON sources, ${data.projects.length} projects, ${data.journey.length} earlier chapters, ${data.notes.length} notes. Links, IDs, dates, UI keys, and display values checked.`,
);
