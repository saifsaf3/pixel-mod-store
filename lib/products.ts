export type ProductFamily = "PlayStation" | "Nintendo Switch" | "Nintendo";

export type ProductOption = {
  name: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  shortName: string;
  family: ProductFamily;
  eyebrow: string;
  tagline: string;
  shortDescription: string;
  description: string[];
  basePrice: number;
  accent: string;
  accentSecondary: string;
  artwork: "psp" | "vita" | "switch" | "ds" | "gba";
  badge?: string;
  featured?: boolean;
  specifications: { label: string; value: string }[];
  highlights: string[];
  shellOptions: ProductOption[];
  storageOptions: ProductOption[];
  upgradeOptions: ProductOption[];
  gallery: { label: string; color: string; secondary: string; image?: string }[];
};

const standardShells: ProductOption[] = [
  { name: "Obsidian Black", price: 0 },
  { name: "Pearl White", price: 8 },
  { name: "Smoke Clear", price: 12 },
  { name: "Atomic Purple", price: 14 },
];

const pspStorage: ProductOption[] = [
  { name: "64GB curated card", price: 0 },
  { name: "128GB curated card", price: 18 },
  { name: "Console only", price: -12 },
];

const switchStorage: ProductOption[] = [
  { name: "128GB microSD", price: 0 },
  { name: "256GB microSD", price: 22 },
  { name: "512GB microSD", price: 48 },
];

const nintendoStorage: ProductOption[] = [
  { name: "32GB curated card", price: 0 },
  { name: "64GB curated card", price: 10 },
  { name: "128GB curated card", price: 20 },
];

const commonUpgrades: ProductOption[] = [
  { name: "Fresh high-capacity battery", price: 24 },
  { name: "Glass screen protector", price: 8 },
  { name: "Hard-shell travel case", price: 18 },
];

