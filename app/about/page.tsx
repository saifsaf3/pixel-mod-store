import type { Metadata } from "next";
import Link from "next/link";
import { aboutSections } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Pixel Forge",
  description: "Pixel Forge is an enthusiast-led custom console and modding store.",
};

export default function AboutPage() {
  return (
    <>
      <section className="simple-page">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">About Pixel Forge</span>
            <h1>Custom console work with repair discipline behind it.</h1>
          </div>
          <div className="about-copy">
            <p>Pixel Forge is an enthusiast-led custom console and modding store focused on handheld hardware that still deserves regular use. The goal is not just a clean shell photo; it is a console that feels right in the hand, charges reliably, controls cleanly and arrives ready to play.</p>
            <p>Every build is treated like repair work first. Donor consoles are inspected, cleaned, tested and checked for faults before cosmetic parts are fitted. Controls, displays, ports, wireless functions, storage and charging are verified before dispatch.</p>
            <p>Custom builds are packed securely with setup notes and support after purchase. Whether it is a PSP reshell, Vita storage setup, Switch Lite shell conversion or repair-led refurbishment, the standard stays the same: careful assembly, clear communication and no mystery parts.</p>
            <Link className="button button--primary" href="/quote">Request a custom build</Link>
          </div>
        </div>
      </section>
      <section className="section about-detail-section">
        <div className="container about-section-grid">
          {aboutSections.map(([title, copy]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
