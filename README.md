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

Never commit real payment credentials. Stripe Checkout and PayPal Orders v2 both
recalculate prices and shipping on the server.

## Shipping

UK tracked shipping is £7.99 for up to three consoles. Each console above three
adds £5.
