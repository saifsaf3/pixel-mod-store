"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, productFamilies, type ProductFamily } from "@/lib/products";
import { ProductCard } from "./product-card";
import { Reveal } from "./reveal";

export function ProductCatalogue() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("family");
  const initialFamily = productFamilies.includes(requested as ProductFamily)
    ? (requested as ProductFamily)
    : "All";
  const [family, setFamily] = useState<ProductFamily | "All">(initialFamily);

  const filtered = useMemo(
    () => (family === "All" ? products : products.filter((product) => product.family === family)),
    [family],
  );

  return (
    <>
      <div className="catalogue-toolbar">
        <div className="filter-pills" aria-label="Filter products">
          {(["All", ...productFamilies] as const).map((item) => (
            <button
              key={item}
              className={family === item ? "is-active" : ""}
              onClick={() => setFamily(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p>{filtered.length} handcrafted builds</p>
      </div>
      <div className="product-grid">
        {filtered.map((product, index) => (
          <Reveal key={product.id} delay={(index % 3) * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
