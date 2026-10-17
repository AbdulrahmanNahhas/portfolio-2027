"use client";

import { copy, message } from "@/lib/content";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { contactConfig } from "@/lib/data";

export function ContactForm() {
  const [opened, setOpened] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get("subject") ?? contactConfig.defaultSubject);
    const body = `${contactConfig.salutation}\n\n${form.get("message")}\n\n— ${form.get("name")}\n${form.get("email")}`;
    window.location.href = `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }
  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="contact-name">
            {copy.contactForm.yourName}
          </FieldLabel>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder={copy.contactForm.namePlaceholder}
            required
            maxLength={100}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-email">
            {copy.contactForm.yourEmail}
          </FieldLabel>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={copy.contactForm.emailPlaceholder}
            required
            maxLength={254}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-subject">
            {copy.contactForm.whatsOnYourMind}
          </FieldLabel>
          <NativeSelect id="contact-subject" name="subject" className="w-full">
            {contactConfig.subjects.map((subject) => (
              <NativeSelectOption value={subject} key={subject}>
                {subject}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-message">
            {copy.contactForm.yourMessage}
          </FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            placeholder={copy.contactForm.messagePlaceholder}
          />
          <FieldDescription>
            {copy.contactForm.emailHandoffHelp}
          </FieldDescription>
        </Field>
        <Button type="submit">
          {copy.contactForm.createAnEmail}
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
        {opened && (
          <p role="status">
            {message(copy.contactForm.openedStatus, {
              email: contactConfig.email,
            })}
          </p>
        )}
      </FieldGroup>
    </form>
  );
}
