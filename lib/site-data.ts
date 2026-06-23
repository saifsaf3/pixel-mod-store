import type { Product } from "./products";

export const siteConfig = {
  buildSlotsThisWeek: 2,
  deliveryEstimate: "Custom builds usually dispatch in 5-10 working days.",
  buildQueueStatus: "Current queue: light workshop load",
  supportEmail: "hello@pixelforge.example",
  leadRecipientEmail: "anasur793@gmail.com",
  leadRecipientEnv: "PIXEL_FORGE_LEADS_TO",
  leadForwardingWebhookEnv: "EMAIL_FORWARD_WEBHOOK_URL",
  warrantyLabel: "90-day workshop warranty",
  dispatchWindowWorkingDays: "5-10 working days",
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
  {
    question: "Can you repair a console I already own?",
    answer: "Yes. Repair-led jobs can cover cleaning, batteries, charging faults, controls, displays and shell damage. Send photos and fault notes through the quote form before posting anything.",
  },
  {
    question: "Do you replace batteries?",
    answer: "Battery replacements are available for many PSP, Vita, Switch and DS-family systems. Battery health is checked during testing and upgraded packs are offered where reliable parts are available.",
  },
  {
    question: "How do payments work?",
    answer: "Checkout currently supports card payments and PayPal where configured. Custom quotes can be confirmed after the specification, lead time and parts availability are agreed.",
  },
  {
    question: "Do you ship internationally?",
    answer: "The standard checkout is UK-focused. International orders can be quoted manually because shipping cost, customs paperwork and charger compatibility vary by destination.",
  },
  {
    question: "Will I get tracking?",
    answer: "Yes. Finished builds are sent with tracked shipping, and the dispatch message includes tracking details once the parcel has been booked.",
  },
  {
    question: "Are modded consoles legal?",
    answer: "Hardware modification services are offered for lawful use. Pixel Forge does not sell copyrighted games, provide piracy support or pre-load commercial software.",
  },
];

