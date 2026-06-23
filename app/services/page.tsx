import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Modding Services",
  description: "Console shell swaps, modchip installs, repairs and refurbishing from Pixel Forge.",
};

export default function ServicesPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <span className="eyebrow">Modding services</span>
        <h1>Repairs, shell swaps and upgrades.</h1>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.name} className="service-card">
              <h2>{service.name}</h2>
              <strong>{service.price}</strong>
              <Link className="button button--outline" href="/quote">Request Quote</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
