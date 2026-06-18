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
  longDescription: string[];
  features: string[];
  storage: string;
  image?: string;
  gallery: { label: string; color: string; secondary: string; image?: string }[];
  upgrades: { name: string; price: number }[];
  specifications: { label: string; value: string }[];
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
    longDescription: [
      "This is the exact finished console shown in the listing: an original PSP 1000 rebuilt in a pearl-white shell and fully tested before sale. The substantial first-generation chassis gives it the solid, comfortable feel that made the launch model distinctive, while the refreshed exterior and controls make it suitable for regular use rather than display only.",
      "Custom firmware is already configured for homebrew software and customer-owned backups. The included 32GB card has been tested in the console and the system arrives with a straightforward setup guide. No further workshop lead time is required; once payment clears, this unit can move directly to packing and dispatch.",
      "The charging circuit, analogue control, buttons, speakers, wireless connection and sleep behaviour have all completed the Pixel Forge workshop test. Optional extras below are fitted or packed before dispatch without changing the one-off status of the console.",
    ],
    features: [
      "Custom firmware configured",
      "32GB memory card included",
      "Homebrew-ready setup",
      "Charger and 90-day warranty",
    ],
    storage: "32GB configured card",
    gallery: [
      { label: "Pearl white front", color: "#e9e5df", secondary: "#b7a79c" },
      { label: "Controls detail", color: "#f2eee8", secondary: "#8c827a" },
      { label: "Rear shell", color: "#d9d4cc", secondary: "#b7a79c" },
    ],
    upgrades: [
      { name: "Fresh high-capacity battery", price: 24 },
      { name: "Tempered glass screen protector", price: 8 },
      { name: "Protective travel case", price: 16 },
    ],
    specifications: [
      { label: "Console", value: "Original PSP 1000 hardware" },
      { label: "Finish", value: "Pearl-white replacement shell" },
      { label: "Software", value: "Custom firmware configured" },
      { label: "Storage", value: "32GB tested memory card" },
      { label: "Included", value: "Charger and setup guide" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
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
    longDescription: [
      "This one-off Switch Lite has already completed its full build and test cycle. The transparent smoke-black shell gives the console a restrained custom finish while revealing just enough of the internal structure to distinguish it from a standard retail unit. Panel fit, button travel and display pressure have been checked after final assembly.",
      "Its practical upgrades are already installed: Hall-effect analogue sticks for long-term drift resistance, a refreshed higher-capacity battery, and professionally fitted Picofly hardware. The 256GB microSD card is configured for homebrew applications and customer-owned backups, with a written setup guide included for the new owner.",
      "Cooling performance, USB-C charging, wireless connectivity, cartridge reading, speakers, touch input and both analogue ranges have been tested under sustained use. Because the console is finished and in stock, only optional packed accessories need to be added before dispatch.",
    ],
    features: [
      "Transparent smoke-black shell",
      "Upgraded battery",
      "Hall-effect analogue sticks",
      "Professionally installed Picofly modchip",
      "256GB configured microSD card",
      "Setup guide and 90-day warranty",
    ],
    storage: "256GB configured card",
    gallery: [
      { label: "Smoke black front", color: "#34343c", secondary: "#15161a" },
      { label: "Transparent shell detail", color: "#454650", secondary: "#202126" },
      { label: "Hall-effect controls", color: "#2a2b31", secondary: "#777985" },
    ],
    upgrades: [
      { name: "Tempered glass screen protector", price: 10 },
      { name: "Premium hard-shell travel case", price: 22 },
      { name: "USB-C fast charger", price: 18 },
    ],
    specifications: [
      { label: "Console", value: "Nintendo Switch Lite" },
      { label: "Finish", value: "Transparent smoke-black shell" },
      { label: "Controls", value: "Hall-effect analogue sticks" },
      { label: "Hardware", value: "Picofly installation" },
      { label: "Storage", value: "256GB configured microSD" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
  },
];

export function getReadyProduct(id: string) {
  return readyProducts.find((product) => product.id === id);
}
