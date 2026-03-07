import Image from "next/image";

const units = [
  { label: "Days", value: "00" },
  { label: "Hrs", value: "02" },
  { label: "Min", value: "18" },
  { label: "Sec", value: "46" },
];

export default function SaleTimer() {
  return (
    <article className="relative min-h-[580px] overflow-hidden rounded-[34px] border border-[#a9bfd0] bg-[#e5eef5] px-6 py-6 sm:min-h-[370px] sm:rounded-[24px] sm:border-0 sm:bg-[#e8f0f6] sm:p-4">
      <span className="inline-flex rounded-full bg-[#f6522f] px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-white sm:px-2 sm:py-1 sm:text-[10px]">Best Deals</span>
      <h3 className="mt-5 text-center text-[20px] font-medium leading-none text-[#111927] sm:mt-3 sm:text-[20px]">Sale of the Month</h3>

      <div className="mx-auto mt-4 flex max-w-[340px] items-start justify-center gap-1 text-center sm:mt-3 sm:max-w-[290px] sm:gap-0">
        {units.map((item, index) => (
          <div key={item.label} className="flex items-start">
            <div className="min-w-[64px] sm:min-w-[68px]">
              <p className="text-[20px] font-medium leading-none text-slate-900 sm:text-[39px]">{item.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-600 sm:mt-1 sm:text-[12px]">{item.label}</p>
            </div>
            {index < units.length - 1 ? <span className="mt-0 px-0.5 text-[20px] leading-none text-slate-500 sm:text-[33px]">:</span> : null}
          </div>
        ))}
      </div>

      <Image
        src="/SaleTrendingGroup/image 61.png"
        alt="Sale radio"
        width={468}
        height={514}
        className="mx-auto mt-4 h-[265px] w-[300px] object-contain sm:mt-2 sm:h-[230px] sm:w-[250px]"
      />

      <button className="absolute bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f4f5] text-[24px] text-slate-700 sm:bottom-5 sm:left-4 sm:h-10 sm:w-10 sm:text-[20px]">
        <Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-5 w-5 sm:h-4.5 sm:w-4.5" />
      </button>
    </article>
  );
}
