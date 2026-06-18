import { getProduct } from "./products";
import { getReadyProduct } from "./ready-products";

export type OrderInputItem = {
  productId?: string;
  productType?: "preorder" | "ready";
  shell?: string;
  storage?: string;
  upgrades?: string[];
  quantity?: number;
};

export type ValidatedOrderItem = {
  productId: string;
  name: string;
  description: string;
  unitPrice: number;
  quantity: number;
};

export function calculateShipping(consoleCount: number) {
  if (consoleCount < 1) return 0;
  return 7.99 + Math.max(0, consoleCount - 3) * 5;
}

export function validateOrderItems(items: OrderInputItem[]) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Your basket is empty.");
  }

  const validated: ValidatedOrderItem[] = items.map((item) => {
    const productId = item.productId || "";
    const quantity = Math.min(Math.max(Math.floor(item.quantity || 1), 1), 5);

    if (item.productType === "ready") {
      const readyProduct = getReadyProduct(productId);
      if (!readyProduct) throw new Error("One or more ready-to-ship items are invalid.");

      return {
        productId,
        name: readyProduct.name,
        description: `${readyProduct.condition} · ${readyProduct.storage}`,
        unitPrice: readyProduct.price,
        quantity: 1,
      };
    }

    const product = getProduct(productId);
    if (!product) throw new Error("One or more custom items are invalid.");

    const shell = product.shellOptions.find((option) => option.name === item.shell);
    const storage = product.storageOptions.find((option) => option.name === item.storage);
    if (!shell || !storage) throw new Error(`Invalid configuration for ${product.name}.`);

    const requestedUpgrades = Array.isArray(item.upgrades) ? item.upgrades : [];
    const upgrades = requestedUpgrades.map((name) => {
      const upgrade = product.upgradeOptions.find((option) => option.name === name);
      if (!upgrade) throw new Error(`Invalid upgrade for ${product.name}.`);
      return upgrade;
    });

    return {
      productId,
      name: product.name,
      description: [shell.name, storage.name, ...upgrades.map((upgrade) => upgrade.name)].join(" · "),
      unitPrice:
        product.basePrice +
        shell.price +
        storage.price +
        upgrades.reduce((total, upgrade) => total + upgrade.price, 0),
      quantity,
    };
  });

  const consoleCount = validated.reduce((total, item) => total + item.quantity, 0);
  const subtotal = validated.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0,
  );
  const shipping = calculateShipping(consoleCount);

  return { items: validated, consoleCount, subtotal, shipping, total: subtotal + shipping };
}
