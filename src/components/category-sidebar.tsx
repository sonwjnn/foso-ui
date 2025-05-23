import { Checkbox } from "./ui/checkbox";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FilterSection } from "./filter-section";
import qs from "query-string";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { years } from "@/data/years";
import { brands } from "@/data/brands";
import { Category } from "@/data/categories";

function PriceButton({
  price,
  onClick,
  isActive,
}: {
  price: string;
  onClick?: () => void;
  isActive?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full h-10 border border-zinc-150 transition rounded text-center text-sm hover:border-[#0373F3] hover:text-[#0373F3]",
        isActive && "border-[#0373F3] text-[#0373F3]"
      )}
    >
      {price}
    </button>
  );
}

export function CategorySidebar() {
  const t = useTranslations("category_sidebar");
  const tOrigins = useTranslations("origins");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const priceRange = searchParams.get("price");
  const sortOrder = searchParams.get("sort");
  const filter = searchParams.get("filter");
  const brandParam = searchParams.get("brand");
  const yearParam = searchParams.get("year");
  const originParam = searchParams.get("origin");
  const categoryParam = searchParams.get("category");

  const handlePriceRangeChange = (price: string) => {
    if (priceRange === price) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("price");
      router.push(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
      return;
    }

    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        price,
        ...(sortOrder && { sort: sortOrder }),
        ...(filter && { filter }),
        ...(brandParam && { brand: brandParam }),
        ...(yearParam && { year: yearParam }),
        ...(originParam && { origin: originParam }),
      },
    });

    router.push(url, {
      scroll: false,
    });
  };

  const handleBrandChange = (brand: string) => {
    const newBrand = brandParam === brand ? "" : brand;

    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        ...(priceRange && { price: priceRange }),
        ...(sortOrder && { sort: sortOrder }),
        ...(filter && { filter }),
        ...(newBrand && { brand: newBrand }),
        ...(yearParam && { year: yearParam }),
        ...(originParam && { origin: originParam }),
        ...(categoryParam && { category: categoryParam }),
      },
    });

    router.push(url, {
      scroll: false,
    });
  };

  const handleYearChange = (year: string) => {
    const newYear = yearParam === year ? "" : year;

    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        ...(priceRange && { price: priceRange }),
        ...(sortOrder && { sort: sortOrder }),
        ...(filter && { filter }),
        ...(brandParam && { brand: brandParam }),
        ...(newYear && { year: newYear }),
        ...(originParam && { origin: originParam }),
        ...(categoryParam && { category: categoryParam }),
      },
    });

    router.push(url, {
      scroll: false,
    });
  };

  const handleOriginChange = (origin: string) => {
    const newOrigin = originParam === origin ? "" : origin;

    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        ...(priceRange && { price: priceRange }),
        ...(sortOrder && { sort: sortOrder }),
        ...(filter && { filter }),
        ...(brandParam && { brand: brandParam }),
        ...(yearParam && { year: yearParam }),
        ...(newOrigin && { origin: newOrigin }),
        ...(categoryParam && { category: categoryParam }),
      },
    });

    router.push(url, {
      scroll: false,
    });
  };

  const handleCategoryChange = (category: string) => {
    const newCategory = categoryParam === category ? "" : category;

    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        ...(priceRange && { price: priceRange }),
        ...(sortOrder && { sort: sortOrder }),
        ...(filter && { filter }),
        ...(brandParam && { brand: brandParam }),
        ...(yearParam && { year: yearParam }),
        ...(originParam && { origin: originParam }),
        ...(newCategory && { category: newCategory }),
      },
    });

    router.push(url, {
      scroll: false,
    });
  };

  const categories: Category[] = [
    {
      id: "oil-filter",
      name: t("filter_categories.oil_filter"),
      count: 24,
    },
    {
      id: "air-filter",
      name: t("filter_categories.air_filter"),
      count: 18,
    },
    {
      id: "fuel-filter",
      name: t("filter_categories.fuel_filter"),
      count: 15,
    },
    {
      id: "uncategorized",
      name: t("filter_categories.uncategorized"),
      count: 16,
    },
    {
      id: "others",
      name: t("filter_categories.others"),
      count: 21,
    },
  ];

  return (
    <aside className="w-full bg-white rounded-md py-3">
      <div className="flex items-center gap-3 h-14 px-3">
        <Image
          src="/filter.png"
          alt="Filter"
          width={32}
          height={32}
          className="object-cover"
        />
        <h2 className="text-[#0373F3] text-2xl font-bold">{t("filter")}</h2>
      </div>

      <FilterSection title={t("product_categories")}>
        {categories.map((category) => (
          <div className="flex items-center space-x-2" key={category.id}>
            <Checkbox
              id={`category-${category.id}`}
              checked={categoryParam === category.id}
              onCheckedChange={() => handleCategoryChange(category.id)}
            />
            <label
              htmlFor={`category-${category.id}`}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
            >
              <span>{category.name}</span>
              <span className="text-gray-500">({category.count})</span>
            </label>
          </div>
        ))}
      </FilterSection>

      <FilterSection title={t("price_range")}>
        <div className="flex flex-col space-y-2">
          <PriceButton
            price={t("price_ranges.under_100k")}
            onClick={() => handlePriceRangeChange("0_100000")}
            isActive={priceRange === "0_100000"}
          />
          <PriceButton
            price={t("price_ranges.100k_300k")}
            onClick={() => handlePriceRangeChange("100000_300000")}
            isActive={priceRange === "100000_300000"}
          />
          <PriceButton
            price={t("price_ranges.300k_500k")}
            onClick={() => handlePriceRangeChange("300000_500000")}
            isActive={priceRange === "300000_500000"}
          />
          <PriceButton
            price={t("price_ranges.over_500k")}
            onClick={() => handlePriceRangeChange("500000_")}
            isActive={priceRange === "500000_"}
          />
        </div>
      </FilterSection>

      <FilterSection title={t("brands")}>
        {brands.map((brand) => (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`brand-${brand}`}
              checked={brandParam === brand}
              onCheckedChange={() => handleBrandChange(brand)}
            />
            <label
              htmlFor={`brand-${brand}`}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
            >
              <span>{brand}</span>
              <span className="text-gray-500">(24)</span>
            </label>
          </div>
        ))}
      </FilterSection>

      <FilterSection title={t("manufacture_year")}>
        {years.map((year) => (
          <div className="flex items-center space-x-2" key={year}>
            <Checkbox
              id={`year-${year}`}
              checked={yearParam === year.toString()}
              onCheckedChange={() => handleYearChange(year.toString())}
            />
            <label
              htmlFor={`year-${year}`}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
            >
              <span>{year}</span>
              <span className="text-gray-500">(24)</span>
            </label>
          </div>
        ))}
      </FilterSection>

      <FilterSection title={t("origin")}>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="origin-1"
            checked={originParam === "germany"}
            onCheckedChange={() => handleOriginChange("germany")}
          />
          <label
            htmlFor="origin-1"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>{tOrigins("germany")}</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="origin-2"
            checked={originParam === "japan"}
            onCheckedChange={() => handleOriginChange("japan")}
          />
          <label
            htmlFor="origin-2"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>{tOrigins("japan")}</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="origin-3"
            checked={originParam === "china"}
            onCheckedChange={() => handleOriginChange("china")}
          />
          <label
            htmlFor="origin-3"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>{tOrigins("china")}</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
      </FilterSection>
    </aside>
  );
}
