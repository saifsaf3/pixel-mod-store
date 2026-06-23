import type { Product } from "./products";

export const siteConfig = {
  buildSlotsThisWeek: 2,
  deliveryEstimate: "Custom builds usually dispatch in 5-10 working days.",
};

export type Review = {
  id: string;
  name: string;
  rating: number;
  productId?: string;
  productName: string;
  buildType: string;
  comment: string;
};

export const reviews: Review[] = [
  {
    id: "review-psp-purple",
    name: "Maya R.",
    rating: 5,
    productId: "psp-3000",
    productName: "PSP 3000",
    buildType: "Transparent purple shell",
    comment: "Clean assembly, bright screen and the buttons feel properly serviced.",
  },
  {
    id: "review-switch-blackout",
    name: "Owen K.",
    rating: 5,
    productId: "switch-lite",
    productName: "Switch Lite",
    buildType: "Blackout shell swap",
    comment: "The shell fit is excellent and the stick calibration was spot on.",
  },
  {
    id: "review-vita-oled",
    name: "Samira T.",
    rating: 5,
    productId: "ps-vita",
    productName: "PS Vita OLED",
    buildType: "OLED refresh",
    comment: "Arrived packed securely with a clear setup guide and test notes.",
  },
  {
    id: "review-gba-ips",
    name: "Leon B.",
    rating: 4,
    productId: "gba",
    productName: "Game Boy Advance",
    buildType: "IPS display build",
    comment: "Feels like original hardware, just sharper and much easier to use.",
  },
];

export const faqs = [
  {
    question: "How long do custom builds take?",
    answer: "Most custom builds dispatch in 5-10 working days once donor hardware and parts are ready. Complex shell swaps, modchip work or rare colours can take longer.",
  },
  {
    question: "Do you ship consoles safely?",
    answer: "Yes. Consoles are cleaned, wrapped, boxed with padding and packed to protect screens, sticks and shell corners during delivery.",
  },
  {
    question: "Is there a warranty?",
    answer: "Builds include a 90-day workshop warranty covering faults from parts or workmanship. Accidental damage, liquid damage and misuse are not covered.",
  },
  {
    question: "Can I return a custom order?",
    answer: "Ready-stock items can be returned if unused and complete. Bespoke custom builds are made to your selected specification, so returns are handled case by case.",
  },
  {
    question: "Can you install modchips?",
    answer: "Switch modchip work is available by quote where legally appropriate. Pixel Forge does not provide copyrighted games or piracy support.",
  },
  {
    question: "What storage sizes can I choose?",
    answer: "Common options include 64GB and 128GB for PSP-style builds, and 128GB, 256GB or 512GB microSD options for Switch and Vita builds.",
  },
  {
    question: "Are chargers included?",
    answer: "Many builds include a suitable charger or cable. Product pages list what is included, and bundle options let you add chargers or cases where needed.",
  },
  {
    question: "Do you take unusual custom orders?",
    answer: "Yes. Use the custom build request form for shell colours, storage, mods, battery work, screen replacements and repair-led builds.",
  },
];

export const buildGallery = [
  {
    title: "PSP 3000 Transparent Purple Build",
    model: "PSP 3000",
    before: "/gallery/psp-3000-transparent-purple-before.jpg",
    after: "/gallery/psp-3000-transparent-purple-after.jpg",
    color: "#6f3fa0",
    secondary: "#f58a2a",
  },
  {
    title: "Switch Lite Blackout Build",
    model: "Switch Lite",
    before: "/gallery/switch-lite-blackout-before.jpg",
    after: "/gallery/switch-lite-blackout-after.jpg",
    color: "#111111",
    secondary: "#9b5cff",
  },
  {
    title: "PS Vita OLED Custom Shell",
    model: "PS Vita OLED",
    before: "/gallery/ps-vita-oled-before.jpg",
    after: "/gallery/ps-vita-oled-after.jpg",
    color: "#17171d",
    secondary: "#7c3aed",
  },
];

