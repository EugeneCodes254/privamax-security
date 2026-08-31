"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const whatsappUrl = "https://wa.me/254733669260";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/company/about" },
  { label: "Services", href: "/services" },
  { label: "Insurance", href: "/insurance" },
  { label: "Blog", href: "/blog" },
  { label: "Track Goods", href: "/track-cargo" },
  { label: "Contact", href: "/contacts" },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      width="24"
      height="24"
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
      width="24"
      height="24"
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
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 fill-white"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.849L.057 23.999l6.304-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.001-1.368l-.36-.213-3.732.979.995-3.638-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const isHome = pathname === "/";
  const solidHeader = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          solidHeader
            ? "bg-[#071b16]/95 shadow-lg shadow-black/20 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="hidden border-b border-white/10 bg-[#071b16]/40 md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[11px]">
            <span className="text-white/55">
              Professional Security Solutions Across Kenya
            </span>

            <div className="flex items-center gap-6">
              <a
                href="tel:+254733669260"
                className="text-white/65 transition hover:text-[#d6b25e]"
              >
                +254 733 669 260
              </a>

              <a
                href="mailto:info@privamaxsecurity.com"
                className="text-white/65 transition hover:text-[#d6b25e]"
              >
                info@privamaxsecurity.com
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
            aria-label="Privamax Security"
          >
            <img
              src="/privamax-logo.png"
              alt="Privamax Security Logo"
              className="h-10 w-auto object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm font-bold tracking-wide text-white sm:text-base">
                PRIVAMAX
              </span>
              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-[#d6b25e] sm:text-[10px]">
                Security Firm Ltd
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.label === "Home" && pathname === "/");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`cursor-pointer text-sm font-medium transition-colors ${
                    active
                      ? "text-[#d6b25e]"
                      : "text-white/80 hover:text-[#d6b25e]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <a
              href="/contacts"
              className="group flex items-center gap-2 rounded-full bg-[#d6b25e] px-6 py-2.5 text-sm font-semibold text-[#10231e] shadow-lg shadow-[#d6b25e]/20 transition-all hover:brightness-110"
            >
              Get a Quote
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            className="text-white md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`absolute left-0 right-0 top-full border-t border-white/10 bg-[#071b16] shadow-xl transition-all duration-300 md:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-lg font-medium transition ${
                  pathname === link.href
                    ? "text-[#d6b25e]"
                    : "text-white hover:bg-white/5 hover:text-[#d6b25e]"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="tel:+254202070030"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-xl bg-[#d6b25e] px-6 py-3 text-center font-semibold text-[#10231e]"
            >
              Call +254 202 070 030
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform hover:scale-110"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
