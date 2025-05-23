"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import {
  ChevronDown,
  MenuIcon,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

import { ProductCard } from "./product-card";
import Image from "next/image";
import { useLocalizedProducts } from "@/services/product-localization";

interface CategoryType {
  id: string;
  nameKey: string;
  icon: string;
  hasSubcategories: boolean;
}

const categories: CategoryType[] = [
  {
    id: "oil",
    nameKey: "oil_filter",
    icon: "/categories/cate_1.png",
    hasSubcategories: true,
  },
  {
    id: "air",
    nameKey: "air_filter",
    icon: "/categories/cate_2.png",
    hasSubcategories: true,
  },
  {
    id: "fuel",
    nameKey: "fuel_filter",
    icon: "/categories/cate_3.png",
    hasSubcategories: true,
  },
  {
    id: "cabin1",
    nameKey: "cabin_filter",
    icon: "/categories/cate_4.png",
    hasSubcategories: true,
  },
  {
    id: "air2",
    nameKey: "air_filter",
    icon: "/categories/cate_5.png",
    hasSubcategories: true,
  },
  {
    id: "cabin2",
    nameKey: "cabin_filter",
    icon: "/categories/cate_6.png",
    hasSubcategories: true,
  },
  {
    id: "fuel2",
    nameKey: "fuel_filter",
    icon: "/categories/cate_7.png",
    hasSubcategories: true,
  },
  {
    id: "air3",
    nameKey: "air_filter",
    icon: "/categories/cate_8.png",
    hasSubcategories: true,
  },
];

interface SubcategoryType {
  id: string;
  nameKey: string;
  image: string;
}

const subcategories: SubcategoryType[] = [
  { id: "sub1", nameKey: "air_filter", image: "/categories/sub_cate_1.png" },
  { id: "sub2", nameKey: "air_filter", image: "/categories/sub_cate_2.png" },
  { id: "sub3", nameKey: "air_filter", image: "/categories/sub_cate_1.png" },
  { id: "sub4", nameKey: "air_filter", image: "/categories/sub_cate_2.png" },
  { id: "sub5", nameKey: "air_filter", image: "/categories/sub_cate_1.png" },
  { id: "sub6", nameKey: "air_filter", image: "/categories/sub_cate_2.png" },
];

export function NavigationCategory() {
  const t = useTranslations("navigation_category");
  const { products } = useLocalizedProducts();
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  );

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button className="bg-[#0155C6] hover:bg-[#0155C6]/80 text-white rounded-md text-base font-bold">
          <MenuIcon size={18} className="text-white" />
          {t("product_categories")}
          <ChevronDown size={16} className="text-white" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="max-w-[1376px] w-full shadow-lg p-0">
        <div className="flex">
          {/* Left sidebar - categories */}
          <div className="w-[264px] shrink-0 bg-white border-r border-gray-200">
            {categories.map((category) => (
              <Link
                href={`/category/${category.id}`}
                key={category.id}
                className={cn(
                  "flex items-center gap-2 p-4 hover:bg-[#E6F1FF] transition-colors",
                  category.id === activeCategory && "bg-[#E6F1FF]"
                )}
                onMouseEnter={() => setActiveCategory(category.id)}
              >
                <Image
                  src={category.icon}
                  alt={t(`categories.${category.nameKey}`)}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="text-sm font-medium flex-1">
                  {t(`categories.${category.nameKey}`)}
                </span>
                {category.hasSubcategories && (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Right content - subcategories */}
          <div className="flex flex-col flex-1 bg-[#f4f6f8] p-4 gap-y-3">
            <div className="w-full grid grid-cols-3 gap-4">
              {subcategories.map((subcategory) => (
                <button
                  key={subcategory.id}
                  className="flex items-center gap-3 bg-white  h-[94px] p-3 rounded-md transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={subcategory.image}
                      alt={t(`subcategories.${subcategory.nameKey}`)}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {t(`subcategories.${subcategory.nameKey}`)}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#1C252E] font-semibold text-2xl">
                {t("bestselling_products")}
              </h3>
              <button className="text-[#025FCA] hover:underline flex gap-x-2 items-center font-semibold text-base">
                {t("view_all")}{" "}
                <ChevronsRight className="size-5 text-[#025FCA]" />
              </button>
            </div>
            <div className="w-full grid grid-cols-5 overflow-x-auto  gap-3">
              {products.slice(0, 5).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  showButton={false}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  discount={product.discount}
                />
              ))}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
