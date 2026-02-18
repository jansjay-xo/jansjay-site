import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-900/10 bg-[color:color-mix(in_srgb,var(--surface)_72%,transparent)] sm:mt-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted-text)]">Jansjay LLC</p>
          <p className="max-w-2xl text-[0.94rem] leading-relaxed text-[var(--muted-text)]">
            © {new Date().getFullYear()} Jansjay LLC. Delivery leadership for digital programs and cross-functional execution.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="mailto:hello@jansjay.com"
            className="btn-base btn-secondary shadow-[2px_2px_0_rgba(15,23,42,0.1)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_rgba(15,23,42,0.16)]"
          >
            Email
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-primary shadow-[2px_2px_0_rgba(15,23,42,0.14)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(15,23,42,0.2)]"
          >
            LinkedIn
          </Link>
          <Link
            href="/contact"
            className="btn-base btn-secondary shadow-[2px_2px_0_rgba(15,23,42,0.1)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_rgba(15,23,42,0.16)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
