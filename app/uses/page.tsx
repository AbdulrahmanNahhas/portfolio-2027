import { PageLayout, PageHeader } from "@/components/page-layout"
import { usesData } from "@/lib/data"
import { Monitor, Code2, Wrench, Cpu, Terminal, Layers } from "lucide-react"

export const metadata = {
  title: "Uses | Abdulrahman Nahhas",
  description: "The tools, software, and hardware I use for development and productivity.",
}

const icons: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
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

      {/* Hardware */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <Cpu className="w-4 h-4 text-muted-foreground" />
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">Hardware</span>
            <div className="flex-1 h-px bg-border" />
          </div>

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
        </div>
      </section>

      {/* Software - Development */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <Code2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">Development Tools</span>
            <div className="flex-1 h-px bg-border" />
          </div>

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
        </div>
      </section>

      {/* Software - Productivity */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <Layers className="w-4 h-4 text-muted-foreground" />
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">Productivity</span>
            <div className="flex-1 h-px bg-border" />
          </div>

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
        </div>
      </section>

      {/* Software - DevTools */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <Terminal className="w-4 h-4 text-muted-foreground" />
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">DevOps & Tools</span>
            <div className="flex-1 h-px bg-border" />
          </div>

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
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <Wrench className="w-4 h-4 text-muted-foreground" />
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">Primary Stack</span>
            <div className="flex-1 h-px bg-border" />
          </div>

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
        </div>
      </section>
    </PageLayout>
  )
}
