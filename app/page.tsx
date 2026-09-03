import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Privamax Security Firm Limited | Security Company in Kenya",
  description:
    "Privamax Security Firm Limited provides professional security services across Kenya, including security guarding, CCTV surveillance, access control, electric fencing, private investigations, cyber security, drone surveillance and cash in transit.",
  alternates: {
    canonical: "https://privamaxsecurity.com/",
  },
  openGraph: {
    url: "https://privamaxsecurity.com/",
    title: "Privamax Security Firm Limited | Security Company in Kenya",
    description:
      "Professional security services and technology-enabled protection for people, property, assets and business operations across Kenya.",
  },
};

const services = [
  {
    number: "01",
    title: "CCTV Cameras",
    description:
      "HD surveillance systems with motion detection and instant alerts for total property monitoring.",
    icon: "camera",
  },
  {
    number: "02",
    title: "Electric Fence",
    description:
      "Premium perimeter protection ensuring entry only at designated areas. Razor wires included.",
    icon: "fence",
  },
  {
    number: "03",
    title: "Fire Alarm Systems",
    description:
      "Active fire detection systems providing early warning, evacuation alerts, and automatic suppression.",
    icon: "fire",
  },
  {
    number: "04",
    title: "Access Control",
    description:
      "Biometric access, smart locks, and automated gate systems for controlled entry and exit.",
    icon: "lock",
  },
  {
    number: "05",
    title: "Private Investigation",
    description:
      "Skilled investigators providing tangible evidence through surveillance, background checks, and forensics.",
    icon: "search",
  },
  {
    number: "06",
    title: "Dog Security Service",
    description:
      "Professionally trained security dogs for property patrol, detection, and rapid-response protection.",
    icon: "dog",
  },
  {
    number: "07",
    title: "Automatic Gates",
    description:
      "Remote-controlled gate systems with smart device integration for enhanced home and office access.",
    icon: "gate",
  },
];

