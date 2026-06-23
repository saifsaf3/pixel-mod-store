import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import {
  ProductPerformance,
  ReviewHighlights,
  VideoShowcase,
  WhatsIncluded,
} from "@/components/content-sections";
import { ProductExperience } from "@/components/product-experience";
import { RecentlyViewedProducts, TrackRecentlyViewed } from "@/components/recently-viewed-products";
import { Reveal } from "@/components/reveal";
import { ChevronIcon } from "@/components/icons";
import { getProduct, products } from "@/lib/products";

type ProductPageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const related = products
    .filter((item) => item.id !== product.id && item.family === product.family)
    .slice(0, 3);

  return (
    <>
      <TrackRecentlyViewed productId={product.id} />
      <section className="product-page">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><ChevronIcon />
            <Link href="/products">Consoles</Link><ChevronIcon />
            <span>{product.name}</span>
          </nav>

          <div className="product-layout">
            <ProductExperience product={product} />
          </div>
        </div>
      </section>

      <section className="product-story section">
        <div className="container product-story__grid">
          <Reveal>
            <span className="eyebrow">The build</span>
            <h2>{product.tagline}</h2>
          </Reveal>
          <Reveal className="product-story__copy" delay={100}>
            {product.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </Reveal>
        </div>
      </section>

      <ProductPerformance product={product} />
      <WhatsIncluded />
      <ReviewHighlights productId={product.id} />
      <VideoShowcase />

      <section className="spec-section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Details & specification</span>
            <h2>Everything included.</h2>
          </Reveal>
          <div className="spec-grid">
            {product.specifications.map((spec, index) => (
              <Reveal className="spec-item" key={spec.label} delay={(index % 3) * 70}>
                <span>{spec.label}</span>
                <strong>{spec.value}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section related-section">
          <div className="container">
            <Reveal className="section-heading section-heading--split">
              <div><span className="eyebrow">Keep exploring</span><h2>You may also like.</h2></div>
              <Link className="text-link" href="/products">View all consoles</Link>
            </Reveal>
            <div className="product-grid product-grid--three">
              {related.map((item, index) => (
                <Reveal key={item.id} delay={index * 80}><ProductCard product={item} /></Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
      <RecentlyViewedProducts currentId={product.id} />
    </>
  );
}
