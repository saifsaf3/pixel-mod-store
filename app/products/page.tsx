import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductCatalogue } from "@/components/product-catalogue";
import { ReadyProductCard } from "@/components/ready-product-card";
import { readyProducts } from "@/lib/ready-products";

export const metadata: Metadata = {
  title: "Custom Consoles",
  description: "Explore every custom PSP, PS Vita, Switch, DS and Game Boy Advance build from Pixel Forge.",
};

export default function ProductsPage() {
  return (
    <div className="catalogue-page">
      <section className="catalogue-hero">
        <div className="container">
          <span className="eyebrow">The complete collection</span>
          <h1>Find your<br /><em>next handheld.</em></h1>
          <p>Restored original hardware, considered upgrades and finishes worth keeping in view.</p>
        </div>
      </section>
      <section className="ready-section" id="ready-to-ship">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">Ready to ship</span>
              <h2>Finished builds.<br />No workshop wait.</h2>
            </div>
            <div>
              <p>One-off consoles already built, tested and available for dispatch. When a unit sells, it is gone.</p>
            </div>
          </div>
          <div className="ready-grid">
            {readyProducts.map((product) => <ReadyProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
      <section className="section catalogue-section">
        <div className="container">
          <div className="section-heading catalogue-heading">
            <span className="eyebrow">Built to order</span>
            <h2>Pre-order your custom build.</h2>
            <p>Select your shell, storage and workshop upgrades. Builds normally dispatch in 5–8 working days.</p>
          </div>
          <Suspense fallback={<div className="catalogue-loading">Loading collection…</div>}>
            <ProductCatalogue />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
