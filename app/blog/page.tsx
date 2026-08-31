import Header from "@/components/Header";

const posts = [
  {
    number: "01",
    category: "Security Tips",
    title: "How to improve security around your home",
    description:
      "Practical measures every homeowner can take to strengthen physical security and reduce potential risks.",
    image: "/images/services/access-control.png",
  },
  {
    number: "02",
    category: "Technology",
    title: "Why CCTV surveillance matters for modern businesses",
    description:
      "Discover how modern surveillance systems can improve visibility, accountability, and protection across your business.",
    image: "/images/services/cctv.png",
  },
  {
    number: "03",
    category: "Business Security",
    title: "Building a stronger security strategy for your business",
    description:
      "A practical look at combining personnel, technology, procedures, and risk assessment into one effective security strategy.",
    image: "/images/services/guards.png",
  },
  {
    number: "04",
    category: "Cyber Security",
    title: "Protecting your business from digital security threats",
    description:
      "Essential cyber security practices that can help businesses protect their systems, information, and customers.",
    image: "/images/services/bwc-camera.png",
  },
  {
    number: "05",
    category: "Access Control",
    title: "Understanding modern access control systems",
    description:
      "Learn how biometric systems, smart cards, and electronic access solutions can improve control over your premises.",
    image: "/images/services/access-control.png",
  },
  {
    number: "06",
    category: "Security Awareness",
    title: "Why professional security assessments matter",
    description:
      "Understanding vulnerabilities before they become incidents can help you make better and more informed security decisions.",
    image: "/images/services/electric-fence.png",
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

export default function BlogPage() {
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
                  Security Insights
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Security knowledge for a{" "}
                <span className="text-[#d6b25e]">safer tomorrow</span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/65">
                Explore practical security information, technology insights,
                safety advice, and professional guidance from Privamax Security.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#articles"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] transition hover:brightness-110"
                >
                  Explore Articles
                  <ArrowIcon />
                </a>

                <a
                  href="/contacts"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#10231e]"
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Intro */}
      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#10231e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                  Latest Articles
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Security insights from Privamax
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 lg:justify-self-end">
              Stay informed with useful information designed to help you
              understand risks, improve security, and make better protection
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.number}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-60 overflow-hidden bg-[#071b16]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/90 via-transparent to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full bg-[#d6b25e] px-3 py-1.5 text-xs font-bold text-[#10231e]">
                    {post.number}
                  </span>

                  <div className="absolute bottom-5 left-6">
                    <span className="rounded-full border border-white/20 bg-[#071b16]/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold leading-tight text-[#10231e]">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {post.description}
                  </p>

                  <div className="mt-6 h-px w-10 bg-[#d6b25e] transition-all duration-300 group-hover:w-20" />

                  <a
                    href="/contacts"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#10231e] transition hover:text-[#a18132]"
                  >
                    Learn more
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Security Awareness */}
      <section className="relative overflow-hidden bg-[#071b16] py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />

                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Security Awareness
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                Knowledge is one of the strongest security tools.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Good security starts with understanding the risks around you.
                Our team combines professional experience and modern
                technology to help clients make informed security decisions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                Need professional advice?
              </div>

              <h3 className="mt-4 text-2xl font-bold text-white">
                Talk to the Privamax team
              </h3>

              <p className="mt-4 leading-7 text-white/55">
                Let us assess your requirements and recommend a security
                solution designed around your property or organization.
              </p>

              <a
                href="/contacts"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#d6b25e] px-7 py-3.5 text-sm font-bold text-[#10231e] transition hover:bg-white"
              >
                Contact Us
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#d6b25e] py-20 lg:py-24">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-[#10231e]/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#10231e]/60">
              Stay Protected
            </div>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#10231e] sm:text-5xl">
              Ready to improve your security?
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#10231e]/70">
              Speak to Privamax Security about a protection strategy designed
              around your specific requirements.
            </p>
          </div>

          <a
            href="/contacts"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#10231e] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
          >
            Contact Privamax
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
