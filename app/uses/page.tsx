import { PageLayout, PageHeader } from "@/components/page-layout"
import { Section, SectionHeader } from "@/components/section"
import { usesData } from "@/lib/data"
import { Code2, Wrench, Cpu, Terminal, Layers } from "lucide-react"

export const metadata = {
  title: "Uses",
  description: "The tools, software, and hardware I use for development and productivity.",
}

export default function UsesPage() {
  return (
    <PageLayout>
      <PageHeader 
        number="06"
        label="Setup"
        title="Uses"
        description="A comprehensive list of the tools, software, and hardware that power my daily workflow."
      />

      <Section bordered>
        <SectionHeader label="Hardware" icon={Cpu} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usesData.hardware.map((item, index) => (
              <div 
                key={item.name}
                className="group border border-border p-6 hover:border-foreground/50 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-muted-foreground">/{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <p className="text-xs font-mono text-muted-foreground/70">{item.details}</p>
              </div>
            ))}
          </div>
      </Section>

      <Section bordered>
        <SectionHeader label="Development Tools" icon={Code2} />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {usesData.software.development.map((item) => (
              <div 
                key={item.name}
                className="group flex items-center gap-6 py-4 border-b border-border/50 hover:border-foreground/30 transition-colors"
              >
                <div className="w-2 h-2 bg-foreground/30 group-hover:bg-foreground transition-colors" />
                <div className="flex-1">
                  <h3 className="text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
      </Section>

      <Section bordered>
        <SectionHeader label="Productivity" icon={Layers} />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {usesData.software.productivity.map((item) => (
              <div 
                key={item.name}
                className="group flex items-center gap-6 py-4 border-b border-border/50 hover:border-foreground/30 transition-colors"
              >
                <div className="w-2 h-2 bg-foreground/30 group-hover:bg-foreground transition-colors" />
                <div className="flex-1">
                  <h3 className="text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
      </Section>

      <Section bordered>
        <SectionHeader label="DevOps & Tools" icon={Terminal} />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {usesData.software.devTools.map((item) => (
              <div 
                key={item.name}
                className="group flex items-center gap-6 py-4 border-b border-border/50 hover:border-foreground/30 transition-colors"
              >
                <div className="w-2 h-2 bg-foreground/30 group-hover:bg-foreground transition-colors" />
                <div className="flex-1">
                  <h3 className="text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
      </Section>

      <Section>
        <SectionHeader label="Primary Stack" icon={Wrench} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usesData.stack.map((category, index) => (
              <div key={category.category} className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                  <h3 className="text-sm font-mono text-foreground tracking-widest uppercase">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.tools.map((tool) => (
                    <div 
                      key={tool}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </Section>
    </PageLayout>
  )
}
