import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-2 py-2 sm:px-3">
      <div className="overflow-hidden rounded-[34px] border border-[#7da6c7] shadow-xl shadow-slate-900/20 sm:rounded-[24px] sm:border-0">
        <div
          className="relative h-[184px] bg-cover bg-center sm:min-h-[300px] sm:px-10 sm:py-14"
          style={{
            backgroundImage: "url('/GroupFour/image 68.png')",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,13,20,0.08),rgba(9,13,20,0.03)_42%,rgba(9,13,20,0.1))] sm:hidden" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(9,13,20,0.36),rgba(9,13,20,0.16)_42%,rgba(9,13,20,0.36))] sm:block" />

          <div className="relative z-20 hidden sm:mx-auto sm:block sm:max-w-[700px] sm:space-y-3 sm:text-center sm:text-white sm:ml-auto sm:mr-[90px]">
            <h2 className="text-[50px] font-bold leading-none sm:text-[36px]">Advanced . Reliable . Connected</h2>
            <p className="text-[20px] leading-snug text-slate-100">
              Professional communication devices for every challenge. Explore the latest models designed to
              speak performance and durability.
            </p>
            <button className="inline-flex items-center gap-3 rounded-full bg-[#056db6] px-6 py-2.5 text-[16px] font-medium text-white transition hover:bg-[#04558f]">
              View All Product <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121212]"><Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-4.5 w-4.5" /></span>
            </button>
          </div>
        </div>

        <div className="bg-[#0f5d90] px-4 py-4 text-white sm:hidden">
          <h2 className="text-[22px] font-bold leading-[1.2] text-[#b9b3ad]">Advanced . Reliable . Connected</h2>
          <p className="mt-2 text-[12px] leading-[1.35] text-[#c9ced2]">
            &quot;Professional communication devices for every challenge. Explore the latest models designed
            to thpeak performance and durability.&quot;
          </p>
          <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#d6d8dd] px-4 py-1.5 text-[11px] font-medium text-[#045f99]">
            View All Product
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0c5f95] text-white"><Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-4.5 w-4.5 invert" /></span>
          </button>
        </div>
      </div>
    </section>
  );
}
