import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  MenuIcon,
  ChevronDown,
} from "lucide-react";
import { Logo } from "./logo";
import Image from "next/image";
import { CartButton } from "./cart-button";
import { NavigationCategory } from "./navigation-category";

export function Header() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div
        className="w-full"
        style={{
          background: `linear-gradient(270deg, #0D57C6 0%, #37CFFF 50.39%, #0F5ED6 100%)`,
        }}
      >
        <div className="container mx-auto flex flex-wrap gap-y-2 md:gap-y-0 justify-center md:justify-between items-center px-4 p-1">
          <div className="text-sm font-normal flex items-center gap-2">
            <Image
              src="/coupon.png"
              className="size-4 object-cover -mt-0.5"
              alt="coupon"
              width={0}
              height={0}
              sizes="100vw"
            />
            <p className="text-white">
              Nhập mã <b className="text-[#FACA4A]">NEWBIE</b> giảm ngay 10% cho
              lần đầu mua hàng.
            </p>
          </div>
          <div className="flex items-center gap-2 text-white text-sm  font-normal ">
            <div className="flex items-center gap-2">
              <Image
                src="/phone.png"
                className="object-cover -mt-1"
                alt="phone"
                width={16}
                height={16}
              />
              <p>
                Hotline: <b className="text-[#FACA4A]">0283 760 7607</b>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/app_download.png"
                className="object-cover -mt-0.5"
                alt="app_download"
                width={16}
                height={16}
              />
              <p>Tải ứng dụng</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden lg:flex items-center gap-6 flex-1 max-w-[739px] mx-4">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full h-16 pl-5 pr-2 py-2 text-black placeholder:text-[#919EAB] rounded-full"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
                <div>
                  <Image
                    src="/camera.png"
                    alt="camera"
                    className="size-[28px] mr-4 object-cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className="rounded-full bg-[#0373f3] h-[48px] w-[76px] flex items-center justify-center">
                  <Image
                    src="/search.png"
                    alt="search input"
                    className="size-[28px] object-cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-8">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex w-fit"
            >
              <Image
                src="/vietnam.png"
                alt="vietnam"
                className="size-[36px] object-cover"
                width={0}
                height={0}
                sizes="100vw"
              />
              VI
            </Button>
            <CartButton />
            <Button variant="ghost" size="icon" className="flex w-fit">
              <Image
                src="/user.png"
                alt="user"
                className="size-[36px] object-cover"
                width={0}
                height={0}
                sizes="100vw"
              />
              <p className="hidden md:block">Tài khoản</p>
            </Button>
          </div>
        </div>

        <nav className="hidden md:flex mt-4 h-[50px] justify-between items-center">
          <div className="text-base font-medium text-black flex items-center gap-x-2">
            <NavigationCategory />
            <Button variant="ghost">Về chúng tôi</Button>
            <Button variant="ghost">Bài viết</Button>
            <Button variant="ghost">Catalog</Button>
            <Button variant="ghost">Liên hệ</Button>
          </div>
          <div className="text-base font-medium text-black">
            <Button variant="ghost">
              <Image
                src="/clock.png"
                alt="clock"
                width={0}
                height={0}
                className="size-5 object-cover"
                sizes="100vw"
              />
              Hỗ trợ 24/7
            </Button>
            <Button variant="ghost">
              <Image
                src="/freeship.png"
                alt="truck"
                width={0}
                height={0}
                className="size-5 object-cover"
                sizes="100vw"
              />
              Miễn phí vận chuyển
            </Button>
            <Button variant="ghost">
              <Image
                src="/truck.png"
                alt="truck"
                width={0}
                height={0}
                className="size-5 object-cover"
                sizes="100vw"
              />
              Giao hàng nhanh 2h
            </Button>

            <Button variant="ghost">
              <Image
                src="/refresh.png"
                alt="refresh"
                width={0}
                height={0}
                className="size-5 object-cover"
                sizes="100vw"
              />
              30 ngày đổi trả
            </Button>
          </div>
        </nav>

        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
