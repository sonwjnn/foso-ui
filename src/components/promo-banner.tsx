import Image from "next/image";
import { useLocale } from "next-intl";

export function PromoBanner() {
  const locale = useLocale();

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1440px]  relative mx-auto flex flex-col md:flex-row items-center justify-between">
        <Image
          src={locale === "vi" ? "/banner_vi.png" : "/banner_en.png"}
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
