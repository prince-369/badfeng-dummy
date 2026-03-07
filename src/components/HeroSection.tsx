import Image from "next/image";

const heroIcons = [
  {
    src: "/HeroSections/image 49.png",
    alt: "Bluetooth",
    className: "left-[56%] top-[12%] h-[66px] w-[66px]",
  },
  {
    src: "/HeroSections/image 50.png",
    alt: "Compass",
    className: "right-[13%] top-[10%] h-[71px] w-[71px]",
  },
  {
    src: "/HeroSections/image 51.png",
    alt: "Location",
    className: "left-[56%] top-[45%] h-[75px] w-[59px]",
  },
  {
    src: "/HeroSections/image 52.png",
    alt: "Wifi",
    className: "right-[7%] top-[43%] h-[54px] w-[64px]",
  },
];

export default function HeroSection() {
  return (
    <section className="relative mx-auto grid w-full max-w-[1240px] gap-3 px-2 pb-2 pt-2 lg:grid-cols-[1fr_250px] sm:px-3">
      <div className="relative min-h-[360px] overflow-hidden rounded-[24px] bg-[#e5edf4] px-7 pb-6 pt-8 sm:px-11 sm:pt-9">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_36%,rgba(194,218,238,0.6)_0,rgba(194,218,238,0)_52%)]" />
        <div className="pointer-events-none absolute -left-[16%] top-[28%] h-[420px] w-[620px] rotate-12 opacity-30 [background-image:repeating-radial-gradient(circle_at_center,transparent_0_9px,#c2d4e3_9px_10px)]" />

        <div className="relative z-10 max-w-[320px] space-y-4">
          <h1 className="font-[var(--font-space-grotesk)] text-[50px] font-bold leading-[1.02] tracking-[-0.02em] text-[#0e141b]">
            Stay Connected Anywhere
            <br />
            Ideal for Outdoor Adventures
          </h1>

          <div className="flex items-center gap-3">
            <p className="text-[56px] font-black leading-none text-transparent [-webkit-text-stroke:1.5px_#8b97a4]">01</p>
            <span className="h-px w-[72px] bg-[#cfdae3]" />
            <div className="space-y-1">
              <p className="text-[18px] font-semibold leading-none text-[#121a22]">Reliable Long-Range</p>
              <p className="max-w-[250px] text-[14px] leading-tight text-[#6d737a]">Communication for Extreme Outdoor Adventures</p>
            </div>
          </div>

          <button className="inline-flex items-center gap-3 rounded-full bg-[#056db6] px-5 py-1.5 text-[16px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
            View All Product
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[20px] text-[#111]">
              ↗
            </span>
          </button>
        </div>

        <Image
          src="/HeroSections/image 46.png"
          alt="Main walkie talkie"
          width={292}
          height={462}
          className="pointer-events-none absolute bottom-[36px] left-[71.5%] z-10 h-[500px] w-auto -translate-x-1/2 object-contain"
          priority
        />

        {heroIcons.map((icon) => (
          <Image
            key={icon.src}
            src={icon.src}
            alt={icon.alt}
            width={80}
            height={80}
            className={`pointer-events-none absolute z-10 object-contain ${icon.className}`}
          />
        ))}

        <div className="pointer-events-none absolute bottom-[32px] left-[72%] z-0 h-[90px] w-[240px] -translate-x-1/2 rounded-[50%] border border-[#9fc3df]" />

        <button className="absolute bottom-3 left-[72%] z-20 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#f2f3f4] text-[14px] font-light text-[#1f242a]">
          &lt;&gt;
        </button>
      </div>

      <div className="relative">
        <article className="relative min-h-[206px] overflow-hidden rounded-[24px] bg-[#e8f0f6] px-4 py-3">
          <p className="text-[17px] font-semibold leading-none text-slate-900">Featured Item</p>
          <p className="mt-1 text-[13px] text-slate-500">Licence Radios</p>
          <Image
            src="/FeaturedItems/image 54.png"
            alt="featured radio"
            width={272}
            height={430}
            className="pointer-events-none absolute bottom-0 right-[-10px] h-[210px] w-[132px] object-contain"
          />
          <button className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[20px] text-slate-700">
            ↗
          </button>
        </article>

        <article className="absolute left-0 right-0 top-[218px] z-30 rounded-[24px] bg-[#e8f0f6] px-3 py-3 pb-7 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
          <p className="text-[17px] font-semibold leading-tight text-slate-900">License Free on instagram</p>

          <div className="mt-3 flex items-center justify-between rounded-full bg-white px-2 py-1.5">
            <div className="flex items-center gap-2.5">
              <Image src="/LicenseFreeCard/image 56.png" alt="baofeng india" width={33} height={33} className="h-8 w-8 rounded-full" />
              <div className="leading-none">
                <p className="text-[11px] font-semibold text-slate-900">baofengindia</p>
                <p className="mt-1 text-[9px] text-slate-500">Power Drift</p>
              </div>
            </div>
            <button className="rounded-full bg-[#056db6] px-2.5 py-1 text-[10px] font-semibold text-white">View Profile</button>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-[22px]">
            <Image
              src="/LicenseFreeCard/image 55.png"
              alt="instagram promo"
              width={294}
              height={294}
              className="h-[295px] w-full object-cover"
            />
            <button className="absolute left-1/2 top-1/2 inline-flex h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[14px] text-slate-900 shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
              ▶
            </button>
          </div>

          <a href="#" className="mt-2 inline-block text-[13px] font-medium text-[#056db6] hover:underline">
            View more on instagram
          </a>

          <div className="mt-1.5 flex items-center gap-2.5 text-slate-900">
            <span className="text-[18px]">♡</span>
            <span className="text-[18px]">◌</span>
            <span className="text-[18px]">↥</span>
          </div>

          <div className="mt-1.5 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0a67b5]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#0a67b5]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#9db9cf]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#0a67b5]" />
          </div>
        </article>
      </div>
    </section>
  );
}
