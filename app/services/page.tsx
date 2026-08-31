import Header from "@/components/Header";

const services = [
  {
    number: "01",
    title: "CCTV Cameras",
    image: "/images/services/cctv.png",
    description:
      "HD surveillance systems with motion detection and instant alerts for total property monitoring.",
    features: [
      "HD surveillance",
      "Night vision",
      "Motion detection alerts",
      "Remote smartphone access",
      "Cloud & local storage",
    ],
  },
  {
    number: "02",
    title: "Electric Fence",
    image: "/images/services/electric-fence.png",
    description:
      "Premium perimeter protection designed to deter unauthorized access and strengthen the security of your property.",
    features: [
      "High-voltage detection",
      "Razor wire integration",
      "Alarm integration",
      "SMS & app alerts",
      "Solar-powered options",
    ],
  },
  {
    number: "03",
    title: "Fire Alarm Systems",
    image: "/images/services/fire-alarm.jpg",
    description:
      "Active fire detection systems providing early warning and emergency protection for people, property, and business.",
    features: [
      "Smoke detection",
      "Heat detection",
      "Emergency alerts",
      "Automatic suppression integration",
      "System maintenance",
    ],
  },
  {
    number: "04",
    title: "Access Control",
    image: "/images/services/access-control.png",
    description:
      "Modern access management using biometric readers, smart cards, PINs, and controlled entry systems.",
    features: [
      "Biometric readers",
      "RFID key cards",
      "Visitor management",
      "Time & attendance",
      "CCTV integration",
    ],
  },
  {
    number: "05",
    title: "Security Guarding",
    image: "/images/services/guards.png",
    description:
      "Professional and highly trained security personnel providing dependable protection for homes, businesses, and institutions.",
    features: [
      "Manned guarding",
      "Corporate security",
      "Residential security",
      "Armed & unarmed officers",
      "24/7 security coverage",
    ],
  },
  {
    number: "06",
    title: "Private Investigation",
    image: "/images/services/bwc-camera.png",
    description:
      "Discreet investigative services providing information gathering, surveillance, background checks, and evidence-based solutions.",
    features: [
      "Background checks",
      "Surveillance",
      "Corporate investigations",
      "Evidence gathering",
      "Fraud investigation",
    ],
  },
  {
    number: "07",
    title: "Cyber Security",
    image: "/images/services/bwc-camera.png",
    description:
      "Technology-driven security services designed to protect networks, systems, data, and digital assets from evolving threats.",
    features: [
      "Network security",
      "Security assessments",
      "Firewall solutions",
      "Threat monitoring",
      "Cyber security consulting",
    ],
  },
  {
    number: "08",
    title: "Drone Security & Surveillance",
    image: "/images/services/drone-uav.png",
    description:
      "Advanced aerial surveillance for enhanced perimeter protection, site monitoring, and rapid incident response.",
    features: [
      "Aerial surveillance",
      "Live video streaming",
      "Automated patrol routes",
      "Rapid incident response",
      "Blind-spot elimination",
    ],
  },
  {
    number: "09",
    title: "Vehicle & Asset Tracking",
    image: "/images/hero/TRUCK-1.JPG",
    description:
      "Tracking solutions that improve visibility, operational control, and the security of vehicles and valuable assets.",
    features: [
      "GPS tracking",
      "Fleet monitoring",
      "Real-time alerts",
      "Asset tracking",
      "Operational reporting",
    ],
  },
];

const additionalServices = [
  "VIP Protection",
  "Alarm Response",
  "Automatic Gates",
  "Smart Door Locks",
  "Security Audits",
  "Security Consultancy",
  "Dog Security Service",
  "Satellite Crop Monitoring",
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
      aria-hidden="true"
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="relative">
        <Header />

        {/* Hero */}
        <section className="relative min-h-[690px] overflow-hidden bg-[#071b16]">
          <div className="absolute inset-0">
            <img
              src="/images/hero/nairobi-skyline.jpg"
              alt="Nairobi skyline"
              className="h-full w-full object-cover brightness-[0.52] saturate-[0.55] contrast-[1.08] hue-rotate-[8deg]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#0b2a21]/35 mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071b16]/35 via-transparent to-[#10231e]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071b16]/92 via-[#10231e]/68 to-[#10231e]/34" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/55 via-transparent to-[#071b16]/15" />
          </div>

          <div className="relative mx-auto flex min-h-[690px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Our Services
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Comprehensive security
                <span className="block text-[#d6b25e]">solutions for Kenya</span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/65">
                From physical security and electronic surveillance to
                investigations, tracking, and cyber security, Privamax provides
                professional solutions designed around your specific needs.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contacts"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] transition hover:brightness-110"
                >
                  Request a Quote
                  <ArrowIcon />
                </a>

                <a
                  href="tel:+254733669260"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#10231e]"
                >
                  +254 733 669 260
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Intro */}
      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                What We Do
              </span>
              <span className="h-px w-10 bg-[#10231e]" />
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
              Security designed around your needs
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              We combine experienced security professionals with modern
              technology to deliver dependable protection for individuals,
              homes, businesses, institutions, and valuable assets.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden bg-[#10231e]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/85 via-[#071b16]/20 to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full bg-[#d6b25e] px-3 py-1.5 text-xs font-bold text-[#10231e]">
                    {service.number}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#10231e]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <div className="my-6 h-px bg-gray-100" />

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span className="mt-0.5 shrink-0 text-[#d6b25e]">
                          <CheckIcon />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contacts"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#10231e] transition hover:text-[#a18132]"
                  >
                    Discuss a project
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative overflow-hidden bg-[#071b16] py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#d6b25e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                Also Available
              </span>
              <span className="h-px w-10 bg-[#d6b25e]" />
            </div>

            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              More security solutions
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => (
              <a
                key={service}
                href="/contacts"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition-all hover:-translate-y-0.5 hover:border-[#d6b25e]/40 hover:bg-white/10"
              >
                <span className="text-sm font-semibold text-white/80 group-hover:text-white">
                  {service}
                </span>

                <span className="text-[#d6b25e]">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["500+", "Systems Installed"],
              ["200+", "Businesses Secured"],
              ["24/7", "Response Team"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-100 bg-[#f4f6f3] p-8 text-center"
              >
                <div
                  className={`text-5xl font-bold ${
                    index === 1 ? "text-[#a18132]" : "text-[#10231e]"
                  }`}
                >
                  {value}
                </div>

                <div className="mt-2 text-sm uppercase tracking-[0.16em] text-gray-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#d6b25e] py-20 lg:py-24">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-[#10231e]/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#10231e]/60">
              Start a Project
            </div>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#10231e] sm:text-5xl">
              Need a customized security solution?
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#10231e]/70">
              Speak to our team and let us assess your security requirements.
            </p>
          </div>

          <a
            href="/contacts"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#10231e] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
          >
            Contact Us
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
