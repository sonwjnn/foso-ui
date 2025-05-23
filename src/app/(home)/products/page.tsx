"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PromoBanner } from "@/components/promo-banner";
import { CategorySidebar } from "@/components/category-sidebar";
import { ProductCard } from "@/components/product-card";
import { Pagination } from "@/components/pagination";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { BreadcrumbHome } from "@/components/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { FilterButton } from "@/components/filter-button";
import { useState } from "react";
import Image from "next/image";
import { supportData } from "@/data/support";

const items = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/products" },
];

type FilterType = "liên quan" | "bán chạy" | "mới nhất" | "nổi bật";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleFilterClick = (filter: FilterType) => {
    if (filter === activeFilter) {
      setActiveFilter(null);
      return;
    }

    setActiveFilter(filter);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f6f8]">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <BreadcrumbHome items={items} />
          </div>
          <div>
            <PromoBanner />
            <div className="bg-[#025FCA] p-12 gap-x-5 w-full rounded-b-md">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {products.map((product) => (
                    <CarouselItem
                      key={product.id}
                      className="basis-1/2 md:basis-1/3 lg:basis-1/5"
                    >
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        image={product.image}
                        discount={product.discount}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 -translate-x-1/2 disabled:opacity-100" />
                <CarouselNext className="right-0 translate-x-1/2 disabled:opacity-100" />
              </Carousel>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-1">
              <CategorySidebar categories={categories} />
            </div>

            <div className="md:col-span-3">
              <div className="flex justify-between md:flex-row flex-col items-center mb-6">
                <h2 className="text-[#1C252E] my-4 md:my-0 text-xl font-semibold">
                  Sản phẩm nổi bật
                </h2>
                <div className="flex flex-wrap items-center gap-x-2">
                  <div className="text-[#1C252E] text-sm font-semibold px-2">
                    Sắp xếp theo
                  </div>
                  <FilterButton
                    title="Liên quan"
                    onClick={() => handleFilterClick("liên quan")}
                    isActive={activeFilter === "liên quan"}
                  />
                  <FilterButton
                    title="Bán chạy"
                    onClick={() => handleFilterClick("bán chạy")}
                    isActive={activeFilter === "bán chạy"}
                  />
                  <FilterButton
                    title="Mới nhất"
                    onClick={() => handleFilterClick("mới nhất")}
                    isActive={activeFilter === "mới nhất"}
                  />
                  <FilterButton
                    title="Nổi bật"
                    onClick={() => handleFilterClick("nổi bật")}
                    isActive={activeFilter === "nổi bật"}
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost">
                        Giá: {sortOrder === "asc" ? "Thấp → Cao" : "Cao → Thấp"}{" "}
                        <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setSortOrder("asc")}>
                        Thấp → Cao
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortOrder("desc")}>
                        Cao → Thấp
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    discount={product.discount}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 my-16 mb-8">
            {supportData.map((support) => (
              <div
                key={support.title}
                className="flex items-center gap-2 bg-white px-[11px] py-[26px] rounded-md shadow-md"
              >
                <Image
                  src={support.icon}
                  alt={support.title}
                  width={48}
                  height={48}
                  className="object-cover"
                />
                <div>
                  <p className="text-[#1C252E] text-base font-bold">
                    {support.title}
                  </p>
                  <p className="text-sm text-[#637381] font-medium">
                    {support.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
