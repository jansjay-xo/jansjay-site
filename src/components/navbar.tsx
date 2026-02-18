"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-paper/78 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="inline-flex w-fit items-center gap-2 text-base font-semibold tracking-tight sm:text-lg">
          <span className="h-2.5 w-2.5 rounded-sm bg-[var(--accent)] shadow-[2px_2px_0_rgba(15,23,42,0.35)]" aria-hidden="true" />
          Jansjay LLC
        </Link>
        <ul className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  data-active={isActive ? "true" : "false"}
                  className="nav-pill"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
