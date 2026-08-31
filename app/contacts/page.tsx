"use client";

import { FormEvent, useState } from "react";
import Header from "@/components/Header";

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

function PhoneIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const services = [
  "Security Guarding",
  "CCTV Surveillance",
  "Access Control",
  "Electric Fencing",
  "Fire Detection & Alarm",
  "Private Investigation",
  "Cyber Security",
  "Vehicle & Asset Tracking",
  "Security Consultancy",
  "Other",
];

export default function ContactsPage() {
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setFormStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

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
              className="h-full w-full object-cover brightness-[0.42] saturate-[0.6]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#071b16]/95 via-[#10231e]/70 to-[#10231e]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/65 via-transparent to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6b25e]" />

                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Contact Privamax
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Let&apos;s make your security{" "}
                <span className="text-[#d6b25e]">our priority.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/65">
                Whether you need security personnel, electronic security
                systems, investigations, or a complete security assessment,
                our team is ready to help.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] transition hover:brightness-110"
                >
                  Request a Quote
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

      {/* Contact + Form */}
      <section className="relative overflow-hidden bg-[#f4f6f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#10231e]" />

                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Speak to our security team
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Tell us what you need and our team will help identify the right
                security solution for your home, business, property, or
                organization.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="tel:+254733669260"
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10231e] text-[#d6b25e] transition group-hover:bg-[#d6b25e] group-hover:text-[#10231e]">
                    <PhoneIcon />
                  </span>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                      Call Us
                    </div>

                    <div className="mt-1 font-bold text-[#10231e]">
                      +254 733 669 260
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+254202070030"
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10231e] text-[#d6b25e] transition group-hover:bg-[#d6b25e] group-hover:text-[#10231e]">
                    <PhoneIcon />
                  </span>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                      Office Line
                    </div>

                    <div className="mt-1 font-bold text-[#10231e]">
                      +254 202 070 030
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@privamaxsecurity.com"
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10231e] text-[#d6b25e] transition group-hover:bg-[#d6b25e] group-hover:text-[#10231e]">
                    <MailIcon />
                  </span>

                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                      Email Us
                    </div>

                    <div className="mt-1 break-all font-bold text-[#10231e]">
                      info@privamaxsecurity.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10231e] text-[#d6b25e]">
                    <LocationIcon />
                  </span>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                      Office
                    </div>

                    <div className="mt-1 font-bold leading-6 text-[#10231e]">
                      Ndovu Lane-Ndovu Close, Karen,
                      <br />
                      Nairobi, Kenya
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#10231e]/10 bg-[#10231e] p-6 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                  Available 24/7
                </div>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  Our response and security teams remain available to assist
                  clients whenever support is required.
                </p>
              </div>
            </div>

            <div
              id="contact-form"
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl sm:p-9"
            >
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#a18132]">
                  Request a Quote
                </div>

                <h3 className="mt-2 text-3xl font-bold text-[#10231e]">
                  Tell us about your security needs
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  Complete the form and our team will get back to you.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[#10231e]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#d6b25e] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-[#10231e]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+254..."
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#d6b25e] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-[#10231e]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#d6b25e] focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-bold text-[#10231e]"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#d6b25e] focus:bg-white"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-[#10231e]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your security requirements..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#d6b25e] focus:bg-white"
                  />
                </div>

                {formStatus === "success" && (
                  <div
                    role="status"
                    className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800"
                  >
                    Thank you. Your enquiry has been sent successfully. Our
                    team will get back to you.
                  </div>
                )}

                {formStatus === "error" && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800"
                  >
                    We could not send your enquiry. Please try again or contact
                    us directly at info@privamaxsecurity.com.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#10231e] px-7 py-4 font-bold text-white transition hover:bg-[#d6b25e] hover:text-[#10231e] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                  {!submitting && <ArrowIcon />}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative overflow-hidden bg-[#071b16] py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["24/7", "Response Team"],
              ["Kenya", "Service Coverage"],
              ["Since 2016", "Security Experience"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <div
                  className={`text-4xl font-bold ${
                    index === 1 ? "text-[#d6b25e]" : "text-white"
                  }`}
                >
                  {value}
                </div>

                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/40">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#d6b25e] py-20 lg:py-24">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-[#10231e]/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#10231e]/60">
              Need Immediate Assistance?
            </div>

            <h2 className="mt-3 text-4xl font-bold text-[#10231e] sm:text-5xl">
              Speak to Privamax today.
            </h2>
          </div>

          <a
            href="tel:+254733669260"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#10231e] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
          >
            Call +254 733 669 260
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
