"use client";

import { useEffect, useMemo, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "./product-card";

export function TrackRecentlyViewed({ productId }: { productId: string }) {
  useEffect(() => {
    const key = "pixel-forge-recently-viewed";
    try {
      const current = localStorage.getItem(key);
      const parsed = current ? (JSON.parse(current) as string[]) : [];
      const next = [productId, ...parsed.filter((id) => id !== productId)].slice(0, 6);
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      localStorage.setItem(key, JSON.stringify([productId]));
    }
  }, [productId]);

  return null;
}

export function RecentlyViewedProducts({ currentId }: { currentId?: string }) {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("pixel-forge-recently-viewed");
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as string[];
      const frame = requestAnimationFrame(() => setIds(parsed));
      return () => cancelAnimationFrame(frame);
    } catch {
      localStorage.removeItem("pixel-forge-recently-viewed");
    }
  }, []);

  const viewed = useMemo(
    () =>
      ids
        .filter((id) => id !== currentId)
        .map((id) => products.find((product) => product.id === id))
        .filter((product): product is (typeof products)[number] => Boolean(product))
        .slice(0, 3),
    [currentId, ids],
  );

  if (viewed.length === 0) return null;

  return (
    <section className="section recent-section">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">Recently viewed</span>
            <h2>Continue exploring.</h2>
          </div>
        </div>
        <div className="product-grid product-grid--three">
          {viewed.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}
