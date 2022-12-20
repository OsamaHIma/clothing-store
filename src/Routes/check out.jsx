import CheckOutItem from "../components/check-out-item";
import { useSelector } from "react-redux";
import "../scss/check-out-item.scss";
const CheckOut = () => {
  const { cartItems, cartTotal } = useSelector((store) => store.cart);
  return (
    <section className="container" aria-label="checkout section">
      <article className="row">
        <p className="col-md-4">Product</p>
        <p className="col-md-2">Description</p>
        <p className="col-md-2">Quantity</p>
        <p className="col-md-2">Price</p>
        <p className="col-md-2">Remove</p>
      </article>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}
      <h4 className="mt-5">Total: ${cartTotal}</h4>
    </section>
  );
};
export default CheckOut;
