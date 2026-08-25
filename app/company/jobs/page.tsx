const opportunities = [
  {
    number: "01",
    title: "Security Officers",
    type: "Full Time",
    description:
      "Join our professional security team and provide reliable protection to our residential, commercial, and corporate clients.",
  },
  {
    number: "02",
    title: "Security Supervisors",
    type: "Full Time",
    description:
      "Lead and coordinate security teams while maintaining high standards of service, discipline, and client satisfaction.",
  },
  {
    number: "03",
    title: "Security Technicians",
    type: "Full Time",
    description:
      "Install, configure, maintain, and troubleshoot modern electronic security and surveillance systems.",
  },
  {
    number: "04",
    title: "Security Sales Consultants",
    type: "Full Time",
    description:
      "Work with clients to understand their security requirements and recommend suitable protection solutions.",
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

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-[#f4f6f3]">
      <section className="relative overflow-hidden bg-[#071b16]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102d25] via-[#071b16] to-[#03100d]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
              <span className="h-px w-10 bg-[#d6b25e]" />
              Careers
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Join Privamax
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Build your career with a professional security company committed
              to protecting people, businesses, property, and communities.
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
                Careers
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Grow with a team that protects
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              At Privamax, we value professionalism, integrity, discipline,
              teamwork, and continuous development. We are always interested
              in connecting with talented people who share our commitment to
              excellent security services.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {opportunities.map((job) => (
              <article
                key={job.number}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#d6b25e] hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-extrabold text-[#a18132]">
                    {job.number}
                  </span>

                  <span className="rounded-full bg-[#f4f6f3] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    {job.type}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-bold text-[#10231e]">
                  {job.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {job.description}
                </p>

                <a
                  href="mailto:info@privamaxsecurity.co.ke?subject=Career%20Application"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#a18132] transition group-hover:text-[#10231e]"
                >
                  Apply Now
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f3] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#10231e] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
                Work With Us
              </div>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Don&apos;t see the right opportunity?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                Send us your CV and a brief introduction. Our team will keep
                your details on file and contact you when a suitable
                opportunity becomes available.
              </p>

              <a
                href="mailto:info@privamaxsecurity.co.ke?subject=General%20Career%20Application"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d6b25e] px-7 py-4 font-bold text-[#10231e] transition hover:bg-white"
              >
                Send Your CV
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d6b25e] py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#10231e]/60">
              Privamax Security
            </div>

            <h2 className="mt-3 text-4xl font-extrabold text-[#10231e] sm:text-5xl">
              Make a difference through security
            </h2>
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
