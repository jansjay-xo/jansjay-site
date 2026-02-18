import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "About Jay Smith: senior digital project and program delivery leader focused on clarity, execution quality, and business outcomes.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <header className="section-card space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-500">About</p>
        <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Senior delivery leader focused on digital project and program execution.
        </h1>
        <p className="max-w-3xl text-slate-700">
          I lead complex initiatives from planning through adoption, keeping strategy, delivery teams, and stakeholders aligned.
          My work centers on predictable execution, transparent decision-making, and outcomes that hold up beyond launch.
        </p>
      </header>

      <article className="section-card space-y-3 text-slate-700">
        <h2>My approach</h2>
        <p>
          I start by establishing shared clarity: what success looks like, what constraints matter, and which risks can change the
          path. From there, I build practical delivery structures with clear ownership, realistic milestones, and communication
          cadences that keep teams moving without unnecessary process overhead.
        </p>
        <p>
          I care about both speed and stability. That means creating enough rigor to avoid surprises while keeping plans flexible as
          priorities evolve.
        </p>
      </article>

      <article className="section-card space-y-3 text-slate-700">
        <h2>What I’m known for</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Turning ambiguous initiatives into actionable plans that teams can execute confidently.</li>
          <li>Building trust across product, engineering, operations, and leadership through clear communication.</li>
          <li>Managing risk early and visibly so decisions happen before issues become blockers.</li>
          <li>Improving delivery rhythm with governance that supports teams instead of slowing them down.</li>
        </ul>
      </article>

      <article className="section-card space-y-3 text-slate-700">
        <h2>Industries & environments</h2>
        <p>
          I have supported digital delivery in fast-moving, cross-functional environments, including B2B technology, platform
          operations, and service-led organizations. I’m comfortable leading through growth stages, transformation efforts, and
          multi-stakeholder programs where priorities shift and coordination is critical.
        </p>
      </article>

      <article className="section-card space-y-3 text-slate-700">
        <h2>Tools & ways of working</h2>
        <p>
          I adapt tooling to team needs, with a preference for simple systems that make status, risks, and decisions easy to see.
          Typical stacks include project planning boards, roadmap tools, documentation hubs, communication platforms, and dashboard
          reporting.
        </p>
        <p>
          Core practices include weekly planning cadences, dependency mapping, RAID tracking, clear decision logs, and concise
          executive updates.
        </p>
      </article>
    </section>
  );
}
