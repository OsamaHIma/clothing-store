import CartItem from "../components/cart-item";
import { toggleClass } from "./navigation";

import { useNavigate } from "react-router-dom";

import "../scss/cart.scss";
import { useSelector } from "react-redux";
import Alert from "../components/alert";
import { useState } from "react";

const Cart = () => {
  const [alertUser, setAlertUser] = useState(false);

  const { cartItems } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const checkOut = () => {
    if (cartItems.length) {
      navigate("/check-out");
    } else {
      setAlertUser(true);
    }
  };

  return (
    <>
      {alertUser ? (
        <Alert
          boldText={"The cart is empty!"}
          mainText={"Please add something to the cart"}
          type={"danger"}
        />
      ) : null}
      <div className={`card cart shadow`} style={{ width: "18rem" }}>
        <i
          className="fa-solid fa-xmark m-3 mt-1 fa-xl"
          type="button"
          aria-label="Close"
          onClick={toggleClass}
        ></i>

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
    </>
  );
};

export default Cart;
