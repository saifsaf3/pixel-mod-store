import type { Metadata } from "next";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Shipping, warranty, returns and custom order questions for Pixel Forge.",
};

export default function FaqPage() {
  return (
    <section className="simple-page">
      <div className="container narrow-page">
        <span className="eyebrow">FAQ</span>
        <h1>Questions before you order.</h1>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
