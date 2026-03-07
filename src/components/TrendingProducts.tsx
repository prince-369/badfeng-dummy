import Image from "next/image";

export default function TrendingProducts() {
  return (
    <article className="relative min-h-[580px] overflow-hidden rounded-[34px] border border-[#a9bfd0] bg-[#e9f2fa] px-6 py-6 sm:min-h-[370px] sm:rounded-[24px] sm:border-0 sm:bg-[#e8f0f6] sm:p-4">
      <span className="mx-auto inline-flex rounded-full bg-[#f6522f] px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-white sm:px-2 sm:py-1 sm:text-[10px]">15% OFF</span>
      <h3 className="mt-5 text-center text-[20px] font-medium leading-none text-[#111927] sm:mt-3 sm:text-[20px]">Trending Products</h3>

      <Image
        src="/SaleTrendingGroup/image 62.png"
        alt="Trending products"
        width={409}
        height={332}
        className="mx-auto mt-6 h-[250px] w-[300px] object-contain sm:mt-3 sm:h-[210px] sm:w-[270px]"
      />

      <button className="absolute left-1/2 top-[67%] inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#056db6] text-[22px] text-white sm:hidden">
        ▶
      </button>

      <div className="mt-8 flex items-center justify-start sm:mt-2">
        <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f4f5] text-[24px] text-slate-700 sm:h-10 sm:w-10 sm:text-[20px]"><Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-5 w-5 sm:h-4.5 sm:w-4.5" /></button>
      </div>

      <div className="mt-4 flex justify-center gap-2 sm:hidden">
        <span className="h-2.5 w-2.5 rounded-full bg-[#0464af]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#0464af]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#99b6cd]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#0464af]" />
      </div>

      <div className="mt-2 hidden justify-center gap-1.5 sm:flex">
        <span className="h-2.5 w-2.5 rounded-full bg-[#0464af]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#0464af]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#99b6cd]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#0464af]" />
      </div>
    </article>
  );
}
