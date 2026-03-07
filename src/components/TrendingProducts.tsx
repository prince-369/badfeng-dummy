import Image from "next/image";

export default function TrendingProducts() {
  return (
    <article className="relative min-h-[370px] overflow-hidden rounded-[24px] bg-[#e8f0f6] p-4">
      <span className="mx-auto inline-flex rounded-full bg-[#f6522f] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">15% off</span>
      <h3 className="mt-3 text-center text-[40px] font-medium leading-none text-[#111927]">Trending Products</h3>

      <Image
        src="/SaleTrendingGroup/image 62.png"
        alt="Trending products"
        width={409}
        height={332}
        className="mx-auto mt-3 h-[210px] w-[270px] object-contain"
      />

      <div className="mt-2 flex items-center justify-between">
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f5] text-[20px] text-slate-700">↗</button>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#0567b1]" />
          <span className="h-2 w-2 rounded-full bg-[#0567b1]" />
          <span className="h-2 w-2 rounded-full bg-[#9ab7ce]" />
          <span className="h-2 w-2 rounded-full bg-[#0567b1]" />
        </div>
      </div>
    </article>
  );
}
