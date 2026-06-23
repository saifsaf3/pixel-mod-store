import { NextResponse } from "next/server";
import { getPayPalEnvStatus } from "@/lib/paypal";

export async function GET() {
  const status = getPayPalEnvStatus();
  console.log("PayPal env status", {
    PAYPAL_CLIENT_ID: status.PAYPAL_CLIENT_ID ? "present" : "missing",
    PAYPAL_CLIENT_SECRET: status.PAYPAL_CLIENT_SECRET ? "present" : "missing",
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: status.NEXT_PUBLIC_PAYPAL_CLIENT_ID ? "present" : "missing",
    PAYPAL_ENV: status.PAYPAL_ENV,
  });

  return NextResponse.json({
    PAYPAL_CLIENT_ID: status.PAYPAL_CLIENT_ID ? "present" : "missing",
    PAYPAL_CLIENT_SECRET: status.PAYPAL_CLIENT_SECRET ? "present" : "missing",
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: status.NEXT_PUBLIC_PAYPAL_CLIENT_ID ? "present" : "missing",
    PAYPAL_ENV: status.PAYPAL_ENV,
  });
}
