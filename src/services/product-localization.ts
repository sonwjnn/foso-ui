import { useTranslations } from "next-intl";
import { products as productsData, Product } from "@/data/products";
import { useCallback, useMemo } from "react";

export function useLocalizedProducts() {
  const t = useTranslations("product_data");

  const getLocalizedProduct = useCallback((product: Product): Product => {
    const productId = product.id;

    try {
      const localizedName = t(`${productId}.name`);
      return {
        ...product,
        name: localizedName,
      };
    } catch (error) {
      return product;
    }
  }, []);

  const getAllLocalizedProducts = useCallback(() => {
    return productsData.map(getLocalizedProduct);
  }, [getLocalizedProduct]);

  const values = useMemo(
    () => ({
      products: getAllLocalizedProducts(),
    }),
    [getAllLocalizedProducts]
  );

  return values;
}
