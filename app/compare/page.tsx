import type { Metadata } from "next";
import { formatPrice, products } from "@/lib/products";
import { getPerformanceInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Compare Consoles",
  description: "Compare Pixel Forge custom consoles side by side.",
};

const compared = products.filter((product) => ["psp-3000", "ps-vita", "switch-lite"].includes(product.id));

export default function ComparePage() {
  return (
    <section className="simple-page">
      <div className="container">
        <span className="eyebrow">Compare</span>
        <h1>Choose the right console.</h1>
        <div className="compare-table">
          <div className="compare-row compare-row--head">
            <span>Console</span>
            {compared.map((product) => <strong key={product.id}>{product.name}</strong>)}
          </div>
          {[
            ["Price", (id: string) => formatPrice(products.find((p) => p.id === id)?.basePrice ?? 0)],
            ["Storage", (id: string) => products.find((p) => p.id === id)?.storageOptions.map((option) => option.name).join(", ") ?? ""],
            ["Battery life", (id: string) => getPerformanceInfo(products.find((p) => p.id === id)!).find((item) => item.label === "Battery estimate")?.value ?? ""],
            ["Mod options", (id: string) => getPerformanceInfo(products.find((p) => p.id === id)!).find((item) => item.label === "Mod options")?.value ?? ""],
            ["Best use", (id: string) => getPerformanceInfo(products.find((p) => p.id === id)!).find((item) => item.label === "Ideal use")?.value ?? ""],
            ["Included accessories", (id: string) => products.find((p) => p.id === id)?.specifications.find((spec) => spec.label === "In the box")?.value ?? ""],
          ].map(([label, getter]) => (
            <div className="compare-row" key={label as string}>
              <span>{label as string}</span>
              {compared.map((product) => <p key={product.id}>{(getter as (id: string) => string)(product.id)}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
