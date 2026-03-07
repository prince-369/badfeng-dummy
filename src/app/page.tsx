import Image from "next/image";

import Accessories from "@/components/Accessories";
import Categories from "@/components/Categories";
import FeatureHighlights from "@/components/FeatureHighlights";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGallery from "@/components/ProductGallery";
import PromoBanner from "@/components/PromoBanner";
import SaleTimer from "@/components/SaleTimer";
import TrendingProducts from "@/components/TrendingProducts";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#c8d8e5]">
      <Header />
      <main className="space-y-3 pb-8">
        <HeroSection />
        <Categories />

        <section className="mx-auto grid w-full max-w-[1240px] gap-3 px-2 py-2 lg:grid-cols-3 sm:px-3">
          <SaleTimer />
          <TrendingProducts />
          <article className="overflow-hidden rounded-[24px] bg-[#e8f0f6]">
            <Image
              src="/SaleTrendingGroup/Rectangle 309.png"
              alt="Radio operator"
              width={493}
              height={540}
              className="h-full min-h-[280px] w-full object-cover sm:min-h-[370px]"
            />
          </article>
        </section>

        <section className="mx-auto grid w-full max-w-[1240px] gap-3 px-2 py-2 lg:grid-cols-2 sm:px-3">
          <ProductGallery />
          <Accessories />
        </section>

        <PromoBanner />
        <FeatureHighlights />
      </main>
      <Footer />
    </div>
  );
}
