import CartItem from "../components/cart-item";
import { toggleClass } from "./navigation";

import { useNavigate } from "react-router-dom";

import "../scss/cart.scss";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const checkOut = () => {
    if (cartItems.length) {
      navigate("/check-out");
    } else {
      alert("Please add something to the cart");
    }
  };

  return (
    <div className={`card cart shadow`} style={{ width: "18rem" }}>
      <button
        type="button"
        className="btn-close m-2"
        aria-label="Close"
        onClick={toggleClass}
      ></button>
      <div className="card-body text-center" style={{ height: "20rem" }}>
        <h5>Cart</h5>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <h5>The cart is empty</h5>
        )}
        <button
          href="#"
          className="checkOutBtn mb-2 btn bg-dark text-white"
          onClick={checkOut}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
