"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PromoBanner } from "@/components/promo-banner";
import { CategorySidebar } from "@/components/category-sidebar";
import { ProductCard } from "@/components/product-card";
import { BreadcrumbHome } from "@/components/breadcrumb";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocalizedProducts } from "@/services/product-localization";
import { ProductSlider } from "@/components/product-slider";
import { Filters } from "@/components/filters";
import { useSearchParams } from "next/navigation";
import { FilterType, SortOrder } from "@/types";

export default function Home() {
  const searchParams = useSearchParams();
  const nav = useTranslations("navigation");
  const support_t = useTranslations("support");
  const { products } = useLocalizedProducts();

  const filter = searchParams.get("filter") as FilterType | null;
  const sort = searchParams.get("sort") as SortOrder | null;
  const priceRange = searchParams.get("price") || "";
  const brandParam = searchParams.get("brand") || "";
  const yearParam = searchParams.get("year") || "";
  const originParam = searchParams.get("origin") || "";
  const categoryParam = searchParams.get("category") || "";

  const items = [
    { label: nav("home"), href: "/" },
    { label: nav("products"), href: "/products" },
  ];

  const sortedProducts = useMemo(() => {
    let sortedProducts = [...products];

    if (brandParam) {
      const brands = brandParam.split(",");
      sortedProducts = sortedProducts.filter((product) =>
        brands.includes(product.brand)
      );
    }

    if (categoryParam) {
      sortedProducts = sortedProducts.filter(
        (product) => product.category === categoryParam
      );
    }

    if (yearParam) {
      const years = yearParam.split(",").map((year) => parseInt(year, 10));
      sortedProducts = sortedProducts.filter((product) =>
        years.includes(product.manufacturingYear)
      );
    }

    if (originParam) {
      const origins = originParam.split(",");
      sortedProducts = sortedProducts.filter((product) =>
        origins.includes(product.origin)
      );
    }

    if (filter === "relevant") {
      sortedProducts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (filter === "bestselling") {
      sortedProducts.sort((a, b) => b.salesCount - a.salesCount);
    } else if (filter === "newest") {
      sortedProducts.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    } else if (filter === "featured") {
      sortedProducts.sort(
        (a, b) => (a.isFeatured ? 1 : 0) - (b.isFeatured ? 1 : 0)
      );
    }

    if (sort === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (priceRange) {
      const [minStr, maxStr] = priceRange.split("_");
      const min = parseInt(minStr, 10);
      const max = maxStr ? parseInt(maxStr, 10) : Infinity;

      sortedProducts = sortedProducts.filter((product) => {
        return product.price >= min && product.price <= max;
      });
    }

    return sortedProducts;
  }, [
    products,
    filter,
    sort,
    priceRange,
    brandParam,
    yearParam,
    originParam,
    categoryParam,
  ]);

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
              <ProductSlider products={products} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <CategorySidebar />
            </div>

            <div className="md:col-span-3">
              <Filters />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {sortedProducts.map((product) => (
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
              {sortedProducts.length === 0 && (
                <div className="flex items-center w-full justify-center min-h-[80vh]">
                  <p className="text-center">No products found</p>
                </div>
              )}
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