const packages = [
  {
    title: "Home Security",
    description:
      "Protect your home with reliable surveillance and perimeter security",
    features: [
      "CCTV Camera Installation",
      "Electric Fence Setup",
      "Intruder Alarm System",
      "Smart Door Locks",
      "Free Site Survey",
    ],
  },
  {
    title: "Business Security",
    description:
      "Comprehensive security packages for offices, malls, and corporate properties",
    features: [
      "Full CCTV Surveillance",
      "Access Control Systems",
      "Fire Alarm Integration",
      "Security Guard Deployment",
      "Automatic Gate Systems",
      "24/7 Alarm Monitoring",
    ],
  },
  {
    title: "VIP Protection",
    description:
      "Close protection and private security for executives and high-net-worth individuals",
    features: [
      "Close Protection Officers",
      "Private Investigation",
      "Cyber Security Solutions",
      "Dog Security Patrol",
      "Asset & Vehicle Tracking",
      "Security Audit & Consulting",
      "Dedicated Account Manager",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Thanks for the quick and professional service! They have been protecting my firm against cyber attacks using their tailor made firewalls.",
    name: "Wangamati Edwin",
    role: "Cyber Security Client",
  },
  {
    quote:
      "We ended up with the best security system in Karen Bogani area thanks to these guys.",
    name: "Paul Jameson",
    role: "Karen Bogani Resident",
  },
  {
    quote:
      "The job was done perfectly. I would recommend and vouch for PRIVAMAX SECURITY anytime you need a trusted professional to handle your security issues.",
    name: "Amy Atieno",
    role: "Home Security Client",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "camera") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M4 8h4l1.5-2h5L16 8h4v11H4z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    );
  }

  if (type === "fence") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M4 20V6m16 14V6M4 10h16M4 15h16" />
        <path d="m7 6 2-3 2 3 2-3 2 3 2-3 2 3" />
      </svg>
    );
  }

  if (type === "fire") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M12 21a6 6 0 0 0 6-6c0-3.8-3.2-6-4.4-9.2-.9 1.4-2 2.4-3.1 3.2C9.8 6.5 8.5 5 8.6 3 5.8 5.2 4 8.1 4 12.4A6.6 6.6 0 0 0 12 21Z" />
        <path d="M12 21c-2.2-1.1-2.8-3.2-1.8-5.2.5-1 1.2-1.7 2-2.3.4 1 1.1 2 1.7 2.5.8 1.3.3 3.7-1.9 5Z" />
      </svg>
    );
  }

  if (type === "lock") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15" r="1" />
      </svg>
    );
  }

  if (type === "dog") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 9.5 5.5 6 8 4l2.5 2h3L16 4l2.5 2L17 9.5" />
        <path d="M7 9.5c-1 1.3-1.5 3-1.5 5v2.5c0 1.7 1.3 3 3 3h7c1.7 0 3-1.3 3-3v-2.5c0-2-.5-3.7-1.5-5" />
        <circle cx="9" cy="11" r=".7" />
        <circle cx="15" cy="11" r=".7" />
        <path d="M10 14c1.2 1 2.8 1 4 0" />
      </svg>
    );
  }

  if (type === "gate") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20V6h7v14" />
        <path d="M13 20V6h7v14" />
        <path d="M7 6V3h10v3" />
        <path d="M4 20h16" />
        <path d="M7 9h4M7 13h4M13 9h4M13 13h4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 5 5" />
      <path d="M8 10.5h5" />
      <path d="M10.5 8v5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="hidden bg-[#071f1a] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="text-white/70">
            Kenya&apos;s trusted security partner since 2016
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:+254733669260" className="transition hover:text-[#d6b25e]">
              +254 733 669 260
            </a>
            <a href="mailto:info@privamaxsecurity.com" className="transition hover:text-[#d6b25e]">
              info@privamaxsecurity.com
            </a>
          </div>
        </div>
      </div>

      <Header />

      <section className="relative min-h-[850px] min-h-screen flex items-center overflow-hidden bg-[#10231e]">
        <div className="absolute inset-0">
          <img
            src="/images/hero/nairobi-skyline.jpg"
            alt="Nairobi skyline"
            className="h-full w-full object-cover brightness-[0.78] saturate-[0.55] contrast-[1.06]"
          />
          <div className="absolute inset-0 bg-[#0b2a21]/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071b16]/85 via-[#10231e]/55 to-[#10231e]/25" />

          <div className="absolute inset-0 bg-[#10231e]/28" />
          <div className="pointer-events-none absolute inset-0 bg-[#10231e]/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071b16]/95 via-[#10231e]/68 to-[#10231e]/34" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/55 via-transparent to-[#071b16]/20" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d6b25e]" />
              <span className="rounded-full border border-[#d6b25e]/20 bg-[#d6b25e]/10 px-4 py-2 text-sm font-semibold text-[#d6b25e]">
                Trusted Since 2016
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
              Best Security
              <span className="block text-[#d6b25e]">
                Company in Kenya
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-relaxed text-white/70">
              We provide fast, professional, and exceptional security
              services — from CCTV surveillance and access control to armed
              guards and cyber security across Kenya.
            </p>

            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] shadow-lg shadow-[#d6b25e]/20 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Services
                <ArrowIcon />
              </a>

              <a
                href="tel:+254733669260"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-[#10231e]"
              >
                +254 733 669 260
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#d6b25e]/10 blur-3xl" />

        <div className="pointer-events-none absolute right-[-80px] top-1/4 h-48 w-48 rounded-full bg-[#10231e]/30 blur-3xl" />

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#071b16]/45 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-6 py-5 sm:px-8">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-extrabold text-white sm:text-3xl">
                500+
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                Systems Installed
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-extrabold text-white sm:text-3xl">
                200+
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                Businesses Secured
              </div>
            </div>

            <div className="text-center sm:text-right">
              <div className="text-2xl font-extrabold text-[#d6b25e] sm:text-3xl">
                24/7
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                Response Team
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f4f6f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-20">

            <div className="space-y-8">