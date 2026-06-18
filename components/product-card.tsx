import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { ArrowIcon } from "./icons";
import { ConsoleArtwork } from "./console-artwork";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const image = product.gallery[0];

  return (
    <article className="product-card" data-priority={priority || undefined}>
      <Link className="product-card__image" href={`/product/${product.id}`} aria-label={`View ${product.name}`}>
        {product.badge && <span className="product-badge">{product.badge}</span>}
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
