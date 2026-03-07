import Image from "next/image";

function IconButton({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f7f8] text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:scale-[1.02]"
    >
      {children}
    </button>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-transparent px-2 pt-2 sm:px-3">
      <div className="mx-auto hidden w-full max-w-[1240px] items-center gap-3 rounded-[42px] border border-[#96aec4] bg-[#d5e0e8] px-4 py-2.5 shadow-[0_6px_20px_rgba(26,80,119,0.18),inset_0_1px_0_rgba(255,255,255,0.8)] lg:flex">
        <button className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/20 bg-[#edf2f6] text-black">
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 9h8M8 12h8M8 15h8" />
          </svg>
        </button>

        <Image src="/header/image 28.png" alt="BAOFENG" width={276} height={35} className="h-[35px] w-auto" priority />

        <label className="ml-1 flex min-w-0 flex-1 items-center rounded-full bg-[#f8f8f8] pl-5 pr-1.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <input
            className="w-full bg-transparent text-base font-medium text-slate-900 outline-none placeholder:text-black"
            placeholder="Search Product"
          />
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3-3" />
            </svg>
          </span>
        </label>

        <div className="ml-3 flex items-center gap-2.5">
          <IconButton label="cart">
            <Image src="/header/Vector.svg" alt="Bag" width={18} height={15} className="h-[20px] w-[22px]" />
          </IconButton>
          <IconButton label="wishlist">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-[#ff4b5f]" fill="currentColor">
              <path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z" />
            </svg>
          </IconButton>
          <div className="flex items-center gap-2.5 rounded-full bg-[#f7f7f8] py-1 pl-4 pr-1 text-base font-medium text-[#202020] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            <span>Jhone Alex</span>
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-200">
              <Image
                src="/header/Ellipse 28.png"
                alt="Profile"
                width={57}
                height={57}
                className="h-full w-full object-cover"
              />
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between rounded-[28px] border border-[#8aa8c2] bg-[#d5e0e8] px-3 py-2.5 lg:hidden">
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/20 bg-[#edf2f6] text-black">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <Image src="/header/image 28.png" alt="BAOFENG" width={180} height={26} className="h-[24px] w-auto" priority />

        <div className="flex items-center gap-1.5">
          <IconButton label="cart">
            <Image src="/header/Vector.svg" alt="Bag" width={16} height={13} className="h-[13px] w-[16px]" />
          </IconButton>
          <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#9bb6cb] bg-slate-200">
            <Image src="/header/Ellipse 28.png" alt="Profile" width={40} height={40} className="h-full w-full object-cover" />
          </span>
        </div>
      </div>
    </header>
  );
}