export const products: Product[] = [
  {
    id: "psp-1000",
    name: "PSP 1000",
    shortName: "PSP 1000",
    family: "PlayStation",
    eyebrow: "The original heavyweight",
    tagline: "A landmark handheld, rebuilt to feel new again.",
    shortDescription:
      "The reassuringly solid original PSP with refreshed controls, modern storage and a shell built to your taste.",
    description: [
      "The PSP 1000 is the machine that made cinematic portable gaming feel possible. Its substantial body, deep hand grips and weightier construction still give it a character that later revisions never quite replicated. Our rebuild keeps that distinctive feel while addressing the age-related issues that usually stand between an original PSP and everyday use.",
      "Each donor console is fully stripped, internally cleaned and inspected before assembly. The analogue mechanism, buttons, speakers, UMD controls and charging system are tested individually. Worn membranes and unreliable components are replaced where required, then the finished system is stress-tested across games, audio, wireless functions and sleep cycles.",
      "Your console arrives configured around the shell, storage and practical upgrades you select. Modern solid-state storage makes carrying a library much easier, while the refreshed exterior turns a familiar piece of hardware into something personal. The result is not a display-only restoration: it is a dependable PSP intended to be played.",
    ],
    basePrice: 119,
    accent: "#ff6b4a",
    accentSecondary: "#ffb36b",
    artwork: "psp",
    badge: "Original icon",
    specifications: [
      { label: "Display", value: "4.3-inch TFT LCD" },
      { label: "Controls", value: "Refreshed OEM-style controls" },
      { label: "Storage", value: "Memory Stick adapter included" },
      { label: "Condition", value: "Professionally refurbished" },
      { label: "In the box", value: "Console, charger and setup card" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
    highlights: ["Deep-grip original chassis", "Fully serviced internals", "Modern solid-state storage"],
    shellOptions: standardShells,
    storageOptions: pspStorage,
    upgradeOptions: commonUpgrades,
    gallery: [
      { label: "Obsidian front", color: "#202126", secondary: "#ff6b4a" },
      { label: "Pearl studio", color: "#e9e5df", secondary: "#b7a79c" },
      { label: "Atomic detail", color: "#4d2b68", secondary: "#a868dd" },
    ],
  },
  {
    id: "psp-2000",
    name: "PSP 2000",
    shortName: "PSP Slim",
    family: "PlayStation",
    eyebrow: "Slimmer, lighter, sharper",
    tagline: "The sweet spot between classic design and daily portability.",
    shortDescription:
      "A lighter PSP with improved responsiveness, video output and a carefully restored premium finish.",
    description: [
      "The PSP 2000 refined Sony’s original formula without losing its identity. It is noticeably slimmer in a bag and more comfortable over long sessions, yet retains the full-size screen and tactile control layout that made the platform memorable. For many players, it remains the best-balanced PSP ever produced.",
      "Our process begins with a complete teardown rather than a surface clean. The board is inspected for corrosion and prior repair work, the controls are cleaned and recalibrated, and the power and charging circuits are tested under load. We pay particular attention to shoulder buttons, analogue drift and inconsistent UMD door switches—small faults that often make an otherwise clean unit frustrating to use.",
      "Once rebuilt, the console is configured with modern storage and your selected shell. Every unit completes an extended play, standby and charging test before packing. It is a thoughtful restoration that retains the original hardware experience while making the system far easier to live with in 2026.",
    ],
    basePrice: 129,
    accent: "#fb5e78",
    accentSecondary: "#ffacbd",
    artwork: "psp",
    badge: "Workshop pick",
    featured: true,
    specifications: [
      { label: "Display", value: "4.3-inch TFT LCD" },
      { label: "Body", value: "Slim 189 g chassis" },
      { label: "Video", value: "Component video output support" },
      { label: "Storage", value: "Memory Stick adapter included" },
      { label: "In the box", value: "Console, charger and setup card" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
    highlights: ["Lightweight slim chassis", "Video output support", "Rebuilt and calibrated controls"],
    shellOptions: standardShells,
    storageOptions: pspStorage,
    upgradeOptions: commonUpgrades,
    gallery: [
      { label: "Smoke clear", color: "#34343c", secondary: "#fb5e78" },
      { label: "Ice blue", color: "#a9d8e9", secondary: "#4d8ea7" },
      { label: "Pearl detail", color: "#e9e4dc", secondary: "#fb5e78" },
    ],
  },
  {
    id: "psp-3000",
    name: "PSP 3000",
    shortName: "PSP 3000",
    family: "PlayStation",
    eyebrow: "The final PSP refinement",
    tagline: "Brighter colour and the most polished classic PSP experience.",
    shortDescription:
      "The brightest classic PSP display paired with a fresh shell, responsive controls and modern storage.",
    description: [
      "The PSP 3000 is the most refined version of the classic PSP silhouette. Its revised display offers richer colour and improved outdoor visibility, while the lighter chassis makes it an easy system to carry. It is the natural choice for anyone who wants the familiar PSP experience in its most developed form.",
      "A good PSP 3000 should feel crisp, not merely look clean. We disassemble every console to service the button contacts, analogue assembly, speakers, ports and drive mechanism. The screen is checked on solid colours for distracting defects, and the system is tested from a cold battery through a complete charge and extended gameplay cycle.",
      "The finished build combines original Sony hardware with a new exterior and sensible quality-of-life improvements. Choose understated black, a clean pearl finish or a translucent shell that reveals the engineering beneath. Whichever specification you select, it arrives ready to use with no setup puzzle waiting in the box.",
    ],
    basePrice: 139,
    accent: "#ff8a3d",
    accentSecondary: "#ffd19a",
    artwork: "psp",
    badge: "Best seller",
    featured: true,
    specifications: [
      { label: "Display", value: "4.3-inch wide-colour LCD" },
      { label: "Body", value: "Slim 189 g chassis" },
      { label: "Audio", value: "Built-in microphone and stereo speakers" },
      { label: "Storage", value: "Memory Stick adapter included" },
      { label: "In the box", value: "Console, charger and setup card" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
    highlights: ["Wide-colour LCD panel", "Built-in microphone", "Complete workshop service"],
    shellOptions: standardShells,
    storageOptions: pspStorage,
    upgradeOptions: commonUpgrades,
    gallery: [
      { label: "Piano black", color: "#16171b", secondary: "#ff8a3d" },
      { label: "Radiant red", color: "#922e37", secondary: "#ff8a3d" },
      { label: "Crystal clear", color: "#c8ced2", secondary: "#68727b" },
    ],
  },
  {
    id: "ps-vita",
    name: "PlayStation Vita",
    shortName: "PS Vita",
    family: "PlayStation",
    eyebrow: "Pocket-sized powerhouse",
    tagline: "Console-scale ideas on one of the finest handheld screens.",
    shortDescription:
      "A meticulously serviced Vita with premium controls, curated storage and its vivid original OLED experience.",
    description: [
      "The first-generation PlayStation Vita remains an extraordinary piece of portable hardware. Its 5-inch OLED display gives games a depth and contrast that still feels premium, and its dual analogue sticks make it uniquely capable across action games, indies and remote play. Pixel Forge builds focus on preserving that signature experience while removing the uncertainty of buying ageing hardware.",
      "Every Vita is opened, cleaned and checked for signs of liquid damage, stressed ports and battery swelling. The sticks are tested for drift across their full range, buttons are checked for consistent actuation, and the touch surfaces, cameras, wireless radios and charging system are verified. We then run screen tests at several brightness levels before an extended gameplay test.",
      "Your selected storage is prepared and validated before dispatch, and optional protection is fitted with the same care as the internal work. The finished console is a clean, cohesive build—not a collection of loosely tested parts—and is supplied with a straightforward setup card so you can start playing immediately.",
    ],
    basePrice: 219,
    accent: "#8b5cf6",
    accentSecondary: "#c4b5fd",
    artwork: "vita",
    badge: "OLED edition",
    featured: true,
    specifications: [
      { label: "Display", value: "5-inch OLED multi-touch display" },
      { label: "Controls", value: "Dual analogue sticks and rear touch" },
      { label: "Connectivity", value: "Wi-Fi and Bluetooth" },
      { label: "Storage", value: "Configured storage adapter" },
      { label: "In the box", value: "Console, USB cable and setup card" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
    highlights: ["Original OLED display", "Dual-stick control", "Storage configured before dispatch"],
    shellOptions: [
      { name: "Obsidian Black", price: 0 },
      { name: "Glacier White", price: 18 },
      { name: "Sapphire Blue", price: 22 },
    ],
    storageOptions: [
      { name: "128GB curated card", price: 0 },
      { name: "256GB curated card", price: 24 },
      { name: "512GB curated card", price: 54 },
    ],
    upgradeOptions: [
      { name: "Fresh high-capacity battery", price: 32 },
      { name: "Glass screen protector", price: 10 },
      { name: "Premium hard-shell case", price: 22 },
    ],
    gallery: [
      { label: "OLED black", color: "#111318", secondary: "#8b5cf6" },
      { label: "Glacier white", color: "#e5e5e7", secondary: "#8b5cf6" },
      { label: "Sapphire blue", color: "#174c83", secondary: "#57a8df" },
    ],
  },
  {
    id: "switch-lite",
    name: "Nintendo Switch Lite",
    shortName: "Switch Lite",
    family: "Nintendo Switch",
    eyebrow: "Purpose-built portable",
    tagline: "Compact, comfortable and customised beyond the factory palette.",
    shortDescription:
      "A compact Switch rebuilt for handheld play with calibrated controls and distinctive shell combinations.",
    description: [
      "Switch Lite is Nintendo’s portable-first Switch: a single, rigid chassis with an excellent D-pad and none of the movement associated with detachable controllers. Its balance and compact dimensions make it especially comfortable for travel, smaller hands and long sessions away from a television.",
      "Our refurbishment addresses the parts that matter most on a used Lite. Both sticks are tested for drift and replaced when they fall outside our tolerance, the cooling path is cleaned, thermal compound is renewed where needed, and the USB-C port is inspected under magnification. Buttons, wireless connectivity, cartridge reading, speakers and charging are all verified before reassembly.",
      "A Pixel Forge shell conversion gives the Lite a more considered finish than a basic reshell. Controls and accents are selected to complement the main colour, and the completed unit is checked for even seams, button travel and shell pressure around the display. It leaves the workshop as a coherent custom build ready for everyday use.",
    ],
    basePrice: 189,
    accent: "#24c8b1",
    accentSecondary: "#8ff0de",
    artwork: "switch",
    badge: "Portable favourite",
    featured: true,
    specifications: [
      { label: "Display", value: "5.5-inch capacitive touch LCD" },
      { label: "Controls", value: "Integrated controls with D-pad" },
      { label: "Play mode", value: "Handheld mode" },
      { label: "Storage", value: "128GB microSD included" },
      { label: "In the box", value: "Console, USB-C charger and setup card" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
    highlights: ["Compact one-piece design", "Sticks calibrated for drift", "Cooling system serviced"],
    shellOptions: [
      { name: "Graphite", price: 0 },
      { name: "Seafoam", price: 12 },
      { name: "Soft Coral", price: 12 },
      { name: "Atomic Purple", price: 18 },
    ],
    storageOptions: switchStorage,
    upgradeOptions: [
      { name: "Hall-effect analogue sticks", price: 36 },
      { name: "Glass screen protector", price: 10 },
      { name: "Premium hard-shell case", price: 22 },
    ],
    gallery: [
      { label: "Seafoam studio", color: "#77d7c5", secondary: "#e9fff9" },
      { label: "Soft coral", color: "#ed796d", secondary: "#ffd4cb" },
      { label: "Atomic purple", color: "#5f3b82", secondary: "#b98fe3" },
    ],
  },
  {
    id: "switch-v1",
    name: "Nintendo Switch V1",
    shortName: "Switch V1",
    family: "Nintendo Switch",
    eyebrow: "The versatile original",
    tagline: "The complete hybrid console, rebuilt and ready for its next era.",
    shortDescription:
      "The original hybrid Switch, professionally serviced with custom Joy-Con colours and practical storage.",
    description: [
      "The original Switch established a format that changed how console games could fit into daily life. It moves from docked play to handheld use in seconds and has the broadest accessory compatibility in the family. A carefully restored V1 remains a flexible, capable system for a living room, commute or shared household.",
      "We inspect the tablet, rails and both Joy-Con as one system. Cooling vents and the fan are cleaned, the USB-C port and game-card reader are tested, and battery behaviour is observed through charge and discharge cycles. Joy-Con rails, wireless pairing and analogue calibration receive particular attention because reliability depends on all three pieces working together.",
      "Customisation extends across the tablet rear shell and controller pair for a deliberate, matched appearance. Storage is tested at full capacity and optional Hall-effect controls offer a durable upgrade for heavy use. The result is a complete Switch setup with the feel of a considered custom product rather than an anonymous used console.",
    ],
    basePrice: 229,
    accent: "#2f80ed",
    accentSecondary: "#ef4a65",
    artwork: "switch",
    badge: "Hybrid classic",
    specifications: [
      { label: "Display", value: "6.2-inch capacitive touch LCD" },
      { label: "Play modes", value: "TV, tabletop and handheld" },
      { label: "Controls", value: "Matched detachable Joy-Con pair" },
      { label: "Storage", value: "128GB microSD included" },
      { label: "In the box", value: "Console, Joy-Con and USB-C charger" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
    highlights: ["Three flexible play modes", "Joy-Con fully serviced", "Matched custom shell set"],
    shellOptions: [
      { name: "Stealth Black", price: 0 },
      { name: "Neon Split", price: 12 },
      { name: "Smoke Clear", price: 18 },
      { name: "SNES Grey", price: 20 },
    ],
    storageOptions: switchStorage,
    upgradeOptions: [
      { name: "Hall-effect Joy-Con sticks", price: 42 },
      { name: "Fresh tablet battery", price: 38 },
      { name: "Tempered glass and travel case", price: 26 },
    ],
    gallery: [
      { label: "Neon split", color: "#267ad8", secondary: "#ef4661" },
      { label: "Stealth black", color: "#20242a", secondary: "#575e68" },
      { label: "Retro grey", color: "#a7a3a1", secondary: "#7453a6" },
    ],
  },
  {
    id: "switch-v2",
    name: "Nintendo Switch V2",
    shortName: "Switch V2",
    family: "Nintendo Switch",
    eyebrow: "Endurance edition",
    tagline: "The familiar Switch experience with meaningfully longer battery life.",
    shortDescription:
      "The battery-improved Switch in a cohesive custom finish, fully serviced from Joy-Con to charging port.",
    description: [
      "Switch V2 keeps the original hybrid design and pairs it with a more efficient processor for substantially improved battery life. That simple change makes it one of the most practical Switch models: familiar in the dock, noticeably better on the road, and compatible with the full ecosystem of original accessories.",
      "Our workshop process covers the complete system. The tablet is cleaned internally, its cooling performance and charging behaviour are tested, and the screen, speakers, cartridge slot and wireless radios are checked. Both Joy-Con are disassembled for rail inspection, contact cleaning and precise stick calibration before the system completes a multi-mode play test.",
      "The custom exterior is assembled to consistent panel gaps with coordinated controls and rear shell details. Choose additional Hall-effect sticks for heavy play or a fresh battery for the strongest possible runtime. Every configuration is built to order and checked as a complete package before dispatch.",
    ],
    basePrice: 259,
    accent: "#e54864",
    accentSecondary: "#5cc8ff",
    artwork: "switch",
    badge: "Long-life model",
    specifications: [
      { label: "Display", value: "6.2-inch capacitive touch LCD" },
      { label: "Battery", value: "Improved 4.5–9 hour design range" },
      { label: "Play modes", value: "TV, tabletop and handheld" },
      { label: "Storage", value: "128GB microSD included" },
      { label: "In the box", value: "Console, Joy-Con and USB-C charger" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
    highlights: ["Improved battery efficiency", "Complete Joy-Con service", "Three flexible play modes"],
    shellOptions: [
      { name: "Stealth Black", price: 0 },
      { name: "Neon Split", price: 12 },
      { name: "Smoke Clear", price: 18 },
      { name: "Cream & Orange", price: 20 },
    ],
    storageOptions: switchStorage,
    upgradeOptions: [
      { name: "Hall-effect Joy-Con sticks", price: 42 },
      { name: "Fresh tablet battery", price: 38 },
      { name: "Tempered glass and travel case", price: 26 },
    ],
    gallery: [
      { label: "Cream edition", color: "#dfd7c7", secondary: "#e4663c" },
      { label: "Neon split", color: "#2d8be8", secondary: "#ec4965" },
      { label: "Smoke clear", color: "#3d4149", secondary: "#9aa3b0" },
    ],
  },
  {
    id: "ds-lite",
    name: "Nintendo DS Lite",
    shortName: "DS Lite",
    family: "Nintendo",
    eyebrow: "Dual-screen design icon",
    tagline: "A pocket classic restored with the precision its hinge deserves.",
    shortDescription:
      "A crisp dual-screen classic with restored controls, tested hinge and carefully matched custom shell.",
    description: [
      "The DS Lite distilled Nintendo’s dual-screen idea into a slim, bright and remarkably elegant handheld. Its library spans touch-driven experiments, deep role-playing games and an enormous catalogue of Game Boy Advance titles, making it one of the most versatile retro systems to keep in a collection.",
      "Hinge condition is central to every DS Lite build. We inspect the internal barrel and shell mounts, verify ribbon-cable routing and test the lid at every position. Both screens are checked for distracting defects, touch accuracy is calibrated, and the cartridge slots, wireless functions, speakers, microphone and charging circuit are all tested.",
      "A shell swap on a DS Lite requires patience; poor assembly quickly causes uneven seams or damaged display cables. Our consoles are rebuilt slowly, with matched buttons and a clean screen surround. The finished unit opens with the correct resistance, closes squarely and feels ready for another generation of play.",
    ],
    basePrice: 109,
    accent: "#7c69e8",
    accentSecondary: "#d0c7ff",
    artwork: "ds",
    badge: "Dual-screen icon",
    specifications: [
      { label: "Displays", value: "Dual 3.12-inch backlit LCDs" },
      { label: "Input", value: "Resistive touch screen and stylus" },
      { label: "Compatibility", value: "Nintendo DS and GBA cartridges" },
      { label: "Storage", value: "32GB curated card included" },
      { label: "In the box", value: "Console, stylus, charger and setup card" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
    highlights: ["DS and GBA compatibility", "Hinge professionally inspected", "Touch screen calibrated"],
    shellOptions: [
      { name: "Onyx Black", price: 0 },
      { name: "Polar White", price: 8 },
      { name: "Ice Blue", price: 12 },
      { name: "Atomic Purple", price: 16 },
    ],
    storageOptions: nintendoStorage,
    upgradeOptions: [
      { name: "Fresh high-capacity battery", price: 22 },
      { name: "Replacement stylus pair", price: 6 },
      { name: "Protective carry case", price: 16 },
    ],
    gallery: [
      { label: "Polar white", color: "#ece9e3", secondary: "#bbb8b2" },
      { label: "Ice blue", color: "#9dd4e3", secondary: "#4b91a7" },
      { label: "Atomic purple", color: "#65448c", secondary: "#bda1df" },
    ],
  },
  {
    id: "dsi",
    name: "Nintendo DSi",
    shortName: "DSi",
    family: "Nintendo",
    eyebrow: "The refined dual-screen",
    tagline: "Larger screens, cleaner lines and a modernised DS experience.",
    shortDescription:
      "Nintendo’s refined dual-screen handheld, rebuilt with calibrated touch input and contemporary storage.",
    description: [
      "The DSi evolved the DS into a cleaner, more connected handheld with larger screens, improved speakers, cameras and an SD card slot. Its matte body is comfortable in the hand and less fingerprint-prone than the DS Lite, while the enormous DS software library ensures it remains far more than a curiosity.",
      "We fully test the cameras, shoulder buttons, SD and cartridge slots, wireless connection, microphone and both displays. The touch panel is calibrated across its surface and the hinge is assessed for stable movement. Internally, the system is cleaned and checked for battery leakage, damaged connectors and evidence of poor previous repairs.",
      "Each custom shell is assembled with careful attention to the display ribbons and internal cable routing. We then validate storage and complete repeated sleep, wake, charging and gameplay cycles. The finished DSi has the understated feel of the original design with a specification chosen for reliable everyday use.",
    ],
    basePrice: 119,
    accent: "#49a6a0",
    accentSecondary: "#9ce0db",
    artwork: "ds",
    specifications: [
      { label: "Displays", value: "Dual 3.25-inch backlit LCDs" },
      { label: "Features", value: "Dual cameras and SD card slot" },
      { label: "Compatibility", value: "Nintendo DS cartridges" },
      { label: "Storage", value: "32GB curated card included" },
      { label: "In the box", value: "Console, stylus, charger and setup card" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
    highlights: ["Larger dual displays", "Cameras and SD support", "Calibrated touch input"],
    shellOptions: [
      { name: "Matte Black", price: 0 },
      { name: "Soft White", price: 8 },
      { name: "Mint", price: 12 },
      { name: "Crimson", price: 12 },
    ],
    storageOptions: nintendoStorage,
    upgradeOptions: [
      { name: "Fresh high-capacity battery", price: 22 },
      { name: "Replacement stylus pair", price: 6 },
      { name: "Protective carry case", price: 16 },
    ],
    gallery: [
      { label: "Matte black", color: "#25272b", secondary: "#49a6a0" },
      { label: "Soft white", color: "#e6e6e3", secondary: "#49a6a0" },
      { label: "Crimson", color: "#9f3040", secondary: "#e78b96" },
    ],
  },
  {
    id: "gba",
    name: "Game Boy Advance",
    shortName: "GBA",
    family: "Nintendo",
    eyebrow: "16-bit, reimagined",
    tagline: "The retro library you remember, transformed by a modern display.",
    shortDescription:
      "The original wide-format GBA rebuilt around a bright laminated IPS display and tactile new controls.",
    description: [
      "The original Game Boy Advance has one of Nintendo’s most comfortable handheld shapes and one of its richest game libraries. Its only serious compromise was the unlit display. Our IPS build changes that completely, preserving the wide, easy grip while adding a bright, colour-rich screen suitable for any room or journey.",
      "Every build starts with a verified motherboard that is cleaned and inspected around the battery terminals, power switch and cartridge connector. The controls receive new membranes where needed, the speaker output is tested for noise, and the IPS installation is aligned carefully within the lens. Brightness controls are fitted and checked before final assembly.",
      "The shell, buttons and lens are selected as one visual system, from subtle period-inspired grey to clear colours that reveal the hardware underneath. With modern display clarity and the simplicity of original cartridges, the completed GBA feels less like a restoration and more like the handheld the design always deserved to be.",
    ],
    basePrice: 169,
    accent: "#f0b429",
    accentSecondary: "#ffe09a",
    artwork: "gba",
    badge: "IPS display",
    featured: true,
    specifications: [
      { label: "Display", value: "3-inch laminated IPS display" },
      { label: "Brightness", value: "Multiple adjustable levels" },
      { label: "Compatibility", value: "GB, GBC and GBA cartridges" },
      { label: "Power", value: "AA battery or optional USB-C pack" },
      { label: "In the box", value: "Console and workshop test card" },
      { label: "Warranty", value: "90-day workshop warranty" },
    ],
    highlights: ["Laminated IPS display", "Three generations of cartridges", "New shell and controls"],
    shellOptions: [
      { name: "Retro Grey", price: 0 },
      { name: "Clear Glacier", price: 12 },
      { name: "Atomic Purple", price: 14 },
      { name: "Sunset Orange", price: 14 },
    ],
    storageOptions: [
      { name: "Original cartridge setup", price: 0 },
      { name: "32GB flash-cart bundle", price: 54 },
      { name: "64GB flash-cart bundle", price: 64 },
    ],
    upgradeOptions: [
      { name: "USB-C rechargeable battery", price: 38 },
      { name: "Premium glass lens", price: 10 },
      { name: "Protective carry case", price: 16 },
    ],
    gallery: [
      { label: "Retro grey", color: "#aaa6a0", secondary: "#6c54a2" },
      { label: "Clear glacier", color: "#c7e2e6", secondary: "#5c9ba6" },
      { label: "Sunset orange", color: "#e77737", secondary: "#ffd187" },
    ],
  },
];

export const productFamilies: ProductFamily[] = [
  "PlayStation",
  "Nintendo Switch",
  "Nintendo",
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}
