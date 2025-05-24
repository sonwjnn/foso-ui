import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PromoBanner } from "@/components/promo-banner";
import { CategorySidebar } from "@/components/category-sidebar";
import { BreadcrumbHome } from "@/components/breadcrumb";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocalizedProducts } from "@/services/product-localization";
import { ProductSlider } from "@/components/product-slider";
import { Filters } from "@/components/filters";
import { ProductGrid } from "@/components/product-grid";

export default function Home() {
  const nav = useTranslations("navigation");
  const support_t = useTranslations("support");
  const { products } = useLocalizedProducts();

  const items = [
    { label: nav("home"), href: "/" },
    { label: nav("products"), href: "/products" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f6f8]">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <BreadcrumbHome items={items} />
          </div>
          <div>
            <PromoBanner />
            <div className="bg-[#025FCA] p-4 lg:p-12 gap-x-5 w-full rounded-b-md">
              <ProductSlider products={products} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <CategorySidebar />
            </div>

            <div className="md:col-span-3">
              <Filters />

              <ProductGrid products={products} />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 my-16 mb-8">
            <div className="flex items-center gap-2 bg-white px-[11px] py-[26px] rounded-md shadow-md">
              <Image
                src="/freeship_footer.png"
                alt={support_t("free_shipping.title")}
                width={48}
                height={48}
                className="object-cover"
              />
              <div>
                <p className="text-[#1C252E] text-base font-bold">
                  {support_t("free_shipping.title")}
                </p>
                <p className="text-sm text-[#637381] font-medium">
                  {support_t("free_shipping.description")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-[11px] py-[26px] rounded-md shadow-md">
              <Image
                src="/support.png"
                alt={support_t("customer_support.title")}
                width={48}
                height={48}
                className="object-cover"
              />
              <div>
                <p className="text-[#1C252E] text-base font-bold">
                  {support_t("customer_support.title")}
                </p>
                <p className="text-sm text-[#637381] font-medium">
                  {support_t("customer_support.description")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-[11px] py-[26px] rounded-md shadow-md">
              <Image
                src="/truck_footer.png"
                alt={support_t("fast_delivery.title")}
                width={48}
                height={48}
                className="object-cover"
              />
              <div>
                <p className="text-[#1C252E] text-base font-bold">
                  {support_t("fast_delivery.title")}
                </p>
                <p className="text-sm text-[#637381] font-medium">
                  {support_t("fast_delivery.description")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-[11px] py-[26px] rounded-md shadow-md">
              <Image
                src="/box_footer.png"
                alt={support_t("return_policy.title")}
                width={48}
                height={48}
                className="object-cover"
              />
              <div>
                <p className="text-[#1C252E] text-base font-bold">
                  {support_t("return_policy.title")}
                </p>
                <p className="text-sm text-[#637381] font-medium">
                  {support_t("return_policy.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
