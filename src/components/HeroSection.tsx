"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const heroIcons = [
  {
    src: "/HeroSections/image 49.png",
    alt: "Bluetooth",
    className: "left-[8.5%] top-[78px] h-[52px] w-[52px] sm:left-[56%] sm:top-[12%] sm:h-[66px] sm:w-[66px]",
  },
  {
    src: "/HeroSections/image 50.png",
    alt: "Compass",
    className: "right-[23%] top-[72px] h-[58px] w-[58px] sm:right-[13%] sm:top-[10%] sm:h-[71px] sm:w-[71px]",
  },
  {
    src: "/HeroSections/image 51.png",
    alt: "Location",
    className: "left-[7%] top-[268px] h-[58px] w-[44px] sm:left-[56%] sm:top-[45%] sm:h-[75px] sm:w-[59px]",
  },
  {
    src: "/HeroSections/image 52.png",
    alt: "Wifi",
    className: "right-[9%] top-[250px] h-[44px] w-[54px] sm:right-[7%] sm:top-[43%] sm:h-[54px] sm:w-[64px]",
  },
];

const instagramSlides = [
  {
    image: "/LicenseFreeCard/image 55.png",
    alt: "Instagram promo post one",
    handle: "baofengindia",
    caption: "Power Drift",
  },
  {
    image: "/GroupFour/image 41.png",
    alt: "Instagram promo post two",
    handle: "gsradiohub",
    caption: "Field Range Test",
  },
  {
    image: "/GroupFour/image 42.png",
    alt: "Instagram promo post three",
    handle: "baofengindia",
    caption: "Dual Band Demo",
  },
  {
    image: "/GroupFour/image 43.png",
    alt: "Instagram promo post four",
    handle: "gsradiohub",
    caption: "Demo Product Reel",
  },
];

