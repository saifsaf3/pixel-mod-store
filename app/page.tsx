"use client";

import Link from "next/link";

const products = [
  { id: "psp-1000", name: "PSP 1000", price: 80, desc: "Classic PSP build" },
  { id: "psp-2000", name: "PSP 2000", price: 85, desc: "Slim upgraded model" },
  { id: "psp-3000", name: "PSP 3000", price: 90, desc: "Best screen PSP" },
  { id: "ps-vita", name: "PS Vita", price: 150, desc: "OLED handheld" },
  { id: "switch-lite", name: "Switch Lite", price: 180, desc: "Portable Switch" },
  { id: "switch-v1", name: "Switch V1", price: 200, desc: "Moddable model" },
  { id: "switch-v2", name: "Switch V2", price: 220, desc: "Battery improved" },
  { id: "ds-lite", name: "DS Lite", price: 70, desc: "Dual screen classic" },
  { id: "dsi", name: "DSi", price: 80, desc: "Camera features" },
  { id: "gba", name: "Game Boy Advance", price: 60, desc: "Retro legend" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      {/* HEADER */}
      <h1 className="text-4xl font-bold tracking-wide">
        PIXEL MOD STORE
      </h1>
      <p className="text-gray-500 text-sm mt-1">
        Modded retro & handheld consoles
      </p>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {products.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            className="border border-gray-700 rounded-xl p-4 hover:scale-[1.03] transition block"
          >

            {/* IMAGE BOX */}
            <div className="h-40 border border-gray-600 rounded-lg mb-3 flex items-center justify-center text-gray-600 text-sm">
              Image Placeholder
            </div>

            {/* TITLE */}
            <h2 className="font-bold text-lg">{p.name}</h2>

            {/* DESC */}
            <p className="text-gray-500 text-xs">{p.desc}</p>

            {/* PRICE */}
            <p className="mt-2 font-semibold">£{p.price}</p>

            <p className="text-xs text-gray-600 mt-2">
              Click to customize
            </p>

          </Link>
        ))}

      </div>
    </main>
  );
}