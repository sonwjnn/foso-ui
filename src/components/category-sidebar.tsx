import { Checkbox } from "./ui/checkbox";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocalizedProducts } from "@/services/product-localization";
import { useSearchParams } from "next/navigation";

interface CategorySidebarProps {
  categories: {
    id: string;
    name: string;
    count: number;
  }[];
  onCategoryChange?: (categoryId: string, checked: boolean) => void;
}

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-zinc-100 p-3">
      <button
        className="flex items-center justify-between w-full text-xl text-[#1C252E] font-semibold mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-[#1C252E] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="space-y-3">{children}</div>}
    </div>
  );
}

function PriceButton({
  price,
  onClick,
}: {
  price: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full h-10 border border-zinc-150 rounded text-center text-sm hover:border-[#0373F3] hover:text-[#0373F3]"
    >
      {price}
    </button>
  );
}

export function CategorySidebar() {
  const t = useTranslations("category_sidebar");

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
        <div className="flex items-center space-x-2">
          <Checkbox id="category-1" defaultChecked={false} />
          <label
            htmlFor="category-1"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>{t("filter_categories.air_filter")}</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="category-2" defaultChecked={false} />
          <label
            htmlFor="category-2"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>{t("filter_categories.fuel_filter")}</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="category-3" defaultChecked />
          <label
            htmlFor="category-3"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>{t("filter_categories.oil_filter")}</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="category-4" />
          <label
            htmlFor="category-4"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>{t("filter_categories.uncategorized")}</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="category-5" />
          <label
            htmlFor="category-5"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>{t("filter_categories.others")}</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
      </FilterSection>

      <FilterSection title={t("price_range")}>
        <div className="flex flex-col space-y-2">
          <PriceButton price={t("price_ranges.under_100k")} />
          <PriceButton price={t("price_ranges.100k_300k")} />
          <PriceButton price={t("price_ranges.300k_500k")} />
          <PriceButton price={t("price_ranges.over_500k")} />
        </div>
      </FilterSection>

      <FilterSection title={t("brands")}>
        <div className="flex items-center space-x-2">
          <Checkbox id="brand-1" />
          <label
            htmlFor="brand-1"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>Asakashi</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="brand-2" />
          <label
            htmlFor="brand-2"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>Bosch</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="brand-3" />
          <label
            htmlFor="brand-3"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>Hyundai</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
      </FilterSection>

      <FilterSection title={t("manufacture_year")}>
        <div className="flex items-center space-x-2">
          <Checkbox id="year-1" />
          <label
            htmlFor="year-1"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>2021</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="year-2" />
          <label
            htmlFor="year-2"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>2020</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="year-3" />
          <label
            htmlFor="year-3"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>2019</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="year-4" />
          <label
            htmlFor="year-4"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>2018</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
      </FilterSection>

      <FilterSection title={t("origin")}>
        <div className="flex items-center space-x-2">
          <Checkbox id="origin-1" />
          <label
            htmlFor="origin-1"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>Đức</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="origin-2" />
          <label
            htmlFor="origin-2"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>Nhật Bản</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="origin-3" />
          <label
            htmlFor="origin-3"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-x-1 w-full text-[#1C252E]"
          >
            <span>Trung Quốc</span>
            <span className="text-gray-500">(24)</span>
          </label>
        </div>
      </FilterSection>
    </aside>
  );
}
