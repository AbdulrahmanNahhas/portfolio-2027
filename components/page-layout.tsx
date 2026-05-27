"use client"

import { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface PageLayoutProps {
  children: ReactNode
  showFooter?: boolean
}

export function PageLayout({ children, showFooter = true }: PageLayoutProps) {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-foreground/10">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-50">
        <div className="absolute inset-0 noise" />
      </div>
      
      <Navigation />
      
      {children}
      
      {showFooter && <Footer />}
    </main>
  )
}

// Page header component for consistent styling
interface PageHeaderProps {
  number: string
  label: string
  title: string
  description?: string
}

export function PageHeader({ number, label, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 border-b border-border">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-mono text-muted-foreground tracking-[0.3em]">{number}</span>
          <div className="w-12 h-px bg-border" />
          <span className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase">{label}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-foreground mb-6">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
