export default function PromoBanner() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-2 py-2 sm:px-3">
      <div
        className="relative overflow-hidden rounded-[24px] bg-cover bg-center px-6 py-10 shadow-xl shadow-slate-900/20 sm:px-10 sm:py-14"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(9,13,20,0.72), rgba(9,13,20,0.55) 45%, rgba(9,13,20,0.78)), url('/GroupFour/image 68.png')",
        }}
      >
        <div className="mx-auto max-w-[700px] space-y-3 text-center text-white sm:ml-auto sm:mr-[90px]">
          <h2 className="text-[48px] font-bold leading-none sm:text-[50px]">Advanced . Reliable . Connected</h2>
          <p className="text-[20px] leading-snug text-slate-100">
            Professional communication devices for every challenge. Explore the latest models designed to
            speak performance and durability.
          </p>
          <button className="inline-flex items-center gap-3 rounded-full bg-[#056db6] px-6 py-2.5 text-[16px] font-medium text-white transition hover:bg-[#04558f]">
            View All Product <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[22px] text-[#121212]">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
