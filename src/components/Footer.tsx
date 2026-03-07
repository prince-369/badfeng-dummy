import Image from "next/image";

const accountLinks = ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"];
const quickLinks = ["Blogs", "FAQs", "About Us", "All Categories", "Contact Us", "All Products", "All Brands", "Track Order"];

function SocialIcon({ type }: { type: "facebook" | "twitter" | "instagram" | "linkedin" }) {
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h2v5h3v-5h3l1-3h-4V9c0-.6.4-1 1-1Z" />
      </svg>
    );
  }

  if (type === "twitter") {
    return (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M4 5h5l3.3 4.7L17 5h3l-6 6.8L20 19h-5l-3.7-5.1L6 19H3l6.6-7.4L4 5Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M8 10v9H5v-9h3Z" />
      <path d="M8 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      <path d="M11 10h2.8v1.4c.6-1 1.7-1.8 3.3-1.8 2.8 0 3.9 1.8 3.9 4.8V19h-3v-4c0-1.4-.2-2.6-1.8-2.6-1.6 0-2.2 1.2-2.2 2.6v4h-3v-9Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-5 bg-transparent text-slate-200 sm:bg-[#001a29]">
      <div className="mx-auto w-full max-w-[1240px] px-2 pt-1 sm:px-3 sm:pt-12">
        <div className="grid gap-8 rounded-[20px] bg-[#001827] px-4 py-6 pb-7 md:grid-cols-2 sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0 sm:pb-9 lg:grid-cols-[1.35fr_1.45fr_1fr_1fr_1.4fr]">
          <div className="col-span-2 space-y-3 md:col-span-1 lg:col-span-1">
            <h3 className="text-[20px] font-semibold leading-none text-white">Subscribe Newsletter</h3>
            <p className="text-[14px] text-slate-300 sm:text-[14px]">Get 10% off your first order</p>
            <div className="flex w-full items-center justify-between rounded-[4px] border border-slate-300 px-3 py-2 sm:max-w-[235px]">
              <input
                placeholder="Enter your email"
                className="w-full bg-transparent text-[14px] text-slate-200 outline-none placeholder:text-slate-500"
              />
              <button aria-label="Submit email" className="inline-flex items-center justify-center px-1 text-[20px] leading-none text-white">
                <Image src="/folder/SendArrow.svg" alt="Send" width={20} height={20} className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="mb-3 text-[14px] font-medium leading-none text-white sm:text-[15px]">Support</h4>
            <p className="text-[12px] leading-[1.5] text-slate-300 sm:text-[13px]">
              G S Tele Communication
              <br />
              Limited, Unit No. 461, Tower B1,
              <br />
              Spaze i-Tech Park, Sector 49,
              <br />
              Gurgaon-122018
            </p>
            <p className="mt-4 text-[13px] text-slate-300 sm:text-[14px]">support@baofengradios.com</p>
            <p className="mt-3 text-[13px] text-slate-300 underline sm:text-[14px]">+917011831918</p>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="mb-3 text-[14px] font-medium leading-none text-white sm:text-[15px]">Account</h4>
            <ul className="space-y-2 text-[13px] text-slate-300">
              {accountLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="mb-3 text-[14px] font-medium leading-none text-white sm:text-[15px]">Quick Link</h4>
            <ul className="space-y-1.5 text-[13px] text-slate-300">
              {quickLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="mb-3 text-[14px] font-medium leading-none text-white sm:text-[15px]">Download App</h4>
            <p className="text-[13px] text-slate-400 sm:text-[14px]">Save $3 with App New User Only</p>
            <div className="mt-3 flex gap-2">
              <Image
                src="/folder/Qrcode 1.png"
                alt="QR code"
                width={90}
                height={90}
                className="h-[66px] w-[66px] rounded-sm object-cover sm:h-[66px] sm:w-[66px]"
              />
              <div className="space-y-2">
                <Image
                  src="/folder/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                  alt="Google Play"
                  width={140}
                  height={41}
                  className="h-[29px] w-[105px] rounded object-cover"
                />
                <Image
                  src="/folder/download-appstore.png"
                  alt="App Store"
                  width={140}
                  height={41}
                  className="h-[29px] w-[105px] rounded object-cover"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-5 text-white">
              <button aria-label="Facebook" className="text-slate-100 transition hover:text-white">
                <SocialIcon type="facebook" />
              </button>
              <button aria-label="Twitter" className="text-slate-100 transition hover:text-white">
                <SocialIcon type="twitter" />
              </button>
              <button aria-label="Instagram" className="text-slate-100 transition hover:text-white">
                <SocialIcon type="instagram" />
              </button>
              <button aria-label="LinkedIn" className="text-slate-100 transition hover:text-white">
                <SocialIcon type="linkedin" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden border-t border-[#0f3449] px-2 py-4 text-center text-[13px] text-slate-500 sm:block sm:text-[15px]">
        © Copyright @ 2026 GS Telecommunication Limited. All rights reserved.
      </div>
    </footer>
  );
}
