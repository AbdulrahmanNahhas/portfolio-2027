// Portfolio Data Configuration for Abdulrahman Nahhas

export const siteConfig = {
  name: "Abdulrahman Nahhas",
  title: "Student Software Developer",
  url: "https://abdulrahman.dev",
  location: "Syria",
  email: "contact@abdulrahman.dev",
  tagline: "Learning in public through thoughtful software projects",
  bio: "I'm a student software developer from Syria exploring full-stack web development, embedded systems, and practical tools. This portfolio is where I share my projects, progress, and the ideas I am growing into.",
  social: {
    gitlab: "https://gitlab.com/AbdulrahmanNahhas",
    // github: "https://github.com/abdulrahmannahhas",
    mastodon: "https://mastodon.social/@nahhas",
    // twitter: "https://twitter.com/abdulrahmandev",
  },
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  year: string;
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  link?: string;
  github?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Neural Interface Dashboard",
    description:
      "Real-time monitoring system for IoT sensor networks with advanced data visualization",
    longDescription:
      "A comprehensive dashboard for monitoring and analyzing data from distributed IoT sensor networks. Features real-time WebSocket connections, time-series data visualization, and predictive analytics powered by machine learning models.",
    category: "Full-Stack Development",
    tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL", "TailwindCSS"],
    year: "2026",
    status: "completed",
    featured: true,
    link: "https://neural-dashboard.demo",
    github: "https://github.com/abdulrahmannahhas/neural-dashboard",
  },
  {
    id: "02",
    title: "Embedded Climate Controller",
    description: "ESP32-based environmental monitoring and control system with mobile app",
    longDescription:
      "An embedded systems project featuring custom firmware for ESP32 microcontrollers, implementing MQTT communication protocols, real-time sensor data processing, and a React Native mobile application for remote monitoring and control.",
    category: "Embedded Systems",
    tags: ["C++", "ESP-IDF", "MQTT", "React Native", "FreeRTOS"],
    year: "2025",
    status: "completed",
    featured: true,
    github: "https://github.com/abdulrahmannahhas/climate-controller",
  },
  {
    id: "03",
    title: "Thabat NGO Platform",
    description: "Volunteer management and coordination platform for humanitarian organization",
    longDescription:
      "A full-featured platform built for Thabat NGO to manage volunteer coordination, project tracking, and resource allocation. Implements role-based access control, real-time notifications, and comprehensive reporting dashboards.",
    category: "Web Application",
    tags: ["Next.js", "Supabase", "TypeScript", "shadcn/ui", "Vercel"],
    year: "2025",
    status: "in-progress",
    featured: true,
    link: "https://thabat.ngo",
  },
  {
    id: "04",
    title: "Syrian Relief Tracker",
    description: "Donation tracking and transparency platform for earthquake relief efforts",
    longDescription:
      "Built during the 2023 earthquake crisis to provide transparent tracking of donations and relief distribution. Features real-time updates, geographic visualization of aid distribution, and multi-language support for Arabic and English.",
    category: "Humanitarian Tech",
    tags: ["React", "Node.js", "MongoDB", "Mapbox", "i18n"],
    year: "2023",
    status: "archived",
    featured: false,
    github: "https://github.com/abdulrahmannahhas/relief-tracker",
  },
  {
    id: "05",
    title: "DevOps Pipeline Generator",
    description: "Automated CI/CD configuration tool for GitLab projects",
    longDescription:
      "A CLI tool and web interface for generating optimized GitLab CI/CD pipelines. Supports multiple programming languages, Docker containerization, and integrates with various deployment targets including Vercel, AWS, and self-hosted servers.",
    category: "Developer Tools",
    tags: ["TypeScript", "GitLab CI", "Docker", "Node.js", "CLI"],
    year: "2024",
    status: "completed",
    featured: false,
    github: "https://github.com/abdulrahmannahhas/pipeline-gen",
  },
  {
    id: "06",
    title: "Arabic NLP Toolkit",
    description: "Natural language processing utilities for Arabic text analysis",
    longDescription:
      "A collection of NLP tools specifically designed for Arabic language processing, including tokenization, stemming, sentiment analysis, and named entity recognition. Built to handle the complexities of Arabic script and dialects.",
    category: "Machine Learning",
    tags: ["Python", "TensorFlow", "FastAPI", "Arabic NLP", "Docker"],
    year: "2024",
    status: "in-progress",
    featured: false,
    github: "https://github.com/abdulrahmannahhas/arabic-nlp",
  },
];

