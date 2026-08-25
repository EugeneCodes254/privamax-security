const projects = [
  {
    number: "01",
    title: "Corporate Security Systems",
    category: "Corporate Security",
    description:
      "Integrated security solutions designed to protect corporate offices, staff, assets, and critical business operations.",
  },
  {
    number: "02",
    title: "CCTV Surveillance",
    category: "Electronic Security",
    description:
      "Professional CCTV surveillance installations providing reliable monitoring and enhanced visibility across protected premises.",
  },
  {
    number: "03",
    title: "Access Control Systems",
    category: "Access Control",
    description:
      "Modern access control solutions designed to manage and monitor movement into restricted and high-security areas.",
  },
  {
    number: "04",
    title: "Perimeter Security",
    category: "Perimeter Protection",
    description:
      "Electric fencing and perimeter protection systems engineered to strengthen the outer security layer of properties.",
  },
  {
    number: "05",
    title: "Security Guard Services",
    category: "Manned Security",
    description:
      "Professionally trained security officers deployed to residential, commercial, institutional, and corporate environments.",
  },
  {
    number: "06",
    title: "Executive Protection",
    category: "VIP Protection",
    description:
      "Discreet close-protection solutions for executives, high-net-worth individuals, and clients requiring enhanced personal security.",
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

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f4f6f3]">
      <section className="relative overflow-hidden bg-[#071b16]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102d25] via-[#071b16] to-[#03100d]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
              <span className="h-px w-10 bg-[#d6b25e]" />
              Company
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Our Portfolio
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Explore the security solutions and protection services we
              provide to businesses, homes, institutions, and individuals
              across Kenya.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
                <span className="h-px w-10 bg-[#a18132]" />
                Our Work
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Security solutions built around our clients
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              From electronic security systems to professional guarding and
              executive protection, Privamax provides customized security
              solutions based on the unique requirements of every client.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group min-h-[360px] bg-white p-8 transition duration-300 hover:bg-[#10231e]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-extrabold text-[#a18132] group-hover:text-[#d6b25e]">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 group-hover:border-white/20 group-hover:text-white/50">
                    {project.category}
                  </span>
                </div>

                <div className="mt-20">
                  <h3 className="text-2xl font-bold text-[#10231e] group-hover:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 group-hover:text-white/60">
                    {project.description}
                  </p>

                  <a
                    href="/contacts"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#a18132] group-hover:text-[#d6b25e]"
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
