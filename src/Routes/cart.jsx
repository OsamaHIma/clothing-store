import CartItem from "../components/cart-item";
import { toggleClass } from "./navigation";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../context/cart.context";

import "../scss/cart.scss";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkOut = () => {
    if (cartItems.length) {
      navigate("/check-out");
    } else {
      alert("Please add something to the cart");
    }
  };

  return (
    <div className={`card cart`} style={{ width: "18rem" }}>
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