export type Experience = {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  responsibilities: string[];
  highlights?: string[];
  type: "full-time" | "part-time" | "volunteer" | "freelance";
  current: boolean;
  category: string;
  companyUrl?: string;
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Freelance",
    position: "Full-Stack Developer",
    location: "Remote, Syria",
    startDate: "2024-01",
    description:
      "Independent software development focusing on web applications and embedded systems projects for international clients.",
    responsibilities: [
      "Designing and developing full-stack web applications using Next.js and TypeScript",
      "Building custom firmware solutions for IoT devices using ESP32 and Arduino platforms",
      "Implementing CI/CD pipelines and DevOps practices for client projects",
      "Providing technical consultation for startups and NGOs",
    ],
    highlights: [
      "Delivered 12+ projects across 6 countries",
      "Maintained 100% client satisfaction rate",
    ],
    type: "freelance",
    current: true,
    category: "Software Development",
  },
  {
    id: "2",
    company: "New Syria Movement",
    position: "Tech Lead & Developer",
    location: "Syria",
    startDate: "2025-09",
    description:
      "Leading technology initiatives for political movement, building digital infrastructure for civic engagement.",
    responsibilities: [
      "Architecting and developing the movement's digital platform",
      "Managing volunteer developer team and coordinating sprints",
      "Implementing secure communication systems",
      "Building member management and engagement tools",
    ],
    type: "volunteer",
    current: true,
    category: "Political Organization",
    companyUrl: "https://syriamovement.com",
  },
  {
    id: "3",
    company: "Promise for Justice",
    position: "Software Developer",
    location: "Remote",
    startDate: "2025-08",
    endDate: "2026-01",
    description: "Developed digital tools for human rights documentation and case management.",
    responsibilities: [
      "Building secure document management system",
      "Implementing encrypted communication features",
      "Creating data visualization dashboards for case tracking",
      "Ensuring GDPR compliance and data protection",
    ],
    highlights: ["Processed 500+ case documents securely", "Reduced case processing time by 40%"],
    type: "part-time",
    current: false,
    category: "Non-profit Organization",
  },
  {
    id: "4",
    company: "Thabat Association",
    position: "Lead Developer",
    location: "Syria",
    startDate: "2024-08",
    description:
      "Building technology solutions for humanitarian aid coordination and volunteer management.",
    responsibilities: [
      "Developing volunteer coordination platform",
      "Creating real-time resource allocation systems",
      "Building reporting and analytics dashboards",
      "Training team members on modern development practices",
    ],
    type: "volunteer",
    current: true,
    category: "Non-profit Association",
    companyUrl: "https://thabat.ngo",
  },
  {
    id: "5",
    company: "Joud Volunteers",
    position: "Web Developer",
    location: "Syria",
    startDate: "2023-02",
    endDate: "2023-03",
    description:
      "Emergency response development during earthquake crisis, building rapid deployment solutions.",
    responsibilities: [
      "Rapidly deploying donation tracking systems",
      "Creating volunteer registration portals",
      "Building real-time coordination tools",
      "Implementing multi-language support",
    ],
    type: "volunteer",
    current: false,
    category: "Emergency Response",
  },
];

export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Intermediate" | "Learning" | "Beginner";
    featured?: boolean;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "web-mobile",
    title: "Web & Mobile Interfaces",
    icon: "globe",
    skills: [
      { name: "JavaScript / TypeScript", level: "Advanced", featured: true },
      { name: "React / Next.js 16", level: "Advanced", featured: true },
      { name: "React Native (Expo)", level: "Proficient" },
      { name: "Tailwind CSS v4", level: "Advanced" },
      { name: "shadcn/ui", level: "Advanced" },
      { name: "TanStack Query", level: "Proficient" },
      { name: "Figma (Handoff)", level: "Intermediate" },
    ],
  },
  {
    id: "firmware",
    title: "Firmware & Systems",
    icon: "cpu",
    skills: [
      { name: "C/C++", level: "Intermediate", featured: true },
      { name: "Arduino Framework", level: "Proficient" },
      { name: "ESP-IDF (C++)", level: "Learning", featured: true },
      { name: "FreeRTOS", level: "Beginner" },
      { name: "I²C / SPI / UART", level: "Proficient" },
      { name: "MCU Peripherals", level: "Proficient" },
      { name: "Memory Management", level: "Intermediate" },
    ],
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    icon: "terminal",
    skills: [
      { name: "Git & GitLab flow", level: "Proficient", featured: true },
      { name: "GitLab CI/CD", level: "Proficient", featured: true },
      { name: "Docker", level: "Learning" },
      { name: "PostgreSQL / Supabase", level: "Proficient" },
      { name: "MQTT & WebSockets", level: "Proficient", featured: true },
      { name: "Linux / Bash", level: "Advanced" },
    ],
  },
  {
    id: "cs-foundations",
    title: "Computer Science",
    icon: "binary",
    skills: [
      { name: "OOP Patterns", level: "Learning", featured: true },
      { name: "Data Structures & Algorithms", level: "Beginner" },
      { name: "JSON & Serialization", level: "Proficient" },
      { name: "API Design (REST)", level: "Proficient" },
    ],
  },
  {
    id: "hardware",
    title: "Hardware & Tools",
    icon: "wrench",
    skills: [
      { name: "Reading Datasheets", level: "Intermediate" },
      { name: "Circuit Troubleshooting", level: "Beginner" },
      { name: "CMake / Build Systems", level: "Intermediate" },
      { name: "Oscilloscope / Logic Analyzer", level: "Beginner" },
    ],
  },
];

