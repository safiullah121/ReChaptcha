const stripe = require("stripe")(
  "sk_test_51NxrYAAXhB9B84pkTkyQT1gN94ayufiLEy9G1QB5jraTSR7PfZ8Szrj49wz21Fd5xJolZt2lGH2DCIhE1eSGCKf80087VfQqRg"
);

export const POST = async (req) => {
  const body = await req.json();
  const { amount, currency } = body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: { enabled: true },
  });
  return Response.json({
    clientSecret: paymentIntent.client_secret,
  });
};
