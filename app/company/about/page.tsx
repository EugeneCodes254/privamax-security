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
    text: "Privamax Security was founded in 2016 with a commitment to providing reliable and professional security solutions in Kenya.",
  },
  {
    year: "2020",
    title: "Incorporated",
    text: "Officially incorporated in Kenya on 21st May 2020 as a Limited Company.",
  },
  {
    year: "2023",
    title: "Technology Expansion",
    text: "Expanded electronic security capabilities across CCTV, access control, electric fencing, and alarm systems.",
  },
  {
    year: "2026",
    title: "Growing Across Kenya",
    text: "Continuing to deliver integrated physical, electronic, investigative, and technology-driven security solutions.",
  },
];

const team = [
  {
    name: "Managing Director",
    role: "Leadership & Strategy",
    image: "/images/company/team-md.png",
    bio: "Provides strategic vision and overall leadership for Privamax Security across Kenya.",
  },
  {
    name: "Operations Manager",
    role: "Operations & Logistics",
    image: "/images/services/guards.png",
    bio: "Oversees day-to-day deployment, technology installations, and rapid response operations.",
  },
  {
    name: "Office Admin",
    role: "Administration",
    image: "/images/company/team-admin.png",
    bio: "Manages administrative functions, client communications, and scheduling.",
  },
];

const testimonials = [
  {
    name: "Wangamati Edwin",
    role: "Cyber Security",
    text: "Thank you for protecting my firm against cyber attacks using your tailor made firewalls.",
  },
  {
    name: "Mary Wangari",
    role: "Private Investigations",
    text: "Liked the way you guys treat your customers, the prices are pretty great too!",
  },
  {
    name: "Paul Jameson",
    role: "Security Consultancy",
    text: "We ended up with the best security system in Karen Bogani area thanks to these guys.",
  },
  {
    name: "Amy Atieno",
    role: "Home Security",
    text: "The job was done perfectly. I would recommend PRIVAMAX SECURITY anytime you need a trusted professional.",
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
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="relative">
        <Header />

        {/* Hero */}
        <section className="relative min-h-[700px] overflow-hidden bg-[#071b16]">
          <div className="absolute inset-0">
            <img
              src="/images/hero/nairobi-skyline.jpg"
              alt="Nairobi skyline"
              className="h-full w-full object-cover brightness-[0.45] saturate-[0.6]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#10231e]/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f30]/90 via-[#10231e]/65 to-[#10231e]/30" />
          </div>

          <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  About Us
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Kenya&apos;s trusted{" "}
                <span className="text-[#d6b25e]">security partner</span>
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/65">
                Founded in 2016 and incorporated in 2020, Privamax Security
                delivers quality, responsive, and technology-driven security
                services across Kenya.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Story */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#10231e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Making your life safer since 2016
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-gray-600">
                <p>
                  Privamax Security was founded in 2016 with a clear mission:
                  to provide Kenyans with reliable, professional, and
                  affordable security services. What began as a small team has
                  grown into a comprehensive security firm serving hundreds of
                  clients.
                </p>

                <p>
                  Incorporated on 21st May 2020 as a Limited Company, we have
                  expanded our service portfolio to include advanced CCTV
                  surveillance, cyber security, armed guards, dog patrols, and
                  close protection for high-net-worth individuals.
                </p>

                <p>
                  Today, we continue to combine professional expertise with
                  modern technology to deliver practical security solutions
                  built around the needs of our clients.
                </p>
              </div>

              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#10231e] px-8 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#071b16]"
              >
                Our Services
                <ArrowIcon />
              </a>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000&auto=format&fit=crop"
                  alt="Security monitoring"
                  className="h-[500px] w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute -bottom-6 -left-5 rounded-2xl bg-[#10231e] p-6 text-white shadow-2xl">
                <div className="text-4xl font-bold text-[#d6b25e]">10+</div>
                <div className="mt-1 text-sm text-white/70">
                  Years of Excellence
                </div>
              </div>

              <div className="absolute -right-4 -top-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-[#d6b25e]" />
                  <span className="text-sm font-semibold text-[#10231e]">
                    24/7 Active
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-[#071b16] py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Our Mission
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                We provide customized security solutions to protect your
                family, property, and business
              </h2>
            </div>

            <p className="text-xl leading-relaxed text-white/60">
              We deliver quality and timely services by focusing on
              productivity, customer care, competitiveness, and continuous
              process improvement in a rapidly changing business environment.
            </p>

          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["500+", "Systems Installed"],
              ["200+", "Businesses Secured"],
              ["98%", "Client Satisfaction"],
              ["24/7", "Response Team"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center"
              >
                <div className="text-4xl font-bold text-[#d6b25e] md:text-5xl">
                  {value}
                </div>
                <div className="mt-2 text-sm text-white/50">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f4f6f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                Our Values
              </span>
              <span className="h-px w-10 bg-[#10231e]" />
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-[#10231e] sm:text-5xl">
              What drives us
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.number}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#10231e] hover:bg-[#10231e] hover:shadow-xl"
              >
                <div className="text-xs font-bold tracking-[0.15em] text-[#a18132]">
                  {value.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#10231e] transition-colors group-hover:text-white">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500 transition-colors group-hover:text-white/65">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                Our Journey
              </span>
              <span className="h-px w-10 bg-[#10231e]" />
            </div>

            <h2 className="text-4xl font-bold text-[#10231e] sm:text-5xl">
              Milestones
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-4">
            {milestones.map((item, index) => (
              <article key={item.year} className="relative">

                {index < milestones.length - 1 && (
                  <span className="absolute left-[60%] top-6 hidden h-px w-[75%] bg-[#10231e]/15 md:block" />
                )}

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#10231e] text-xs font-bold text-white">
                  {item.year.slice(-2)}
                </div>

                <div className="mt-4 text-sm font-bold text-[#a18132]">
                  {item.year}
                </div>

                <h3 className="mt-2 text-xl font-bold text-[#10231e]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f4f6f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                Our Team
              </span>
              <span className="h-px w-10 bg-[#10231e]" />
            </div>

            <h2 className="text-4xl font-bold text-[#10231e] sm:text-5xl">
              Expert professionals
            </h2>

            <p className="mt-4 text-lg leading-7 text-gray-600">
              Our experienced leadership team brings together expertise in
              security, technology, and business management.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/85 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-sm leading-6 text-white/90">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#10231e]">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                Testimonials
              </span>
              <span className="h-px w-10 bg-[#10231e]" />
            </div>

            <h2 className="text-4xl font-bold text-[#10231e] sm:text-5xl">
              What our clients say
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-2xl bg-[#f4f6f3] p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl font-bold text-[#d6b25e]">
                  &ldquo;
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {testimonial.text}
                </p>

                <div className="mt-5 flex items-center gap-1 text-[#d6b25e]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>

                <div className="mt-5 border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-bold text-[#10231e]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#071b16] py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d6b25e]" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
              Get Protected Today
            </span>
            <span className="h-px w-10 bg-[#d6b25e]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Partner with Kenya&apos;s trusted security experts
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
            Contact us today for a free, no-obligation security consultation.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+254733669260"
              className="rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] transition hover:brightness-110"
            >
              Call Now
            </a>

            <a
              href="/contacts"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
