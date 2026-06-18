"use client";

import Link from "next/link";
import { useEffect } from "react";
import { formatPrice } from "@/lib/products";
import { ConsoleArtwork } from "./console-artwork";
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon } from "./icons";
import { useShop } from "./shop-provider";

export function CartDrawer() {
  const {
    cart,
    subtotal,
    isCartOpen,
    setCartOpen,
    updateQuantity,
    removeItem,
  } = useShop();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  return (
    <>
      <button
        className={`cart-backdrop ${isCartOpen ? "is-open" : ""}`}
        onClick={() => setCartOpen(false)}
        aria-label="Close basket"
        tabIndex={isCartOpen ? 0 : -1}
      />
      <aside
        className={`cart-drawer ${isCartOpen ? "is-open" : ""}`}
        aria-hidden={!isCartOpen}
        aria-label="Shopping basket"
      >
        <div className="cart-drawer__header">
          <div>
            <span className="eyebrow">Your selection</span>
            <h2>Basket</h2>
          </div>
          <button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close basket">
            <CloseIcon />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-cart__mark">PF</span>
            <h3>Your basket is quiet.</h3>
            <p>Explore the collection and configure a handheld that feels entirely yours.</p>
            <Link className="button button--primary" href="/products" onClick={() => setCartOpen(false)}>
              Explore consoles
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <article className="cart-item" key={item.key}>
                  <Link href={`/product/${item.productId}`} onClick={() => setCartOpen(false)} className="cart-item__image">
                    <ConsoleArtwork
                      type={item.artwork}
                      color={item.imageColor}
                      secondary={item.imageSecondary}
                      label={item.name}
                    />
                  </Link>
                  <div className="cart-item__details">
                    <div className="cart-item__title-row">
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.shell} · {item.storage}</p>
                      </div>
                      <button onClick={() => removeItem(item.key)} aria-label={`Remove ${item.name}`}>
                        <TrashIcon width={17} height={17} />
                      </button>
                    </div>
                    {item.upgrades.length > 0 && <p className="cart-item__upgrades">+ {item.upgrades.join(", ")}</p>}
                    <div className="cart-item__bottom">
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity">
                          <MinusIcon width={15} height={15} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity">
                          <PlusIcon width={15} height={15} />
                        </button>
                      </div>
                      <strong>{formatPrice(item.unitPrice * item.quantity)}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-summary__line">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>Shipping is calculated at checkout. Every build includes our 90-day workshop warranty.</p>
              <Link className="button button--primary button--wide" href="/cart" onClick={() => setCartOpen(false)}>
                Review basket
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
