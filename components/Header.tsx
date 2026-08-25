"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 md:top-[32px]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-6">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/privamax-logo.png"
            alt="Privamax Security"
            width={180}
            height={70}
            priority
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
        </Link>

        <div className="hidden items-center gap-7 lg:flex">

          <Link
            href="/"
            className="text-sm font-medium text-white transition hover:text-[#d6b25e]"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white/75 transition hover:text-white"
            >
              Company
              <span className="text-[10px]">▾</span>
            </button>

            {companyOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-52 -translate-x-1/2 rounded-xl border border-white/10 bg-[#071b16] p-2 shadow-2xl">
                <Link
                  href="/company/about"
                  className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  About Us
                </Link>

                <Link
                  href="/company/portfolio"
                  className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  Portfolio
                </Link>

                <Link
                  href="/company/jobs"
                  className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  Jobs
                </Link>

                <Link
                  href="/company/staff"
                  className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  Staff
                </Link>

                <Link
                  href="/company/gallery"
                  className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  Gallery
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white/75 transition hover:text-white"
            >
              Services
              <span className="text-[10px]">▾</span>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-60 -translate-x-1/2 rounded-xl border border-white/10 bg-[#071b16] p-2 shadow-2xl">
                <Link
                  href="/services"
                  className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#d6b25e] transition hover:bg-white/10"
                >
                  All Services
                </Link>

                <Link
                  href="/services#cctv"
                  className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  CCTV Cameras
                </Link>

                <Link
                  href="/services#electric-fence"
                  className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  Electric Fence
                </Link>

                <Link
                  href="/services#fire-alarm"
                  className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  Fire Alarm Systems
                </Link>

                <Link
                  href="/services#access-control"
                  className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  Access Control
                </Link>

                <Link
                  href="/services#private-investigation"
                  className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#d6b25e]"
                >
                  Private Investigation
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/track-cargo"
            className="text-sm font-medium text-white/75 transition hover:text-white"
          >
            SKR Track
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium text-white/75 transition hover:text-white"
          >
            Blog
          </Link>

          <Link
            href="/contacts"
            className="text-sm font-medium text-white/75 transition hover:text-white"
          >
            Contacts
          </Link>

          <Link
            href="/contacts"
            className="rounded-full bg-[#d6b25e] px-5 py-3 text-sm font-bold text-[#10231e] transition hover:bg-white"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-white/30 p-3 text-white lg:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-5 rounded-2xl border border-white/10 bg-[#071b16]/95 p-4 shadow-2xl backdrop-blur-lg lg:hidden">
          <div className="flex flex-col">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 px-4 py-4 text-sm text-white"
            >
              Home
            </Link>

            <Link
              href="/company/about"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 px-4 py-4 text-sm text-white/75"
            >
              Company
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 px-4 py-4 text-sm text-white/75"
            >
              Services
            </Link>

            <Link
              href="/track-cargo"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 px-4 py-4 text-sm text-white/75"
            >
              SKR Track
            </Link>

            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 px-4 py-4 text-sm text-white/75"
            >
              Blog
            </Link>

            <Link
              href="/contacts"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 px-4 py-4 text-sm text-white/75"
            >
              Contacts
            </Link>

            <Link
              href="/contacts"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full bg-[#d6b25e] px-5 py-3 text-center text-sm font-bold text-[#10231e]"
            >
              Get a Quote
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
