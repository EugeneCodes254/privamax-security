import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Insurance Investigations Kenya | Claims & Fraud Investigations",
  description:
    "Privamax Security provides professional insurance investigations in Kenya, including claims investigation, fraud detection, accident and motor claims, surveillance, background checks and corporate investigations.",
  alternates: {
    canonical: "https://privamaxsecurity.com/insurance",
  },
};

const services = [
  {
    number: "01",
    title: "Claims Investigation",
    description:
      "Independent investigation of insurance claims to establish facts, verify circumstances, and support fair claims decisions.",
  },
  {
    number: "02",
    title: "Fraud Detection & Prevention",
    description:
      "Investigative support for identifying suspicious activity, fraudulent claims, misrepresentation, and coordinated fraud.",
  },
  {
    number: "03",
    title: "Accident & Motor Claims Investigations",
    description:
      "Detailed investigation of accident circumstances, witness accounts, vehicle information, and available supporting evidence.",
  },
  {
    number: "04",
    title: "Background Investigations",
    description:
      "Discreet background checks and information gathering to help insurers and corporate clients make informed decisions.",
  },
  {
    number: "05",
    title: "Surveillance Services",
    description:
      "Professional surveillance designed to obtain factual evidence while maintaining discretion, confidentiality, and professionalism.",
  },
  {
    number: "06",
    title: "Corporate Investigations",
    description:
      "Investigative support for organizations dealing with internal risks, suspicious activity, asset concerns, and employee-related matters.",
  },
];

const benefits = [
  ["01", "Independent Investigations", "Objective information gathering and evidence-based reporting."],
  ["02", "Professional & Discreet", "Investigations are conducted with confidentiality and professionalism."],
  ["03", "Technology Driven", "Modern investigative methods and technology support efficient evidence gathering."],
  ["04", "Actionable Reporting", "Clear findings designed to help clients make informed decisions."],
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

export default function InsurancePage() {
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
              className="h-full w-full object-cover brightness-[0.72] saturate-[0.55] contrast-[1.06]"
            />

            <div className="pointer-events-none absolute inset-0 bg-[#0b2a21]/35 mix-blend-multiply" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#071b16]/92 via-[#10231e]/68 to-[#10231e]/32" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/65 via-transparent to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />

                <span className="rounded-full border border-[#d6b25e]/30 bg-[#d6b25e]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#d6b25e]">
                  IRA Licensed · Reg. No. IRA/10/1278/2025
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Insurance{" "}
                <span className="text-[#d6b25e]">Investigations</span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/65">
                Professional investigation services supporting insurers,
                corporate clients, and organizations with reliable facts,
                evidence, and informed decision-making.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] transition hover:brightness-110"
                >
                  Explore Services
                  <ArrowIcon />
                </a>

                <a
                  href="/contacts"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#10231e]"
                >
                  Request an Investigation
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
                  About Our Investigations
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Facts that help claims get resolved fairly
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 lg:justify-self-end">
              Privamax Insurance Investigators provides professional
              investigative services designed to help clients establish facts,
              identify risks, uncover suspicious activity, and make informed
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                What We Do
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#10231e] sm:text-5xl">
              Comprehensive investigation services
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our investigative capability supports insurance claims,
              businesses, and organizations requiring reliable information and
              professional evidence gathering.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-[#a18132]">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f4f6f3] text-[#10231e] transition group-hover:bg-[#d6b25e]">
                    <CheckIcon />
                  </div>
                </div>

                <h3 className="mt-10 text-2xl font-bold text-[#10231e]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <a
                  href="/contacts"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#10231e] transition hover:text-[#a18132]"
                >
                  Discuss an investigation
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="relative overflow-hidden bg-[#071b16] py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />

                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Why Privamax
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Professional, independent, and evidence driven
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                We combine investigative experience, discretion, structured
                reporting, and modern technology to support clients through
                complex claims and investigative matters.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map(([number, title, text]) => (
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

      {/* Coverage */}
      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#10231e]" />

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                Our Focus
              </span>

              <span className="h-px w-10 bg-[#10231e]" />
            </div>

            <h2 className="text-4xl font-bold text-[#10231e] sm:text-5xl">
              Supporting insurers and corporate clients
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our services are designed to provide reliable investigative
              support across insurance claims, corporate matters, fraud
              concerns, and other situations requiring professional fact
              finding.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Insurance Claims",
              "Corporate Investigations",
              "Fraud & Risk",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#10231e] text-[#d6b25e]">
                  <CheckIcon />
                </div>

                <h3 className="mt-5 font-bold text-[#10231e]">{item}</h3>
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
              Insurance Investigations
            </div>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#10231e] sm:text-5xl">
              Need an investigation handled professionally?
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#10231e]/70">
              Contact Privamax Insurance Investigators to discuss your
              requirements and determine the appropriate investigative approach.
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
