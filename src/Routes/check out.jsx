import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import CheckOutItem from "../components/check-out-item";
import "../scss/check-out-item.scss";
const CheckOut = () => {
  const { cartItems , cartTotal} = useContext(CartContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">Product</div>
        <div className="col-md-2">Description</div>
        <div className="col-md-2">Quantity</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Remove</div>
      </div>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}
      <h4 className="mt-5">Total: ${cartTotal}</h4>
    </div>
  );
};
export default CheckOut;
