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
  if (type === "shipping") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7h11v8H3z" />
        <path d="M14 10h3l3 3v2h-6z" />
        <circle cx="8" cy="17" r="1.4" />
        <circle cx="17" cy="17" r="1.4" />
      </svg>
    );
  }

  if (type === "refund") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 6H5v4" />
        <path d="M5 10a7 7 0 1 0 2-4" />
        <path d="M12 9v3l2 1.5" />
      </svg>
    );
  }

  if (type === "card") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 14h4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3 5 6v6c0 4.5 2.8 7 7 9 4.2-2 7-4.5 7-9V6z" />
      <path d="M12 10v3" />
      <circle cx="12" cy="15.8" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function FeatureHighlights() {
  return (
    <section className="mx-auto w-full max-w-[1240px] space-y-3 px-2 py-2 sm:px-3">
      <div className="grid gap-3 md:grid-cols-[1.7fr_1fr_1fr]">
        <article
          className="relative overflow-hidden rounded-[18px] bg-cover bg-center p-5"
          style={{
            backgroundImage: "url('/GroupFour/image 43.png')",
          }}
        >
          <h3 className="max-w-[260px] text-[40px] font-bold leading-none text-slate-900">License Free Walkie Talkie</h3>
          <p className="mt-3 text-[15px] text-slate-600">Mega Power in mini size</p>
          <button className="mt-10 rounded-full bg-[#1b2532] px-5 py-2 text-[12px] font-semibold text-white">READ MORE</button>
        </article>
        <article
          className="relative overflow-hidden rounded-[18px] bg-cover bg-center p-5 text-white"
          style={{
            backgroundImage: "url('/GroupFour/image 41.png')",
          }}
        >
          <h3 className="max-w-[180px] text-[26px] font-semibold leading-none">High Range Radios</h3>
          <p className="mt-2 text-[16px] text-cyan-200">FROM <span className="text-[40px] font-bold text-[#aef05c]">₹169</span></p>
          <button className="mt-4 rounded-full bg-white px-5 py-2 text-[12px] font-semibold text-slate-900">READ MORE</button>
        </article>
        <article
          className="relative overflow-hidden rounded-[18px] bg-cover bg-center p-5 text-white"
          style={{
            backgroundImage: "url('/GroupFour/image 42.png')",
          }}
        >
          <h3 className="max-w-[200px] text-[26px] font-semibold leading-none">Dual Band VFH/UFH</h3>
          <button className="mt-12 rounded-full bg-white px-5 py-2 text-[12px] font-semibold text-slate-900">READ MORE</button>
        </article>
      </div>

      <div className="grid gap-3 rounded-[24px] bg-[#e8f0f6] px-5 py-4 md:grid-cols-4">
        {features.map((feature) => (
          <article key={feature.title} className="grid grid-cols-[64px_1fr] items-start gap-3 px-1 py-1">
            <div className="inline-flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#c7d6e3] bg-[#eef3f7] text-[#0d6fb8]">
              <FeatureIcon type={feature.icon} />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold leading-none text-[#12294a]">{feature.title}</h3>
              <p className="mt-1 text-[13px] leading-[1.35] text-[#233a58]">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
