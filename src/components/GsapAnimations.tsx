"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapAnimations() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    ScrollTrigger.config({ ignoreMobileResize: true });
    gsap.defaults({ force3D: true });

    const hoverCleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up'], [data-gsap='fade-down']");
      sections.forEach((el) => {
        const fromY = el.dataset.gsap === "fade-down" ? -28 : 28;
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: fromY },
          {
            autoAlpha: 1,
            y: 0,
            duration: isMobile ? 0.58 : 0.9,
            ease: "power2.out",
            overwrite: "auto",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      const cards = gsap.utils.toArray<HTMLElement>("[data-gsap-card]");
      cards.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 18, scale: isMobile ? 1 : 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.52 : 0.72,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              once: true,
            },
          },
        );
      });

      const heroIcons = gsap.utils.toArray<HTMLElement>(".hero-float-icon");
      if (heroIcons.length && !isMobile) {
        gsap.to(heroIcons, {
          y: -8,
          duration: 1.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.18,
        });
      }

      const ctas = gsap.utils.toArray<HTMLElement>(".gsap-cta");
      if (ctas.length && !isMobile) {
        gsap.to(ctas, {
          scale: 1.03,
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.25,
        });
      }

      const promoImages = gsap.utils.toArray<HTMLElement>("[data-gsap='promo-image']");
      if (!isMobile) {
        promoImages.forEach((el) => {
          gsap.fromTo(
            el,
            { backgroundPosition: "50% 30%" },
            {
              backgroundPosition: "50% 58%",
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            },
          );
        });
      }

      const mm = gsap.matchMedia();
      mm.add("(hover: hover)", () => {
        const hoverNodes = gsap.utils.toArray<HTMLElement>("[data-gsap-hover], [data-gsap-card]");
        const hoverCards = Array.from(new Set(hoverNodes)).filter((el) => !el.querySelector("[data-gsap-hover], [data-gsap-card]"));
        hoverCards.forEach((el) => {
          const images = gsap.utils.toArray<HTMLElement>(el.querySelectorAll(".gsap-hover-image"));

          const enter = () => {
            gsap.to(el, {
              y: -4,
              scale: 1.006,
              duration: 0.3,
              ease: "power2.out",
              boxShadow: "0 10px 22px rgba(12,45,78,0.1)",
              overwrite: "auto",
            });

            if (images.length) {
              gsap.to(images, {
                scale: 1.03,
                duration: 0.38,
                ease: "power2.out",
                overwrite: "auto",
              });
            }
          };

          const leave = () => {
            gsap.to(el, {
              y: 0,
              scale: 1,
              duration: 0.36,
              ease: "power2.out",
              boxShadow: "0 0px 0px rgba(12,45,78,0)",
              overwrite: "auto",
            });

            if (images.length) {
              gsap.to(images, {
                scale: 1,
                duration: 0.42,
                ease: "power2.out",
                overwrite: "auto",
              });
            }
          };

          el.addEventListener("mouseenter", enter);
          el.addEventListener("mouseleave", leave);

          hoverCleanups.push(() => {
            el.removeEventListener("mouseenter", enter);
            el.removeEventListener("mouseleave", leave);
          });
        });
      });

      ScrollTrigger.refresh();
    });

    return () => {
      hoverCleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return null;
}
