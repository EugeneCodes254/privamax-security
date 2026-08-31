import Header from "@/components/Header";

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
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#10231e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                  About Us
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Kenya&apos;s trusted security partner since 2016
              </h2>

              <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                Privamax Security was founded in 2016 and incorporated in Kenya
                on 21st May 2020 as a Limited Company. We provide customized
                security solutions to help protect your family, property, and
                business — delivering quality and timely services by focusing
                on productivity, customer care, and continuous improvement.
              </p>

              <a
                href="/services"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#10231e] px-8 py-4 font-bold text-white transition-all hover:bg-[#071b16]"
              >
                Our Services
                <ArrowIcon />
              </a>
            </div>

            <div className="space-y-5">
              {[
                {
                  number: "01",
                  title: "Certified Professionals",
                  description:
                    "All our officers meet minimum standards of training and are continually developed.",
                },
                {
                  number: "02",
                  title: "Latest Technology",
                  description:
                    "We deploy modern surveillance, access control, and cyber security systems.",
                },
                {
                  number: "03",
                  title: "24/7 Rapid Response",
                  description:
                    "Our response teams are well-equipped and available around the clock at your request.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-xs font-bold text-[#a18132]">
                    {item.number}
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-[#10231e]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="mt-24 grid gap-16 lg:mt-32 lg:grid-cols-2 lg:items-center lg:gap-20">

            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop"
                alt="Security professional monitoring CCTV in control room"
                className="h-[420px] w-full object-cover sm:h-[450px]"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-[#d6b25e]" />
                  <span className="text-sm font-semibold text-white">
                    Live monitoring — 24/7 response team active
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#10231e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Delivering the best security solutions to our clients
              </h2>

              <p className="text-lg leading-relaxed text-gray-600">
                Our security officers, technicians, and response teams are well
                equipped with the latest modern technology and are available
                24/7 at your request. We serve homes, corporate businesses,
                and high-net-worth individuals across Kenya.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-2">
                <div>
                  <div className="text-4xl font-bold text-[#10231e]">
                    98%
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Client Satisfaction
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-bold text-[#10231e]">
                    500+
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Installations Completed
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section
        id="services"
        className="relative overflow-hidden bg-white py-24 lg:py-32"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(16,35,30,0.035),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(214,178,94,0.045),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                Our Services
              </span>
              <span className="h-px w-10 bg-[#10231e]" />
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
              Comprehensive security solutions for Kenya
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              Professional security solutions designed to protect people,
              property, assets and businesses across Kenya.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "CCTV Cameras",
                icon: "cctv",
                description:
                  "HD surveillance systems with motion detection and instant alerts for total property monitoring.",
              },
              {
                title: "Electric Fence",
                icon: "fence",
                description:
                  "Premium perimeter protection ensuring entry only at designated areas. Razor wires included.",
              },
              {
                title: "Fire Alarm Systems",
                icon: "fire",
                description:
                  "Active fire detection systems providing early warning, evacuation alerts, and automatic suppression.",
              },
              {
                title: "Access Control",
                icon: "access",
                description:
                  "Biometric access, smart locks, and automated gate systems for controlled entry and exit.",
              },
              {
                title: "Private Investigation",
                icon: "investigation",
                description:
                  "Skilled investigators providing tangible evidence through surveillance, background checks, and forensics.",
              },
              {
                title: "Dog Security Service",
                icon: "dog",
                description:
                  "Professionally trained security dogs for property patrol, detection, and rapid-response protection.",
              },
              {
                title: "Automatic Gates",
                icon: "gate",
                description:
                  "Remote-controlled gate systems with smart device integration for enhanced home and office access.",
              },
            ].map((service, index) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#10231e] hover:bg-[#10231e] hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4f6f3] text-[#10231e] transition-all duration-300 group-hover:bg-[#d6b25e]">
                    <div className="h-7 w-7">
                      <ServiceIcon type={service.icon} />
                    </div>
                  </div>

                  <span className="text-xs font-bold text-gray-300 transition-colors group-hover:text-white/30">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-[#10231e] transition-colors group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500 transition-colors group-hover:text-white/65">
                  {service.description}
                </p>

                <a
                  href="/services"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#10231e] transition-colors group-hover:text-[#d6b25e]"
                >
                  Learn more
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-[#f4f6f3] p-8 sm:p-10">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#a18132]">
                  Also Available
                </div>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                  Cyber Security • VIP Protection • Security Audits • Alarm
                  Response • Asset Tracking • Security Consulting
                </p>
              </div>

              <a
                href="/contacts"
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#10231e] px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#071b16]"
              >
                Request a Quote
                <ArrowIcon />
              </a>
            </div>
          </div>

        </div>
      </section>

      <section
        id="quote"
        className="relative overflow-hidden bg-[#10231e] py-24 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#d6b25e]/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#071b16]/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#d6b25e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                Packages
              </span>
              <span className="h-px w-10 bg-[#d6b25e]" />
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Tailored security for every need
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-white/60">
              From residential homes to corporate offices to personal VIP
              protection — we have you covered.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {[
              {
                name: "Home Security",
                description:
                  "Protect your home with reliable surveillance and perimeter security.",
                features: [
                  "CCTV Camera Installation",
                  "Electric Fence Setup",
                  "Intruder Alarm System",
                  "Smart Door Locks",
                  "Free Site Survey",
                ],
              },
              {
                name: "Business Security",
                description:
                  "Comprehensive security packages for offices, malls, and corporate properties.",
                features: [
                  "Full CCTV Surveillance",
                  "Access Control Systems",
                  "Fire Alarm Integration",
                  "Security Guard Deployment",
                  "Automatic Gate Systems",
                  "24/7 Alarm Monitoring",
                ],
                featured: true,
              },
              {
                name: "VIP Protection",
                description:
                  "Close protection and private security for executives and high-net-worth individuals.",
                features: [
                  "Close Protection Officers",
                  "Private Investigation",
                  "Cyber Security Solutions",
                  "Dog Security Patrol",
                  "Asset Tracking",
                ],
              },
            ].map((item, index) => (
              <article
                key={item.name}
                className={`relative flex flex-col rounded-3xl p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  item.featured
                    ? "bg-[#d6b25e] text-[#10231e] shadow-xl shadow-black/20"
                    : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.07]"
                }`}
              >
                {item.featured && (
                  <div className="absolute right-6 top-6 rounded-full bg-[#10231e] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d6b25e]">
                    Popular
                  </div>
                )}

                <div
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    item.featured
                      ? "text-[#10231e]/60"
                      : "text-[#d6b25e]"
                  }`}
                >
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  {item.name}
                </h3>

                <p
                  className={`mt-4 text-sm leading-7 ${
                    item.featured
                      ? "text-[#10231e]/70"
                      : "text-white/60"
                  }`}
                >
                  {item.description}
                </p>

                <div className="my-7 h-px bg-current opacity-10" />

                <ul className="space-y-4">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 shrink-0 ${
                          item.featured
                            ? "text-[#10231e]"
                            : "text-[#d6b25e]"
                        }`}
                      >
                        <CheckIcon />
                      </span>

                      <span
                        className={`text-sm leading-6 ${
                          item.featured
                            ? "text-[#10231e]/80"
                            : "text-white/75"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contacts"
                  className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all ${
                    item.featured
                      ? "bg-[#10231e] text-white hover:bg-white hover:text-[#10231e]"
                      : "bg-white text-[#10231e] hover:bg-[#d6b25e]"
                  }`}
                >
                  Get a Quote
                  <ArrowIcon />
                </a>
              </article>
            ))}

          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="relative overflow-hidden bg-[#f4f6f3] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                Testimonials
              </span>
              <span className="h-px w-10 bg-[#10231e]" />
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
              What our clients say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                name: "Wangamati Edwin",
                role: "Cyber Security",
                text: "Thank you for protecting my firm against cyber attacks using your tailor made firewalls.",
              },
              {
                name: "Mary Wangari",
                role: "Private Investigations",
                text: "Liked the way you guys treat your customers, the prices are pretty great too!",
              },
              {
                name: "Paul Jameson",
                role: "Security Consultancy",
                text: "We ended up with the best security system in Karen Bogani area thanks to these guys.",
              },
              {
                name: "Amy Atieno",
                role: "Home Security",
                text: "The job was done perfectly. I would recommend PRIVAMAX SECURITY anytime you need a trusted professional to handle your security issues.",
              },
            ].map((testimonial) => (
              <article
                key={testimonial.name}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-5xl font-bold leading-none text-[#d6b25e]">
                  &ldquo;
                </div>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  {testimonial.text}
                </p>

                <div className="mt-8 border-t border-gray-100 pt-5">
                  <div className="font-bold text-[#10231e]">
                    {testimonial.name}
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071b16] py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#10231e] blur-3xl" />
          <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-[#d6b25e]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d6b25e]" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
              Get Protected Today
            </span>
            <span className="h-px w-10 bg-[#d6b25e]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Secure your home &amp; business with Privamax
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Request a free security audit from our experienced professionals.
            We&apos;ll assess your property and recommend a tailored solution
            — at no obligation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+254733669260"
              className="inline-flex items-center justify-center rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] shadow-lg shadow-[#d6b25e]/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Call Now
            </a>

            <a
              href="/contacts"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#10231e]"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#071b16] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <div className="lg:pr-8">
              <a href="/" className="inline-flex items-center gap-3">
                <img
                  src="/privamax-logo.png"
                  alt="Privamax Security"
                  className="h-12 w-auto object-contain"
                />

                <div className="flex flex-col leading-tight">
                  <span className="font-display text-sm font-bold tracking-wide text-white">
                    PRIVAMAX
                  </span>
                  <span className="font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-[#d6b25e]">
                    Security Firm Ltd
                  </span>
                </div>
              </a>

              <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
                Making your life safer, one solution at a time.
              </p>

              <a
                href="https://wa.me/254733669260"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#d6b25e]/40 hover:text-[#d6b25e]"
              >
                WhatsApp Us
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Company
              </h3>

              <div className="mt-6 space-y-3 text-sm text-white/55">
                <a className="block transition hover:text-[#d6b25e]" href="/company/about">
                  About Us
                </a>
                <a className="block transition hover:text-[#d6b25e]" href="/company/portfolio">
                  Our Portfolio
                </a>
                <a className="block transition hover:text-[#d6b25e]" href="/company/staff">
                  Our Staff
                </a>
                <a className="block transition hover:text-[#d6b25e]" href="/company/gallery">
                  Gallery
                </a>
                <a className="block transition hover:text-[#d6b25e]" href="/company/jobs">
                  Jobs
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Services
              </h3>

              <div className="mt-6 space-y-3 text-sm text-white/55">
                <a className="block transition hover:text-[#d6b25e]" href="/services#cctv">
                  CCTV Installation
                </a>
                <a className="block transition hover:text-[#d6b25e]" href="/services#electric-fence">
                  Electric Fence
                </a>
                <a className="block transition hover:text-[#d6b25e]" href="/services#access-control">
                  Access Control
                </a>
                <a className="block transition hover:text-[#d6b25e]" href="/services#fire-alarm">
                  Fire Alarm Systems
                </a>
                <a className="block transition hover:text-[#d6b25e]" href="/services#cyber-security">
                  Cyber Security
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Contact
              </h3>

              <div className="mt-6 space-y-4 text-sm text-white/55">

                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Phone
                  </div>

                  <a
                    className="block transition hover:text-[#d6b25e]"
                    href="tel:+254733669260"
                  >
                    +254 733 669 260
                  </a>

                  <a
                    className="block transition hover:text-[#d6b25e]"
                    href="tel:+254202070030"
                  >
                    +254 202 070 030
                  </a>
                </div>

                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Email
                  </div>

                  <a
                    className="break-all transition hover:text-[#d6b25e]"
                    href="mailto:info@privamaxsecurity.com"
                  >
                    info@privamaxsecurity.com
                  </a>
                </div>

                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Location
                  </div>

                  <span className="leading-6">
                    Ndovu Lane-Ndovu Close, Karen,
                    <br />
                    Nairobi, Kenya
                  </span>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-16 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Privamax Security © 2026. All rights reserved.
              </p>

              <div className="flex gap-5">
                <a href="#" className="transition hover:text-white">
                  Terms &amp; Conditions
                </a>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}
