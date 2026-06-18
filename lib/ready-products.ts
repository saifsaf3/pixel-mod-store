import type { Product } from "./products";

export type ReadyProduct = {
  id: string;
  name: string;
  family: Product["family"];
  price: number;
  artwork: Product["artwork"];
  color: string;
  secondary: string;
  badge: string;
  condition: string;
  description: string;
  features: string[];
  storage: string;
  image?: string;
};

export const readyProducts: ReadyProduct[] = [
  {
    id: "ready-white-psp-1000",
    name: "Pearl White PSP 1000",
    family: "PlayStation",
    price: 85,
    artwork: "psp",
    color: "#e9e5df",
    secondary: "#b7a79c",
    badge: "One available",
    condition: "Ready to dispatch",
    description:
      "A fully serviced original PSP 1000 in a clean pearl-white shell, configured with custom firmware and prepared for homebrew applications and customer-owned game backups.",
    features: [
      "Custom firmware configured",
      "32GB memory card included",
      "Homebrew-ready setup",
      "Charger and 90-day warranty",
    ],
    storage: "32GB configured card",
  },
  {
    id: "ready-smoke-switch-lite",
    name: "Smoke Black Switch Lite",
    family: "Nintendo Switch",
    price: 300,
    artwork: "switch",
    color: "#34343c",
    secondary: "#15161a",
    badge: "One available",
    condition: "Ready to dispatch",
    description:
      "A high-spec Switch Lite in a transparent smoke-black shell with a fresh upgraded battery, Hall-effect controls, professionally installed Picofly hardware and configured storage for homebrew and customer-owned backups.",
    features: [
      "Transparent smoke-black shell",
      "Upgraded battery",
      "Hall-effect analogue sticks",
      "Professionally installed Picofly modchip",
      "256GB configured microSD card",
      "Setup guide and 90-day warranty",
    ],
    storage: "256GB configured card",
  },
];

export function getReadyProduct(id: string) {
  return readyProducts.find((product) => product.id === id);
}
