import Header from "@/components/Header";

const projects = [
  {
    number: "01",
    title: "Corporate Security Systems",
    category: "Corporate Security",
    image: "/images/services/cctv.png",
    description:
      "Integrated security solutions designed to protect corporate offices, staff, assets, and critical business operations.",
    features: ["CCTV surveillance", "Access control", "Alarm systems", "24/7 response"],
  },
  {
    number: "02",
    title: "CCTV Surveillance",
    category: "Electronic Security",
    image: "/images/services/cctv.png",
    description:
      "Professional CCTV surveillance installations providing reliable monitoring and enhanced visibility across protected premises.",
    features: ["HD cameras", "Remote monitoring", "Night vision", "Maintenance & support"],
  },
  {
    number: "03",
    title: "Access Control Systems",
    category: "Access Control",
    image: "/images/services/access-control.png",
    description:
      "Modern access control solutions designed to manage and monitor movement into restricted and high-security areas.",
    features: ["Biometric access", "RFID cards", "Visitor management", "Time & attendance"],
  },
  {
    number: "04",
    title: "Perimeter Security",
    category: "Perimeter Protection",
    image: "/images/services/electric-fence.png",
    description:
      "Electric fencing and perimeter protection systems engineered to strengthen the outer security layer of properties.",
    features: ["Electric fencing", "Alarm integration", "Perimeter monitoring", "System maintenance"],
  },
  {
    number: "05",
    title: "Security Guard Services",
    category: "Manned Security",
    image: "/images/services/guards.png",
    description:
      "Professionally trained security officers deployed to residential, commercial, institutional, and corporate environments.",
    features: ["Manned guarding", "Residential security", "Corporate security", "Rapid response"],
  },
  {
    number: "06",
    title: "Executive Protection",
    category: "VIP Protection",
    image: "/images/services/guards.png",
    description:
      "Discreet close-protection solutions for executives, high-net-worth individuals, and clients requiring enhanced personal security.",
    features: ["Close protection", "Secure transportation", "Risk assessment", "Security planning"],
  },
];

const stats = [
  ["500+", "Systems Installed"],
  ["200+", "Businesses Secured"],
  ["98%", "Client Satisfaction"],
  ["24/7", "Response Team"],
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

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="relative">
        <Header />

        <section className="relative min-h-[650px] overflow-hidden bg-[#071b16]">
          <div className="absolute inset-0">
            <img
              src="/images/hero/nairobi-skyline.jpg"
              alt="Nairobi skyline"
              className="h-full w-full object-cover brightness-[0.42] saturate-[0.6]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071b16]/95 via-[#10231e]/70 to-[#10231e]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/60 via-transparent to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Company
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Our <span className="text-[#d6b25e]">Portfolio</span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/65">
                Explore the security solutions and protection services we
                provide to businesses, homes, institutions, and individuals
                across Kenya.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contacts"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] transition hover:brightness-110"
                >
                  Start a Project
                  <ArrowIcon />
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#10231e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                  Our Work
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Security solutions built around our clients
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 lg:justify-self-end">
              From electronic security systems to professional guarding and
              executive protection, Privamax provides customized security
              solutions based on the unique requirements of every client.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-60 overflow-hidden bg-[#10231e]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/85 via-transparent to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full bg-[#d6b25e] px-3 py-1.5 text-xs font-bold text-[#10231e]">
                    {project.number}
                  </span>

                  <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-[#071b16]/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#10231e]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-gray-100 pt-6">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <span className="text-[#d6b25e]">
                          <CheckIcon />
                        </span>
                        {feature}
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

      <section className="relative overflow-hidden bg-[#071b16] py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map(([value, label], index) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <div
                  className={`text-4xl font-bold sm:text-5xl ${
                    index === 1 ? "text-[#d6b25e]" : "text-white"
                  }`}
                >
                  {value}
                </div>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/45">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
