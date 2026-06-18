"use client";

import { useMemo, useState } from "react";
import type { ReadyProduct } from "@/lib/ready-products";
import { formatPrice } from "@/lib/products";
import { BagIcon, CheckIcon } from "./icons";
import { useShop } from "./shop-provider";

export function ReadyProductConfigurator({ product }: { product: ReadyProduct }) {
  const [selected, setSelected] = useState<number[]>([]);
  const { addItem } = useShop();
  const total = useMemo(
    () => product.price + selected.reduce((sum, index) => sum + product.upgrades[index].price, 0),
    [product, selected],
  );

  const toggle = (index: number) => {
    setSelected((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  };

  const addToBasket = () => {
    const upgrades = selected.map((index) => product.upgrades[index].name);
    addItem({
      key: [product.id, ...upgrades.sort()].join("|"),
      productId: product.id,
      productType: "ready",
      name: product.name,
      imageColor: product.color,
      imageSecondary: product.secondary,
      artwork: product.artwork,
      image: product.image,
      unitPrice: total,
      quantity: 1,
      shell: product.name,
      storage: product.storage,
      upgrades,
    });
  };

  return (
    <div className="configurator ready-configurator">
      <div className="configurator__heading">
        <span className="eyebrow">Optional extras</span>
        <div><h2>Complete the package</h2><strong>{formatPrice(total)}</strong></div>
      </div>
      <div className="line-options">
        {product.upgrades.map((upgrade, index) => (
          <button
            type="button"
            key={upgrade.name}
            className={selected.includes(index) ? "is-selected" : ""}
            onClick={() => toggle(index)}
            aria-pressed={selected.includes(index)}
          >
            <span className="checkbox">{selected.includes(index) && <CheckIcon />}</span>
            <span>{upgrade.name}</span>
            <small>+{formatPrice(upgrade.price)}</small>
          </button>
        ))}
      </div>
      <button className="button button--primary button--wide ready-configurator__button" onClick={addToBasket}>
        <BagIcon /> Add this exact console · {formatPrice(total)}
      </button>
      <p className="configurator__note">One console available · Ready to dispatch · 90-day workshop warranty</p>
    </div>
  );
}
