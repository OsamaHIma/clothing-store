require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (eve) => {
  try {
    const { amount } = JSON.parse(eve.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_type: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (err) {
    console.error({ err });
    return {
      statusCode: 400,
      body: JSON.stringify({ err }),
    };
  }
};