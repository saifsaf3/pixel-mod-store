"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ReadyProduct } from "@/lib/ready-products";
import { formatPrice } from "@/lib/products";
import { ConsoleArtwork } from "./console-artwork";
import { BagIcon, CheckIcon } from "./icons";
import { useShop } from "./shop-provider";

export function ReadyProductCard({ product }: { product: ReadyProduct }) {
  const [imageFailed, setImageFailed] = useState(false);
  const { addItem } = useShop();

  const addToBasket = () => {
    addItem({
      key: product.id,
      productId: product.id,
      productType: "ready",
      name: product.name,
      imageColor: product.color,
      imageSecondary: product.secondary,
      artwork: product.artwork,
      image: product.image,
      unitPrice: product.price,
      quantity: 1,
      shell: product.name,
      storage: product.storage,
      upgrades: [],
    });
  };

  return (
    <article className="ready-card">
      <Link className="ready-card__image" href={`/ready/${product.id}`}>
        <span className="product-badge product-badge--ready">{product.badge}</span>
        {product.image && !imageFailed ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            className="ready-card__photo"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <ConsoleArtwork
            type={product.artwork}
            color={product.color}
            secondary={product.secondary}
            label={product.name}
          />
        )}
        <span className="ready-card__placeholder">
          {product.image ? "Product photo" : "Photo placeholder"}
        </span>
      </Link>
      <div className="ready-card__content">
        <span className="eyebrow">{product.condition}</span>
        <div className="ready-card__title">
          <h3><Link href={`/ready/${product.id}`}>{product.name}</Link></h3>
          <strong>{formatPrice(product.price)}</strong>
        </div>
        <p>{product.description}</p>
        <ul>
          {product.features.map((feature) => (
            <li key={feature}><CheckIcon /> {feature}</li>
          ))}
        </ul>
        <div className="ready-card__actions">
          <Link className="button button--outline" href={`/ready/${product.id}`}>View build</Link>
          <button className="button button--primary" onClick={addToBasket}>
            <BagIcon /> Add to basket
          </button>
        </div>
      </div>
    </article>
  );
}
