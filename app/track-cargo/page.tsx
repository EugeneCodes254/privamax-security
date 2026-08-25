import Link from "next/link";

export default function TrackCargoPage() {
  return (
    <main className="min-h-screen bg-[#f4f6f3] text-[#10231e]">
      <header className="bg-[#071b16] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
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
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-[#10231e]"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#10231e] py-24 text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[50px] border-[#d6b25e]/10" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#d6b25e]">
            SKR TRACK
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Track Your Consignment
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Enter your consignment number below to check the status of your
            shipment.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#10231e]">
                Enter the Consignment No.
              </h2>

              <p className="mt-2 text-slate-500">
                Example: PSL4113946
              </p>
            </div>

            <form
              action="#"
              className="space-y-5"
            >
              <label
                htmlFor="tracking-number"
                className="block text-sm font-bold text-[#10231e]"
              >
                Tracking Number
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="tracking-number"
                  name="tracking-number"
                  type="text"
                  placeholder="Enter tracking number"
                  className="h-14 flex-1 rounded-full border border-slate-200 bg-slate-50 px-6 outline-none transition focus:border-[#d6b25e] focus:ring-2 focus:ring-[#d6b25e]/20"
                />

                <button
                  type="submit"
                  className="h-14 rounded-full bg-[#d6b25e] px-8 font-bold text-[#10231e] transition hover:bg-[#10231e] hover:text-white"
                >
                  Track
                </button>
              </div>
            </form>

            <div className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-bold text-[#10231e]">
                Need assistance?
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                If you do not have your consignment number or require help
                tracking your shipment, contact our support team.
              </p>

              <div className="mt-5 flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:gap-6">
                <a
                  href="tel:+254733669260"
                  className="text-[#a18132] hover:text-[#10231e]"
                >
                  +254 733 669 260
                </a>

                <a
                  href="mailto:info@privamaxsecurity.co.ke"
                  className="text-[#a18132] hover:text-[#10231e]"
                >
                  info@privamaxsecurity.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#071b16] px-6 py-8 text-center text-sm text-white/40">
        Privamax Security © 2026. All rights reserved.
      </footer>
    </main>
  );
}
