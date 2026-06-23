"use client";

import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "./product-card";
import { useShop } from "./shop-provider";

export function WishlistProducts() {
  const { wishlist } = useShop();
  const saved = products.filter((product) => wishlist.includes(product.id));

  if (saved.length === 0) {
    return (
      <div className="empty-state">
        <h2>No saved builds yet.</h2>
        <p>Use the heart buttons on product cards or product pages to save builds here.</p>
        <Link className="button button--primary" href="/products">Browse consoles</Link>
      </div>
    );
  }

  return (
    <div className="product-grid product-grid--three">
      {saved.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}
