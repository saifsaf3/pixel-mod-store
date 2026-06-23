"use client";

import { useCallback, useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { shellImagePath, siteConfig } from "@/lib/site-data";
import { CheckIcon } from "./icons";
import { ProductConfigurator } from "./product-configurator";
import { ProductGallery } from "./product-gallery";

export function ProductExperience({ product }: { product: Product }) {
  const [shellIndex, setShellIndex] = useState(0);
  const handleShellIndexChange = useCallback((index: number) => {
    setShellIndex(index % product.shellOptions.length);
  }, [product.shellOptions.length]);

  const galleryProduct = useMemo(
    () => ({
      name: product.name,
      artwork: product.artwork,
      gallery: product.shellOptions.map((shell, index) => {
        const visual = product.gallery[index % product.gallery.length];
        return {
          ...visual,
          label: shell.name,
          image: shellImagePath(product.id, shell.name),
        };
      }),
    }),
    [product],
  );

  return (
    <>
      <ProductGallery
        product={galleryProduct}
        activeIndex={shellIndex}
        onActiveIndexChange={handleShellIndexChange}
      />
      <div className="product-intro">
        <span className="eyebrow">{product.eyebrow}</span>
        <h1>{product.name}</h1>
        <p className="product-intro__tagline">{product.tagline}</p>
        <div className="product-intro__price">From {formatPrice(product.basePrice)}</div>
        <div className="build-slot-banner">
          <strong>Only {siteConfig.buildSlotsThisWeek} custom build slots available this week</strong>
          <span>{siteConfig.deliveryEstimate}</span>
        </div>
        <div className="product-highlights">
          {product.highlights.map((highlight) => (
            <span key={highlight}><CheckIcon /> {highlight}</span>
          ))}
        </div>
        <div className="product-trust-badges">
          <span><CheckIcon /> Professionally tested</span>
          <span><CheckIcon /> {siteConfig.warrantyLabel}</span>
          <span><CheckIcon /> Securely packed</span>
          <span><CheckIcon /> Support after purchase</span>
        </div>
        <ProductConfigurator
          product={product}
          shellIndex={shellIndex}
          onShellIndexChange={handleShellIndexChange}
        />
      </div>
    </>
  );
}
