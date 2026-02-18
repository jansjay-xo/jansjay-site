export type CaseStudySummary = {
  role: string;
  scope: string;
  teamStakeholders: string;
  channels: string;
  timeline: string;
  outcomes: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  teaser: string;
  challenge: string;
  approach: string[];
  impact: string[];
  skills: string[];
  summary: CaseStudySummary;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "global-pmo-reset",
    title: "Global PMO Reset for Multi-Market Launches",
    teaser: "Standardized planning and governance across three regions to improve launch reliability.",
    challenge:
      "Regional teams used different delivery cadences, making dependencies hard to track and executive reporting inconsistent.",
    approach: [
      "Created a single operating cadence with milestone gates, RAID standards, and launch readiness criteria.",
      "Set up weekly portfolio reviews with decision logs and a shared view of blocker ownership.",
      "Introduced a one-page executive dashboard focused on schedule health, risk burn-down, and critical path changes.",
    ],
    impact: [
      "Improved on-time launch rate from 61% to 88% in two quarters.",
      "Reduced unresolved cross-team blockers by 46% before gate reviews.",
      "Cut executive status prep time by roughly 30% through standardized reporting.",
    ],
    skills: ["Portfolio Governance", "Risk Management", "Executive Communication", "Cross-Functional Leadership"],
    summary: {
      role: "Sr Project Manager",
      scope: "Portfolio-wide PMO reset spanning product, engineering, operations, and enablement.",
      teamStakeholders: "24 core team members; VP Product, VP Engineering, regional operations leads.",
      channels: "Weekly steering committee, Slack, Jira, Confluence, monthly QBR readouts.",
      timeline: "6 months (planning + rollout).",
      outcomes: ["On-time launches increased to 88%", "Blockers reduced by 46%", "Reporting overhead reduced by 30%"],
    },
  },
  {
    slug: "customer-migration-program",
    title: "Enterprise Customer Migration Program",
    teaser: "Coordinated migration of strategic accounts to a new platform without service disruption.",
    challenge:
      "High-value customers needed migration during active contract cycles, with strict reliability and communication requirements.",
    approach: [
      "Segmented customers by complexity and created phased migration waves with clear entry/exit criteria.",
      "Built an integrated plan across product, support, CSM, and solution engineering.",
      "Ran daily risk triage and stakeholder updates during each migration wave.",
    ],
    impact: [
      "Migrated 97% of target accounts before renewal deadlines.",
      "Maintained zero Sev-1 incidents during cutover windows.",
      "Raised customer confidence with a consistent comms plan and milestone visibility.",
    ],
    skills: ["Program Management", "Dependency Mapping", "Operational Readiness", "Stakeholder Alignment"],
    summary: {
      role: "Associate Program Manager",
      scope: "Strategic migration program covering onboarding, technical transition, and support continuity.",
      teamStakeholders: "18-person core team; customer success, support leadership, solutions architects, finance.",
      channels: "Daily standups, customer-facing comms cadences, Salesforce, Jira, shared runbooks.",
      timeline: "4.5 months across three migration waves.",
      outcomes: ["97% migrated pre-renewal", "Zero Sev-1 incidents", "Improved CSM confidence and predictability"],
    },
  },
  {
    slug: "delivery-transformation-office",
    title: "Delivery Transformation Office Pilot",
    teaser: "Launched a lightweight DTO model to improve execution consistency across initiatives.",
    challenge:
      "Programs were delivered by strong teams, but planning quality and decision-making rigor varied by initiative lead.",
    approach: [
      "Defined minimum delivery standards for plans, risk logs, dependencies, and change control.",
      "Coached leads through a 90-day pilot with office hours and playbook templates.",
      "Established KPI baselines and monthly governance check-ins to track adoption.",
    ],
    impact: [
      "Increased milestone predictability by 22% in pilot initiatives.",
      "Improved stakeholder trust through clearer risk and decision transparency.",
      "Built a reusable playbook adopted by adjacent teams after pilot close.",
    ],
    skills: ["PMO Design", "Process Improvement", "Coaching", "Metrics & Governance"],
    summary: {
      role: "Associate Project Director",
      scope: "90-day pilot to define and prove a scalable delivery operating model.",
      teamStakeholders: "12 initiative leads; transformation sponsor, PMO director, functional managers.",
      channels: "Biweekly governance reviews, template toolkit, status notes, leadership updates.",
      timeline: "3 months pilot + transition period.",
      outcomes: ["Predictability up 22%", "Stronger risk transparency", "Playbook adopted beyond pilot"],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
