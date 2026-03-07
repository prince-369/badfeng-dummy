import Image from "next/image";

export default function Accessories() {
  return (
    <article className="relative overflow-hidden rounded-[34px] border border-[#a9bfd0] bg-[#d7e2eb] p-4 sm:rounded-[24px] sm:border-0 sm:bg-[#e8f0f6]">
      <div className="flex items-start justify-between">
        <h2 className="text-[25px] font-medium leading-none text-[#101820] sm:mx-auto sm:text-[34px]">Accessories</h2>
        <button className="absolute right-4 top-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f4f5] text-[32px] text-slate-700 sm:h-11 sm:w-11 sm:text-[22px]">
          <Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-6 w-6 sm:h-5 sm:w-5" />
        </button>
      </div>

      <Image
        src="/WalkieAccesoriesGroup/image 746.png"
        alt="Baofeng accessories"
        width={504}
        height={385}
        className="mx-auto mt-6 h-[290px] w-[96%] object-contain sm:mt-4 sm:h-[280px] sm:w-[88%]"
      />

      <div className="mt-2 text-center">
        <h3 className="text-[18px] font-medium text-slate-900 sm:text-[18px]">Baofeng UV-5R Black Speaker</h3>
        <h4 className="mt-0.5 text-[18px] font-medium text-slate-900 sm:text-[18px]">Microphone Pack-of-2</h4>
        <p className="mt-2 text-[20px] font-semibold text-slate-900 sm:text-[34px]">₹129.00 <span className="text-[18px] text-slate-500 line-through sm:text-[24px]">₹159.00</span></p>
      </div>

      <div className="absolute bottom-[60px] left-4 flex flex-col items-center gap-1 text-amber-500 sm:bottom-[72px] sm:left-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className="h-5 w-6 sm:h-5 sm:w-5"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="M12 3.5 14.8 9l6 .9-4.4 4.3 1 6.1L12 17.2 6.6 20.3l1-6.1L3.2 9.9l6-.9L12 3.5Z" />
          </svg>
        ))}
        <span className="mt-1 text-[11px] text-slate-400">(7)</span>
      </div>

      <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-4 sm:flex-wrap sm:flex-row sm:gap-2">
        <button className="inline-flex w-[220px] items-center justify-center gap-2 rounded-full border border-[#2683c8] bg-white px-5 py-2 text-[14px] font-medium text-[#0567b1] sm:w-auto sm:text-[16px]">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 8h12l-1 11H7L6 8Z" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
          </svg>
          Buy Now
        </button>
        <button className="inline-flex w-[220px] items-center justify-center gap-2 rounded-full bg-[#0567b1] px-5 py-2 text-[14px] font-medium text-white sm:w-auto sm:text-[16px]">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="10" cy="19" r="1.4" />
            <circle cx="18" cy="19" r="1.4" />
            <path d="M3 4h2l2.3 10.2a1 1 0 0 0 1 .8h9.8a1 1 0 0 0 1-.8L21 7H7" />
          </svg>
          Add to Cart
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2 sm:mt-5 sm:gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#0567b1] sm:h-2 sm:w-2" />
        <span className="h-3 w-3 rounded-full bg-[#0567b1] sm:h-2 sm:w-2" />
        <span className="h-3 w-3 rounded-full bg-[#9ab7ce] sm:h-2 sm:w-2" />
        <span className="h-3 w-3 rounded-full bg-[#0567b1] sm:h-2 sm:w-2" />
      </div>
    </article>
  );
}
