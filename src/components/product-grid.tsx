"use client";

import { Product } from "@/data/products";
import { ProductCard } from "./product-card";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { FilterType, SortOrder } from "@/types";

export function ProductGrid({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") as FilterType | null;
  const sort = searchParams.get("sort") as SortOrder | null;
  const priceRange = searchParams.get("price") || "";
  const brandParam = searchParams.get("brand") || "";
  const yearParam = searchParams.get("year") || "";
  const originParam = searchParams.get("origin") || "";
  const categoryParam = searchParams.get("category") || "";

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

  if (sortedProducts.length === 0) {
    return (
      <div className="flex items-center w-full justify-center min-h-[80vh]">
        <p className="text-center">No products found</p>
      </div>
    );
  }

  return (
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
  );
}
