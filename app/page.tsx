import Header from "@/components/Header";

const services = [
  {
    number: "01",
    title: "CCTV Cameras",
    description:
      "HD surveillance systems with motion detection and instant alerts for total property monitoring.",
    icon: "camera",
  },
  {
    number: "02",
    title: "Electric Fence",
    description:
      "Premium perimeter protection ensuring entry only at designated areas. Razor wires included.",
    icon: "fence",
  },
  {
    number: "03",
    title: "Fire Alarm Systems",
    description:
      "Active fire detection systems providing early warning, evacuation alerts, and automatic suppression.",
    icon: "fire",
  },
  {
    number: "04",
    title: "Access Control",
    description:
      "Biometric access, smart locks, and automated gate systems for controlled entry and exit.",
    icon: "lock",
  },
  {
    number: "05",
    title: "Private Investigation",
    description:
      "Skilled investigators providing tangible evidence through surveillance, background checks, and forensics.",
    icon: "search",
  },
  {
    number: "06",
    title: "Dog Security Service",
    description:
      "Professionally trained security dogs for property patrol, detection, and rapid-response protection.",
    icon: "dog",
  },
  {
    number: "07",
    title: "Automatic Gates",
    description:
      "Remote-controlled gate systems with smart device integration for enhanced home and office access.",
    icon: "gate",
  },
];

