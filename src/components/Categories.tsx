import Image from "next/image";

import { categories } from "@/data/categories";

const moreCategoryImages = [
  "/MoreCategoryCard/Rectangle 302.png",
  "/MoreCategoryCard/Rectangle 303.png",
  "/MoreCategoryCard/Rectangle 304.png",
  "/MoreCategoryCard/Rectangle 305.png",
  "/MoreCategoryCard/Rectangle 306.png",
];

export default function Categories() {
  const [, second] = categories;

  return (
    <section className="relative z-10 mx-auto grid w-full max-w-[1240px] gap-3 px-2 py-2 sm:mt-[-18px] sm:grid-cols-[2fr_1fr] sm:px-3 lg:grid-cols-[2fr_1fr_250px]">
      <article className="rounded-[24px] bg-[#e8f0f6] px-4 py-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[32px] font-semibold leading-none text-[#101820]">More Categories</h3>
            <p className="mt-1 text-[14px] text-slate-600">345 plus Items.</p>
          </div>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3f7] text-[20px] font-light text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            &lt;&gt;
          </button>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2">
          {moreCategoryImages.map((imagePath) => (
            <div key={imagePath} className="overflow-hidden rounded-[18px] bg-[#c9deed]">
              <Image
                src={imagePath}
                alt="Category item"
                width={218}
                height={238}
                className="h-[74px] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </article>

      <article className="relative min-h-[165px] overflow-hidden rounded-[24px] bg-[#e8f0f6] px-4 py-3">
        <h3 className="text-[32px] font-semibold leading-none text-[#101820]">{second?.name ?? "Professional Series"}</h3>
        <p className="mt-2 text-[16px] leading-[1.05] text-slate-800">Instant<br />Connect</p>
        <Image
          src="/ProfessionalSeriesCard/image 59.png"
          alt="Professional series radio"
          width={193}
          height={193}
          className="pointer-events-none absolute bottom-[6px] right-[14px] h-[122px] w-[122px] object-contain"
        />
        <button className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f5] text-[20px] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          ↗
        </button>
      </article>

      <div className="hidden lg:block" aria-hidden />
    </section>
  );
}
