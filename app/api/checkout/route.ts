import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";

type CheckoutItem = {
  productId?: string;
  name?: string;
  shell?: string;
  storage?: string;
  upgrades?: string[];
  unitPrice?: number;
  quantity?: number;
};

export async function POST(request: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Online checkout is not configured yet. Add STRIPE_SECRET_KEY to .env.local." },
        { status: 503 },
      );
    }

    const { items } = (await request.json()) as { items?: CheckoutItem[] };
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Your basket is empty." }, { status: 400 });
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item) => {
      const product = item.productId ? getProduct(item.productId) : undefined;
      if (!product || !item.unitPrice || item.unitPrice < product.basePrice - 12) {
        throw new Error("One or more basket items are invalid.");
      }

      const quantity = Math.min(Math.max(Math.floor(item.quantity || 1), 1), 5);
      const configuration = [item.shell, item.storage, ...(item.upgrades || [])]
        .filter(Boolean)
        .join(" · ");

      return {
        quantity,
        price_data: {
          currency: "gbp",
          unit_amount: Math.round(item.unitPrice * 100),
          product_data: {
            name: `Pixel Forge ${product.name}`,
            description: configuration.slice(0, 500),
          },
        },
      };
    });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const origin = process.env.NEXT_PUBLIC_URL || new URL(request.url).origin;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/cart`,
      shipping_address_collection: { allowed_countries: ["GB"] },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create checkout." },
      { status: 500 },
    );
  }
}
