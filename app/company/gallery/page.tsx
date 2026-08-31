import Header from "@/components/Header";

const galleryItems = [
  {
    image: "/images/services/cctv.png",
    title: "CCTV Surveillance",
    category: "Electronic Security",
    size: "large",
  },
  {
    image: "/images/services/electric-fence.png",
    title: "Electric Fence",
    category: "Perimeter Protection",
    size: "normal",
  },
  {
    image: "/images/services/access-control.png",
    title: "Access Control",
    category: "Security Technology",
    size: "normal",
  },
  {
    image: "/images/services/guards.png",
    title: "Security Personnel",
    category: "Manned Security",
    size: "normal",
  },
  {
    image: "/images/services/fire-alarm.jpg",
    title: "Fire Alarm Systems",
    category: "Fire & Safety",
    size: "large",
  },
  {
    image: "/images/services/drone-uav.png",
    title: "Drone Security",
    category: "Advanced Security",
    size: "normal",
  },
  {
    image: "/images/services/bwc-camera.png",
    title: "Body-Worn Cameras",
    category: "Security Technology",
    size: "normal",
  },
  {
    image: "/images/hero/satellite-crop.png",
    title: "Advanced Surveillance",
    category: "Security Operations",
    size: "normal",
  },
  {
    image: "/images/hero/TRUCK-1.JPG",
    title: "Asset & Vehicle Tracking",
    category: "Tracking Solutions",
    size: "large",
  },
];

const highlights = [
  {
    number: "01",
    title: "Advanced Technology",
    text: "Modern surveillance, access control, tracking, and security technologies.",
  },
  {
    number: "02",
    title: "Professional Personnel",
    text: "Trained security teams supporting residential, corporate, and institutional clients.",
  },
  {
    number: "03",
    title: "Integrated Protection",
    text: "Solutions combining people, technology, intelligence, and rapid response.",
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

export default function GalleryPage() {
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
                  Company
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Our <span className="text-[#d6b25e]">Gallery</span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/65">
                Explore Privamax security technology, personnel, equipment,
                and protection solutions serving clients across Kenya.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-8 py-4 font-bold text-[#10231e] transition hover:brightness-110"
                >
                  Explore Gallery
                  <ArrowIcon />
                </a>

                <a
                  href="/contacts"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#10231e]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Introduction */}
      <section className="bg-[#f4f6f3] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#10231e]" />

                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#10231e]">
                  Our Gallery
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
                Professional security. Modern solutions.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 lg:justify-self-end">
              From electronic surveillance and perimeter protection to
              professional security personnel and advanced tracking
              technologies, our solutions are built to provide dependable
              protection.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl bg-[#071b16] ${
                  item.size === "large"
                    ? "md:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    item.size === "large"
                      ? "h-[360px] md:h-[430px]"
                      : "h-[300px] md:h-[330px]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/90 via-[#071b16]/10 to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full bg-[#d6b25e] px-3 py-1.5 text-xs font-bold text-[#10231e]">
                    0{index + 1}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6b25e]">
                      {item.category}
                    </div>

                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <div className="mt-4 h-px w-10 bg-[#d6b25e] transition-all duration-300 group-hover:w-20" />
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="relative overflow-hidden bg-[#071b16] py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#d6b25e]" />

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                Privamax Security
              </span>

              <span className="h-px w-10 bg-[#d6b25e]" />
            </div>

            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Protecting people, property and business
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/60">
              Our integrated approach combines professional personnel,
              technology, intelligence, and responsive security operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/[0.08]"
              >
                <div className="text-xs font-bold tracking-[0.18em] text-[#d6b25e]">
                  {item.number}
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.text}
                </p>
              </article>
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
              Get Protected
            </div>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#10231e] sm:text-5xl">
              Ready to secure your property?
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#10231e]/70">
              Talk to Privamax Security about a solution designed around your
              specific security requirements.
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
