import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Jay Smith at Jansjay LLC for senior project/program leadership opportunities and consulting conversations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="space-y-7">
      <header className="section-card space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
        <p className="max-w-3xl text-slate-700">
          If you are hiring for a senior delivery role or need project/program leadership support through Jansjay LLC, I would be
          glad to connect.
        </p>

        <div className="rounded-xl border border-teal-800/20 bg-teal-700/10 px-4 py-3">
          <p className="text-sm font-medium text-teal-900">Open to roles: Sr Project Manager, Associate Project Director, Associate Program Manager</p>
        </div>
      </header>

      <article className="section-card space-y-4 text-slate-700">
        <h2>Direct links</h2>
        <p>
          Email:{" "}
          <Link className="font-medium underline decoration-slate-400 underline-offset-4 hover:text-slate-900" href="mailto:jansjay@gmail.com">
            jansjay@gmail.com
          </Link>
        </p>
        <p>
          LinkedIn:{" "}
          <Link
            className="font-medium underline decoration-slate-400 underline-offset-4 hover:text-slate-900"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/your-handle
          </Link>
        </p>
        <p className="text-sm text-slate-600">Timezone: America/New_York</p>
      </article>

      <article className="section-card space-y-3 text-slate-700">
        <h2>Hiring manager outreach</h2>
        <p>Reach out to discuss full-time opportunities, team scope, and business priorities.</p>
        <h2>Consulting/project inquiry</h2>
        <p>Reach out for fractional or project-based delivery leadership through Jansjay LLC.</p>
      </article>

      <ContactForm />
    </section>
  );
}
