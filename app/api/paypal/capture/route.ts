import { NextResponse } from "next/server";
import { getPayPalAccessToken, getPayPalBaseUrl } from "@/lib/paypal";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const origin = process.env.NEXT_PUBLIC_URL || url.origin;
  if (!token) return NextResponse.redirect(`${origin}/cart?payment=missing`);

  try {
    const accessToken = await getPayPalAccessToken();
    const response = await fetch(
      `${getPayPalBaseUrl()}/v2/checkout/orders/${encodeURIComponent(token)}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );
    const data = (await response.json()) as { status?: string; message?: string };
    if (!response.ok || data.status !== "COMPLETED") {
      throw new Error(data.message || "PayPal payment was not completed.");
    }
    return NextResponse.redirect(`${origin}/?checkout=success&provider=paypal`);
  } catch (error) {
    console.error("PayPal capture error:", error);
    return NextResponse.redirect(`${origin}/cart?payment=failed`);
  }
}
