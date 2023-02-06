import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";
import "../scss/payment form.scss";
const PaymentForm = ({ amount }) => {
  const { currentUser } = useSelector((store) => store.user);
  if (currentUser) {
    var { displayName } = currentUser;
  }
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });
    
    const {
      paymentIntent: { client_secret },
    } = response;

    // console.log(client_secret);
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: displayName,
        },
      },
    });

    paymentResult.error
      ? console.error(paymentResult.error)
      : alert("payment succeeded");
  };
  return (
    <div>
      <div className="cc-types container text-center">
        <img className="cc-types__img cc-types__img--amex" />
        <img className="cc-types__img cc-types__img--visa" />
        <img className="cc-types__img cc-types__img--mastercard" />
        <img className="cc-types__img cc-types__img--disc" />
        <img className="cc-types__img cc-types__img--genric" />
      </div>
      <form onSubmit={paymentHandler}>
        <div className="container card-container py-3 px-4 rounded my-4">
          <CardElement />
        </div>
        <button type="submit" className="btn btn-secondary mb-2">
          Pay now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
