const posts = [
  {
    number: "01",
    category: "Security Tips",
    title: "How to improve security around your home",
    description:
      "Practical measures every homeowner can take to strengthen physical security and reduce potential risks.",
  },
  {
    number: "02",
    category: "Technology",
    title: "Why CCTV surveillance matters for modern businesses",
    description:
      "Discover how modern surveillance systems can improve visibility, accountability, and protection across your business.",
  },
  {
    number: "03",
    category: "Business Security",
    title: "Building a stronger security strategy for your business",
    description:
      "A practical look at combining personnel, technology, procedures, and risk assessment into one effective security strategy.",
  },
  {
    number: "04",
    category: "Cyber Security",
    title: "Protecting your business from digital security threats",
    description:
      "Essential cyber security practices that can help businesses protect their systems, information, and customers.",
  },
  {
    number: "05",
    category: "Access Control",
    title: "Understanding modern access control systems",
    description:
      "Learn how biometric systems, smart cards, and electronic access solutions can improve control over your premises.",
  },
  {
    number: "06",
    category: "Security Awareness",
    title: "Why professional security assessments matter",
    description:
      "Understanding vulnerabilities before they become incidents can help you make better and more informed security decisions.",
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

export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-[#10231e] py-32 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,178,94,0.18),transparent_35%)]" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-[50px] border-white/[0.03]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-[#d6b25e]">
              <span className="h-px w-10 bg-[#d6b25e]" />
              Security Insights
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Security knowledge for a{" "}
              <span className="text-[#d6b25e]">safer tomorrow</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Explore practical security information, technology insights,
              safety advice, and professional guidance from Privamax Security.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14">
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
              <span className="h-px w-10 bg-[#a18132]" />
              Latest Articles
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
              Security insights from Privamax
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Stay informed with useful information designed to help you
              understand and improve your security.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.number}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-52 items-end bg-[#10231e] p-7">
                  <div>
                    <div className="text-5xl font-extrabold text-[#d6b25e]/20">
                      {post.number}
                    </div>

                    <div className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
                      {post.category}
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold leading-tight text-[#10231e]">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {post.description}
                  </p>

                  <a
                    href="/contacts"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#a18132] transition hover:text-[#10231e]"
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

      <section className="bg-[#10231e] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
                <span className="h-px w-10 bg-[#d6b25e]" />
                Security Awareness
              </div>

              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Knowledge is one of the strongest security tools.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Good security starts with understanding the risks around you.
                Our team combines professional experience and modern
                technology to help clients make informed security decisions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
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
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#d6b25e] px-6 py-3.5 text-sm font-bold text-[#10231e] transition hover:bg-white"
              >
                Contact Us
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
              Stay Protected
            </div>

            <h2 className="mt-3 text-4xl font-extrabold text-[#10231e] sm:text-5xl">
              Ready to improve your security?
            </h2>
          </div>

          <a
            href="/contacts"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#10231e] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
          >
            Contact Privamax
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
