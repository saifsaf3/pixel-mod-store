"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

const products: any = {
  "psp-1000": { name: "PSP 1000", price: 80, type: "old" },
  "psp-2000": { name: "PSP 2000", price: 85, type: "old" },
  "psp-3000": { name: "PSP 3000", price: 90, type: "old" },
  "ps-vita": { name: "PS Vita", price: 150, type: "old" },
  "switch-lite": { name: "Switch Lite", price: 180, type: "switch" },
  "switch-v1": { name: "Switch V1", price: 200, type: "switch" },
  "switch-v2": { name: "Switch V2", price: 220, type: "switch" },
  "ds-lite": { name: "DS Lite", price: 70, type: "old" },
  "dsi": { name: "DSi", price: 80, type: "old" },
  "gba": { name: "Game Boy Advance", price: 60, type: "old" },
};

const shells = [
  "Black",
  "White",
  "Blue",
  "Red",
  "Green",
  "Translucent",
  "Trans Black",
  "Trans Red",
  "Trans Green",
  "Trans Purple",
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products[id as string];

  const [shell, setShell] = useState("Black");
  const [memory, setMemory] = useState("64GB");
  const [modchip, setModchip] = useState(false);
  const [battery, setBattery] = useState(false);

  if (!product) return <div className="p-10">Product not found</div>;

  const memoryPrice =
    memory === "64GB" ? 0 : memory === "128GB" ? 15 : 0;

  const modchipPrice =
    product.type === "switch" && modchip ? 40 : 0;

  const batteryPrice = battery ? 20 : 0;

  const total =
    product.price +
    memoryPrice +
    modchipPrice +
    batteryPrice;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      {/* IMAGE */}
      <div className="h-64 border border-gray-700 mt-4 flex items-center justify-center text-gray-500">
        Product Image
      </div>

      {/* SHELL */}
      <div className="mt-6">
        <p>Shell Colour</p>
        <select
          className="text-black p-2 mt-1"
          onChange={(e) => setShell(e.target.value)}
        >
          {shells.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* MEMORY */}
      <div className="mt-4">
        <p>Memory</p>
        <select
          className="text-black p-2 mt-1"
          onChange={(e) => setMemory(e.target.value)}
        >
          <option>64GB</option>
          <option>128GB</option>
        </select>
      </div>

      {/* SWITCH MODCHIP */}
      {product.type === "switch" && (
        <div className="mt-4 flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(e) => setModchip(e.target.checked)}
          />
          <span>Modchip (+£40)</span>
        </div>
      )}

      {/* BATTERY */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          onChange={(e) => setBattery(e.target.checked)}
        />
        <span>Upgraded Battery (+£20)</span>
      </div>

      {/* SUMMARY */}
      <div className="mt-6 border border-gray-700 p-4">
        <p>Shell: {shell}</p>
        <p>Memory: {memory}</p>
        <p>Modchip: {modchip ? "Yes" : "No"}</p>
        <p>Battery: {battery ? "Yes" : "No"}</p>

        <hr className="my-3 border-gray-700" />

        <p className="text-xl font-bold">£{total}</p>

        <p className="text-xs text-gray-500 mt-1">
          Includes charger
        </p>

        <button className="mt-4 w-full bg-white text-black p-2">
          Add to Cart (next step)
        </button>
      </div>
    </main>
  );
}