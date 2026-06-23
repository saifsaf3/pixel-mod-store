import { siteConfig } from "./site-data";

export type LeadPayload = {
  type: "quote" | "newsletter" | "support";
  data: Record<string, FormDataEntryValue | string>;
};

export async function submitLead(payload: LeadPayload) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(data?.error || "Submission could not be saved.");
  }

  return response.json() as Promise<{ ok: true; forwardingConfigured: boolean }>;
}

export const leadSetupCopy = `Set ${siteConfig.leadRecipientEnv}=anasur793@gmail.com and ${siteConfig.leadForwardingWebhookEnv} to your email service webhook when ready.`;
