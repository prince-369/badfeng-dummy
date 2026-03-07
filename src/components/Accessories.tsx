import Image from "next/image";

export default function Accessories() {
  return (
    <article className="relative overflow-hidden rounded-[24px] bg-[#e8f0f6] p-4">
      <div className="flex items-start justify-between">
        <h2 className="mx-auto text-[34px] font-medium leading-none text-[#101820]">Accessories</h2>
        <button className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f3f4f5] text-[22px] text-slate-700">↗</button>
      </div>

      <Image
        src="/WalkieAccesoriesGroup/image 746.png"
        alt="Baofeng accessories"
        width={504}
        height={385}
        className="mx-auto mt-4 h-[280px] w-[88%] object-contain"
      />

      <div className="mt-2 text-center">
        <h3 className="text-[18px] font-medium text-slate-900">Baofeng UV-5R Black Speaker Microphone</h3>
        <h4 className="text-[18px] font-medium text-slate-900">Pack-of-2</h4>
        <p className="mt-2 text-[34px] font-semibold text-slate-900">₹129.00 <span className="text-[24px] text-slate-500 line-through">₹159.00</span></p>
      </div>

      <div className="absolute bottom-[72px] left-6 flex flex-col items-center gap-1 text-amber-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="M12 3.5 14.8 9l6 .9-4.4 4.3 1 6.1L12 17.2 6.6 20.3l1-6.1L3.2 9.9l6-.9L12 3.5Z" />
          </svg>
        ))}
        <span className="mt-1 text-[11px] text-slate-400">(7)</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <button className="inline-flex items-center gap-1.5 rounded-full border border-[#80aad1] bg-white px-5 py-2 text-[16px] font-medium text-[#0567b1]">
          🛍 Buy Now
        </button>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-[#0567b1] px-5 py-2 text-[16px] font-medium text-white">
          🛒 Add to Cart
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#0567b1]" />
        <span className="h-2 w-2 rounded-full bg-[#0567b1]" />
        <span className="h-2 w-2 rounded-full bg-[#9ab7ce]" />
        <span className="h-2 w-2 rounded-full bg-[#0567b1]" />
      </div>
    </article>
  );
}
