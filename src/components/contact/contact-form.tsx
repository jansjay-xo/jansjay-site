"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitted";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Placeholder: wire this to your API route or form backend later.
    setSubmitState("submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="section-card space-y-4" aria-label="Contact form">
      <h2>Quick message</h2>
      <p className="text-sm">Optional form for initial outreach.</p>

      <div className="space-y-1.5">
        <label htmlFor="name" className="section-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="neo-input"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="section-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="neo-input"
          placeholder="name@company.com"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="section-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="neo-input"
          placeholder="How can we work together?"
        />
      </div>

      <button type="submit" className="btn-base btn-primary">
        Send message
      </button>

      <p className="text-sm" aria-live="polite">
        {submitState === "submitted" ? "Thanks. This demo form is wired to a placeholder handler." : "Form submissions are currently placeholder only."}
      </p>
    </form>
  );
}
