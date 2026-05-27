"use client";

import { ArrowRight, Code2, Cpu, Globe, Sparkles } from "lucide-react";
import Link from "next/link";
import { experiences, siteConfig, skillCategories } from "@/lib/data";

const highlights = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building modern, responsive web applications with Next.js, React, and TypeScript",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Creating firmware solutions for IoT devices using ESP32 and Arduino platforms",
  },
  {
    icon: Code2,
    title: "Full-Stack",
    description: "End-to-end development from database design to polished user interfaces",
  },
];

export function AboutSection() {
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const activeExperiences = experiences.filter((e) => e.current).length;

  return (
    <section id="about" className="relative py-32 px-6 lg:px-12">
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-[0.3em]">02</span>
          <div className="w-12 h-px bg-border" />
          <span className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase">
            About
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left: Bio */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground leading-tight text-balance">
              A developer passionate about creating meaningful digital experiences
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"I'm"} {siteConfig.name}, a software developer from {siteConfig.location} with a
                focus on building clean, efficient, and user-centered applications. My journey in
                tech spans from crafting responsive web interfaces to programming embedded systems.
              </p>
              <p>
                Currently, {"I'm"} working on humanitarian technology projects, contributing to
                organizations that make a difference. I believe technology should serve people, and
                I strive to build solutions that are both technically sound and genuinely useful.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase border border-border px-6 py-3 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <span>About me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/skills"
                className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>All Skills</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group flex gap-6 p-6 border border-border hover:border-foreground/30 transition-all duration-500"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground group-hover:border-foreground/50 group-hover:text-foreground transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg text-foreground">{item.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="border-t border-b border-border py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: totalSkills, label: "Technical Skills" },
              { value: `${activeExperiences}`, label: "Active Roles" },
              { value: "3+", label: "Years Coding" },
              { value: "100%", label: "Remote Friendly" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-normal text-foreground mb-2 font-mono">
                  {stat.value}
                </p>
                <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Skills Preview */}
        <div className="pt-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-muted-foreground" />
              <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
                Featured Skills
              </span>
            </div>
            <Link
              href="/skills"
              className="group flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {skillCategories.flatMap((cat) =>
              cat.skills
                .filter((s) => s.featured)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="text-sm font-mono text-foreground border border-border px-4 py-2 hover:border-foreground/50 transition-colors"
                  >
                    {skill.name}
                  </span>
                )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
