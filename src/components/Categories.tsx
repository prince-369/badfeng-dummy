"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { categories } from "@/data/categories";

const moreCategoryImages = [
  "/MoreCategoryCard/Rectangle 302.png",
  "/MoreCategoryCard/Rectangle 303.png",
  "/MoreCategoryCard/Rectangle 304.png",
  "/MoreCategoryCard/Rectangle 305.png",
  "/MoreCategoryCard/Rectangle 306.png",
  "/WalkieAccesoriesGroup/Rectangle 302 (1).png",
  "/WalkieAccesoriesGroup/Rectangle 303 (1).png",
  "/WalkieAccesoriesGroup/Rectangle 302 (2).png",
  "/WalkieAccesoriesGroup/Rectangle 303 (2).png",
];

export default function Categories() {
  const [, second] = categories;
  const categoryScrollRef = useRef<HTMLDivElement | null>(null);
  const featuredScrollRef = useRef<HTMLDivElement | null>(null);
  const autoplayPausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const mobileFeaturedCards = [
    {
      title: "Featured Item",
      subtitle: "Licence Radios",
      image: "/FeaturedItems/image 54.png",
      imageClass: "left-[57%] top-[30px] h-[560px] w-[336px] -translate-x-1/2 rotate-[6deg]",
    },
    {
      title: second?.name ?? "Professional Series",
      subtitle: "Instant Connect",
      image: "/ProfessionalSeriesCard/image 59.png",
      imageClass: "left-1/2 top-[58px] h-[515px] w-[316px] -translate-x-1/2 rotate-[10deg]",
    },
    {
      title: "Long Range Set",
      subtitle: "Mountain Patrol",
      image: "/SaleTrendingGroup/image 61.png",
      imageClass: "left-1/2 top-[72px] h-[470px] w-[300px] -translate-x-1/2 rotate-[7deg]",
    },
    {
      title: "Demo Product",
      subtitle: "Urban Link Pro",
      image: "/SaleTrendingGroup/image 62.png",
      imageClass: "left-1/2 top-[80px] h-[450px] w-[292px] -translate-x-1/2 rotate-[5deg]",
    },
    {
      title: "Tactical Combo",
      subtitle: "Rapid Response",
      image: "/WalkieAccesoriesGroup/image 746.png",
      imageClass: "left-1/2 top-[72px] h-[470px] w-[300px] -translate-x-1/2 rotate-[6deg]",
    },
  ];

  const handleCategoryScroll = (direction: "left" | "right") => {
    if (!categoryScrollRef.current) {
      return;
    }

    const amount = direction === "right" ? 260 : -260;
    categoryScrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleFeaturedScroll = (direction: "left" | "right") => {
    if (!featuredScrollRef.current) {
      return;
    }

    autoplayPausedRef.current = true;
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      autoplayPausedRef.current = false;
    }, 3800);

    setFeaturedIndex((prev) => {
      if (direction === "right") {
        return (prev + 1) % mobileFeaturedCards.length;
      }

      return prev === 0 ? mobileFeaturedCards.length - 1 : prev - 1;
    });
  };

  useEffect(() => {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      if (document.hidden || autoplayPausedRef.current) {
        return;
      }

      setFeaturedIndex((prev) => (prev + 1) % mobileFeaturedCards.length);
    }, 3200);

    const slider = featuredScrollRef.current;
    const pauseAutoplay = () => {
      autoplayPausedRef.current = true;
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
      resumeTimerRef.current = window.setTimeout(() => {
        autoplayPausedRef.current = false;
      }, 3800);
    };

    slider?.addEventListener("touchstart", pauseAutoplay, { passive: true });
    slider?.addEventListener("wheel", pauseAutoplay, { passive: true });

    return () => {
      window.clearInterval(timer);
      slider?.removeEventListener("touchstart", pauseAutoplay);
      slider?.removeEventListener("wheel", pauseAutoplay);
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, [mobileFeaturedCards.length]);

  useEffect(() => {
    const slider = featuredScrollRef.current;
    if (!slider) {
      return;
    }

    const cardStep = 308;
    slider.scrollTo({ left: featuredIndex * cardStep, behavior: "smooth" });
  }, [featuredIndex]);

  return (
    <section className="relative z-10 mx-auto grid w-full max-w-[1240px] gap-3 px-2 py-2 sm:px-3 lg:mt-[-18px] lg:grid-cols-[2fr_1fr_250px]">
      {/* More Categories Card */}
      <article data-gsap-hover className="w-screen overflow-hidden rounded-[32px] border border-[#a9bfd0] bg-[#d7e2eb] px-4 py-4 sm:w-full sm:h-auto sm:rounded-[24px] sm:border-0 sm:bg-[#e8f0f6]">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[24px] font-semibold leading-none text-[#101820] sm:text-[22px]">More Categories</h3>
            <p className="mt-2 text-[13px] text-slate-600 sm:mt-1 sm:text-[14px]">345 plus Items.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleCategoryScroll("left")}
              aria-label="Scroll categories left"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf3f7] text-[24px] font-light text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:h-10 sm:w-10 sm:text-[20px]"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={() => handleCategoryScroll("right")}
              aria-label="Scroll categories right"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf3f7] text-[24px] font-light text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:h-10 sm:w-10 sm:text-[20px]"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Unified carousel for mobile and desktop */}
        <div className="mt-4">
          <div
            ref={categoryScrollRef}
            className="w-full overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-2.5" style={{ width: "max-content" }}>
              {moreCategoryImages.map((imagePath, index) => (
                <div key={`${imagePath}-${index}`} data-gsap-hover className="h-[162px] w-[150px] shrink-0 overflow-hidden rounded-[22px] bg-[#c9deed] sm:h-[78px] sm:w-[118px] sm:rounded-[16px]">
                  <Image
                    src={imagePath}
                    alt={`Category item ${index + 1}`}
                    width={280}
                    height={240}
                    className="gsap-hover-image h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Mobile featured section */}
      <div className="sm:hidden">
        <div className="mb-2 flex items-center justify-end gap-2 px-1">
          <button
            type="button"
            onClick={() => handleFeaturedScroll("left")}
            aria-label="Scroll featured cards left"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3f7] text-[20px] text-slate-800"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => handleFeaturedScroll("right")}
            aria-label="Scroll featured cards right"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3f7] text-[20px] text-slate-800"
          >
            &gt;
          </button>
        </div>

        <div
          ref={featuredScrollRef}
          className="w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain touch-pan-x pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max gap-3 pr-1">
            {mobileFeaturedCards.map((card, index) => (
              <article key={`${card.title}-${index}`} data-gsap-hover className="relative h-[560px] w-[296px] shrink-0 snap-start overflow-hidden rounded-[26px] bg-[#e8f0f6] px-5 py-4">
                <h3 className="text-[27px] font-semibold leading-none text-[#101820]">{card.title}</h3>
                <p className="mt-2 text-[17px] leading-[1.05] text-slate-800">{card.subtitle}</p>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={272}
                  height={430}
                  className={`gsap-hover-image pointer-events-none absolute object-contain ${card.imageClass}`}
                />
                <button className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f3f4f5] text-[22px] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-5 w-5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop professional series card */}
      <article data-gsap-hover className="relative hidden min-h-[210px] overflow-hidden rounded-[24px] bg-[#e8f0f6] px-4 py-3 sm:block sm:min-h-[165px]">
        <h3 className="text-[27px] font-semibold leading-none text-[#101820] sm:text-[22px]">{second?.name ?? "Professional Series"}</h3>
        <p className="mt-2 text-[16px] leading-[1.05] text-slate-800">Instant<br />Connect</p>
        <Image
          src="/ProfessionalSeriesCard/image 59.png"
          alt="Professional series radio"
          width={193}
          height={193}
          className="gsap-hover-image pointer-events-none absolute bottom-[14px] right-[14px] h-[128px] w-[128px] object-contain sm:bottom-[6px] sm:h-[122px] sm:w-[122px]"
        />
        <button className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f5] text-[20px] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-4.5 w-4.5" />
        </button>
      </article>

      <div className="hidden lg:block" aria-hidden />
    </section>
  );
}