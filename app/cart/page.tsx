"use client";

import Link from "next/link";
import { ConsoleArtwork } from "@/components/console-artwork";
import { ArrowIcon, MinusIcon, PlusIcon, TrashIcon } from "@/components/icons";
import { useShop } from "@/components/shop-provider";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { cart, subtotal, shipping, total, updateQuantity, removeItem } = useShop();

  if (cart.length === 0) {
    return (
      <section className="cart-page cart-page--empty">
        <div className="container">
          <span className="eyebrow">Your basket</span>
          <h1>Nothing here—<em>yet.</em></h1>
          <p>Your next handheld is waiting in the complete Pixel Forge collection.</p>
          <Link className="button button--primary" href="/products">Explore consoles <ArrowIcon /></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="container">
        <div className="cart-page__heading">
          <div><span className="eyebrow">Your selection</span><h1>Review your basket.</h1></div>
          <Link className="text-link" href="/products">Continue shopping <ArrowIcon /></Link>
        </div>
        <div className="cart-page__layout">
          <div className="cart-page__items">
            {cart.map((item) => (
              <article className="cart-row" key={item.key}>
                <Link href={`/product/${item.productId}`} className="cart-row__image">
                  <ConsoleArtwork type={item.artwork} color={item.imageColor} secondary={item.imageSecondary} label={item.name} />
                </Link>
                <div className="cart-row__info">
                  <div>
                    <span className="cart-row__eyebrow">{item.productType === "ready" ? "Ready to ship" : "Built to order"}</span>
                    <h2>
                      {item.productType === "ready"
                        ? item.name
                        : <Link href={`/product/${item.productId}`}>{item.name}</Link>}
                    </h2>
                    <p>{item.shell} · {item.storage}</p>
                    {item.upgrades.length > 0 && <p>Upgrades: {item.upgrades.join(", ")}</p>}
                  </div>
                  <div className="cart-row__actions">
                    {item.productType === "ready" ? (
                      <span className="stock-quantity">Only unit</span>
                    ) : (
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity"><MinusIcon /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity"><PlusIcon /></button>
                      </div>
                    )}
                    <strong>{formatPrice(item.unitPrice * item.quantity)}</strong>
                    <button className="cart-row__remove" onClick={() => removeItem(item.key)} aria-label={`Remove ${item.name}`}><TrashIcon /> Remove</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="order-summary">
            <span className="eyebrow">Order summary</span>
            <div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <div><span>UK tracked shipping</span><strong>{formatPrice(shipping)}</strong></div>
            <div className="order-summary__total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
            <Link className="button button--primary button--wide" href="/checkout">
              Continue to delivery
            </Link>
            <p className="order-summary__note">Enter your delivery details on the next step, then choose Stripe or PayPal. Shipping is £7.99 for up to three consoles, then £5 for each additional console.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
