import Stripe from "stripe";
import { NextResponse } from "next/server";
import {
  validateCheckoutDetails,
  validateOrderItems,
  type CheckoutDetails,
  type OrderInputItem,
} from "@/lib/order";

export async function POST(request: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Card checkout is not configured yet. Add STRIPE_SECRET_KEY in Vercel." },
        { status: 503 },
      );
    }

    const { items, customer: customerInput } = (await request.json()) as {
      items?: OrderInputItem[];
      customer?: CheckoutDetails;
    };
    const order = validateOrderItems(items || []);
    const customerDetails = validateCheckoutDetails(customerInput);

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
    const customer = await stripe.customers.create({
      name: `${customerDetails.firstName} ${customerDetails.lastName}`,
      email: customerDetails.email,
      phone: customerDetails.phone || undefined,
      shipping: {
        name: `${customerDetails.firstName} ${customerDetails.lastName}`,
        phone: customerDetails.phone || undefined,
        address: {
          line1: customerDetails.address1,
          line2: customerDetails.address2 || undefined,
          city: customerDetails.city,
          state: customerDetails.county || undefined,
          postal_code: customerDetails.postcode,
          country: "GB",
        },
      },
    });
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      customer: customer.id,
      customer_update: { shipping: "auto" },
      success_url: `${origin}/?checkout=success&provider=stripe`,
      cancel_url: `${origin}/checkout`,
      shipping_address_collection: { allowed_countries: ["GB"] },
      phone_number_collection: { enabled: true },
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
