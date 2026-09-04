import Header from "@/components/Header";

const opportunities = [
  {
    number: "01",
    title: "Security Officers",
    type: "Full Time",
    description:
      "Join our professional security team and provide reliable protection to residential, commercial, and corporate clients.",
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

const qualities = [
  ["01", "Professionalism", "We value discipline, reliability, and high standards of service."],
  ["02", "Integrity", "We expect honesty, accountability, confidentiality, and responsible conduct."],
  ["03", "Teamwork", "Our people work together to provide coordinated and dependable protection."],
  ["04", "Continuous Development", "We encourage learning, training, and professional growth."],
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

export default function JobsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="relative">
        <Header />

        {/* Hero */}
        <section className="relative min-h-[650px] overflow-hidden bg-[#071b16]">
          <div className="absolute inset-0">
            <img
              src="/images/hero/nairobi-skyline.jpg"
              alt="Nairobi skyline"
              className="h-full w-full object-cover brightness-[0.52] saturate-[0.55] contrast-[1.08] hue-rotate-[8deg]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#10231e]/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071b16]/92 via-[#10231e]/68 to-[#10231e]/34" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/65 via-transparent to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Careers
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Join <span className="text-[#d6b25e]">Privamax</span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/65">
                Build your career with a professional security company
                committed to protecting people, businesses, property, and
                communities.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#opportunities"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] transition hover:brightness-110"
                >
                  View Opportunities
                  <ArrowIcon />
                </a>

                <a
                  href="mailto:hr@privamaxsecurity.com?subject=Career%20Application"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#10231e]"
                >
                  Send Your CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Intro */}
      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#10231e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                  Careers
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Grow with a team that protects
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 lg:justify-self-end">
              At Privamax, we value professionalism, integrity, discipline,
              teamwork, and continuous development. We are interested in
              connecting with talented people who share our commitment to
              excellent security services.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section id="opportunities" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                Opportunities
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#10231e] sm:text-5xl">
              Career opportunities at Privamax
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Explore the areas where we regularly seek skilled and motivated
              professionals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {opportunities.map((job) => (
              <article
                key={job.number}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-[#a18132]">
                    {job.number}
                  </span>

                  <span className="rounded-full bg-[#f4f6f3] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500">
                    {job.type}
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-bold text-[#10231e]">
                  {job.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {job.description}
                </p>

                <a
                  href="mailto:hr@privamaxsecurity.com?subject=Career%20Application"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#10231e] transition hover:text-[#a18132]"
                >
                  Apply Now
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="relative overflow-hidden bg-[#071b16] py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Our Culture
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                People who take protection seriously
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Working in security requires professionalism, discipline,
                confidentiality, teamwork, and a genuine commitment to
                protecting others.
              </p>

              <a
                href="mailto:hr@privamaxsecurity.com?subject=General%20Career%20Application"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] transition hover:brightness-110"
              >
                Send Your CV
                <ArrowIcon />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {qualities.map(([number, title, text]) => (
                <article
                  key={number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <div className="text-xs font-bold tracking-[0.18em] text-[#d6b25e]">
                    {number}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12 lg:p-16">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#a18132]">
              Work With Us
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#10231e] sm:text-5xl">
              Don&apos;t see the right opportunity?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Send us your CV and a brief introduction. Our team can keep your
              details on file and contact you when a suitable opportunity
              becomes available.
            </p>

            <a
              href="mailto:hr@privamaxsecurity.com?subject=General%20Career%20Application"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#10231e] px-8 py-4 font-bold text-white transition hover:bg-[#071b16]"
            >
              Send Your CV
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#d6b25e] py-20 lg:py-24">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-[#10231e]/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#10231e]/60">
              Privamax Security
            </div>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#10231e] sm:text-5xl">
              Make a difference through security
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#10231e]/70">
              Build your career with a team committed to protecting people,
              property, and businesses across Kenya.
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
