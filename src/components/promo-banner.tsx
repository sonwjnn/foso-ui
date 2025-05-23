import Image from "next/image";

export function PromoBanner() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Image
          src="/banner.png"
          alt="banner"
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain h-auto w-full"
        />
      </div>
    </div>
  );
}
