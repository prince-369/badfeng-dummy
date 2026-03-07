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
    <section className="relative z-10 mx-auto grid w-full max-w-[1240px] gap-3 px-2 py-2 sm:px-3 lg:mt-[-18px] lg:grid-cols-[2fr_1fr_250px]">
      {/* More Categories Card */}
      <article className="w-full overflow-hidden rounded-[32px] border border-[#a9bfd0] bg-[#d7e2eb] px-4 py-4 sm:h-auto sm:rounded-[24px] sm:border-0 sm:bg-[#e8f0f6]">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[24px] font-semibold leading-none text-[#101820] sm:text-[
            22px]">More Categories</h3>
            <p className="mt-2 text-[13px] text-slate-600 sm:mt-1 sm:text-[14px]">345 plus Items.</p>
          </div>
          {/* Arrow button */}
          <button className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#edf3f7] text-[26px] font-light text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:h-10 sm:w-10 sm:text-[20px]">
            <span className="block transform rotate-0">→</span>
          </button>
        </div>

        {/* Mobile scroll container */}
        <div className="mt-4 block sm:hidden">
          <div className="w-full overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-3" style={{ width: 'max-content' }}>
              {moreCategoryImages.map((imagePath, index) => (
                <div key={imagePath} className="h-[162px] w-[150px] shrink-0 overflow-hidden rounded-[22px] bg-[#c9deed]">
                  <Image
                    src={imagePath}
                    alt={`Category item ${index + 1}`}
                    width={280}
                    height={240}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop grid view */}
        <div className="mt-3 hidden grid-cols-5 gap-2 sm:grid">
          {moreCategoryImages.map((imagePath) => (
            <div key={imagePath} className="overflow-hidden rounded-[18px] bg-[#c9deed]">
              <Image
                src={imagePath}
                alt="Category item"
                width={218}
                height={238}
                className="h-[86px] w-full object-cover sm:h-[74px]"
              />
            </div>
          ))}
        </div>
      </article>

      {/* Mobile featured section */}
      <div className="sm:hidden">
        <div className="w-full overflow-x-auto overflow-y-hidden overscroll-x-contain touch-pan-x pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-3" style={{ width: 'max-content' }}>
            <article className="relative h-[560px] w-[296px] shrink-0 overflow-hidden rounded-[26px] bg-[#e8f0f6] px-5 py-4">
              <p className="text-[19px] font-semibold leading-none text-slate-900">Featured Item</p>
              <p className="mt-1 text-[13px] text-slate-500">Licence Radios</p>
              <Image
                src="/FeaturedItems/image 54.png"
                alt="Featured radio"
                width={272}
                height={430}
                className="pointer-events-none absolute left-[57%] top-[30px] h-[560px] w-[336px] -translate-x-1/2 rotate-[6deg] object-contain"
              />
              <button className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[24px] text-slate-700">
                <Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-5 w-5" />
              </button>
            </article>

            <article className="relative h-[560px] w-[296px] shrink-0 overflow-hidden rounded-[26px] bg-[#e8f0f6] px-5 py-4">
              <h3 className="text-[28px] font-semibold leading-none text-[#101820] sm:text-[22px]">{second?.name ?? "Professional Series"}</h3>
              <p className="mt-2 text-[17px] leading-[1.05] text-slate-800">Instant<br />Connect</p>
              <Image
                src="/ProfessionalSeriesCard/image 59.png"
                alt="Professional series radio"
                width={193}
                height={193}
                className="pointer-events-none absolute left-1/2 top-[58px] h-[515px] w-[316px] -translate-x-1/2 rotate-[10deg] object-contain"
              />
              <button className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f3f4f5] text-[22px] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-5 w-5" />
              </button>
            </article>
          </div>
        </div>
      </div>

      {/* Desktop professional series card */}
      <article className="relative hidden min-h-[210px] overflow-hidden rounded-[24px] bg-[#e8f0f6] px-4 py-3 sm:block sm:min-h-[165px]">
        <h3 className="text-[27px] font-semibold leading-none text-[#101820] sm:text-[22px]">{second?.name ?? "Professional Series"}</h3>
        <p className="mt-2 text-[16px] leading-[1.05] text-slate-800">Instant<br />Connect</p>
        <Image
          src="/ProfessionalSeriesCard/image 59.png"
          alt="Professional series radio"
          width={193}
          height={193}
          className="pointer-events-none absolute bottom-[14px] right-[14px] h-[128px] w-[128px] object-contain sm:bottom-[6px] sm:h-[122px] sm:w-[122px]"
        />
        <button className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f5] text-[20px] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-4.5 w-4.5" />
        </button>
      </article>

      <div className="hidden lg:block" aria-hidden />
    </section>
  );
}