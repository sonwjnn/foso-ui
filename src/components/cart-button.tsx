import { Button } from "./ui/button";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { products } from "@/data/products";
import { ProductCard } from "./product-card";
export function CartButton() {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative w-fit hover:bg-transparent"
        >
          <div className="flex items-center relative">
            <Image
              src="/cart.png"
              alt="cart"
              className="size-[36px] object-cover"
              width={0}
              height={0}
              sizes="100vw"
            />
            <span className="absolute -top-2 -right-2 bg-[#FF5630] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              12
            </span>
          </div>
          <p className="hidden md:block">Giỏ hàng</p>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0">
        <div className="h-14 px-4 border-b w-full flex items-center justify-start">
          Giỏ hàng (3)
        </div>
        <div className="max-h-[60vh] flex flex-wrap overflow-y-auto">
          {products.slice(0, 3).map((product) => (
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
      </HoverCardContent>
    </HoverCard>
  );
}