export default function HeroSection() {
  const [activeInstagramSlide, setActiveInstagramSlide] = useState(0);
  const instagramCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.hidden) {
        return;
      }

      setActiveInstagramSlide((prev) => (prev + 1) % instagramSlides.length);
    }, 3300);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!instagramCardRef.current) {
      return;
    }

    if (window.matchMedia("(max-width: 1023px)").matches) {
      return;
    }

    gsap.fromTo(
      instagramCardRef.current,
      { autoAlpha: 0.5, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.44, ease: "power2.out", overwrite: "auto" },
    );
  }, [activeInstagramSlide]);

  const activeInstagramItem = instagramSlides[activeInstagramSlide];

  return (
    <section className="relative mx-auto grid w-full max-w-[1240px] gap-3 px-2 pb-2 pt-2 lg:grid-cols-[1fr_250px] sm:px-3">
      <div data-gsap-hover className="relative min-h-[744px] overflow-hidden rounded-[32px] border border-[#9ab4c8] bg-[#d7e2eb] px-6 pb-6 pt-6 sm:min-h-[430px] sm:rounded-[24px] sm:border-0 sm:bg-[#e5edf4] sm:px-11 sm:pt-9 lg:min-h-[360px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_36%,rgba(194,218,238,0.6)_0,rgba(194,218,238,0)_52%)]" />
        <div className="pointer-events-none absolute -left-[16%] top-[28%] h-[420px] w-[620px] rotate-12 opacity-30 [background-image:repeating-radial-gradient(circle_at_center,transparent_0_9px,#c2d4e3_9px_10px)]" />

        <div className="relative z-10 max-w-[340px] space-y-4 pt-[430px] sm:max-w-[320px] sm:space-y-4 sm:pt-0">
          <h1 className="font-[var(--font-space-grotesk)] text-[22px] font-bold leading-[1.12] tracking-[-0.01em] text-[#0e141b] sm:text-[42px] lg:text-[50px]">
            <span className="block whitespace-nowrap sm:whitespace-normal">Stay Connected Anywhere</span>
            <span className="block whitespace-nowrap sm:whitespace-normal">Ideal for Outdoor Adventures</span>
          </h1>

          <p className="max-w-[340px] text-[15px] leading-[1.22] text-[#6d737a] sm:max-w-[250px] sm:text-[14px]">
            <span className="font-semibold text-[#121a22]">Reliable Long-Range </span>
            Communication for Extreme Outdoor Adventures
          </p>

          <button className="gsap-cta inline-flex items-center gap-3 rounded-full bg-[#056db6] px-6 py-2 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] sm:px-5 sm:py-1.5 sm:text-[16px]">
            View All Product
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111] sm:h-9 sm:w-9">
              <Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-5 w-5 sm:h-4.5 sm:w-4.5" />
            </span>
          </button>
        </div>

        <Image
          src="/HeroSections/image 46.png"
          alt="Main walkie talkie"
          width={292}
          height={462}
          className="gsap-hover-image pointer-events-none absolute left-1/2 top-[22px] z-10 h-[392px] w-auto -translate-x-1/2 object-contain sm:bottom-[36px] sm:left-[68%] sm:top-auto sm:h-[400px] lg:left-[71.5%] lg:h-[500px]"
          priority
        />

        {heroIcons.map((icon) => (
          <Image
            key={icon.src}
            src={icon.src}
            alt={icon.alt}
            width={80}
            height={80}
            className={`hero-float-icon pointer-events-none absolute z-10 object-contain ${icon.className}`}
          />
        ))}

        <div className="pointer-events-none absolute bottom-[32px] left-[72%] z-0 hidden h-[90px] w-[240px] -translate-x-1/2 rounded-[50%] border border-[#9fc3df] lg:block" />

        <button className="absolute bottom-3 left-[72%] z-20 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#f2f3f4] text-[14px] font-light text-[#1f242a] lg:inline-flex">
          &lt;&gt;
        </button>
      </div>

      <div className="relative hidden lg:block">
        <article data-gsap-hover className="relative min-h-[206px] overflow-hidden rounded-[24px] bg-[#f5f7fa] px-4 py-3">
          <p className="text-[17px] font-semibold leading-none text-slate-900">Featured Item</p>
          <p className="mt-1 text-[13px] text-slate-500">Licence Radios</p>
          <Image
            src="/FeaturedItems/image 54.png"
            alt="featured radio"
            width={272}
            height={430}
            className="gsap-hover-image pointer-events-none absolute bottom-0 right-[-10px] h-[210px] w-[132px] object-contain"
          />
          <button className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[20px] text-slate-700">
            <Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-4.5 w-4.5" />
          </button>
        </article>

        <article data-gsap-hover className="mt-3 rounded-[24px] bg-[#f5f7fa] px-3 py-3 pb-7 shadow-[0_10px_24px_rgba(0,0,0,0.06)] lg:absolute lg:left-0 lg:right-0 lg:top-[218px] lg:mt-0 lg:z-30">
          <p className="text-[17px] font-semibold leading-tight text-slate-900">License Free on instagram</p>

          <div className="mt-3 flex items-center justify-between rounded-full bg-white px-2 py-1.5">
            <div className="flex items-center gap-2.5">
              <Image src="/LicenseFreeCard/image 56.png" alt="baofeng india" width={33} height={33} className="h-8 w-8 rounded-full" />
              <div className="leading-none">
                <p className="text-[11px] font-semibold text-slate-900">{activeInstagramItem.handle}</p>
                <p className="mt-1 text-[9px] text-slate-500">{activeInstagramItem.caption}</p>
              </div>
            </div>
            <button className="rounded-full bg-[#056db6] px-2.5 py-1 text-[10px] font-semibold text-white">View Profile</button>
          </div>

          <div ref={instagramCardRef} className="relative mt-3 overflow-hidden rounded-[22px]">
            <Image
              src={activeInstagramItem.image}
              alt={activeInstagramItem.alt}
              width={294}
              height={294}
              className="gsap-hover-image h-[240px] w-full object-cover sm:h-[260px]"
            />
            <button className="absolute left-1/2 top-1/2 inline-flex h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[14px] text-slate-900 shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
              ▶
            </button>
          </div>

          <a href="#" className="mt-2 inline-block text-[13px] font-medium text-[#056db6] hover:underline">
            View more on instagram
          </a>

          <div className="mt-1.5 flex items-center gap-2.5 text-slate-900">
            <Image src="/LicenseFreeCard/heart.svg" alt="Like" width={19} height={19} className="h-[18px] w-[18px]" />
            <Image src="/LicenseFreeCard/comment.svg" alt="Comment" width={19} height={19} className="h-[18px] w-[18px]" />
            <Image src="/LicenseFreeCard/send.svg" alt="Send" width={19} height={19} className="h-[18px] w-[18px]" />
          </div>

          <div className="mt-1.5 flex justify-center gap-1.5">
            {instagramSlides.map((slide, index) => (
              <span key={slide.alt} className={`h-1.5 w-1.5 rounded-full ${index === activeInstagramSlide ? "bg-[#0a67b5]" : "bg-[#9db9cf]"}`} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
