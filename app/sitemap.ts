import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { readyProducts } from "@/lib/ready-products";

const baseUrl = "https://pixel-mod-store.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/builder",
    "/compare",
    "/gallery",
    "/services",
    "/quote",
    "/faq",
    "/about",
    "/track-order",
    "/wishlist",
  ];

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...products.map((product) => ({
      url: `${baseUrl}/product/${product.id}`,
      lastModified: new Date(),
    })),
    ...readyProducts.map((product) => ({
      url: `${baseUrl}/ready/${product.id}`,
      lastModified: new Date(),
    })),
  ];
}
