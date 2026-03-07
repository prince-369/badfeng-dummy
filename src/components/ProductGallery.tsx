import Image from "next/image";

const walkieItems = [
  { title: "License Free", image: "/WalkieAccesoriesGroup/Rectangle 302 (1).png" },
  { title: "Business Radios", image: "/WalkieAccesoriesGroup/Rectangle 303 (1).png" },
  { title: "Licence Radios", image: "/WalkieAccesoriesGroup/Rectangle 302 (2).png" },
  { title: "HAM Corner", image: "/WalkieAccesoriesGroup/Rectangle 303 (2).png" },
];

export default function ProductGallery() {
  return (
    <article className="rounded-[24px] bg-[#e8f0f6] p-4">
      <div className="flex items-start justify-between">
        <h2 className="text-[34px] font-medium leading-none text-[#101820]">Walkie Talkie</h2>
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f3f4f5] text-[22px] text-slate-700">↗</button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {walkieItems.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[18px] bg-white/80">
            <Image
              src={item.image}
              alt={item.title}
              width={327}
              height={278}
              className="h-[178px] w-full object-cover"
            />
            <div className="px-2 py-1.5">
              <h3 className="text-[14px] font-medium text-slate-900">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}
