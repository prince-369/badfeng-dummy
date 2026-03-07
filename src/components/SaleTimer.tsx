import Image from "next/image";

const units = [
  { label: "Days", value: "00" },
  { label: "Hrs", value: "02" },
  { label: "Min", value: "18" },
  { label: "Sec", value: "46" },
];

export default function SaleTimer() {
  return (
    <article className="relative min-h-[370px] overflow-hidden rounded-[24px] bg-[#e8f0f6] p-4">
      <span className="inline-flex rounded-full bg-[#f6522f] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">Best Deals</span>
      <h3 className="mt-3 text-center text-[40px] font-medium leading-none text-[#111927]">Sale of the Month</h3>

      <div className="mx-auto mt-3 grid max-w-[290px] grid-cols-4 text-center">
        {units.map((item) => (
          <div key={item.label}>
            <p className="text-[39px] font-medium leading-none text-slate-900">{item.value}</p>
            <p className="mt-1 text-[12px] uppercase tracking-wide text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>

      <Image
        src="/SaleTrendingGroup/image 61.png"
        alt="Sale radio"
        width={468}
        height={514}
        className="mx-auto mt-2 h-[230px] w-[250px] object-contain"
      />

      <button className="absolute bottom-5 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f5] text-[20px] text-slate-700">
        ↗
      </button>
    </article>
  );
}
