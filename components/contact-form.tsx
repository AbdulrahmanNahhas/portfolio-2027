"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Check, Send } from "lucide-react";
import { contactConfig } from "@/lib/data";

const emptyFormState = {
  name: "",
  email: "",
  subject: contactConfig.subjects[0],
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState(emptyFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => window.setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-border p-12 text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center border border-foreground">
          <Check className="size-8 text-foreground" />
        </div>
        <h3 className="mb-4 text-xl text-foreground">Message Sent</h3>
        <p className="mb-8 text-muted-foreground">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormState(emptyFormState);
          }}
          className="font-mono text-sm text-foreground underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Name
          </span>
          <input
            type="text"
            required
            value={formState.name}
            onChange={(event) => setFormState((state) => ({ ...state, name: event.target.value }))}
            className="w-full border border-border bg-transparent px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Email
          </span>
          <input
            type="email"
            required
            value={formState.email}
            onChange={(event) => setFormState((state) => ({ ...state, email: event.target.value }))}
            className="w-full border border-border bg-transparent px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
            placeholder="your@email.com"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Subject
        </span>
        <select
          value={formState.subject}
          onChange={(event) => setFormState((state) => ({ ...state, subject: event.target.value }))}
          className="w-full cursor-pointer appearance-none border border-border bg-transparent px-4 py-3 text-foreground transition-colors focus:border-foreground focus:outline-none"
        >
          {contactConfig.subjects.map((subject) => (
            <option key={subject} value={subject} className="bg-background">
              {subject}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Message
        </span>
        <textarea
          required
          rows={6}
          value={formState.message}
          onChange={(event) => setFormState((state) => ({ ...state, message: event.target.value }))}
          className="w-full resize-none border border-border bg-transparent px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          placeholder="Tell me about your project or idea..."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-3 bg-foreground py-4 text-sm uppercase tracking-widest text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <span>Sending...</span>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