export const languages = [
  { name: "Arabic", level: "Native", active: true },
  { name: "English", level: "C1 Professional", active: true },
  { name: "Spanish", level: "A1 Beginner", active: false },
];

export const roadmap = [
  { name: "Computer Architecture", status: "Planned" },
  { name: "PCB Design (KiCad)", status: "Planned" },
  { name: "Rust for Embedded", status: "Planned" },
  { name: "WebAssembly", status: "Exploring" },
];

export const stats = {
  yearsExperience: "3+",
  projectsCompleted: "15+",
  technologiesUsed: "25+",
  clientsServed: "10+",
};

// About page data
export const aboutData = {
  intro: `I'm Abdulrahman, a student software developer from Syria with a deep passion for building
    meaningful technology. My journey started with curiosity about how things work,
    which led me to programming, embedded systems, and eventually full-stack web development.`,

  story: [
    {
      year: "2021",
      title: "First Lines of Code",
      description:
        "Started learning programming through online resources, building simple projects and discovering the joy of creating software.",
    },
    {
      year: "2022",
      title: "Web Development",
      description:
        "Dove deep into web technologies, learning React, Node.js, and modern frontend frameworks. Built my first production applications.",
    },
    {
      year: "2023",
      title: "Humanitarian Tech",
      description:
        "Applied my skills to help during the earthquake crisis, building emergency response tools and donation tracking systems.",
    },
    {
      year: "2024",
      title: "Embedded Systems",
      description:
        "Expanded into firmware development with ESP32 and Arduino, combining software with hardware for IoT solutions.",
    },
    {
      year: "2025",
      title: "Full-Stack & Beyond",
      description:
        "Now working as a freelance developer, building complex web applications and leading tech initiatives for organizations.",
    },
  ],

  philosophy: [
    {
      title: "Clean Code",
      description:
        "Code should be readable, maintainable, and elegant. I believe in writing code that future developers (including myself) will thank me for.",
    },
    {
      title: "Purpose-Driven",
      description:
        "Technology should solve real problems and improve lives. I'm drawn to projects that have meaningful impact, especially in humanitarian contexts.",
    },
    {
      title: "Continuous Learning",
      description:
        "The tech landscape evolves rapidly. I embrace learning new technologies and paradigms to stay relevant and deliver the best solutions.",
    },
  ],

  interests: ["Open Source", "Embedded Systems", "UI/UX Design", "Arabic NLP", "Humanitarian Tech"],
};

// Uses/Setup page data
//
// Add items to `main` or `watching` by appending an object:
//   { name: "Ladybird", tag: "Browser", description: "…", url: "https://…", image: "/uses/ladybird.png" }
// `url` and `image` are optional. Without an `image`, a letter monogram is shown.
// Drop image files into /public/uses/ and reference them as "/uses/<file>".
export type UseItem = {
  name: string;
  tag: string;
  description: string;
  logo?: string;
  color?: string;
  image?: string;
  links?: {
    website: string;
    code: string;
    external: string;
  }
};

