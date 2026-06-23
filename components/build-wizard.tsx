"use client";

import { useMemo, useState } from "react";
import { products, formatPrice } from "@/lib/products";
import { BagIcon } from "./icons";
import { useShop } from "./shop-provider";

const storagePrices = [0, 18, 36];
const extraPrices = [18, 24, 36];
const extras = ["Glass screen protector", "Fresh battery", "Hall-effect sticks"];

export function BuildWizard() {
  const [step, setStep] = useState(0);
  const [productId, setProductId] = useState(products[0].id);
  const product = products.find((item) => item.id === productId) ?? products[0];
  const [shellIndex, setShellIndex] = useState(0);
  const [storageIndex, setStorageIndex] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState<number[]>([]);
  const { addItem } = useShop();

  const total = useMemo(
    () =>
      product.basePrice +
      product.shellOptions[shellIndex % product.shellOptions.length].price +
      storagePrices[storageIndex] +
      selectedExtras.reduce((sum, index) => sum + extraPrices[index], 0),
    [product, selectedExtras, shellIndex, storageIndex],
  );

  const addToCart = () => {
    const shell = product.shellOptions[shellIndex % product.shellOptions.length];
    const visual = product.gallery[shellIndex % product.gallery.length];
    addItem({
      key: ["wizard", product.id, shell.name, storageIndex, ...selectedExtras].join("|"),
      productId: product.id,
      name: product.name,
      imageColor: visual.color,
      imageSecondary: visual.secondary,
      artwork: product.artwork,
      unitPrice: total,
      quantity: 1,
      shell: shell.name,
      storage: ["64GB", "128GB", "256GB"][storageIndex],
      upgrades: selectedExtras.map((index) => extras[index]),
    });
  };

  return (
    <div className="wizard">
      <div className="wizard-steps">
        {["Console", "Shell", "Storage", "Mods", "Review"].map((label, index) => (
          <button key={label} className={step === index ? "is-active" : ""} onClick={() => setStep(index)}>
            <span>{index + 1}</span>{label}
          </button>
        ))}
      </div>
      <div className="wizard-panel">
        {step === 0 && products.slice(0, 5).map((item) => (
          <button key={item.id} className={product.id === item.id ? "is-selected" : ""} onClick={() => setProductId(item.id)}>
            <strong>{item.name}</strong><span>{formatPrice(item.basePrice)}</span>
          </button>
        ))}
        {step === 1 && product.shellOptions.map((shell, index) => (
          <button key={shell.name} className={shellIndex === index ? "is-selected" : ""} onClick={() => setShellIndex(index)}>
            <strong>{shell.name}</strong><span>{shell.price ? `+${formatPrice(shell.price)}` : "Included"}</span>
          </button>
        ))}
        {step === 2 && ["64GB", "128GB", "256GB"].map((storage, index) => (
          <button key={storage} className={storageIndex === index ? "is-selected" : ""} onClick={() => setStorageIndex(index)}>
            <strong>{storage}</strong><span>{storagePrices[index] ? `+${formatPrice(storagePrices[index])}` : "Included"}</span>
          </button>
        ))}
        {step === 3 && extras.map((extra, index) => (
          <button
            key={extra}
            className={selectedExtras.includes(index) ? "is-selected" : ""}
            onClick={() => setSelectedExtras((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])}
          >
            <strong>{extra}</strong><span>+{formatPrice(extraPrices[index])}</span>
          </button>
        ))}
        {step === 4 && (
          <div className="wizard-review">
            <h2>{product.name}</h2>
            <p>{product.shellOptions[shellIndex % product.shellOptions.length].name} · {["64GB", "128GB", "256GB"][storageIndex]}</p>
            <strong>{formatPrice(total)}</strong>
          </div>
        )}
      </div>
      <div className="wizard-footer">
        <strong>{formatPrice(total)}</strong>
        <button className="button button--outline" onClick={() => setStep(Math.max(0, step - 1))}>Back</button>
        <button className="button button--primary" onClick={() => step < 4 ? setStep(step + 1) : addToCart()}>
          <BagIcon /> {step < 4 ? "Next" : "Add to basket"}
        </button>
      </div>
    </div>
  );
}
