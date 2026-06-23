import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-data";

type LeadRequest = {
  type?: string;
  data?: Record<string, string>;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadRequest | null;
  if (!body?.type || !body.data) {
    return NextResponse.json({ error: "Missing lead details." }, { status: 400 });
  }

  const to = process.env[siteConfig.leadRecipientEnv] || siteConfig.leadRecipientEmail;
  const webhook = process.env[siteConfig.leadForwardingWebhookEnv];
  const payload = {
    to,
    subject: `Pixel Forge ${body.type} enquiry`,
    type: body.type,
    data: body.data,
    receivedAt: new Date().toISOString(),
  };

  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } else {
    console.log("Pixel Forge lead captured", payload);
  }

  return NextResponse.json({ ok: true, forwardingConfigured: Boolean(webhook) });
}
