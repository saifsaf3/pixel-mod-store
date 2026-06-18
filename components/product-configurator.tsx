"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { BagIcon, CheckIcon, MinusIcon, PlusIcon } from "./icons";
import { useShop } from "./shop-provider";

export function ProductConfigurator({ product }: { product: Product }) {
  const [shellIndex, setShellIndex] = useState(0);
  const [storageIndex, setStorageIndex] = useState(0);
  const [selectedUpgrades, setSelectedUpgrades] = useState<number[]>([]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useShop();

  const total = useMemo(
    () =>
      product.basePrice +
      product.shellOptions[shellIndex].price +
      product.storageOptions[storageIndex].price +
      selectedUpgrades.reduce((sum, index) => sum + product.upgradeOptions[index].price, 0),
    [product, shellIndex, storageIndex, selectedUpgrades],
  );

  const toggleUpgrade = (index: number) => {
    setSelectedUpgrades((current) =>
      current.includes(index)
        ? current.filter((entry) => entry !== index)
        : [...current, index],
    );
  };

  const handleAdd = () => {
    const shell = product.shellOptions[shellIndex];
    const storage = product.storageOptions[storageIndex];
    const upgrades = selectedUpgrades.map((index) => product.upgradeOptions[index].name);
    const visual = product.gallery[shellIndex % product.gallery.length];
    const key = [product.id, shell.name, storage.name, ...upgrades.sort()].join("|");

    addItem({
      key,
      productId: product.id,
      name: product.name,
      imageColor: visual.color,
      imageSecondary: visual.secondary,
      artwork: product.artwork,
      unitPrice: total,
      quantity,
      shell: shell.name,
      storage: storage.name,
      upgrades,
    });
  };

  return (
    <div className="configurator">
      <div className="configurator__heading">
        <span className="eyebrow">Build yours</span>
        <div>
          <h2>Choose your finish</h2>
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>

      <fieldset className="option-group">
        <legend>01 — Shell colour</legend>
        <div className="swatch-options">
          {product.shellOptions.map((option, index) => {
            const galleryImage = product.gallery[index % product.gallery.length];
            return (
              <button
                type="button"
                key={option.name}
                className={shellIndex === index ? "is-selected" : ""}
                onClick={() => setShellIndex(index)}
                aria-pressed={shellIndex === index}
              >
                <span className="swatch" style={{ background: galleryImage.color }} />
                <span>{option.name}</span>
                {option.price > 0 && <small>+{formatPrice(option.price)}</small>}
                {shellIndex === index && <CheckIcon className="option-check" />}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="option-group">
        <legend>02 — Storage</legend>
        <div className="line-options">
          {product.storageOptions.map((option, index) => (
            <button
              type="button"
              key={option.name}
              className={storageIndex === index ? "is-selected" : ""}
              onClick={() => setStorageIndex(index)}
              aria-pressed={storageIndex === index}
            >
              <span className="radio"><i /></span>
              <span>{option.name}</span>
              <small>{option.price === 0 ? "Included" : `${option.price > 0 ? "+" : "−"}${formatPrice(Math.abs(option.price))}`}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="option-group">
        <legend>03 — Workshop upgrades</legend>
        <div className="line-options">
          {product.upgradeOptions.map((option, index) => (
            <button
              type="button"
              key={option.name}
              className={selectedUpgrades.includes(index) ? "is-selected" : ""}
              onClick={() => toggleUpgrade(index)}
              aria-pressed={selectedUpgrades.includes(index)}
            >
              <span className="checkbox">{selectedUpgrades.includes(index) && <CheckIcon />}</span>
              <span>{option.name}</span>
              <small>+{formatPrice(option.price)}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="configurator__buy">
        <div className="quantity-control quantity-control--large">
          <button onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
            <MinusIcon />
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((current) => Math.min(5, current + 1))} aria-label="Increase quantity">
            <PlusIcon />
          </button>
        </div>
        <button className="button button--primary configurator__add" onClick={handleAdd}>
          <BagIcon />
          Add to basket · {formatPrice(total * quantity)}
        </button>
      </div>
      <p className="configurator__note">
        Built to order in 5–8 working days · 90-day workshop warranty · Charger included
      </p>
    </div>
  );
}
