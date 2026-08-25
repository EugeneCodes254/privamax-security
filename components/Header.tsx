"use client";

import { useState } from "react";

const companyLinks = [
  { label: "About Us", href: "/company/about" },
  { label: "Our Portfolio", href: "/company/portfolio" },
  { label: "Our Staff", href: "/company/staff" },
  { label: "Gallery", href: "/company/gallery" },
  { label: "Jobs", href: "/company/jobs" },
];

const serviceLinks = [
  { label: "CCTV Cameras", href: "/services#cctv" },
  { label: "Electric Fence", href: "/services#electric-fence" },
  { label: "Fire Alarm Systems", href: "/services#fire-alarm" },
  { label: "Access Control", href: "/services#access-control" },
  { label: "Security Guarding", href: "/services#guarding" },
  { label: "Cyber Security", href: "/services#cyber-security" },
  { label: "Private Investigation", href: "/services#investigation" },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "SKR Track", href: "/track-cargo" },
  { label: "Blog", href: "/blog" },
  { label: "Contacts", href: "/contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setOpen(false);
    setCompanyOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-50 md:top-[32px]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-6">
        <a
          href="/"
          onClick={closeMenus}
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src="/privamax-logo.png"
            alt="Privamax Security"
            className="h-14 w-auto object-contain"
          />

          <div className="hidden leading-none text-white sm:block">
            <div className="text-xl font-extrabold tracking-tight">
              PRIVAMAX
            </div>

            <div className="mt-1 text-[9px] font-semibold tracking-[0.3em] text-white/70">
              SECURITY FIRM LTD
            </div>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="/"
            className="text-sm font-medium text-white transition hover:text-[#d6b25e]"
          >
            Home
          </a>

          {/* Company dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                setCompanyOpen(!companyOpen);
                setServicesOpen(false);
              }}
              className="flex items-center gap-1.5 text-sm font-medium text-white/75 transition hover:text-white"
            >
              Company

              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${
                  companyOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`absolute left-1/2 top-full w-56 -translate-x-1/2 pt-4 transition-all duration-200 ${
                companyOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071b16]/95 p-2 shadow-2xl backdrop-blur-xl">
                {companyLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setCompanyOpen(false);
              }}
              className="flex items-center gap-1.5 text-sm font-medium text-white/75 transition hover:text-white"
            >
              Services

              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071b16]/95 p-2 shadow-2xl backdrop-blur-xl">
                {serviceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contacts"
            className="ml-1 rounded-full bg-[#d6b25e] px-5 py-3 text-sm font-bold text-[#10231e] transition hover:bg-white"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu button */}
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
            ? "max-h-[850px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4">
          <a
            href="/"
            onClick={closeMenus}
            className="rounded-xl px-4 py-3.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Home
          </a>

          {/* Mobile Company */}
          <button
            type="button"
            onClick={() => {
              setCompanyOpen(!companyOpen);
              setServicesOpen(false);
            }}
            className="flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Company

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${
                companyOpen ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              companyOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-3 border-l border-white/10 pl-3">
              {companyLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                  className="block rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Services */}
          <button
            type="button"
            onClick={() => {
              setServicesOpen(!servicesOpen);
              setCompanyOpen(false);
            }}
            className="flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Services

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${
                servicesOpen ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              servicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-3 border-l border-white/10 pl-3">
              {serviceLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                  className="block rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {mainLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenus}
              className="rounded-xl px-4 py-3.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contacts"
            onClick={closeMenus}
            className="mt-2 rounded-xl bg-[#d6b25e] px-4 py-3.5 text-center text-sm font-bold text-[#10231e] transition hover:bg-white"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
