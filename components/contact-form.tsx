"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { CheckIcon as Check, PaperPlaneTiltIcon as Send } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactConfig } from "@/lib/data";

const emptyFormState = {
  name: "",
  email: "",
  subject: contactConfig.subjects[0],
  message: "",
};

function Label({ children }: { children: React.ReactNode }) {
  return <span className="kicker">{children}</span>;
}

export function ContactForm() {
  const [formState, setFormState] = useState(emptyFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card/40 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
          <Check className="size-7" />
        </span>
        <h3 className="font-display mt-6 text-2xl tracking-tight text-foreground">
          Message sent
        </h3>
        <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormState(emptyFormState);
          }}
          className="mt-7 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2.5">
          <Label>Name</Label>
          <Input
            type="text"
            required
            value={formState.name}
            onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
            placeholder="Your name"
            className="h-11 rounded-xl"
          />
        </label>

        <label className="space-y-2.5">
          <Label>Email</Label>
          <Input
            type="email"
            required
            value={formState.email}
            onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
            placeholder="you@email.com"
            className="h-11 rounded-xl"
          />
        </label>
      </div>

      <div className="space-y-2.5">
        <Label>Subject</Label>
        <Select
          value={formState.subject}
          onValueChange={(value) => setFormState((s) => ({ ...s, subject: value }))}
        >
          <SelectTrigger className="h-11 w-full rounded-xl">
            <SelectValue placeholder="Choose a subject" />
          </SelectTrigger>
          <SelectContent>
            {contactConfig.subjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <label className="block space-y-2.5">
        <Label>Message</Label>
        <Textarea
          required
          rows={6}
          value={formState.message}
          onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
          placeholder="Tell me about your project, idea, or question…"
          className="min-h-32 rounded-xl"
        />
      </label>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="h-12 w-full rounded-full text-sm font-medium"
      >
        {isSubmitting ? (
          <span>Sending…</span>
        ) : (
          <>
            <span>Send message</span>
            <Send className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
