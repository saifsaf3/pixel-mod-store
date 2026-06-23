"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, productFamilies, type ProductFamily } from "@/lib/products";
import { ProductCard } from "./product-card";
import { Reveal } from "./reveal";
import { SearchIcon } from "./icons";

export function ProductCatalogue() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("family");
  const initialFamily = productFamilies.includes(requested as ProductFamily)
    ? (requested as ProductFamily)
    : "All";
  const [family, setFamily] = useState<ProductFamily | "All">(initialFamily);
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [storage, setStorage] = useState("all");
  const [modchip, setModchip] = useState("all");

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesFamily = family === "All" || product.family === family;
        const searchable = `${product.name} ${product.family} ${product.shortDescription}`.toLowerCase();
        const matchesQuery = searchable.includes(query.trim().toLowerCase());
        const matchesPrice =
          priceRange === "all" ||
          (priceRange === "under-150" && product.basePrice < 150) ||
          (priceRange === "150-220" && product.basePrice >= 150 && product.basePrice <= 220) ||
          (priceRange === "over-220" && product.basePrice > 220);
        const matchesStorage =
          storage === "all" ||
          product.storageOptions.some((option) => option.name.toLowerCase().includes(storage));
        const hasModchip = product.id.includes("switch");
        const matchesModchip = modchip === "all" || (modchip === "yes" ? hasModchip : !hasModchip);
        return matchesFamily && matchesQuery && matchesPrice && matchesStorage && matchesModchip;
      }),
    [family, modchip, priceRange, query, storage],
  );

  return (
    <>
      <div className="catalogue-toolbar">
        <div className="catalogue-controls">
          <label className="search-field">
            <SearchIcon />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search consoles"
            />
          </label>
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
          <div className="select-filters">
            <select value={priceRange} onChange={(event) => setPriceRange(event.target.value)} aria-label="Price range">
              <option value="all">All prices</option>
              <option value="under-150">Under £150</option>
              <option value="150-220">£150-£220</option>
              <option value="over-220">Over £220</option>
            </select>
            <select value={storage} onChange={(event) => setStorage(event.target.value)} aria-label="Storage options">
              <option value="all">All storage</option>
              <option value="64gb">64GB</option>
              <option value="128gb">128GB</option>
              <option value="256gb">256GB</option>
              <option value="512gb">512GB</option>
            </select>
            <select value={modchip} onChange={(event) => setModchip(event.target.value)} aria-label="Modchip availability">
              <option value="all">All modchip options</option>
              <option value="yes">Modchip quote available</option>
              <option value="no">No modchip option</option>
            </select>
          </div>
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
