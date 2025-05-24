import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ProductBadge } from "./product-badge";
import { useTranslations } from "next-intl";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  showButton?: boolean;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  discount,
  showButton = true,
}: ProductCardProps) {
  const t = useTranslations("products");
  return (
    <div className="bg-white rounded-md overflow-hidden hover:shadow-md transition-shadow relative">
      <div className="aspect-square p-1.5">
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          className="object-cover w-full h-full"
          sizes="100vw"
        />
      </div>
      <div className="py-4 px-6 gap-y-4 flex pt-0 flex-col">
        <ProductBadge />
        <h3 className="font-semibold text-base text-[#1C252E] line-clamp-2 h-12">
          {name}
        </h3>
        <div className="flex flex-col gap-2">
          <span className="text-[#B71D18] font-semibold text-xl">
            {price.toLocaleString()} đ
          </span>
          {originalPrice && (
            <div className="flex items-center gap-x-[10px]">
              <span className="text-[#919EAB] text-sm font-normal">
                {originalPrice.toLocaleString()} đ
              </span>
              <span className="text-[#B71D18] text-xs font-medium">
                -{discount}%
              </span>
            </div>
          )}
        </div>
        {showButton && (
          <Button className="w-full bg-[#E6F1FF] hover:bg-[#CDE4FE] text-[#025FCA] text-sm rounded-md">
            {t("buy_now")}
          </Button>
        )}
      </div>
    </div>
  );
}
