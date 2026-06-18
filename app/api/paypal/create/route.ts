import { NextResponse } from "next/server";
import {
  validateCheckoutDetails,
  validateOrderItems,
  type CheckoutDetails,
  type OrderInputItem,
} from "@/lib/order";
import { getPayPalAccessToken, getPayPalBaseUrl } from "@/lib/paypal";

export async function POST(request: Request) {
  try {
    const { items, customer: customerInput } = (await request.json()) as {
      items?: OrderInputItem[];
      customer?: CheckoutDetails;
    };
    const order = validateOrderItems(items || []);
    const customer = validateCheckoutDetails(customerInput);
    const accessToken = await getPayPalAccessToken();
    const origin = process.env.NEXT_PUBLIC_URL || new URL(request.url).origin;

    const response = await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "PayPal-Request-Id": crypto.randomUUID(),
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            description: `${order.consoleCount} Pixel Forge console${order.consoleCount === 1 ? "" : "s"}`,
            amount: {
              currency_code: "GBP",
              value: order.total.toFixed(2),
              breakdown: {
                item_total: { currency_code: "GBP", value: order.subtotal.toFixed(2) },
                shipping: { currency_code: "GBP", value: order.shipping.toFixed(2) },
              },
            },
            items: order.items.map((item) => ({
              name: item.name.slice(0, 127),
              description: item.description.slice(0, 127),
              quantity: String(item.quantity),
              unit_amount: { currency_code: "GBP", value: item.unitPrice.toFixed(2) },
            })),
            shipping: {
              name: {
                full_name: `${customer.firstName} ${customer.lastName}`,
              },
              address: {
                address_line_1: customer.address1,
                address_line_2: customer.address2 || undefined,
                admin_area_2: customer.city,
                admin_area_1: customer.county || undefined,
                postal_code: customer.postcode,
                country_code: "GB",
              },
            },
          },
        ],
        payment_source: {
          paypal: {
            experience_context: {
              brand_name: "Pixel Forge",
              shipping_preference: "SET_PROVIDED_ADDRESS",
              user_action: "PAY_NOW",
              return_url: `${origin}/api/paypal/capture`,
              cancel_url: `${origin}/checkout`,
            },
          },
        },
      }),
      cache: "no-store",
    });

    const data = (await response.json()) as {
      id?: string;
      message?: string;
      links?: { rel: string; href: string }[];
    };
    const approvalUrl = data.links?.find((link) => link.rel === "payer-action")?.href;
    if (!response.ok || !approvalUrl) {
      throw new Error(data.message || "Unable to start PayPal checkout.");
    }

    return NextResponse.json({ id: data.id, url: approvalUrl });
  } catch (error) {
    console.error("PayPal order error:", error);
    const message =
      error instanceof Error ? error.message : "Unable to start PayPal checkout.";
    return NextResponse.json(
      { error: message },
      { status: message.includes("not configured") ? 503 : 500 },
    );
  }
}
