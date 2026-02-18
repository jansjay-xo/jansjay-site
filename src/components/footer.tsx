import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-900/10 bg-paper/72 sm:mt-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-7 text-sm text-slate-600 sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="max-w-3xl text-[0.9rem] leading-relaxed">
          © {new Date().getFullYear()} Jansjay LLC. Program and project leadership for clear execution, measurable outcomes, and strong cross-functional delivery.
        </p>
        <div className="flex items-center gap-2.5">
          <Link href="mailto:hello@jansjay.com" className="btn-base btn-secondary">
            Email
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="btn-base btn-primary">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
