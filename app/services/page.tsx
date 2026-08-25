const services = [
  {
    number: "01",
    title: "Security Guarding",
    description:
      "Professional and highly trained security personnel providing reliable protection for homes, businesses, institutions, and other facilities.",
    features: [
      "Manned guarding",
      "Corporate security",
      "Residential security",
      "24/7 security coverage",
    ],
  },
  {
    number: "02",
    title: "CCTV Surveillance",
    description:
      "Modern CCTV surveillance solutions designed to give you clear visibility, monitoring, and control over your property.",
    features: [
      "CCTV installation",
      "Remote monitoring",
      "IP camera systems",
      "Maintenance and support",
    ],
  },
  {
    number: "03",
    title: "Access Control",
    description:
      "Control and manage access to your premises using modern access control technologies tailored to your security requirements.",
    features: [
      "Biometric systems",
      "Smart access cards",
      "Gate automation",
      "Visitor management",
    ],
  },
  {
    number: "04",
    title: "Electric Fencing",
    description:
      "Reliable perimeter security systems designed to deter unauthorized access and strengthen the protection of your property.",
    features: [
      "Electric fence installation",
      "Perimeter protection",
      "Alarm integration",
      "System maintenance",
    ],
  },
  {
    number: "05",
    title: "Fire Detection & Alarm",
    description:
      "Early-warning fire detection systems that help protect people, property, and business operations from fire-related risks.",
    features: [
      "Fire alarm systems",
      "Smoke detection",
      "Heat detection",
      "System servicing",
    ],
  },
  {
    number: "06",
    title: "Private Investigation",
    description:
      "Professional investigative services providing discreet information gathering, surveillance, and evidence-based solutions.",
    features: [
      "Background checks",
      "Surveillance",
      "Corporate investigations",
      "Evidence gathering",
    ],
  },
  {
    number: "07",
    title: "Cyber Security",
    description:
      "Technology-driven security solutions designed to help businesses protect their systems, networks, data, and digital assets.",
    features: [
      "Network security",
      "Security assessments",
      "Firewall solutions",
      "Cyber security consulting",
    ],
  },
  {
    number: "08",
    title: "Vehicle & Asset Tracking",
    description:
      "Tracking solutions that provide visibility over vehicles and valuable assets while helping improve security and operational control.",
    features: [
      "GPS tracking",
      "Fleet monitoring",
      "Asset tracking",
      "Real-time alerts",
    ],
  },
  {
    number: "09",
    title: "Security Consultancy",
    description:
      "Professional security assessments and consultancy services helping organizations identify vulnerabilities and implement effective protection.",
    features: [
      "Security audits",
      "Risk assessments",
      "Security planning",
      "Professional advisory",
    ],
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

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-[#10231e] py-32 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,178,94,0.18),transparent_35%)]" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-[50px] border-white/[0.03]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-[#d6b25e]">
              <span className="h-px w-10 bg-[#d6b25e]" />
              Our Services
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Comprehensive security solutions for{" "}
              <span className="text-[#d6b25e]">Kenya</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              From physical security and electronic surveillance to
              investigations and cyber security, Privamax provides
              professional solutions designed around your specific needs.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contacts"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-7 py-4 font-bold text-[#10231e] transition hover:bg-white"
              >
                Request a Quote
                <ArrowIcon />
              </a>

              <a
                href="tel:+254733669260"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
              >
                +254 733 669 260
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
              <span className="h-px w-10 bg-[#a18132]" />
              What We Do
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
              Security designed around your needs
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We combine experienced security professionals with modern
              technology to deliver dependable protection for individuals,
              homes, businesses, and organizations.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0f3ef] text-sm font-extrabold text-[#10231e] transition group-hover:bg-[#d6b25e]">
                    {service.number}
                  </div>

                  <span className="text-[#d6b25e]">
                    <ArrowIcon />
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#10231e]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d6b25e]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contacts"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#a18132] transition hover:text-[#10231e]"
                >
                  Discuss a project
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10231e] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-5xl font-extrabold text-white">500+</div>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/45">
                Systems Installed
              </p>
            </div>

            <div>
              <div className="text-5xl font-extrabold text-[#d6b25e]">
                200+
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/45">
                Businesses Secured
              </p>
            </div>

            <div>
              <div className="text-5xl font-extrabold text-white">24/7</div>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/45">
                Response Team
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d6b25e] py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#10231e]/60">
              Start a Project
            </div>

            <h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-[#10231e] sm:text-5xl">
              Need a customized security solution?
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#10231e]/70">
              Speak to our team and let us assess your security requirements.
            </p>
          </div>

          <a
            href="/contacts"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#10231e] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
          >
            Contact Us
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
