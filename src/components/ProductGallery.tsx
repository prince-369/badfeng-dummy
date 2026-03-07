import Image from "next/image";

const walkieItems = [
  { title: "License Free", image: "/WalkieAccesoriesGroup/Rectangle 302 (1).png" },
  { title: "Business Radios", image: "/WalkieAccesoriesGroup/Rectangle 303 (1).png" },
  { title: "Licence Radios", image: "/WalkieAccesoriesGroup/Rectangle 302 (2).png" },
  { title: "HAM Corner", image: "/WalkieAccesoriesGroup/Rectangle 303 (2).png" },
];

export default function ProductGallery() {
  return (
    <article className="rounded-[34px] border border-[#a9bfd0] bg-[#f1f9ff] p-4 sm:rounded-[24px] sm:border-0 sm:bg-[#e8f0f6]">
      <div className="flex items-start justify-between">
        <h2 className="text-[22px] font-medium leading-none text-[#101820] sm:text-[34px]">Walkie Talkie</h2>
        <button className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f4f5] text-[32px] text-slate-700 sm:h-11 sm:w-11 sm:text-[22px]">
          <Image src="/UpArrow.svg" alt="Open" width={15} height={17} className="h-6 w-6 sm:h-5 sm:w-5" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
        {walkieItems.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[24px] bg-white/10 sm:rounded-[18px]">
            <Image
              src={item.image}
              alt={item.title}
              width={327}
              height={278}
              className="h-[182px] w-full object-cover sm:h-[178px]"
            />
            <div className="px-1 py-2 sm:px-2 sm:py-1.5">
              <h3 className="text-[16px] font-medium text-slate-900 sm:text-[14px]">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}
