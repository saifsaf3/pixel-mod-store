"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { ArrowIcon, HeartIcon } from "./icons";
import { ConsoleArtwork } from "./console-artwork";
import { useShop } from "./shop-provider";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const image = product.gallery[0];
  const { toggleWishlist, isWishlisted } = useShop();
  const saved = isWishlisted(product.id);
  const conversionBadge = product.featured
    ? "Best seller"
    : product.family === "Nintendo Switch"
      ? "Limited slot"
      : "Popular build";

  return (
    <article className="product-card" data-priority={priority || undefined}>
      <Link className="product-card__image" href={`/product/${product.id}`} aria-label={`View ${product.name}`}>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <span className="product-badge product-badge--conversion">{conversionBadge}</span>
        {image.image ? (
          <Image
            src={image.image}
            alt={`${product.name} in ${image.label}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
            className="product-card__photo"
          />
        ) : (
          <ConsoleArtwork
            className="product-card__artwork"
            type={product.artwork}
            color={image.color}
            secondary={image.secondary}
            label={`${product.name} in ${image.label}`}
          />
        )}
        <span className="product-card__view"><ArrowIcon width={17} height={17} /></span>
      </Link>
      <button
        className={`wishlist-button ${saved ? "is-saved" : ""}`}
        type="button"
        onClick={() => toggleWishlist(product.id)}
        aria-label={`${saved ? "Remove" : "Save"} ${product.name}`}
        aria-pressed={saved}
      >
        <HeartIcon />
      </button>
      <div className="product-card__content">
        <div>
          <span className="product-card__family">{product.family}</span>
          <h3><Link href={`/product/${product.id}`}>{product.name}</Link></h3>
        </div>
        <strong>From {formatPrice(product.basePrice)}</strong>
      </div>
      <p>{product.shortDescription}</p>
    </article>
  );
}
