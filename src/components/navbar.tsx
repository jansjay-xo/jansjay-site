"use client";

import { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="z-50 border-b border-[var(--border)] bg-[color:color-mix(in_srgb,var(--surface)_80%,transparent)] backdrop-blur md:sticky md:top-0">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 text-base font-semibold tracking-tight transition-transform duration-150 hover:-translate-y-0.5 sm:text-lg"
        >
          <span
            className="h-2.5 w-2.5 rounded-sm bg-[var(--accent)] shadow-[2px_2px_0_rgba(15,23,42,0.28)]"
            aria-hidden="true"
          />
          Jansjay LLC
        </Link>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="btn-base btn-secondary px-3 py-2 text-xs md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <ul id="site-navigation" className={`w-full items-center gap-2 pt-1 md:flex md:w-auto md:pt-0 ${isOpen ? "flex flex-col" : "hidden"}`}>
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="w-full md:w-auto">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  data-active={isActive ? "true" : "false"}
                  className={`nav-pill w-full justify-center shadow-[2px_2px_0_rgba(15,23,42,0.08)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_rgba(15,23,42,0.14)] md:w-auto ${
                    isActive
                      ? "ring-2 ring-[color:color-mix(in_srgb,var(--accent)_40%,white)] ring-offset-1"
                      : ""
                  }`}
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
