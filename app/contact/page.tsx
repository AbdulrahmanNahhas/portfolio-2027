"use client"

import { useState } from "react"
import { PageLayout, PageHeader } from "@/components/page-layout"
import { siteConfig, contactConfig } from "@/lib/data"
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Check, Copy, ArrowUpRight } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: contactConfig.subjects[0],
    message: "",
  })
  const [copied, setCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <PageLayout>
      <PageHeader 
        number="08"
        label="Connect"
        title="Contact"
        description="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">Direct Contact</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                
                {/* Email */}
                <div className="group border border-border p-6 hover:border-foreground/50 transition-all mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Email</span>
                    </div>
                    <button
                      onClick={copyEmail}
                      className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a 
                    href={`mailto:${siteConfig.email}`}
                    className="text-lg text-foreground hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                {/* Location */}
                <div className="border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Location</span>
                  </div>
                  <p className="text-lg text-foreground">{siteConfig.location}</p>
                  <p className="text-sm text-muted-foreground mt-2">{contactConfig.availability}</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">Social</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "GitHub", url: siteConfig.social.github, icon: Github },
                    { name: "LinkedIn", url: siteConfig.social.linkedin, icon: Linkedin },
                    { name: "Twitter", url: siteConfig.social.twitter, icon: Twitter },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <social.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground">{social.name}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="border border-border p-6 bg-card/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 bg-foreground animate-pulse" />
                  <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Status</span>
                </div>
                <p className="text-foreground">Currently available for freelance work</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Open to full-time opportunities and interesting collaborations.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">Send Message</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {submitted ? (
                <div className="border border-border p-12 text-center">
                  <div className="w-16 h-16 border border-foreground flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl text-foreground mb-4">Message Sent</h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormState({ name: "", email: "", subject: contactConfig.subjects[0], message: "" })
                    }}
                    className="text-sm font-mono text-foreground underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                        className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Subject</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState(s => ({ ...s, subject: e.target.value }))}
                      className="w-full px-4 py-3 bg-transparent border border-border text-foreground focus:border-foreground focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {contactConfig.subjects.map(subject => (
                        <option key={subject} value={subject} className="bg-background">
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                      className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 bg-foreground text-background py-4 text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
