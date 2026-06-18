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

export type CheckoutDetails = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address1?: string;
  address2?: string;
  city?: string;
  county?: string;
  postcode?: string;
  country?: string;
};

export function validateCheckoutDetails(details: CheckoutDetails | undefined) {
  const value = (field: keyof CheckoutDetails, max = 120) =>
    String(details?.[field] || "").trim().slice(0, max);
  const customer = {
    firstName: value("firstName", 60),
    lastName: value("lastName", 60),
    email: value("email", 254).toLowerCase(),
    phone: value("phone", 30),
    address1: value("address1", 120),
    address2: value("address2", 120),
    city: value("city", 80),
    county: value("county", 80),
    postcode: value("postcode", 12).toUpperCase(),
    country: value("country", 2).toUpperCase() || "GB",
  };

  if (!customer.firstName || !customer.lastName || !customer.address1 || !customer.city) {
    throw new Error("Please complete your name and delivery address.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
    throw new Error("Please enter a valid email address.");
  }
  if (!/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(customer.postcode)) {
    throw new Error("Please enter a valid UK postcode.");
  }
  if (customer.country !== "GB") {
    throw new Error("Pixel Forge currently ships to UK addresses only.");
  }
  return customer;
}

export function calculateShipping(consoleCount: number) {
  if (consoleCount < 1) return 0;
  return 7.99 + Math.max(0, consoleCount - 3) * 5;
}

export function validateOrderItems(items: OrderInputItem[]) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Your basket is empty.");
  }

  const readyIds = new Set<string>();
  const validated: ValidatedOrderItem[] = items.map((item) => {
    const productId = item.productId || "";
    const quantity = Math.min(Math.max(Math.floor(item.quantity || 1), 1), 5);

    if (item.productType === "ready") {
      const readyProduct = getReadyProduct(productId);
      if (!readyProduct) throw new Error("One or more ready-to-ship items are invalid.");
      if (readyIds.has(productId)) throw new Error(`${readyProduct.name} is limited to one unit.`);
      readyIds.add(productId);

      const requestedUpgrades = Array.isArray(item.upgrades) ? item.upgrades : [];
      const upgrades = requestedUpgrades.map((name) => {
        const upgrade = readyProduct.upgrades.find((option) => option.name === name);
        if (!upgrade) throw new Error(`Invalid upgrade for ${readyProduct.name}.`);
        return upgrade;
      });

      return {
        productId,
        name: readyProduct.name,
        description: [readyProduct.condition, readyProduct.storage, ...upgrades.map((upgrade) => upgrade.name)].join(" · "),
        unitPrice: readyProduct.price + upgrades.reduce((total, upgrade) => total + upgrade.price, 0),
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