export const videoShowcases = [
  {
    title: "Transparent PSP shell demo",
    label: "YouTube Short placeholder",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Switch Lite shell swap preview",
    label: "Build clip placeholder",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Vita OLED test run",
    label: "Testing clip placeholder",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const bundles = [
  { id: "charger", name: "Console + Charger", price: 12 },
  { id: "sd-card", name: "Console + SD Card", price: 22 },
  { id: "case", name: "Console + Case", price: 18 },
  { id: "starter", name: "Full Starter Bundle", price: 42 },
];

export const includedItems = [
  "Console",
  "Charger if selected/included",
  "SD card/storage option",
  "Setup guide",
  "Warranty",
  "Testing before dispatch",
];

export const trustCards = [
  "Tested before dispatch",
  "Custom-built consoles",
  "Secure packaging",
  "Support after purchase",
  "Warranty included",
];

export const services = [
  { name: "PSP reshells", price: "From £49" },
  { name: "PS Vita mods", price: "From £69" },
  { name: "Switch Lite shell swaps", price: "From £79" },
  { name: "Switch modchip installs", price: "Quote only" },
  { name: "Joy-Con hall effect installs", price: "From £34" },
  { name: "Battery replacements", price: "From £29" },
  { name: "Screen replacements", price: "From £55" },
  { name: "Cleaning and refurbishing", price: "From £35" },
];

export const performanceInfo: Record<string, { label: string; value: string }[]> = {
  "psp-1000": [
    { label: "Supported emulators", value: "PSP, PS1 classics, 8-bit and 16-bit homebrew" },
    { label: "Storage options", value: "64GB, 128GB or console-only setup" },
    { label: "Battery estimate", value: "3-5 hours depending on age and brightness" },
    { label: "Screen info", value: "4.3-inch TFT LCD" },
    { label: "Mod options", value: "Shell, battery, storage and screen lens refresh" },
    { label: "Ideal use", value: "Classic PSP library and sturdy daily play" },
  ],
  "psp-2000": [
    { label: "Supported emulators", value: "PSP, PS1 classics and lightweight retro systems" },
    { label: "Storage options", value: "64GB or 128GB curated card" },
    { label: "Battery estimate", value: "4-6 hours with a healthy pack" },
    { label: "Screen info", value: "4.3-inch slim PSP LCD" },
    { label: "Mod options", value: "Shell, storage, battery and screen protection" },
    { label: "Ideal use", value: "Portable PSP play with a lighter body" },
  ],
  "psp-3000": [
    { label: "Supported emulators", value: "PSP, PS1 classics and retro homebrew" },
    { label: "Storage options", value: "64GB, 128GB or console-only setup" },
    { label: "Battery estimate", value: "4-6 hours depending on game and brightness" },
    { label: "Screen info", value: "Wide-colour 4.3-inch LCD" },
    { label: "Mod options", value: "Shell, storage, battery and controls refresh" },
    { label: "Ideal use", value: "Best all-round classic PSP experience" },
  ],
  "ps-vita": [
    { label: "Supported emulators", value: "Vita, PSP, PS1 and homebrew retro systems" },
    { label: "Storage options", value: "128GB, 256GB or 512GB configured card" },
    { label: "Battery estimate", value: "3-5 hours depending on title" },
    { label: "Screen info", value: "5-inch OLED display" },
    { label: "Mod options", value: "Storage, battery, shell and protection" },
    { label: "Ideal use", value: "OLED handheld gaming and remote play" },
  ],
  "switch-lite": [
    { label: "Supported emulators", value: "Nintendo Switch library and supported homebrew by quote" },
    { label: "Storage options", value: "128GB, 256GB or 512GB microSD" },
    { label: "Battery estimate", value: "3-7 hours by title" },
    { label: "Screen info", value: "5.5-inch touch LCD" },
    { label: "Mod options", value: "Shell, Hall sticks, battery and modchip quote" },
    { label: "Ideal use", value: "Compact handheld Switch play" },
  ],
};

export function shellImagePath(productId: string, shellName: string, index = 1) {
  const slug = shellName
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `/products/${productId}/${slug}-${index}.jpg`;
}

export function getProductReviews(productId: string) {
  return reviews.filter((review) => review.productId === productId).slice(0, 3);
}

export function getPerformanceInfo(product: Product) {
  return performanceInfo[product.id] ?? [
    { label: "Supported emulators", value: "Model-dependent homebrew and original software support" },
    { label: "Storage options", value: product.storageOptions.map((option) => option.name).join(", ") },
    { label: "Battery estimate", value: "Varies by model, battery age and brightness" },
    { label: "Screen info", value: product.specifications.find((spec) => spec.label.includes("Display"))?.value ?? "Original display specification" },
    { label: "Mod options", value: product.upgradeOptions.map((option) => option.name).join(", ") },
    { label: "Ideal use", value: product.highlights.join(", ") },
  ];
}
