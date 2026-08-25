 "use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company/about" },
  { label: "Services", href: "/services" },
  { label: "SKR Track", href: "/track-cargo" },
  { label: "Blog", href: "/blog" },
  { label: "Contacts", href: "/contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 md:top-[32px]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-6">

        <a
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/privamax-logo.png"
            alt="Privamax Security"
            className="h-14 w-auto object-contain"
          />

          <div className="leading-none text-white">
            <div className="text-xl font-extrabold tracking-tight">
              PRIVAMAX
            </div>

            <div className="mt-1 text-[9px] font-semibold tracking-[0.3em] text-white/70">
              SECURITY FIRM LTD
            </div>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                index === 0
                  ? "text-white"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contacts"
            className="rounded-full bg-[#d6b25e] px-5 py-3 text-sm font-bold text-[#10231e] transition hover:bg-white"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/30 p-3 text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`mx-4 overflow-hidden rounded-2xl border border-white/10 bg-[#071b16]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contacts"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-[#d6b25e] px-4 py-3.5 text-center text-sm font-bold text-[#10231e] transition hover:bg-white"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