const packages = [
  {
    title: "Home Security",
    description:
      "Protect your home with reliable surveillance and perimeter security",
    features: [
      "CCTV Camera Installation",
      "Electric Fence Setup",
      "Intruder Alarm System",
      "Smart Door Locks",
      "Free Site Survey",
    ],
  },
  {
    title: "Business Security",
    description:
      "Comprehensive security packages for offices, malls, and corporate properties",
    features: [
      "Full CCTV Surveillance",
      "Access Control Systems",
      "Fire Alarm Integration",
      "Security Guard Deployment",
      "Automatic Gate Systems",
      "24/7 Alarm Monitoring",
    ],
  },
  {
    title: "VIP Protection",
    description:
      "Close protection and private security for executives and high-net-worth individuals",
    features: [
      "Close Protection Officers",
      "Private Investigation",
      "Cyber Security Solutions",
      "Dog Security Patrol",
      "Asset & Vehicle Tracking",
      "Security Audit & Consulting",
      "Dedicated Account Manager",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Thanks for the quick and professional service! They have been protecting my firm against cyber attacks using their tailor made firewalls.",
    name: "Wangamati Edwin",
    role: "Cyber Security Client",
  },
  {
    quote:
      "We ended up with the best security system in Karen Bogani area thanks to these guys.",
    name: "Paul Jameson",
    role: "Karen Bogani Resident",
  },
  {
    quote:
      "The job was done perfectly. I would recommend and vouch for PRIVAMAX SECURITY anytime you need a trusted professional to handle your security issues.",
    name: "Amy Atieno",
    role: "Home Security Client",
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

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "camera") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M4 8h4l1.5-2h5L16 8h4v11H4z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    );
  }

  if (type === "fence") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M4 20V6m16 14V6M4 10h16M4 15h16" />
        <path d="m7 6 2-3 2 3 2-3 2 3 2-3 2 3" />
      </svg>
    );
  }

  if (type === "fire") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M12 21a6 6 0 0 0 6-6c0-3.8-3.2-6-4.4-9.2-.9 1.4-2 2.4-3.1 3.2C9.8 6.5 8.5 5 8.6 3 5.8 5.2 4 8.1 4 12.4A6.6 6.6 0 0 0 12 21Z" />
        <path d="M12 21c-2.2-1.1-2.8-3.2-1.8-5.2.5-1 1.2-1.7 2-2.3.4 1 1.1 2 1.7 2.5.8 1.3.3 3.7-1.9 5Z" />
      </svg>
    );
  }

  if (type === "lock") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15" r="1" />
      </svg>
    );
  }

  if (type === "dog") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 9.5 5.5 6 8 4l2.5 2h3L16 4l2.5 2L17 9.5" />
        <path d="M7 9.5c-1 1.3-1.5 3-1.5 5v2.5c0 1.7 1.3 3 3 3h7c1.7 0 3-1.3 3-3v-2.5c0-2-.5-3.7-1.5-5" />
        <circle cx="9" cy="11" r=".7" />
        <circle cx="15" cy="11" r=".7" />
        <path d="M10 14c1.2 1 2.8 1 4 0" />
      </svg>
    );
  }

  if (type === "gate") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20V6h7v14" />
        <path d="M13 20V6h7v14" />
        <path d="M7 6V3h10v3" />
        <path d="M4 20h16" />
        <path d="M7 9h4M7 13h4M13 9h4M13 13h4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 5 5" />
      <path d="M8 10.5h5" />
      <path d="M10.5 8v5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="hidden bg-[#071f1a] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="text-white/70">
            Kenya&apos;s trusted security partner since 2016
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:+254733669260" className="transition hover:text-[#d6b25e]">
              +254 733 669 260
            </a>
            <a href="mailto:info@privamaxsecurity.com" className="transition hover:text-[#d6b25e]">
              info@privamaxsecurity.com
            </a>
          </div>
        </div>
      </div>

      <Header />

      <section className="relative min-h-[720px] overflow-hidden bg-[#10251f]">
        <div className="absolute inset-0">
          <img
            src="/images/hero/TRUCK-1.JPG"
            alt="Professional security team"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#071b16]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071b16]/95 via-[#071b16]/70 to-[#071b16]/30" />
        </div>

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pb-16 pt-32 lg:px-6">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b25e]">
              <span className="h-px w-10 bg-[#d6b25e]" />
              Trusted Since 2016
            </div>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Best Security
              <span className="block text-[#d6b25e]">
                Company in Kenya
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              We provide fast, professional, and exceptional security
              services — from CCTV surveillance and access control to armed
              guards and cyber security across Kenya.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-7 py-4 font-bold text-[#10231e] transition hover:bg-white"
              >
                Explore Services
                <ArrowIcon />
              </a>

              <a
                href="tel:+254733669260"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
              >
                +254 733 669 260
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[#071b16]/55 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/15 px-6 py-6">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-extrabold text-white sm:text-3xl">
                500+
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                Systems Installed
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-extrabold text-white sm:text-3xl">
                200+
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                Businesses Secured
              </div>
            </div>

            <div className="text-center sm:text-right">
              <div className="text-2xl font-extrabold text-[#d6b25e] sm:text-3xl">
                24/7
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                Response Team
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
              <span className="h-px w-10 bg-[#a18132]" />
              About Us
            </div>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
              Kenya&apos;s trusted security partner since 2016
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Privamax Security was founded in 2016 and incorporated in Kenya
              on 21st May 2020 as a Limited Company. We provide customized
              security solutions to help protect your family, property, and
              business — delivering quality and timely services by focusing on
              productivity, customer care, and continuous improvement.
            </p>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-3 font-bold text-[#10231e] transition hover:text-[#a18132]"
            >
              Discover our solutions
              <ArrowIcon />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                title: "Certified Professionals",
                text: "All our officers meet minimum standards of training and are continually developed.",
              },
              {
                title: "Latest Technology",
                text: "We deploy modern surveillance, access control, and cyber security systems.",
              },
              {
                title: "24/7 Rapid Response",
                text: "Our response teams are well-equipped and available around the clock at your request.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 text-sm font-extrabold text-[#a18132]">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold text-[#10231e]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
                <span className="h-px w-10 bg-[#a18132]" />
                Why Choose Us
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Delivering the best security solutions to our clients
              </h2>
            </div>

            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Our security officers, technicians, and response teams are
                well equipped with the latest modern technology and are
                available 24/7 at your request. We serve homes, corporate
                businesses, and high-net-worth individuals across Kenya.
              </p>

              <div className="shrink-0 text-left sm:text-right">
                <div className="text-6xl font-extrabold text-[#10231e]">
                  98%
                </div>

                <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
                <span className="h-px w-10 bg-[#a18132]" />
                Our Services
              </div>

              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Comprehensive security solutions for Kenya
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-600">
              We offer fast, professional, and exceptional security services —
              from electronic systems and physical guarding to cyber security
              and private investigations.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group bg-white p-8 transition hover:bg-[#10231e]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0f3ef] text-[#10231e] transition group-hover:bg-[#d6b25e]">
                    <div className="h-7 w-7">
                      <ServiceIcon type={service.icon} />
                    </div>
                  </div>

                  <span className="text-sm font-bold text-slate-300 group-hover:text-white/40">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#10231e] group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 group-hover:text-white/65">
                  {service.description}
                </p>

                <a
                  href="#quote"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#a18132] group-hover:text-[#d6b25e]"
                >
                  Learn more
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-[#f4f6f3] px-6 py-7 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#a18132]">
              Also Available
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-semibold text-[#10231e]">
              <span>Cyber Security</span>
              <span className="text-[#d6b25e]">•</span>
              <span>VIP Protection</span>
              <span className="text-[#d6b25e]">•</span>
              <span>Security Audits</span>
              <span className="text-[#d6b25e]">•</span>
              <span>Alarm Response</span>
              <span className="text-[#d6b25e]">•</span>
              <span>Asset Tracking</span>
              <span className="text-[#d6b25e]">•</span>
              <span>Security Consulting</span>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="bg-[#10231e] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
              <span className="h-px w-10 bg-[#d6b25e]" />
              Packages
              <span className="h-px w-10 bg-[#d6b25e]" />
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Tailored security for every need
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/60">
              From residential homes to corporate offices to personal VIP
              protection — we have you covered.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-3xl p-8 ${
                  index === 1
                    ? "bg-[#d6b25e] text-[#10231e]"
                    : "border border-white/10 bg-white/[0.04] text-white"
                }`}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    index === 1 ? "text-[#10231e]/60" : "text-[#d6b25e]"
                  }`}
                >
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>

                <p
                  className={`mt-4 leading-7 ${
                    index === 1 ? "text-[#10231e]/70" : "text-white/60"
                  }`}
                >
                  {item.description}
                </p>

                <ul className="mt-7 space-y-4">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span
                        className={
                          index === 1
                            ? "mt-0.5 text-[#10231e]"
                            : "mt-0.5 text-[#d6b25e]"
                        }
                      >
                        <CheckIcon />
                      </span>

                      <span
                        className={`text-sm ${
                          index === 1 ? "text-[#10231e]/80" : "text-white/75"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-9 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-bold transition ${
                    index === 1
                      ? "bg-[#10231e] text-white hover:bg-white hover:text-[#10231e]"
                      : "bg-white text-[#10231e] hover:bg-[#d6b25e]"
                  }`}
                >
                  Get a Quote
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#f4f6f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
              <span className="h-px w-10 bg-[#a18132]" />
              Testimonials
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#10231e] sm:text-5xl">
              What our clients say
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <div className="text-4xl leading-none text-[#d6b25e]">“</div>

                <p className="mt-5 text-lg leading-8 text-slate-700">
                  {testimonial.quote}
                </p>

                <div className="mt-8 border-t border-slate-200 pt-5">
                  <div className="font-bold text-[#10231e]">
                    {testimonial.name}
                  </div>

                  <div className="mt-1 text-sm text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d6b25e] py-20 lg:py-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-[#10231e]/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#10231e]/60">
              Get Protected Today
            </div>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#10231e] sm:text-5xl">
              Secure your home &amp; business with Privamax
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#10231e]/70">
              Request a free security audit from our experienced
              professionals. We&apos;ll assess your property and recommend a
              tailored solution — at no obligation.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="tel:+254733669260"
              className="rounded-full bg-[#10231e] px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#10231e]"
            >
              Call Now
            </a>

            <a
              href="#contact"
              className="rounded-full border-2 border-[#10231e] px-7 py-4 text-center font-bold text-[#10231e] transition hover:bg-[#10231e] hover:text-white"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#071b16] text-white">
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
              <a className="block hover:text-white" href="#about">
                About Us
              </a>

              <a className="block hover:text-white" href="#services">
                Our Solutions
              </a>

              <a className="block hover:text-white" href="#contact">
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Services</h3>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <a className="block hover:text-white" href="#services">
                CCTV Installation
              </a>

              <a className="block hover:text-white" href="#services">
                Cyber Security
              </a>

              <a className="block hover:text-white" href="#services">
                Access Control
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <a className="block hover:text-white" href="tel:+254733669260">
                +254 733 669 260
              </a>

              <a className="block hover:text-white" href="tel:+254202070030">
                +254 202 070 030
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
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>Privamax Security © 2026. All rights reserved.</p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-white">
                Terms &amp; Conditions
              </a>

              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
