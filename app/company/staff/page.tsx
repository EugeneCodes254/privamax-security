const team = [
  {
    number: "01",
    name: "Security Operations Team",
    role: "Security Officers",
    description:
      "Professionally trained officers responsible for protecting client premises, people, assets, and daily operations.",
  },
  {
    number: "02",
    name: "Security Management",
    role: "Operations & Supervision",
    description:
      "Experienced supervisors and managers coordinating deployments, quality control, client relationships, and response operations.",
  },
  {
    number: "03",
    name: "Technical Team",
    role: "Electronic Security",
    description:
      "Qualified technicians responsible for the installation, configuration, maintenance, and support of modern security systems.",
  },
  {
    number: "04",
    name: "Response Team",
    role: "24/7 Rapid Response",
    description:
      "A dedicated response team equipped to react quickly to security incidents and support clients whenever assistance is required.",
  },
];

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-8 w-8"
    >
      <path d="M12 3 20 6v5c0 5.2-3.4 8.8-8 10-4.6-1.2-8-4.8-8-10V6l8-3Z" />
      <path d="m8.5 12 2.3 2.3 4.7-5" />
    </svg>
  );
}

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

export default function StaffPage() {
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
              Our Staff
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Meet the people behind our commitment to professional,
              dependable, and technology-driven security services.
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
                Our People
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Professionals you can trust
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Our people are at the heart of our security operations. We bring
              together trained security officers, experienced supervisors,
              technical specialists, and rapid response personnel to provide
              complete protection for our clients.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {team.map((member) => (
              <article
                key={member.number}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#d6b25e] hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0f3ef] text-[#10231e] transition group-hover:bg-[#d6b25e]">
                    <ShieldIcon />
                  </div>

                  <span className="text-sm font-extrabold text-[#a18132]">
                    {member.number}
                  </span>
                </div>

                <div className="mt-10">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#a18132]">
                    {member.role}
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-[#10231e]">
                    {member.name}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10231e] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
                <span className="h-px w-10 bg-[#d6b25e]" />
                Professional Standards
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Trained. Equipped. Ready.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                We continuously develop our teams so that our officers and
                technical specialists are prepared to meet changing security
                requirements and deliver dependable service.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                "Professional Training",
                "Modern Equipment",
                "Continuous Development",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="text-sm font-extrabold text-[#d6b25e]">
                    0{index + 1}
                  </div>

                  <div className="mt-3 font-bold text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d6b25e] py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#10231e]/60">
              Join Our Team
            </div>

            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-[#10231e] sm:text-5xl">
              Want to become part of Privamax?
            </h2>

            <p className="mt-4 text-lg leading-8 text-[#10231e]/70">
              Explore our career opportunities and find your next opportunity
              in the security industry.
            </p>
          </div>

          <a
            href="/company/jobs"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#10231e] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
          >
            View Careers
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