export const buildGallery = [
  {
    title: "PSP 3000 Transparent Purple Build",
    model: "PSP 3000",
    category: "PlayStation",
    featured: true,
    before: "/gallery/psp-3000-transparent-purple-before.jpg",
    after: "/gallery/psp-3000-transparent-purple-after.jpg",
    color: "#6f3fa0",
    secondary: "#f58a2a",
    spotlight: "Full shell swap, storage setup, button refresh and final screen test.",
  },
  {
    title: "Switch Lite Blackout Build",
    model: "Switch Lite",
    category: "Nintendo Switch",
    featured: true,
    before: "/gallery/switch-lite-blackout-before.jpg",
    after: "/gallery/switch-lite-blackout-after.jpg",
    color: "#111111",
    secondary: "#9b5cff",
    spotlight: "Black shell conversion with calibrated controls and clean thermal service.",
  },
  {
    title: "PS Vita OLED Custom Shell",
    model: "PS Vita OLED",
    category: "PlayStation",
    featured: false,
    before: "/gallery/ps-vita-oled-before.jpg",
    after: "/gallery/ps-vita-oled-after.jpg",
    color: "#17171d",
    secondary: "#7c3aed",
    spotlight: "OLED inspection, storage configuration, port testing and secure packaging.",
  },
  {
    title: "Game Boy Advance IPS Orange Build",
    model: "Game Boy Advance",
    category: "Nintendo",
    featured: false,
    before: "/gallery/gba-ips-orange-before.jpg",
    after: "/gallery/gba-ips-orange-after.jpg",
    color: "#81776c",
    secondary: "#f97316",
    spotlight: "IPS display alignment, shell conversion and button membrane refresh.",
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

export const conditionOptions = [
  { name: "Refurbished Grade B", price: 0, note: "Clean daily-use shell, minor cosmetic marks accepted." },
  { name: "Refurbished Grade A", price: 18, note: "Cleaner donor hardware and tighter cosmetic tolerance." },
  { name: "Collector Grade", price: 42, note: "Best available shell fit, lowest cosmetic wear and extra inspection time." },
];

export const buttonOptions = [
  { name: "Matching button set", price: 0, color: "#17120f" },
  { name: "Contrasting buttons", price: 10, color: "#f97316" },
  { name: "Transparent accent set", price: 14, color: "#8b5cf6" },
];

export const batteryOptions = [
  { name: "Standard tested battery", price: 0, note: "Health checked before dispatch." },
  { name: "Upgraded battery", price: 28, note: "Recommended for daily use where reliable stock exists." },
];

export const screenOptions = [
  { name: "Original screen", price: 0, note: "Cleaned and tested for visible faults." },
  { name: "Premium replacement", price: 36, note: "Replacement panel where available for the selected model." },
  { name: "IPS upgrade", price: 58, note: "Model-dependent. Best for GBA and compatible retro builds." },
];

export const accessoryOptions = [
  { name: "Charger", price: 12 },
  { name: "Carry case", price: 18 },
  { name: "SD card", price: 22 },
  { name: "Screen protector", price: 8 },
  { name: "Grip case", price: 24 },
];

export const buildPackages = [
  { name: "Standard Build", price: 0, badge: "Essential", note: "Refurbished, cleaned, configured and tested." },
  { name: "Premium Build", price: 38, badge: "Most recommended", note: "Adds cosmetic priority, upgraded battery preference and extra test time." },
  { name: "Ultimate Build", price: 82, badge: "Best setup", note: "Includes premium fit checks, accessory prep and priority workshop handling." },
];

export const shippingOptions = [
  { name: "Standard dispatch", price: 0, note: siteConfig.deliveryEstimate },
  { name: "Priority build queue", price: 24, note: "Moves eligible builds ahead in the workshop queue where parts are in stock." },
];

export const popularCombinations = [
  "Transparent shell + contrasting buttons + 128GB storage",
  "Blackout shell + upgraded battery + carry case",
  "Premium build package + screen protector + charger",
];

export const trustCards = [
  "Professionally Tested",
  "Warranty Included",
  "UK Based",
  "Secure Packaging",
  "Customer Support",
  "Custom Built To Order",
];

export const trustBoosters = [
  {
    title: "Warranty information",
    copy: "Every eligible console includes a clear workshop warranty covering workmanship and fitted parts, with support available if something does not feel right.",
  },
  {
    title: "Build quality guarantee",
    copy: "Shell fit, button travel, screen alignment, charge behaviour and storage setup are checked before a build is cleared for dispatch.",
  },
  {
    title: "Quality control process",
    copy: "Consoles complete visual inspection, input testing, charge testing, storage checks, speaker checks and an extended play session.",
  },
  {
    title: "Secure packaging",
    copy: "Screens, sticks and shell corners are protected with layered packaging so the console arrives looking like the build photos.",
  },
  {
    title: "Repair expertise",
    copy: "Custom work is approached like repair work first: faults are diagnosed, worn components are replaced and donor hardware is inspected.",
  },
  {
    title: "Customer-first support",
    copy: "You get plain-language setup guidance, order updates and after-sale help instead of being left to troubleshoot a custom build alone.",
  },
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

export const productDetailSections = [
  {
    title: "Overview",
    copy: "A Pixel Forge custom console is rebuilt around original hardware, practical upgrades and a finish selected to feel personal without compromising reliability.",
  },
  {
    title: "Who it is for",
    copy: "Ideal for collectors, retro players, commuters, gift buyers and anyone who wants restored handheld hardware without gambling on an untested used listing.",
  },
  {
    title: "Build quality",
    copy: "Each build is stripped, inspected, cleaned, reassembled carefully and checked for fit, button response, charging, storage and display behaviour.",
  },
  {
    title: "Storage and emulation",
    copy: "Storage options are selected around the console family. Supported homebrew and emulator use depends on model, legality and customer-owned software.",
  },
  {
    title: "Shipping and warranty",
    copy: "Finished builds are packed securely, shipped tracked where possible and backed by the Pixel Forge workshop warranty for confidence after delivery.",
  },
];

export const recommendedUpsells = [
  { title: "Frequently bought together", items: ["Console + charger", "Console + SD card", "Console + carry case"] },
  { title: "Recommended upgrades", items: ["Upgraded battery", "Screen protector", "Premium replacement screen"] },
  { title: "Complete your setup", items: ["Grip case", "Setup guide", "Storage upgrade"] },
];

export const aboutSections = [
  ["Our Story", "Pixel Forge began from the repair bench: fixing tired handhelds, learning their common faults and turning dependable donor hardware into builds people actually want to use."],
  ["Our Mission", "The mission is to make custom consoles feel professional, transparent and trustworthy, from the first quote to the first full battery cycle after delivery."],
  ["Why We Started", "Used handhelds can be unpredictable. Pixel Forge exists to remove that uncertainty with proper testing, clear options and careful presentation."],
  ["Our Build Process", "Every job starts with inspection, cleaning and fault checks before shell work, storage setup, battery options or accessories are fitted."],
  ["Testing Process", "Controls, screens, charging, speakers, storage, wireless behaviour and sleep cycles are checked before a build is approved."],
  ["Quality Control", "Shell pressure, panel gaps, button feel and screen alignment are reviewed so the build feels finished, not rushed."],
  ["Packaging Process", "Consoles are protected around screens, sticks and shell corners, then packed with setup notes and order context."],
  ["Customer Support", "Support continues after dispatch with setup help, order questions and practical advice if something needs attention."],
  ["Warranty Promise", "The workshop warranty is written to give buyers confidence while keeping expectations clear around misuse, accidental damage and ageing original hardware."],
  ["Future Vision", "Pixel Forge is building toward deeper galleries, real review capture, richer build tracking and a smoother quote-to-checkout workflow."],
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
