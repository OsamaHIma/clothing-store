import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { addItemToOrders } from "../ordersSlice";

import Alert from "./alert";
import axios from "axios";
import "../scss/payment form.scss";
import { useState } from "react";
import { clearCartItems } from "../store/features/cartSlice";

const PaymentForm = ({ amount }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store) => store.user);
  const clearCart = () => dispatch(clearCartItems());
  if (currentUser) var { displayName } = currentUser;

  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    setIsLoading(true);
    const response = await axios
      .post(
        "/.netlify/functions/create-payment-intent",
        { amount: amount * 100 },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        return res.data;
      });

    const clientSecret = response.paymentIntent.client_secret;

    // console.log(clientSecret);
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: displayName,
        },
      },
    });
    setIsLoading(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setPayment(true);
        clearCart()
      }
    }
  };

  return (
    <div>
      {paymentSuccess ? (
        <Alert
          boldText={"Payment successful!"}
          mainText={`,for more information please check your bank account`}
          type={"success"}
        />
      ) : null}
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
          {isLoading ? (
            <div className="spinner-border text-success mx-2" role="status"></div>
          ) : (
            "Pay now!"
          )}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
