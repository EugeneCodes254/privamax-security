import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description:
    "Privamax Security Firm Limited certifications and compliance credentials, including ISO 9001:2015 quality management system certification.",
  alternates: {
    canonical: "https://privamaxsecurity.com/certifications",
  },
  openGraph: {
    url: "https://privamaxsecurity.com/certifications",
    title: "Certifications & Compliance | Privamax Security",
    description:
      "View Privamax Security Firm Limited's certification and compliance credentials.",
  },
};

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function CertificationsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="relative">
        <Header />

        <section className="relative overflow-hidden bg-[#071b16] py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(214,178,94,0.14),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(255,255,255,0.04),transparent_25%)]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Trust &amp; Compliance
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Certifications &amp; <span className="text-[#d6b25e]">Compliance</span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/65">
                Our certification and regulatory credentials demonstrate our
                commitment to professional standards, quality management, and
                responsible security service delivery.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#f4f6f3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-3xl bg-[#071b16] p-8 text-white shadow-xl sm:p-10 lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
                    Quality Certification
                  </div>
                  <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                    ISO 9001:2015 CERTIFIED
                  </h2>
                </div>

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#d6b25e]/40 bg-[#d6b25e]/10 text-center text-[10px] font-extrabold leading-tight text-[#d6b25e]">
                  ISO
                  <br />
                  9001
                </div>
              </div>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-8 text-sm text-white/70">
                <div className="flex justify-between gap-6">
                  <span>Certificate No.</span>
                  <span className="font-bold text-white">KE002742</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span>Standard</span>
                  <span className="font-bold text-white">ISO 9001:2015</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span>Issue Date</span>
                  <span className="font-bold text-white">4 August 2026</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span>Expiry Date</span>
                  <span className="font-bold text-[#d6b25e]">2 April 2029</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#10231e]" />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                  What It Means
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                A commitment to consistent quality
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Privamax Security Firm Limited holds an ISO 9001:2015 quality
                management system certification covering the provision of
                protective personnel, physical security systems, and risk
                management solutions to private, commercial, and public-sector
                clients.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Quality-focused service delivery",
                  "Consistent operational processes",
                  "Continuous improvement mindset",
                  "Professional standards across client environments",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm font-semibold text-[#10231e]">
                    <span className="mt-0.5 text-[#a18132]">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl border border-[#10231e]/10 bg-[#f4f6f3] p-8 sm:p-12 lg:p-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#a18132]">
              Certification Scope
            </div>
            <h2 className="mt-4 text-3xl font-bold text-[#10231e] sm:text-4xl">
              Protective, physical and risk management solutions
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              The supplied certificate states the certification scope as the
              provision of protective personnel, physical security systems and
              risk management solutions to private, commercial and public
              sector clients.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Protective Personnel", "Physical Security Systems", "Risk Management Solutions", "Private Sector", "Commercial Sector", "Public Sector"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#10231e]/10 bg-white px-4 py-2 text-xs font-bold text-[#10231e]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-gray-400">
            Certification details presented on this page are based on the ISO
            9001:2015 certificate supplied by Privamax Security Firm Limited.
          </p>
        </div>
      </section>
    </main>
  );
}
