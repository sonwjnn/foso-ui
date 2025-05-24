"use client";

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
import { Product } from "@/data/products";
import { useMemo, useState } from "react";
import { categories, subcategories } from "@/data/categories";

export function NavigationCategory() {
  const t = useTranslations("navigation_category");
  const { products } = useLocalizedProducts();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button className="bg-[#0155C6] hover:bg-[#0155C6]/80 text-white rounded-md text-base font-bold">
          <MenuIcon size={18} className="text-white" />
          Product categories
          <ChevronDown size={16} className="text-white" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="max-w-[1376px] w-full shadow-lg p-0"
        align="start"
        sideOffset={0}
      >
        <div className="flex">
          {/* Left sidebar - categories */}
          <div className="w-[264px] shrink-0 bg-white border-r border-gray-200">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "flex items-center gap-2 p-4 w-full hover:bg-[#E6F1FF] transition-colors",
                  category.id === activeCategory && "bg-[#E6F1FF]"
                )}
                onMouseEnter={() => setActiveCategory(category.id)}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="text-sm font-medium flex-1">
                  {category.name}
                </span>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
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
                      alt={subcategory.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {subcategory.name}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#1C252E] font-semibold text-2xl">
                Best selling products
              </h3>
              <button className="text-[#025FCA] hover:underline flex gap-x-2 items-center font-semibold text-base">
                View more
                <ChevronsRight className="size-5 text-[#025FCA]" />
              </button>
            </div>
            <div className="w-full grid grid-cols-5 overflow-x-auto  gap-3">
              {filteredProducts.slice(0, 5).map((product) => (
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
