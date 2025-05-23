import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/data/products";
import { ProductCard } from "@/components/product-card";

type ProductSliderProps = {
  products: Product[];
};
export function ProductSlider({ products }: ProductSliderProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              discount={product.discount}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 -translate-x-1/2 disabled:opacity-100" />
      <CarouselNext className="right-0 translate-x-1/2 disabled:opacity-100" />
    </Carousel>
  );
}
