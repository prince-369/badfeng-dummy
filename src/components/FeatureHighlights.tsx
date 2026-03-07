import Image from "next/image";

const features = [
  {
    title: "Free Shipping",
    description: "Free same day delivery within Doha orders above 200 INR.",
    icon: "shipping",
  },
  {
    title: "Full Refund",
    description: "Did not like it? No problem! simply return it within 7 days and get a full refund.",
    icon: "refund",
  },
  {
    title: "Debit & Credit Card",
    description: "Don't have a Credit Card? We accept any debit card issued in Dubai.",
    icon: "card",
  },
  {
    title: "100% Secure Payment",
    description: "paymentText & Credit Card",
    icon: "secure",
  },
];

function FeatureIcon({ type }: { type: string }) {
  const iconMap: Record<string, { src: string; alt: string }> = {
    shipping: { src: "/Truck.svg", alt: "Shipping icon" },
    refund: { src: "/return.svg", alt: "Refund icon" },
    card: { src: "/Debit.svg", alt: "Debit card icon" },
    secure: { src: "/Valut.svg", alt: "Secure payment icon" },
  };

  const icon = iconMap[type] ?? iconMap.secure;

  return <Image src={icon.src} alt={icon.alt} width={26} height={26} className="h-6 w-6 object-contain" />;
}

export default function FeatureHighlights() {
  return (
    <section className="mx-auto w-full max-w-[1240px] space-y-3 px-2 py-2 sm:px-3">
      <h2 className="px-1 text-[20px] font-semibold leading-none text-[#111b27]">Our Blogs</h2>

      <div className="grid gap-3 md:grid-cols-[1.7fr_1fr_1fr]">
        <article
          data-gsap-hover
          className="relative overflow-hidden rounded-[18px] bg-cover bg-center p-5"
          style={{
            backgroundImage: "url('/GroupFour/image 43.png')",
          }}
        >
          <h3 className="max-w-[260px] text-[18px] font-bold leading-none text-slate-900 sm:text-[40px]">
            <span className="block sm:inline">License Free</span>
            <span className="block sm:ml-2 sm:inline">Walkie Talkie</span>
          </h3>
          <p className="mt-3 text-[10px] text-slate-600 sm:text-[15px]">Mega Power in mini size</p>
          <button className="mt-10 rounded-full bg-[#1b2532] px-5 py-2 text-[12px] font-semibold text-white">READ MORE</button>
        </article>
        <article
          data-gsap-hover
          className="relative hidden overflow-hidden rounded-[18px] bg-cover bg-center p-5 text-white md:block"
          style={{
            backgroundImage: "url('/GroupFour/image 41.png')",
          }}
        >
          <h3 className="max-w-[180px] text-[23px] font-semibold leading-none sm:text-[26px]">High Range Radios</h3>
          <p className="mt-2 text-[15px] text-cyan-200 sm:text-[16px]">FROM <span className="text-[34px] font-bold text-[#aef05c] sm:text-[40px]">₹169</span></p>
          <button className="mt-4 rounded-full bg-white px-5 py-2 text-[12px] font-semibold text-slate-900">READ MORE</button>
        </article>
        <article
          data-gsap-hover
          className="relative hidden overflow-hidden rounded-[18px] bg-cover bg-center p-5 text-white md:block"
          style={{
            backgroundImage: "url('/GroupFour/image 42.png')",
          }}
        >
          <h3 className="max-w-[200px] text-[23px] font-semibold leading-none sm:text-[26px]">Dual Band VFH/UFH</h3>
          <button className="mt-12 rounded-full bg-white px-5 py-2 text-[12px] font-semibold text-slate-900">READ MORE</button>
        </article>
      </div>

      <div data-gsap-hover className="grid gap-3 rounded-[24px] bg-[#e8f0f6] px-4 py-4 sm:px-5 md:grid-cols-4">
        {features.map((feature) => (
          <article key={feature.title} data-gsap-hover className="grid grid-cols-[54px_1fr] items-start gap-3 px-1 py-1 sm:grid-cols-[64px_1fr]">
            <div className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#c7d6e3] bg-[#eef3f7] text-[#0d6fb8] sm:h-[64px] sm:w-[64px]">
              <FeatureIcon type={feature.icon} />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold leading-none text-[#12294a]">{feature.title}</h3>
              <p className="mt-1 text-[12px] leading-[1.35] text-[#233a58] sm:text-[13px]">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
