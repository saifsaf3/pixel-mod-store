import type { Metadata } from "next";
import { WishlistProducts } from "@/components/wishlist-products";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Saved Pixel Forge console builds.",
};

export default function WishlistPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <span className="eyebrow">Wishlist</span>
        <h1>Saved builds.</h1>
        <WishlistProducts />
      </div>
    </section>
  );
}
