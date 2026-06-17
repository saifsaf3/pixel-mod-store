import Stripe from "stripe";

export async function POST(req) {
  try {
    const body = await req.json();

    // safety check (THIS prevents your 500 errors)
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Missing STRIPE_SECRET_KEY in .env.local");
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: `Pixel Mod - ${body.consoleType}`,
            },
            unit_amount: Math.round(Number(body.price || 0) * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
    });

    return Response.json({ url: session.url });

  } catch (err) {
    console.log("CHECKOUT ERROR:", err.message);

    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}