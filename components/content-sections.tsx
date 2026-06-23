import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import {
  faqs,
  getPerformanceInfo,
  includedItems,
  reviews,
  siteConfig,
  trustCards,
  videoShowcases,
  type Review,
} from "@/lib/site-data";
import { ArrowIcon, CheckIcon } from "./icons";
import { NewsletterSignup } from "./newsletter-signup";
import { Reveal } from "./reveal";

function Stars({ rating }: { rating: number }) {
  return <span className="stars" aria-label={`${rating} out of 5 stars`}>{"★".repeat(rating)}{"☆".repeat(5 - rating)}</span>;
}

export function BuildSlotBanner() {
  return (
    <div className="build-slot-banner">
      <strong>Only {siteConfig.buildSlotsThisWeek} custom build slots available this week</strong>
      <span>{siteConfig.deliveryEstimate}</span>
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="section trust-section">
      <div className="container">
        <div className="trust-grid">
          {trustCards.map((item, index) => (
            <Reveal className="trust-card" key={item} delay={index * 50}>
              <CheckIcon />
              <strong>{item}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewHighlights({ productId, limit = 3 }: { productId?: string; limit?: number }) {
  const selected = (productId ? reviews.filter((review) => review.productId === productId) : reviews).slice(0, limit);
  if (selected.length === 0) return null;

  return (
    <section className="section review-section">
      <div className="container">
        <Reveal className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">Customer reviews</span>
            <h2>Builds with real workshop care.</h2>
          </div>
          <Link className="text-link" href="/gallery">See build gallery <ArrowIcon /></Link>
        </Reveal>
        <div className="review-grid">
          {selected.map((review) => <ReviewCard key={review.id} review={review} />)}
        </div>
      </div>
    </section>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="review-card">
      <Stars rating={review.rating} />
      <p>{review.comment}</p>
      <div>
        <strong>{review.name}</strong>
        <span>{review.productName} · {review.buildType}</span>
      </div>
    </article>
  );
}

export function FaqPreview() {
  return (
    <section className="section faq-preview">
      <div className="container section-heading section-heading--split">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2>Clear answers before you order.</h2>
        </div>
        <div>
          <p>{faqs[0].answer}</p>
          <Link className="text-link" href="/faq">Read all FAQs <ArrowIcon /></Link>
        </div>
      </div>
    </section>
  );
}

export function VideoShowcase() {
  return (
    <section className="section video-section">
      <div className="container">
        <Reveal className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">Video demos</span>
            <h2>Short build clips and test runs.</h2>
          </div>
          <p>Replace these placeholder embeds with YouTube Shorts or product demo links later.</p>
        </Reveal>
        <div className="video-grid">
          {videoShowcases.map((video) => (
            <article className="video-card" key={video.title}>
              <iframe src={video.url} title={video.title} loading="lazy" allowFullScreen />
              <div>
                <strong>{video.title}</strong>
                <span>{video.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductPerformance({ product }: { product: Product }) {
  return (
    <section className="section performance-section">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Performance information</span>
          <h2>What this console is best at.</h2>
        </Reveal>
        <div className="spec-grid spec-grid--light">
          {getPerformanceInfo(product).map((item) => (
            <Reveal className="spec-item" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatsIncluded() {
  return (
    <section className="section included-section">
      <div className="container">
        <Reveal className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">What is included</span>
            <h2>Packed ready for first use.</h2>
          </div>
          <p>Final contents depend on the product and options selected at checkout.</p>
        </Reveal>
        <div className="included-grid">
          {includedItems.map((item) => (
            <div className="included-card" key={item}><CheckIcon /><span>{item}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BundleSummary({ product }: { product: Product }) {
  return (
    <section className="section bundle-summary">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Bundle examples</span>
          <h2>Starter setups from {formatPrice(product.basePrice)}.</h2>
        </Reveal>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="container newsletter-panel">
        <div>
          <span className="eyebrow">Newsletter</span>
          <h2>Get updates, drops, and custom build offers</h2>
        </div>
        <NewsletterSignup />
      </div>
    </section>
  );
}
