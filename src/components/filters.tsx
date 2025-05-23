import { useTranslations } from "next-intl";
import { FilterButton } from "./filter-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import qs from "query-string";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FilterType, SortOrder } from "@/types";
import { Button } from "./ui/button";

export const Filters = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("filter") as FilterType | null;
  const sortOrder = searchParams.get("sort") as SortOrder | null;
  const priceRange = searchParams.get("price") || "";
  const brandParam = searchParams.get("brand") || "";
  const yearParam = searchParams.get("year") || "";
  const originParam = searchParams.get("origin") || "";

  const products_t = useTranslations("products");

  const handleFilterClick = (filter: FilterType) => {
    if (filter === activeFilter) {
      router.push(pathname, {
        scroll: false,
      });
      return;
    }

    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        filter,
        ...(priceRange && { price: priceRange }),
        ...(brandParam && { brand: brandParam }),
        ...(yearParam && { year: yearParam }),
        ...(originParam && { origin: originParam }),
      },
    });

    router.push(url, {
      scroll: false,
    });
  };

  const handleSortOrderChange = (order: SortOrder) => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        sort: order,
        ...(priceRange && { price: priceRange }),
        ...(brandParam && { brand: brandParam }),
        ...(yearParam && { year: yearParam }),
        ...(originParam && { origin: originParam }),
      },
    });
    router.push(url, {
      scroll: false,
    });
  };

  return (
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
            <DropdownMenuItem onClick={() => handleSortOrderChange("asc")}>
              {products_t("low_to_high")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSortOrderChange("desc")}>
              {products_t("high_to_low")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
