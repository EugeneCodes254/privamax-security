import Header from "@/components/Header";

const values = [
  {
    number: "01",
    title: "Professionalism",
    text: "We maintain the highest standards of conduct, discipline, training, and service delivery across every assignment.",
  },
  {
    number: "02",
    title: "Integrity",
    text: "We build lasting relationships through honesty, accountability, confidentiality, and responsible security practices.",
  },
  {
    number: "03",
    title: "Innovation",
    text: "We continuously adopt modern technology and improved security methods to address changing threats.",
  },
  {
    number: "04",
    title: "Customer Focus",
    text: "Every security solution is designed around the individual requirements of our clients and their properties.",
  },
];

const milestones = [
  {
    year: "2016",
    title: "Privamax Founded",
    text: "Privamax Security began operations with a commitment to providing dependable professional security solutions in Kenya.",
  },
  {
    year: "2020",
    title: "Limited Company",
    text: "The company was incorporated in Kenya on 21st May 2020 as a Limited Company.",
  },
  {
    year: "2023",
    title: "Technology Expansion",
    text: "Expanded electronic security solutions including CCTV, access control, electric fencing, and alarm systems.",
  },
  {
    year: "2026",
    title: "Growing Across Kenya",
    text: "Continuing to deliver integrated physical, electronic, investigative, and technology-driven security services.",
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

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <div className="bg-[#071f1a] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="text-white/70">
            Kenya&apos;s trusted security partner since 2016
          </p>

          <div className="hidden items-center gap-6 sm:flex">
            <a
              href="tel:+254733669260"
              className="transition hover:text-[#d6b25e]"
            >
              +254 733 669 260
            </a>

            <a
              href="mailto:info@privamaxsecurity.com"
              className="transition hover:text-[#d6b25e]"
            >
              info@privamaxsecurity.com
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-[#10231e]">
        <Header />

        <section className="relative min-h-[560px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/company/team-md.png"
              alt="Privamax Security team"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#071b16]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071b16]/95 via-[#071b16]/75 to-[#071b16]/35" />
          </div>

          <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-6">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b25e]">
                <span className="h-px w-10 bg-[#d6b25e]" />
                Company
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
                About
                <span className="block text-[#d6b25e]">
                  Privamax Security
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                Professional security solutions built around people,
                technology, trust, and rapid response.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
              <span className="h-px w-10 bg-[#a18132]" />
              Who We Are
            </div>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
              Kenya&apos;s trusted security partner
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Privamax Security was founded in 2016 and incorporated in Kenya
              on 21st May 2020 as a Limited Company. We provide customized
              security solutions designed to protect families, property,
              businesses, institutions, and valuable assets.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Our approach combines professionally trained personnel with
              modern electronic security systems and technology-driven
              solutions. We focus on quality, timely service delivery,
              customer care, productivity, and continuous improvement.
            </p>

            <a
              href="/services"
              className="mt-8 inline-flex items-center gap-3 font-bold text-[#10231e] transition hover:text-[#a18132]"
            >
              Explore our services
              <ArrowIcon />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#10231e]">
            <img
              src="/images/company/team-admin.png"
              alt="Professional security management"
              className="h-[520px] w-full object-cover opacity-75"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071b16] via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-5xl font-extrabold text-[#d6b25e]">
                10+
              </div>

              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Years of Security Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
                <span className="h-px w-10 bg-[#a18132]" />
                Our Mission
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-[#10231e] sm:text-5xl">
                Making your life safer, one solution at a time.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                To provide reliable, professional, and innovative security
                solutions that give our clients confidence and peace of mind.
              </p>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
                <span className="h-px w-10 bg-[#a18132]" />
                Our Vision
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-[#10231e] sm:text-5xl">
                A safer and more secure Kenya.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                To become a leading security solutions provider in Kenya,
                recognized for professional service, innovation, integrity,
                and exceptional customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
              <span className="h-px w-10 bg-[#a18132]" />
              Our Values
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
              Principles behind our protection
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.number}
                className="bg-white p-8 transition hover:bg-[#10231e] group"
              >
                <div className="text-sm font-extrabold text-[#a18132]">
                  {value.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#10231e] group-hover:text-white">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 group-hover:text-white/65">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10231e] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
              <span className="h-px w-10 bg-[#d6b25e]" />
              Our Journey
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Growing with our clients
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <article
                key={milestone.year}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="text-4xl font-extrabold text-[#d6b25e]">
                  {milestone.year}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {milestone.title}
                </h3>

                <p className="mt-4 leading-7 text-white/55">
                  {milestone.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d6b25e] py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#10231e]/60">
              Work With Us
            </div>

            <h2 className="mt-3 text-4xl font-extrabold text-[#10231e] sm:text-5xl">
              Let&apos;s secure what matters most.
            </h2>
          </div>

          <a
            href="/contacts"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#10231e] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
          >
            Get a Quote
            <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="bg-[#071b16] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/privamax-logo.png"
                alt="Privamax Security"
                className="h-14 w-auto object-contain"
              />

              <div>
                <div className="font-extrabold tracking-tight">PRIVAMAX</div>
                <div className="text-[8px] tracking-[0.28em] text-white/50">
                  SECURITY FIRM LTD
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-xs leading-7 text-white/50">
              Making your life safer, one solution at a time.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Company</h3>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <a className="block hover:text-white" href="/company/about">
                About Us
              </a>
              <a className="block hover:text-white" href="/company/portfolio">
                Portfolio
              </a>
              <a className="block hover:text-white" href="/company/staff">
                Our Staff
              </a>
              <a className="block hover:text-white" href="/company/jobs">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Services</h3>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <a className="block hover:text-white" href="/services">
                Security Solutions
              </a>
              <a className="block hover:text-white" href="/track-cargo">
                SKR Track
              </a>
              <a className="block hover:text-white" href="/contacts">
                Request a Quote
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <a className="block hover:text-white" href="tel:+254733669260">
                +254 733 669 260
              </a>

              <a
                className="block hover:text-white"
                href="mailto:info@privamaxsecurity.com"
              >
                info@privamaxsecurity.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/40">
            Privamax Security © 2026. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
