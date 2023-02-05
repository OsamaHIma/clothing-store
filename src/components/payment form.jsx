import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../scss/payment form.scss";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
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
