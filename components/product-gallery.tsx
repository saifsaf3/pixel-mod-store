"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/products";
import { ConsoleArtwork } from "./console-artwork";
import { ChevronIcon } from "./icons";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const image = product.gallery[active];

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % product.gallery.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, [product.gallery.length]);

  const move = (direction: number) => {
    setActive((current) => (current + direction + product.gallery.length) % product.gallery.length);
  };

  return (
    <div className="product-gallery">
      <div className="product-gallery__main" style={{ "--gallery-accent": image.secondary } as React.CSSProperties}>
        <span className="product-gallery__counter">0{active + 1} / 0{product.gallery.length}</span>
        <ConsoleArtwork
          className="product-gallery__artwork"
          type={product.artwork}
          color={image.color}
          secondary={image.secondary}
          label={`${product.name}, ${image.label}`}
        />
        <span className="product-gallery__caption">{image.label}</span>
        <div className="product-gallery__controls">
          <button onClick={() => move(-1)} aria-label="Previous product image">
            <ChevronIcon style={{ transform: "rotate(180deg)" }} />
          </button>
          <button onClick={() => move(1)} aria-label="Next product image">
            <ChevronIcon />
          </button>
        </div>
      </div>
      <div className="product-gallery__thumbs" role="tablist" aria-label="Product images">
        {product.gallery.map((galleryImage, index) => (
          <button
            key={galleryImage.label}
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            role="tab"
            aria-selected={index === active}
            aria-label={`Show ${galleryImage.label}`}
          >
            <ConsoleArtwork
              type={product.artwork}
              color={galleryImage.color}
              secondary={galleryImage.secondary}
              label=""
            />
          </button>
        ))}
      </div>
    </div>
  );
}
