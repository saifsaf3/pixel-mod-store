import Stripe from "stripe";
import { NextResponse } from "next/server";
import { validateOrderItems, type OrderInputItem } from "@/lib/order";

export async function POST(request: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Card checkout is not configured yet. Add STRIPE_SECRET_KEY in Vercel." },
        { status: 503 },
      );
    }

    const { items } = (await request.json()) as { items?: OrderInputItem[] };
    const order = validateOrderItems(items || []);

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = order.items.map(
      (item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "gbp",
          unit_amount: Math.round(item.unitPrice * 100),
          product_data: {
            name: `Pixel Forge ${item.name}`,
            description: item.description.slice(0, 500),
          },
        },
      }),
    );

    lineItems.push({
      quantity: 1,
      price_data: {
        currency: "gbp",
        unit_amount: Math.round(order.shipping * 100),
        product_data: { name: "UK tracked shipping" },
      },
    });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const origin = process.env.NEXT_PUBLIC_URL || new URL(request.url).origin;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/?checkout=success&provider=stripe`,
      cancel_url: `${origin}/cart`,
      shipping_address_collection: { allowed_countries: ["GB"] },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create card checkout." },
      { status: 500 },
    );
  }
}
