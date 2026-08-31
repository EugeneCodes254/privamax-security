import Header from "@/components/Header";

const team = [
  {
    number: "01",
    name: "Managing Director",
    role: "Leadership & Strategy",
    image: "/images/company/team-md.png",
    description:
      "Provides strategic direction, leadership, and overall oversight of Privamax Security operations.",
  },
  {
    number: "02",
    name: "Operations Management",
    role: "Operations & Supervision",
    image: "/images/services/guards.png",
    description:
      "Coordinates security deployments, supervision, quality control, client relationships, and response operations.",
  },
  {
    number: "03",
    name: "Administration",
    role: "Administration & Client Support",
    image: "/images/company/team-admin.png",
    description:
      "Supports administration, scheduling, communications, documentation, and day-to-day client coordination.",
  },
  {
    number: "04",
    name: "Security Officers",
    role: "Manned Security",
    image: "/images/services/guards.png",
    description:
      "Professionally trained officers responsible for protecting people, property, assets, and business operations.",
  },
];

const standards = [
  {
    number: "01",
    title: "Professional Training",
    text: "Our personnel are developed to maintain professional standards and deliver dependable security services.",
  },
  {
    number: "02",
    title: "Modern Equipment",
    text: "Teams are supported with appropriate communication, surveillance, and operational equipment.",
  },
  {
    number: "03",
    title: "Continuous Development",
    text: "We continuously improve our people, processes, and technology to respond to changing security requirements.",
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

export default function StaffPage() {
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
              className="h-full w-full object-cover brightness-[0.48] saturate-[0.42] contrast-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#10231e]/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071b16]/95 via-[#10231e]/78 to-[#10231e]/42" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/65 via-transparent to-transparent" />
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
                Our <span className="text-[#d6b25e]">Staff</span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/65">
                Meet the people behind our commitment to professional,
                dependable, and technology-driven security services.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contacts"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] transition hover:brightness-110"
                >
                  Work With Us
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

      {/* Introduction */}
      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#10231e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                  Our People
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Professionals you can trust
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 lg:justify-self-end">
              Our people are at the heart of our security operations. We bring
              together trained security officers, experienced supervisors,
              technical specialists, and administrative professionals to
              provide complete protection for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                Our Team
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#10231e] sm:text-5xl">
              Skilled professionals behind the protection
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              From management and administration to field officers and
              operations personnel, every part of our team contributes to
              reliable security delivery.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.number} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#10231e]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/90 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#d6b25e] px-3 py-1.5 text-xs font-bold text-[#10231e]">
                    {member.number}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6b25e]">
                      {member.role}
                    </div>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="relative overflow-hidden bg-[#071b16] py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Professional Standards
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Trained. Equipped. Ready.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                We continuously develop our teams so that our personnel are
                prepared to meet changing security requirements and deliver
                dependable service.
              </p>

              <div className="mt-8 flex items-center gap-2 text-[#d6b25e]">
                <CheckIcon />
                <span className="text-sm font-semibold">
                  24/7 operational readiness
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {standards.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/[0.08]"
                >
                  <div className="text-xs font-bold tracking-[0.16em] text-[#d6b25e]">
                    {item.number}
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/50">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsibility */}
      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                One Team
              </span>
              <span className="h-px w-10 bg-[#10231e]" />
            </div>

            <h2 className="text-4xl font-bold text-[#10231e] sm:text-5xl">
              Protection built on people, technology, and trust
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our teams work together to deliver consistent security across
              residential, corporate, institutional, and high-value
              environments throughout Kenya.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Professional security personnel",
              "Experienced supervision",
              "Technology and technical specialists",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#10231e] text-[#d6b25e]">
                  <CheckIcon />
                </div>

                <h3 className="mt-5 font-bold text-[#10231e]">
                  {item}
                </h3>
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
              Join Our Team
            </div>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#10231e] sm:text-5xl">
              Want to become part of Privamax?
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#10231e]/70">
              Explore our career opportunities and find your next opportunity
              in the security industry.
            </p>
          </div>

          <a
            href="/company/jobs"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#10231e] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
          >
            View Careers
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
