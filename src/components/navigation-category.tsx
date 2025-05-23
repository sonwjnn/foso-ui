"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { ChevronDown, MenuIcon, ChevronRight } from "lucide-react";

import { products } from "@/data/products";
import { ProductCard } from "./product-card";
import Image from "next/image";

interface CategoryType {
  id: string;
  name: string;
  icon: string;
  hasSubcategories: boolean;
}

const categories: CategoryType[] = [
  {
    id: "oil",
    name: "Bộ Lọc Dầu",
    icon: "/categories/cate_1.png",
    hasSubcategories: true,
  },
  {
    id: "air",
    name: "Bộ Lọc Không Khí",
    icon: "/categories/cate_2.png",
    hasSubcategories: true,
  },
  {
    id: "fuel",
    name: "Bộ Lọc Nhiên Liệu",
    icon: "/categories/cate_3.png",
    hasSubcategories: true,
  },
  {
    id: "cabin1",
    name: "Bộ Lọc Trong Cabin",
    icon: "/categories/cate_4.png",
    hasSubcategories: true,
  },
  {
    id: "air2",
    name: "Bộ Lọc Không Khí",
    icon: "/categories/cate_5.png",
    hasSubcategories: true,
  },
  {
    id: "cabin2",
    name: "Bộ Lọc Trong Cabin",
    icon: "/categories/cate_6.png",
    hasSubcategories: true,
  },
  {
    id: "fuel2",
    name: "Bộ Lọc Nhiên Liệu",
    icon: "/categories/cate_7.png",
    hasSubcategories: true,
  },
  {
    id: "air3",
    name: "Bộ Lọc Không Khí",
    icon: "/categories/cate_8.png",
    hasSubcategories: true,
  },
];

const subcategories = [
  { id: "sub1", name: "Bộ lọc gió", image: "/categories/sub_cate_1.png" },
  { id: "sub2", name: "Bộ lọc gió", image: "/categories/sub_cate_2.png" },
  { id: "sub3", name: "Bộ lọc gió", image: "/categories/sub_cate_1.png" },
  { id: "sub4", name: "Bộ lọc gió", image: "/categories/sub_cate_2.png" },
  { id: "sub5", name: "Bộ lọc gió", image: "/categories/sub_cate_1.png" },
  { id: "sub6", name: "Bộ lọc gió", image: "/categories/sub_cate_2.png" },
];

export function NavigationCategory() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  );

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button className="bg-[#0155C6] hover:bg-[#0155C6]/80 text-white rounded-md text-base font-bold">
          <MenuIcon size={18} className="text-white" />
          Danh mục sản phẩm
          <ChevronDown size={16} className="text-white" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="max-w-[1200px] w-full shadow-lg p-0">
        <div className="flex">
          {/* Left sidebar - categories */}
          <div className="w-[200px] shrink-0 bg-[#F3F7FA] border-r border-gray-200">
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
                  alt={category.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="text-sm font-medium flex-1">
                  {category.name}
                </span>
                {category.hasSubcategories && (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Right content - subcategories */}
          <div className="flex flex-col flex-1">
            <div className="w-full grid grid-cols-3 gap-4">
              {subcategories.map((subcategory) => (
                <Link
                  href={`/subcategory/${subcategory.id}`}
                  key={subcategory.id}
                  className="flex items-center gap-3  h-[94px] p-3 hover:bg-[#F3F7FA] rounded-md transition-colors"
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
                </Link>
              ))}
            </div>
            <div className="w-full grid grid-cols-5 overflow-x-auto  gap-4">
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
