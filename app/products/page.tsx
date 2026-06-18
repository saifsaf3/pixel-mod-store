import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductCatalogue } from "@/components/product-catalogue";

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
      <section className="section catalogue-section">
        <div className="container">
          <Suspense fallback={<div className="catalogue-loading">Loading collection…</div>}>
            <ProductCatalogue />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