export const usesData = {
  main: [
    {
      name: "NixOS",
      tag: "Operating System",
      logo: "simple-icons:nixos",
      color:"#5277C3",
      description:
        "Declarative, reproducible Linux. My whole system is a config file.",
      links: {
        website: "https://nixos.org",
        code: "https://github.com/NixOS/nixpkgs",
        external: "https://wiki.nixos.org",
      },
    },
    {
      name: "Niri + Noctalia",
      tag: "Desktop",
      logo: "simple-icons:niri",
      color: "#D55C44",
      description:
        "My current Wayland desktop stack. Modern, minimal, and keyboard-driven.",
      links: {
        website: "https://the-nnn-stack.github.io/",
        code: "https://github.com/niri-wm/niri",
        external: "https://noctalia.dev/",
      },
    },
    {
      name: "Firefox",
      tag: "Browser",
      description:
        "Privacy-focused and open. My non-Chromium default.",
      logo: "simple-icons:firefoxbrowser",
      color: "#FF7139",
      links: {
        website: "https://www.mozilla.org/firefox/",
        code: "https://hg.mozilla.org/mozilla-central/",
        external: "",
      },
    },
    {
      name: "Brave",
      tag: "Browser",
      description:
        "Chromium-based privacy browser with strong built-in protection.",
      logo: "simple-icons:brave",
      color: "#FB542B",
      links: {
        website: "https://brave.com",
        code: "https://github.com/brave/brave-browser",
        external: "",
      },
    },
    {
      name: "Ghostty",
      tag: "Terminal",
      description:
        "GPU-accelerated terminal that stays out of the way.",
      logo: "simple-icons:ghostty",
      color: "#3551F3",
      links: {
        website: "https://ghostty.org",
        code: "https://github.com/ghostty-org/ghostty",
        external: "",
      },
    },
    {
      name: "Zed IDE",
      tag: "Editor",
      description:
        "Fast, collaborative code editor built in Rust.",
      logo: "simple-icons:zedindustries",
      color: "#084CCF",
      links: {
        website: "https://zed.dev",
        code: "https://github.com/zed-industries/zed",
        external: "",
      },
    },
    {
      name: "GitLab",
      tag: "Platform",
      logo: "simple-icons:gitlab",
      color: "#FC6D26",
      description:
        "Git hosting, CI/CD, and project management in one place.",
      links: {
        website: "https://about.gitlab.com",
        code: "https://gitlab.com/gitlab-org/gitlab",
        external: "",
      },
    },
    // {
    //   name: "Podman",
    //   tag: "Containers",
    //   description:
    //     "Daemonless OCI containers — Linux-native and clean.",
    //   links: {
    //     website: "https://podman.io",
    //     code: "https://github.com/containers/podman",
    //     external: "",
    //   },
    // },
    {
      name: "Flatpak",
      tag: "Packages",
      logo: "simple-icons:flatpak",
      color: "#4A90D9",
      description:
        "Sandboxed apps for Linux desktops.",
      links: {
        website: "https://flatpak.org",
        code: "https://github.com/flatpak/flatpak",
        external: "",
      },
    },
    {
      name: "Obsidian",
      tag: "Notes",
      logo: "simple-icons:obsidian",
      color: "#7C3AED",
      description:
        "Local-first Markdown knowledge base.",
      links: {
        website: "https://obsidian.md",
        code: "",
        external: "",
      },
    },
    {
      name: "OnlyOffice",
      tag: "Office",
      logo: "simple-icons:onlyoffice",
      color: "#444444",
      description:
        "Office suite for documents, spreadsheets, and slides.",
      links: {
        website: "https://www.onlyoffice.com",
        code: "https://github.com/ONLYOFFICE",
        external: "",
      },
    },
    {
      name: "Kavita",
      tag: "Library",
      image: "/kavita.png",
      color: "#3a9d72",
      description:
        "My digital library platform for manga, comics, and ebooks.",
      links: {
        website: "https://www.kavitareader.com",
        code: "https://github.com/Kareadita/Kavita",
        external: "",
      },
    },
    {
      name: "Jellyfin",
      tag: "Media",
      logo: "simple-icons:jellyfin",
      color: "#00A4DC",
      description:
        "Open media server for personal streaming.",
      links: {
        website: "https://jellyfin.org",
        code: "https://github.com/jellyfin/jellyfin",
        external: "",
      },
    },
    {
      name: "KeePassXC",
      tag: "Security",
      logo: "simple-icons:keepassxc",
      color: "#6CAC4D",
      description:
        "Offline password manager I trust.",
      links: {
        website: "https://keepassxc.org",
        code: "https://github.com/keepassxreboot/keepassxc",
        external: "",
      },
    },
    {
      name: "SimpleX Chat",
      tag: "Chat",
      logo: "simple-icons:simplex",
      color: "#3361CC",
      description:
        "Private messaging without permanent identifiers.",
      links: {
        website: "https://simplex.chat",
        code: "https://github.com/simplex-chat/simplex-chat",
        external: "",
      },
    },
    {
      name: "Hermes Agent",
      tag: "AI",
      image: "/hermes.png",
      color: "#0091CD",
      description:
        "Open-source AI agent project I follow and use.",
      links: {
        website: "",
        code: "",
        external: "",
      },
    },
  ] as UseItem[],

  watching: [
    {
      name: "GNOME",
      tag: "Desktop",
      description:
        "Modern Linux desktop focused on simplicity and polish.",
      links: {
        website: "https://www.gnome.org",
        code: "https://gitlab.gnome.org/GNOME",
        external: "",
      },
    },
    {
      name: "COSMIC",
      tag: "Desktop",
      description:
        "Rust-based desktop environment from System76.",
      links: {
        website: "https://system76.com/cosmic",
        code: "https://github.com/pop-os/cosmic-epoch",
        external: "",
      },
    },
    {
      name: "Ladybird",
      tag: "Browser",
      description:
        "Independent browser built from scratch with its own engine.",
      links: {
        website: "https://ladybird.org",
        code: "https://github.com/LadybirdBrowser/ladybird",
        external: "",
      },
    },
    {
      name: "p2panda",
      tag: "Protocol",
      description:
        "Peer-to-peer protocol for offline-first distributed apps.",
      links: {
        website: "https://p2panda.org",
        code: "https://github.com/p2panda",
        external: "",
      },
    },
    {
      name: "Dash Chat",
      tag: "App",
      description:
        "Distributed chat client built on p2panda.",
      links: {
        website: "",
        code: "",
        external: "",
      },
    },
    {
      name: "Secureblue",
      tag: "Security",
      description:
        "Hardened Fedora Atomic-based operating system.",
      links: {
        website: "https://secureblue.dev",
        code: "https://github.com/secureblue/secureblue",
        external: "",
      },
    },
    {
      name: "GrapheneOS",
      tag: "Mobile OS",
      description:
        "Privacy and security-focused Android operating system.",
      links: {
        website: "https://grapheneos.org",
        code: "https://github.com/GrapheneOS",
        external: "",
      },
    },
    {
      name: "LibreOffice",
      tag: "Office",
      description:
        "Excellent open-source office suite, waiting for UI redesign and mobile apps.",
      links: {
        website: "https://www.libreoffice.org",
        code: "https://github.com/LibreOffice/core",
        external: "",
      },
    },
    {
      name: "Fedora Atomic",
      tag: "Distro",
      description:
        "Immutable Fedora variants with rollback-friendly image-based updates.",
      links: {
        website: "https://fedoraproject.org/atomic-desktops/",
        code: "https://github.com/fedora-silverblue/issue-tracker",
        external: "",
      },
    },
    {
      name: "Fediverse",
      tag: "Protocol",
      description:
        "Decentralized social network ecosystem built around open protocols.",
      links: {
        website: "https://fediverse.info",
        code: "",
        external: "",
      },
    },
    {
      name: "Lix",
      tag: "Nix",
      description:
        "Community-driven fork of the Nix package manager.",
      links: {
        website: "https://lix.systems",
        code: "https://github.com/lix-project/lix",
        external: "",
      },
    },
    {
      name: "FUTO",
      tag: "Tech",
      description:
        "Independent software company focused on user control and privacy.",
      links: {
        website: "https://futo.org",
        code: "",
        external: "",
      },
    },
    {
      name: "Redox OS",
      tag: "OS",
      description:
        "Experimental Unix-like operating system written in Rust.",
      links: {
        website: "https://redox-os.org",
        code: "https://gitlab.redox-os.org/redox-os/redox",
        external: "",
      },
    }
] as UseItem[],

  stack: [
    { category: "Frontend", tools: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"] },
    { category: "Backend", tools: ["Node.js", "PostgreSQL", "Supabase", "REST APIs"] },
    { category: "Embedded", tools: ["C/C++", "ESP-IDF", "Arduino", "FreeRTOS", "MQTT"] },
    { category: "DevOps", tools: ["Docker", "GitLab CI", "Vercel", "Linux"] },
  ],
};

// Blog posts data
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-iot-dashboard-nextjs",
    title: "Building a Real-Time IoT Dashboard with Next.js and WebSockets",
    excerpt:
      "A deep dive into creating a responsive dashboard for monitoring sensor data in real-time, featuring WebSocket connections and dynamic charts.",
    content: `## Introduction

Building real-time applications requires careful consideration of data flow, state management, and user experience. In this post, I'll walk through my approach to building an IoT monitoring dashboard.

## The Architecture

The system consists of three main components:
- ESP32 sensors publishing data via MQTT
- A Node.js backend bridging MQTT to WebSocket
- A Next.js frontend displaying real-time updates

## Key Challenges

1. **Connection Management** - Handling reconnections gracefully
2. **Data Buffering** - Preventing UI jank during rapid updates
3. **State Synchronization** - Keeping multiple components in sync

## Code Highlights

The WebSocket hook manages connection lifecycle and message handling efficiently, using refs to prevent stale closures and implementing exponential backoff for reconnections.

## Conclusion

Real-time dashboards require thoughtful architecture, but modern tools like Next.js and WebSocket APIs make it achievable with clean, maintainable code.
    `,
    date: "2026-04-15",
    readTime: "8 min",
    tags: ["Next.js", "IoT", "WebSocket", "Real-time"],
    featured: true,
  },
  {
    slug: "esp32-mqtt-integration",
    title: "ESP32 MQTT Integration: From Sensor to Cloud",
    excerpt:
      "A practical guide to connecting ESP32 microcontrollers to cloud services using MQTT protocol, with code examples and best practices.",
    content: `
## Why MQTT?

MQTT is the de-facto standard for IoT communications. It's lightweight, supports QoS levels, and works great even on unreliable networks.

## Setting Up the ESP32

First, we need to configure the WiFi and MQTT client. The PubSubClient library makes this straightforward.

## Message Structure

I use JSON for message payloads, keeping them compact but descriptive. Each message includes sensor ID, timestamp, and readings.

## Security Considerations

- Use TLS for MQTT connections
- Implement device authentication
- Validate all incoming data on the server

## Deployment Tips

For production deployments, consider using a dedicated MQTT broker like Mosquitto or a managed service.
    `,
    date: "2026-03-22",
    readTime: "6 min",
    tags: ["ESP32", "MQTT", "IoT", "Embedded"],
    featured: true,
  },
  {
    slug: "tailwindcss-design-system",
    title: "Creating a Consistent Design System with TailwindCSS v4",
    excerpt:
      "How I structure my TailwindCSS projects for maintainability, including custom themes, component patterns, and utility organization.",
    content: `
## The Problem with Ad-hoc Styling

Without a system, CSS becomes unmaintainable. Tailwind helps, but you still need structure.

## My Approach

1. Define design tokens in CSS variables
2. Create semantic utility classes
3. Build component abstractions
4. Document everything

## Token Organization

I organize tokens by purpose: colors, spacing, typography, and effects. This makes theming straightforward.

## Component Patterns

For complex components, I use a combination of Tailwind utilities and CSS modules where needed.

## Results

With this system, I can build consistent UIs faster and onboard new team members easily.
    `,
    date: "2026-02-10",
    readTime: "5 min",
    tags: ["TailwindCSS", "Design System", "CSS", "Frontend"],
    featured: false,
  },
  {
    slug: "syrian-tech-community",
    title: "Building Tech Communities in Challenging Environments",
    excerpt:
      "Reflections on growing as a developer in Syria, the challenges faced, and the resilient tech community that continues to thrive.",
    content: `
## Context

Being a developer in Syria presents unique challenges: infrastructure limitations, economic difficulties, and limited access to resources.

## The Community

Despite challenges, a vibrant tech community exists. Online groups, local meetups, and shared learning have been invaluable.

## Adapting to Constraints

- Working with unreliable internet
- Finding creative solutions to payment barriers
- Building skills with limited resources

## Looking Forward

Technology transcends borders. Through remote work and open source, Syrian developers contribute to the global tech ecosystem.
    `,
    date: "2026-01-05",
    readTime: "7 min",
    tags: ["Community", "Syria", "Personal", "Career"],
    featured: false,
  },
];

// Contact form configuration
export const contactConfig = {
  email: siteConfig.email,
  subjects: [
    "General Inquiry",
    "Project Collaboration",
    "Freelance Work",
    "Speaking/Interview",
    "Other",
  ],
  availability: "Usually responds within 24-48 hours",
};
