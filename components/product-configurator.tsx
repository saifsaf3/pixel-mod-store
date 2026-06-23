"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import {
  accessoryOptions,
  batteryOptions,
  buildPackages,
  bundles,
  buttonOptions,
  conditionOptions,
  popularCombinations,
  screenOptions,
  shippingOptions,
  siteConfig,
} from "@/lib/site-data";
import { BagIcon, CheckIcon, HeartIcon, MinusIcon, PlusIcon } from "./icons";
import { useShop } from "./shop-provider";

type ProductConfiguratorProps = {
  product: Product;
  shellIndex: number;
  onShellIndexChange: (index: number) => void;
};

export function ProductConfigurator({
  product,
  shellIndex,
  onShellIndexChange,
}: ProductConfiguratorProps) {
  const [storageIndex, setStorageIndex] = useState(0);
  const [selectedUpgrades, setSelectedUpgrades] = useState<number[]>([]);
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null);
  const [buttonIndex, setButtonIndex] = useState(0);
  const [conditionIndex, setConditionIndex] = useState(0);
  const [batteryIndex, setBatteryIndex] = useState(0);
  const [screenIndex, setScreenIndex] = useState(0);
  const [packageIndex, setPackageIndex] = useState(0);
  const [shippingIndex, setShippingIndex] = useState(0);
  const [selectedAccessories, setSelectedAccessories] = useState<number[]>([]);
  const [quantity, setQuantity] = useState(1);
  const { addItem, toggleWishlist, isWishlisted } = useShop();
  const saved = isWishlisted(product.id);
  const selectedBundleOption = bundles.find((bundle) => bundle.id === selectedBundle);

  const total = useMemo(
    () =>
      product.basePrice +
      product.shellOptions[shellIndex].price +
      product.storageOptions[storageIndex].price +
      selectedUpgrades.reduce((sum, index) => sum + product.upgradeOptions[index].price, 0) +
      selectedAccessories.reduce((sum, index) => sum + accessoryOptions[index].price, 0) +
      buttonOptions[buttonIndex].price +
      conditionOptions[conditionIndex].price +
      batteryOptions[batteryIndex].price +
      screenOptions[screenIndex].price +
      buildPackages[packageIndex].price +
      shippingOptions[shippingIndex].price +
      (selectedBundleOption?.price ?? 0),
    [
      product,
      shellIndex,
      storageIndex,
      selectedUpgrades,
      selectedAccessories,
      buttonIndex,
      conditionIndex,
      batteryIndex,
      screenIndex,
      packageIndex,
      shippingIndex,
      selectedBundleOption,
    ],
  );

  const buildScore = Math.min(
    100,
    62 +
      selectedUpgrades.length * 5 +
      selectedAccessories.length * 3 +
      batteryIndex * 8 +
      screenIndex * 6 +
      packageIndex * 10 +
      conditionIndex * 4,
  );

  const compatibilityWarnings = [
    screenOptions[screenIndex].name === "IPS upgrade" && !product.name.toLowerCase().includes("game boy")
      ? "IPS screen upgrades are model-dependent. Pixel Forge will confirm compatibility before taking payment for this option."
      : "",
    product.family !== "Nintendo Switch" && selectedAccessories.some((index) => accessoryOptions[index].name === "Grip case")
      ? "Grip case availability varies by non-Switch model."
      : "",
  ].filter(Boolean);

  useEffect(() => {
    const savedBuild = localStorage.getItem(`pixel-forge-build-${product.id}`);
    if (!savedBuild) return;
    try {
      const parsed = JSON.parse(savedBuild) as {
        shellIndex?: number;
        storageIndex?: number;
        selectedUpgrades?: number[];
        selectedBundle?: string | null;
        buttonIndex?: number;
        conditionIndex?: number;
        batteryIndex?: number;
        screenIndex?: number;
        packageIndex?: number;
        shippingIndex?: number;
        selectedAccessories?: number[];
      };
      const frame = requestAnimationFrame(() => {
        if (typeof parsed.shellIndex === "number") onShellIndexChange(parsed.shellIndex);
        if (typeof parsed.storageIndex === "number") setStorageIndex(parsed.storageIndex);
        if (Array.isArray(parsed.selectedUpgrades)) setSelectedUpgrades(parsed.selectedUpgrades);
        if (Array.isArray(parsed.selectedAccessories)) setSelectedAccessories(parsed.selectedAccessories);
        if (typeof parsed.buttonIndex === "number") setButtonIndex(parsed.buttonIndex);
        if (typeof parsed.conditionIndex === "number") setConditionIndex(parsed.conditionIndex);
        if (typeof parsed.batteryIndex === "number") setBatteryIndex(parsed.batteryIndex);
        if (typeof parsed.screenIndex === "number") setScreenIndex(parsed.screenIndex);
        if (typeof parsed.packageIndex === "number") setPackageIndex(parsed.packageIndex);
        if (typeof parsed.shippingIndex === "number") setShippingIndex(parsed.shippingIndex);
        if (typeof parsed.selectedBundle === "string" || parsed.selectedBundle === null) {
          setSelectedBundle(parsed.selectedBundle);
        }
      });
      return () => cancelAnimationFrame(frame);
    } catch {
      localStorage.removeItem(`pixel-forge-build-${product.id}`);
    }
  }, [product.id, onShellIndexChange]);

  useEffect(() => {
    localStorage.setItem(
      `pixel-forge-build-${product.id}`,
      JSON.stringify({
        shellIndex,
        storageIndex,
        selectedUpgrades,
        selectedBundle,
        buttonIndex,
        conditionIndex,
        batteryIndex,
        screenIndex,
        packageIndex,
        shippingIndex,
        selectedAccessories,
      }),
    );
  }, [
    product.id,
    shellIndex,
    storageIndex,
    selectedUpgrades,
    selectedBundle,
    buttonIndex,
    conditionIndex,
    batteryIndex,
    screenIndex,
    packageIndex,
    shippingIndex,
    selectedAccessories,
  ]);

  const toggleUpgrade = (index: number) => {
    setSelectedUpgrades((current) =>
      current.includes(index)
        ? current.filter((entry) => entry !== index)
        : [...current, index],
    );
  };

  const toggleAccessory = (index: number) => {
    setSelectedAccessories((current) =>
      current.includes(index)
        ? current.filter((entry) => entry !== index)
        : [...current, index],
    );
  };

  const handleAdd = () => {
    const shell = product.shellOptions[shellIndex];
    const storage = product.storageOptions[storageIndex];
    const upgrades = selectedUpgrades.map((index) => product.upgradeOptions[index].name);
    upgrades.push(
      buttonOptions[buttonIndex].name,
      conditionOptions[conditionIndex].name,
      batteryOptions[batteryIndex].name,
      screenOptions[screenIndex].name,
      buildPackages[packageIndex].name,
      shippingOptions[shippingIndex].name,
    );
    upgrades.push(...selectedAccessories.map((index) => accessoryOptions[index].name));
    if (selectedBundleOption) upgrades.push(selectedBundleOption.name);
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
                onClick={() => onShellIndexChange(index)}
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

      <fieldset className="option-group">
        <legend>04 — Button colour</legend>
        <div className="swatch-options">
          {buttonOptions.map((option, index) => (
            <button
              type="button"
              key={option.name}
              className={buttonIndex === index ? "is-selected" : ""}
              onMouseEnter={() => setButtonIndex(index)}
              onClick={() => setButtonIndex(index)}
              aria-pressed={buttonIndex === index}
            >
              <span className="swatch" style={{ background: option.color }} />
              <span>{option.name}</span>
              {option.price > 0 && <small>+{formatPrice(option.price)}</small>}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="option-group">
        <legend>05 — Condition</legend>
        <div className="visual-card-options">
          {conditionOptions.map((option, index) => (
            <button type="button" key={option.name} className={conditionIndex === index ? "is-selected" : ""} onClick={() => setConditionIndex(index)}>
              <strong>{option.name}</strong>
              <span>{option.note}</span>
              <small>{option.price ? `+${formatPrice(option.price)}` : "Included"}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="option-group">
        <legend>06 — Battery and screen</legend>
        <div className="visual-card-options visual-card-options--two">
          {batteryOptions.map((option, index) => (
            <button type="button" key={option.name} className={batteryIndex === index ? "is-selected" : ""} onClick={() => setBatteryIndex(index)}>
              <strong>{option.name}</strong><span>{option.note}</span><small>{option.price ? `+${formatPrice(option.price)}` : "Included"}</small>
            </button>
          ))}
          {screenOptions.map((option, index) => (
            <button type="button" key={option.name} className={screenIndex === index ? "is-selected" : ""} onClick={() => setScreenIndex(index)}>
              <strong>{option.name}</strong><span>{option.note}</span><small>{option.price ? `+${formatPrice(option.price)}` : "Included"}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="option-group">
        <legend>07 — Accessories</legend>
        <div className="line-options">
          {accessoryOptions.map((option, index) => (
            <button
              type="button"
              key={option.name}
              className={selectedAccessories.includes(index) ? "is-selected" : ""}
              onClick={() => toggleAccessory(index)}
              aria-pressed={selectedAccessories.includes(index)}
            >
              <span className="checkbox">{selectedAccessories.includes(index) && <CheckIcon />}</span>
              <span>{option.name}</span>
              <small>+{formatPrice(option.price)}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="option-group">
        <legend>08 — Build package</legend>
        <div className="package-options">
          {buildPackages.map((option, index) => (
            <button type="button" key={option.name} className={packageIndex === index ? "is-selected" : ""} onClick={() => setPackageIndex(index)}>
              <span>{option.badge}</span>
              <strong>{option.name}</strong>
              <small>{option.note}</small>
              <em>{option.price ? `+${formatPrice(option.price)}` : "Included"}</em>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="option-group">
        <legend>09 — Shipping speed</legend>
        <div className="line-options">
          {shippingOptions.map((option, index) => (
            <button type="button" key={option.name} className={shippingIndex === index ? "is-selected" : ""} onClick={() => setShippingIndex(index)}>
              <span className="radio"><i /></span>
              <span>{option.name}</span>
              <small>{option.price ? `+${formatPrice(option.price)}` : "Included"}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="option-group">
        <legend>10 — Bundle discounts</legend>
        <div className="bundle-options">
          {bundles.map((bundle) => (
            <button
              type="button"
              key={bundle.id}
              className={selectedBundle === bundle.id ? "is-selected" : ""}
              onClick={() => setSelectedBundle((current) => current === bundle.id ? null : bundle.id)}
              aria-pressed={selectedBundle === bundle.id}
            >
              <span>{bundle.name}</span>
              <small>+{formatPrice(bundle.price)}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <aside className="build-summary-panel">
        <div>
          <span className="eyebrow">Build summary</span>
          <h3>{product.shellOptions[shellIndex].name} {product.shortName}</h3>
          <p>{conditionOptions[conditionIndex].name} · {buildPackages[packageIndex].name} · {siteConfig.buildQueueStatus}</p>
        </div>
        <div className="build-score"><span>{buildScore}</span><small>Build score</small></div>
        <ul>
          <li>Base console <strong>{formatPrice(product.basePrice)}</strong></li>
          <li>Selected shell <strong>{formatPrice(product.shellOptions[shellIndex].price)}</strong></li>
          <li>Storage <strong>{formatPrice(product.storageOptions[storageIndex].price)}</strong></li>
          <li>Options and package <strong>{formatPrice(total - product.basePrice - product.shellOptions[shellIndex].price - product.storageOptions[storageIndex].price)}</strong></li>
        </ul>
        {compatibilityWarnings.length > 0 && (
          <div className="compatibility-warning">
            {compatibilityWarnings.map((warning) => <p key={warning}>{warning}</p>)}
          </div>
        )}
      </aside>

      <div className="popular-combos">
        <span className="eyebrow">Popular combinations</span>
        {popularCombinations.map((combo) => <button type="button" key={combo}>{combo}</button>)}
      </div>

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
      <button
        className={`save-build-button ${saved ? "is-saved" : ""}`}
        type="button"
        onClick={() => toggleWishlist(product.id)}
        aria-pressed={saved}
      >
        <HeartIcon /> {saved ? "Saved to wishlist" : "Save build to wishlist"}
      </button>
      <p className="configurator__note">
        {siteConfig.deliveryEstimate} · 90-day workshop warranty · Charger included
      </p>
      <div className="sticky-cart-bar">
        <div>
          <span>{product.name}</span>
          <strong>{product.shellOptions[shellIndex].name} · {product.storageOptions[storageIndex].name}</strong>
        </div>
        <div>
          <span>{formatPrice(total)}</span>
          <button className="button button--primary" onClick={handleAdd}>
            <BagIcon /> Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}
