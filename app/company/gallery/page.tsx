const galleryItems = [
  {
    image: "/images/services/cctv.png",
    title: "CCTV Surveillance",
    category: "Electronic Security",
  },
  {
    image: "/images/services/electric-fence.png",
    title: "Electric Fence",
    category: "Perimeter Protection",
  },
  {
    image: "/images/services/fire-alarm.jpg",
    title: "Fire Alarm Systems",
    category: "Fire & Safety",
  },
  {
    image: "/images/services/access-control.png",
    title: "Access Control",
    category: "Security Technology",
  },
  {
    image: "/images/services/guards.png",
    title: "Security Personnel",
    category: "Manned Security",
  },
  {
    image: "/images/services/drone-uav.png",
    title: "Drone Security",
    category: "Advanced Security",
  },
  {
    image: "/images/services/bwc-camera.png",
    title: "Body-Worn Cameras",
    category: "Security Technology",
  },
  {
    image: "/images/hero/satellite-crop.png",
    title: "Advanced Surveillance",
    category: "Security Operations",
  },
  {
    image: "/images/hero/TRUCK-1.JPG",
    title: "Asset & Vehicle Tracking",
    category: "Tracking Solutions",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f4f6f3]">
      <section className="relative overflow-hidden bg-[#071b16]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102d25] via-[#071b16] to-[#03100d]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
              <span className="h-px w-10 bg-[#d6b25e]" />
              Company
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Gallery
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Explore Privamax security technology, personnel and protection
              solutions serving clients across Kenya.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a18132]">
              <span className="h-px w-10 bg-[#a18132]" />
              Our Gallery
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10231e] sm:text-5xl">
              Professional security. Modern solutions.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From electronic surveillance and perimeter protection to
              professional security personnel and advanced tracking
              technologies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-[#071b16]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/80 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-5 left-5">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6b25e]">
                      Privamax Security
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#a18132]">
                    {item.category}
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-[#10231e]">
                    {item.title}
                  </h3>

                  <div className="mt-5 h-px w-10 bg-[#d6b25e] transition-all duration-300 group-hover:w-20" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10231e] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e]">
              <span className="h-px w-10 bg-[#d6b25e]" />
              Privamax Security
              <span className="h-px w-10 bg-[#d6b25e]" />
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Protecting people, property and business.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Our integrated security solutions combine professional
              personnel, technology and intelligence to help keep your
              environment secure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#d6b25e] py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#10231e]/60">
              Get Protected
            </div>

            <h2 className="mt-3 text-4xl font-extrabold text-[#10231e] sm:text-5xl">
              Ready to secure your property?
            </h2>
          </div>

          <a
            href="/contacts"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#10231e] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#10231e]"
          >
            Contact Privamax
          </a>
        </div>
      </section>
    </main>
  );
}
