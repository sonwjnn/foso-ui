import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import LanguageSwitcher from "./language-switcher";

export function Footer() {
  return (
    <footer
      className="bg-[#fefefe] py-6 bg-cover min-h-[464px] flex items-center"
      style={{ backgroundImage: "url('/footer_bg.jpg')" }}
    >
      <div className="max-w-[1440px]  mx-auto px-4">
        <div className="flex justify-between flex-wrap lg:flex-nowrap items-start gap-8">
          <div className="">
            <h3 className="text-[#013065] font-semibold text-2xl mb-12">
              VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
            </h3>
            <div className="text-sm space-y-1 text-[#637381]">
              <p>Tax code: 0360994228</p>
              <p>
                Address: 13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City,
                Viet Nam.
              </p>
              <p>Phone number: 0283 760 7667</p>
              <p>Opening hour: 08:00 - 22:00 from Mon - Fri</p>
            </div>
            <div className="mt-8">
              <Image
                src="/bo_cong_thuong.png"
                alt="bo_cong_thuong"
                className="w-[200px] h-auto object-cover"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>

          <div className="shrink-0">
            <h3 className="text-[#013065] font-semibold text-2xl mb-12">
              Sitemap
            </h3>
            <ul className="space-y-2 text-base text-[#637381]">
              <li>
                <a href="/about" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="/article" className="hover:text-blue-600">
                  Article
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-blue-600">
                  Cart
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="shrink-0 max-w-[200px]">
            <h3 className="text-[#013065] font-semibold text-2xl mb-12">
              Legal
            </h3>
            <ul className="space-y-2  text-base text-[#637381]">
              <li>
                <a href="/privacy-policy" className="hover:text-blue-600">
                  — Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:text-blue-600">
                  Cookie policy
                </a>
              </li>
              <li>
                <a href="/delivery-policy" className="hover:text-blue-600">
                  Delivery policy
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-blue-600">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="shrink-0">
            <h3 className="text-[#013065] font-semibold text-2xl mb-12">
              Download App
            </h3>
            <div className="space-y-2">
              <button className="w-[230px]  bg-[#1C252E] rounded-md flex items-center px-5 gap-x-5 py-[11px]">
                <Image
                  src="/play-store-fill.png"
                  alt="play store"
                  width={30}
                  height={30}
                  className="object-cover"
                />
                <div className="text-left">
                  <p className="text-sm text-white">Get It On</p>
                  <p className="text-base text-white">Google Play Store</p>
                </div>
              </button>
              <button className="w-[230px] h-16 bg-[#0373F3] rounded-md flex items-center px-5 gap-x-5 py-[11px]">
                <Image
                  src="/apple-brand.png"
                  alt="apple brand"
                  width={30}
                  height={30}
                  className="object-cover"
                />
                <div className="text-left">
                  <p className="text-sm text-white">Download from</p>
                  <p className="text-base text-white">Apple App Store</p>
                </div>
              </button>
            </div>
            <div className="mt-6">
              <div className="flex justify-end">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
