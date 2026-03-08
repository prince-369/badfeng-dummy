"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const trendingSlides = [
  {
    title: "Trending Combo Pack",
    image: "/SaleTrendingGroup/image 62.png",
    alt: "Trending products combo",
  },
  {
    title: "Outdoor Range Kit",
    image: "/SaleTrendingGroup/image 61.png",
    alt: "Outdoor range kit",
  },
  {
    title: "Demo Product Alpha",
    image: "/FeaturedItems/image 54.png",
    alt: "Demo product alpha",
  },
  {
    title: "Demo Product Pro",
    image: "/ProfessionalSeriesCard/image 59.png",
    alt: "Demo product pro",
  },
];

export default function TrendingProducts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.hidden) {
        return;
      }

      setActiveIndex((prev) => (prev + 1) % trendingSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!slideRef.current) {
      return;
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    gsap.fromTo(
      slideRef.current,
      { autoAlpha: 0.55, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.42, ease: "power2.out", overwrite: "auto" },
    );
  }, [activeIndex]);

  const currentSlide = trendingSlides[activeIndex];

  return (
    <article data-gsap-hover className="relative min-h-[580px] overflow-hidden rounded-[34px] border border-[#a9bfd0] bg-[#e9f2fa] px-6 py-6 sm:min-h-[370px] sm:rounded-[24px] sm:border-0 sm:bg-[#e8f0f6] sm:p-4 lg:min-h-[540px]">
      <span className="mx-auto inline-flex rounded-full bg-[#f6522f] px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-white sm:px-2 sm:py-1 sm:text-[10px]">15% OFF</span>
      <h3 className="mt-5 text-center text-[20px] font-medium leading-none text-[#111927] sm:mt-3 sm:text-[20px]">Trending Products</h3>
      <p className="mt-1 text-center text-[12px] font-medium text-[#2f4860] sm:text-[13px]">{currentSlide.title}</p>

      <div ref={slideRef} className="mt-6 sm:mt-3">
        <Image
          src={currentSlide.image}
          alt={currentSlide.alt}
          width={409}
          height={332}
          className="gsap-hover-image mx-auto h-[270px] w-[320px] object-contain sm:h-[220px] sm:w-[282px]"
        />
      </div>

      <button className="absolute left-1/2 top-[67%] inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#056db6] text-[22px] text-white sm:hidden">
        ▶
      </button>

      <div className="mt-12 flex items-center justify-start sm:mt-3">
        <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f4f5] text-[24px] text-slate-700 sm:h-10 sm:w-10 sm:text-[20px]"><Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-5 w-5 sm:h-4.5 sm:w-4.5" /></button>
      </div>

      <div className="mt-8 flex justify-center gap-2 sm:hidden">
        {trendingSlides.map((slide, index) => (
          <span
            key={slide.title}
            className={`h-2.5 w-2.5 rounded-full ${index === activeIndex ? "mobile-slide-dot-active bg-[#0464af]" : "bg-[#99b6cd]"}`}
            style={index === activeIndex ? { ["--dot-speed" as string]: "3s" } : undefined}
          />
        ))}
      </div>

      <div className="mt-2 hidden justify-center gap-1.5 sm:flex">
        {trendingSlides.map((slide, index) => (
          <span key={`${slide.title}-desktop`} className={`h-2.5 w-2.5 rounded-full ${index === activeIndex ? "bg-[#0464af]" : "bg-[#99b6cd]"}`} />
        ))}
      </div>
    </article>
  );
}
