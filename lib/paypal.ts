const PAYPAL_SANDBOX = "https://api-m.sandbox.paypal.com";
const PAYPAL_LIVE = "https://api-m.paypal.com";

export class PayPalConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PayPalConfigurationError";
  }
}

export function getPayPalBaseUrl() {
  return process.env.PAYPAL_ENV === "live" ? PAYPAL_LIVE : PAYPAL_SANDBOX;
}

export function getPayPalEnvStatus() {
  return {
    PAYPAL_CLIENT_ID: Boolean(process.env.PAYPAL_CLIENT_ID),
    PAYPAL_CLIENT_SECRET: Boolean(process.env.PAYPAL_CLIENT_SECRET),
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: Boolean(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID),
    PAYPAL_ENV: process.env.PAYPAL_ENV === "live" ? "live" : "sandbox",
  };
}

export function assertPayPalServerConfig() {
  const status = getPayPalEnvStatus();
  if (!status.PAYPAL_CLIENT_ID && !status.PAYPAL_CLIENT_SECRET) {
    throw new PayPalConfigurationError(
      "PayPal server checkout is missing PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in Vercel.",
    );
  }
  if (!status.PAYPAL_CLIENT_ID) {
    throw new PayPalConfigurationError(
      "PayPal server checkout is missing PAYPAL_CLIENT_ID in Vercel. Add the same Client ID used for NEXT_PUBLIC_PAYPAL_CLIENT_ID.",
    );
  }
  if (!status.PAYPAL_CLIENT_SECRET) {
    throw new PayPalConfigurationError(
      "PayPal server checkout is missing PAYPAL_CLIENT_SECRET in Vercel. Add the REST app secret as a server-only variable.",
    );
  }
}

export async function getPayPalAccessToken() {
  assertPayPalServerConfig();
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;

  const response = await fetch(`${getPayPalBaseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  const data = (await response.json()) as { access_token?: string; error_description?: string };
  if (!response.ok || !data.access_token) {
    throw new Error(data.error_description || "PayPal authentication failed.");
  }

  return data.access_token;
}
