import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product-gallery";
import { ReadyProductConfigurator } from "@/components/ready-product-configurator";
import { Reveal } from "@/components/reveal";
import { CheckIcon, ChevronIcon } from "@/components/icons";
import { formatPrice } from "@/lib/products";
import { getReadyProduct, readyProducts } from "@/lib/ready-products";

type ReadyPageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return readyProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ReadyPageProps): Promise<Metadata> {
  const product = getReadyProduct((await params).id);
  return product
    ? { title: product.name, description: product.description }
    : { title: "Ready-stock console not found" };
}

export default async function ReadyProductPage({ params }: ReadyPageProps) {
  const product = getReadyProduct((await params).id);
  if (!product) notFound();

  return (
    <>
      <section className="product-page">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><ChevronIcon />
            <Link href="/products#ready-to-ship">Ready to ship</Link><ChevronIcon />
            <span>{product.name}</span>
          </nav>
          <div className="product-layout">
            <ProductGallery product={product} />
            <div className="product-intro">
              <span className="eyebrow">{product.condition} · One available</span>
              <h1>{product.name}</h1>
              <p className="product-intro__tagline">{product.description}</p>
              <div className="product-intro__price">{formatPrice(product.price)}</div>
              <div className="product-highlights">
                {product.features.map((feature) => <span key={feature}><CheckIcon /> {feature}</span>)}
              </div>
              <ReadyProductConfigurator product={product} />
            </div>
          </div>
        </div>
      </section>
      <section className="product-story section">
        <div className="container product-story__grid">
          <Reveal>
            <span className="eyebrow">The exact build</span>
            <h2>Finished, tested and ready for its next owner.</h2>
          </Reveal>
          <Reveal className="product-story__copy" delay={100}>
            {product.longDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </Reveal>
        </div>
      </section>
      <section className="spec-section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Build specification</span>
            <h2>What you will receive.</h2>
          </Reveal>
          <div className="spec-grid">
            {product.specifications.map((spec, index) => (
              <Reveal className="spec-item" key={spec.label} delay={(index % 3) * 70}>
                <span>{spec.label}</span><strong>{spec.value}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
