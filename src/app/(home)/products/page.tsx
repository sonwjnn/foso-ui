"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PromoBanner } from "@/components/promo-banner";
import { CategorySidebar } from "@/components/category-sidebar";
import { ProductCard } from "@/components/product-card";
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
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { FilterButton } from "@/components/filter-button";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocalizedProducts } from "@/services/product-localization";

type FilterType = "relevant" | "bestselling" | "newest" | "featured";

export default function Home() {
  const nav = useTranslations("navigation");
  const products_t = useTranslations("products");
  const support_t = useTranslations("support");
  const { products } = useLocalizedProducts();
  const items = [
    { label: nav("home"), href: "/" },
    { label: nav("products"), href: "/products" },
  ];
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
            <div className="bg-[#025FCA] p-4 lg:p-12 gap-x-5 w-full rounded-b-md">
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <CategorySidebar />
            </div>

            <div className="md:col-span-3">
              <div className="flex justify-between md:flex-row flex-col items-center mb-6">
                <h2 className="text-[#1C252E] my-4 md:my-0 text-xl font-semibold">
                  {products_t("featured_products")}
                </h2>
                <div className="flex flex-wrap items-center gap-x-2">
                  <div className="text-[#1C252E] text-sm font-semibold px-2">
                    {products_t("sort_by")}
                  </div>
                  <FilterButton
                    title={products_t("relevant")}
                    onClick={() => handleFilterClick("relevant")}
                    isActive={activeFilter === "relevant"}
                  />
                  <FilterButton
                    title={products_t("bestselling")}
                    onClick={() => handleFilterClick("bestselling")}
                    isActive={activeFilter === "bestselling"}
                  />
                  <FilterButton
                    title={products_t("newest")}
                    onClick={() => handleFilterClick("newest")}
                    isActive={activeFilter === "newest"}
                  />
                  <FilterButton
                    title={products_t("featured")}
                    onClick={() => handleFilterClick("featured")}
                    isActive={activeFilter === "featured"}
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost">
                        {products_t("price")}:{" "}
                        {sortOrder === "asc"
                          ? products_t("low_to_high")
                          : products_t("high_to_low")}{" "}
                        <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setSortOrder("asc")}>
                        {products_t("low_to_high")}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortOrder("desc")}>
                        {products_t("high_to_low")}
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
            <div className="flex items-center gap-2 bg-white px-[11px] py-[26px] rounded-md shadow-md">
              <Image
                src="/freeship_footer.png"
                alt={support_t("free_shipping.title")}
                width={48}
                height={48}
                className="object-cover"
              />
              <div>
                <p className="text-[#1C252E] text-base font-bold">
                  {support_t("free_shipping.title")}
                </p>
                <p className="text-sm text-[#637381] font-medium">
                  {support_t("free_shipping.description")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-[11px] py-[26px] rounded-md shadow-md">
              <Image
                src="/support.png"
                alt={support_t("customer_support.title")}
                width={48}
                height={48}
                className="object-cover"
              />
              <div>
                <p className="text-[#1C252E] text-base font-bold">
                  {support_t("customer_support.title")}
                </p>
                <p className="text-sm text-[#637381] font-medium">
                  {support_t("customer_support.description")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-[11px] py-[26px] rounded-md shadow-md">
              <Image
                src="/truck_footer.png"
                alt={support_t("fast_delivery.title")}
                width={48}
                height={48}
                className="object-cover"
              />
              <div>
                <p className="text-[#1C252E] text-base font-bold">
                  {support_t("fast_delivery.title")}
                </p>
                <p className="text-sm text-[#637381] font-medium">
                  {support_t("fast_delivery.description")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-[11px] py-[26px] rounded-md shadow-md">
              <Image
                src="/box_footer.png"
                alt={support_t("return_policy.title")}
                width={48}
                height={48}
                className="object-cover"
              />
              <div>
                <p className="text-[#1C252E] text-base font-bold">
                  {support_t("return_policy.title")}
                </p>
                <p className="text-sm text-[#637381] font-medium">
                  {support_t("return_policy.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
