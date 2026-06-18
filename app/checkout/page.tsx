"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ConsoleArtwork } from "@/components/console-artwork";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { useShop } from "@/components/shop-provider";
import { formatPrice } from "@/lib/products";
import type { CheckoutDetails } from "@/lib/order";

const initialDetails: CheckoutDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address1: "",
  address2: "",
  city: "",
  county: "",
  postcode: "",
  country: "GB",
};

export default function CheckoutPage() {
  const { cart, subtotal, shipping, total } = useShop();
  const [details, setDetails] = useState(initialDetails);
  const [provider, setProvider] = useState<"stripe" | "paypal" | null>(null);
  const [error, setError] = useState("");

  const update = (field: keyof CheckoutDetails, value: string) => {
    setDetails((current) => ({ ...current, [field]: value }));
  };

  const pay = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (cart.length === 0) return;
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const selectedProvider = submitter?.value === "paypal" ? "paypal" : "stripe";
    setProvider(selectedProvider);
    setError("");
    try {
      const response = await fetch(
        selectedProvider === "stripe" ? "/api/checkout" : "/api/paypal/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: cart, customer: details }),
        },
      );
      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !data.url) throw new Error(data.error || "Payment could not be started.");
      window.location.href = data.url;
    } catch (caught) {
      setProvider(null);
      setError(caught instanceof Error ? caught.message : "Payment could not be started.");
    }
  };

  if (cart.length === 0) {
    return (
      <section className="cart-page cart-page--empty">
        <div className="container">
          <span className="eyebrow">Checkout</span>
          <h1>Your basket is empty.</h1>
          <Link className="button button--primary" href="/products">Browse consoles <ArrowIcon /></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="container">
        <div className="checkout-heading">
          <div><span className="eyebrow">Secure checkout</span><h1>Where should we send it?</h1></div>
          <Link className="text-link" href="/cart">Back to basket</Link>
        </div>
        <form className="checkout-layout" onSubmit={pay}>
          <div className="checkout-form">
            <section className="checkout-panel">
              <div className="checkout-panel__heading"><span>01</span><div><h2>Contact</h2><p>We will use this for your receipt and delivery updates.</p></div></div>
              <div className="form-grid">
                <label><span>First name</span><input required autoComplete="given-name" value={details.firstName} onChange={(e) => update("firstName", e.target.value)} /></label>
                <label><span>Last name</span><input required autoComplete="family-name" value={details.lastName} onChange={(e) => update("lastName", e.target.value)} /></label>
                <label className="form-field--wide"><span>Email address</span><input required type="email" autoComplete="email" value={details.email} onChange={(e) => update("email", e.target.value)} /></label>
                <label className="form-field--wide"><span>Phone number</span><input type="tel" autoComplete="tel" value={details.phone} onChange={(e) => update("phone", e.target.value)} /></label>
              </div>
            </section>
            <section className="checkout-panel">
              <div className="checkout-panel__heading"><span>02</span><div><h2>UK delivery address</h2><p>Tracked shipping is currently available within the United Kingdom.</p></div></div>
              <div className="form-grid">
                <label className="form-field--wide"><span>Address line 1</span><input required autoComplete="address-line1" value={details.address1} onChange={(e) => update("address1", e.target.value)} /></label>
                <label className="form-field--wide"><span>Address line 2 <small>Optional</small></span><input autoComplete="address-line2" value={details.address2} onChange={(e) => update("address2", e.target.value)} /></label>
                <label><span>Town or city</span><input required autoComplete="address-level2" value={details.city} onChange={(e) => update("city", e.target.value)} /></label>
                <label><span>County <small>Optional</small></span><input autoComplete="address-level1" value={details.county} onChange={(e) => update("county", e.target.value)} /></label>
                <label><span>Postcode</span><input required autoComplete="postal-code" value={details.postcode} onChange={(e) => update("postcode", e.target.value.toUpperCase())} /></label>
                <label><span>Country</span><select value="GB" disabled><option value="GB">United Kingdom</option></select></label>
              </div>
            </section>
            <section className="checkout-panel">
              <div className="checkout-panel__heading"><span>03</span><div><h2>Choose payment</h2><p>Your address and final order total are validated securely before payment.</p></div></div>
              <div className="checkout-payment-buttons">
                <button className="button button--primary button--wide" type="submit" name="provider" value="stripe" disabled={provider !== null}>
                  {provider === "stripe" ? "Opening Stripe…" : "Pay by card with Stripe"}
                </button>
                <button className="button button--paypal button--wide" type="submit" name="provider" value="paypal" disabled={provider !== null}>
                  {provider === "paypal" ? "Opening PayPal…" : "Pay with PayPal"}
                </button>
              </div>
              {error && <p className="checkout-error">{error}</p>}
              <p className="checkout-privacy"><CheckIcon /> Your contact and address details are sent only to the selected payment provider for processing and fulfilment.</p>
            </section>
          </div>
          <aside className="checkout-order">
            <span className="eyebrow">Your order</span>
            <div className="checkout-order__items">
              {cart.map((item) => (
                <article key={item.key}>
                  <div className="checkout-order__image"><ConsoleArtwork type={item.artwork} color={item.imageColor} secondary={item.imageSecondary} label={item.name} /></div>
                  <div><h3>{item.name}</h3><p>{item.shell} · {item.storage}</p><strong>{formatPrice(item.unitPrice * item.quantity)}</strong></div>
                </article>
              ))}
            </div>
            <div className="checkout-totals">
              <div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
              <div><span>Tracked shipping</span><strong>{formatPrice(shipping)}</strong></div>
              <div className="checkout-totals__total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}
