import Image from "next/image";

import Accessories from "@/components/Accessories";
import Categories from "@/components/Categories";
import FeatureHighlights from "@/components/FeatureHighlights";
import Footer from "@/components/Footer";
import GsapAnimations from "@/components/GsapAnimations";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGallery from "@/components/ProductGallery";
import PromoBanner from "@/components/PromoBanner";
import SaleTimer from "@/components/SaleTimer";
import TrendingProducts from "@/components/TrendingProducts";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#c8d8e5]">
      <GsapAnimations />
      <Header />
      <main className="space-y-3 pb-8">
        <div data-gsap="fade-up">
          <HeroSection />
        </div>
        <div data-gsap="fade-up">
          <Categories />
        </div>

        <section data-gsap="fade-up" className="mx-auto grid w-full max-w-[1240px] gap-3 px-2 py-2 lg:grid-cols-3 sm:px-3">
          <div data-gsap-card>
            <SaleTimer />
          </div>
          <div data-gsap-card>
            <TrendingProducts />
          </div>
          <article data-gsap-card className="overflow-hidden rounded-[24px] bg-[#e8f0f6] min-h-[580px] sm:min-h-[370px] lg:min-h-[540px]">
            <Image
              src="/SaleTrendingGroup/Rectangle 309.png"
              alt="Radio operator"
              width={493}
              height={540}
              className="gsap-hover-image h-full w-full object-cover"
            />
          </article>
        </section>

        <section data-gsap="fade-up" className="mx-auto grid w-full max-w-[1240px] gap-3 px-2 py-2 lg:grid-cols-2 sm:px-3">
          <div data-gsap-card>
            <ProductGallery />
          </div>
          <div data-gsap-card>
            <Accessories />
          </div>
        </section>

        <div data-gsap="fade-up">
          <PromoBanner />
        </div>
        <div data-gsap="fade-up">
          <FeatureHighlights />
        </div>
      </main>
      <div data-gsap="fade-up">
        <Footer />
      </div>
    </div>
  );
}
