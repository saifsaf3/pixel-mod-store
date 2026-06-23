# Pixel Forge

Premium custom handheld-console storefront built with Next.js.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Product images

See [`public/products/README.md`](public/products/README.md). Product cards and
galleries use their illustrated fallback until a local image path is added.

## Payments

Copy `.env.example` to `.env.local` for development. In Vercel, add these under
Project Settings → Environment Variables:

- `NEXT_PUBLIC_URL` — the production URL
- `STRIPE_SECRET_KEY` — Stripe secret API key
- `PAYPAL_CLIENT_ID` — PayPal REST app client ID
- `PAYPAL_CLIENT_SECRET` — PayPal REST app secret
- `PAYPAL_ENV` — `sandbox` while testing, then `live`
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID` — the same PayPal client ID, only needed by client-side PayPal SDK UI

Never commit real payment credentials. Stripe Checkout and PayPal Orders v2 both
recalculate prices and shipping on the server.

### PayPal Vercel setup

Add these variables in Vercel for both Production and Preview, then redeploy:

- `NEXT_PUBLIC_PAYPAL_CLIENT_ID` = PayPal Client ID
- `PAYPAL_CLIENT_ID` = same PayPal Client ID
- `PAYPAL_CLIENT_SECRET` = PayPal Secret
- `PAYPAL_ENV` = `sandbox` or `live`

The current checkout uses a server-created PayPal order and redirects to PayPal,
so the server route requires `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`.
`NEXT_PUBLIC_PAYPAL_CLIENT_ID` is safe to expose and is reserved for any
client-side PayPal SDK UI.

After redeploying, confirm Vercel sees the variables without exposing values:

```bash
curl https://your-domain.example/api/paypal/env-check
```

Expected response:

```json
{
  "PAYPAL_CLIENT_ID": "present",
  "PAYPAL_CLIENT_SECRET": "present",
  "NEXT_PUBLIC_PAYPAL_CLIENT_ID": "present",
  "PAYPAL_ENV": "sandbox"
}
```

If a value still reports `missing`, check that it was added to the same Vercel
project and environment as the latest deployment, then redeploy.

## Shipping

UK tracked shipping is £7.99 for up to three consoles. Each console above three
adds £5.
