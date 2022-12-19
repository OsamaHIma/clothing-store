import { Fragment, useContext } from "react";
import { useDispatch } from "react-redux";
// import { CartContext } from "../context/cart.context";
import {
  addItemToCart,
  removeFromCart,
  clearItemFormCart,
  updateCartItems,
} from "../store/features/cartSlice";
const CheckOutItem = ({ item }) => {
  // const { addItemToCart, removeFromCart, clearItemFormCart } =
  //   useContext(CartContext);
  const dispatch = useDispatch();
  let { name, quantity, price, imageUrl } = item;

  const increaseItem = () => {
    dispatch(addItemToCart(item));
    dispatch(updateCartItems());
  };

  const decreaseItem = () => {
    dispatch(removeFromCart(item));
    dispatch(updateCartItems());
  };

  const removeItem = () => {
    dispatch(clearItemFormCart(item));
    dispatch(updateCartItems());
  };


  if (quantity < 1) {
    removeItem();
  }

  return (
    <article aria-label="checkout item">
      <hr />
      <section className="row checkoutItem" aria-label="checkout item">
        <div className="col-md-4 ps-0">
          <img
            src={imageUrl}
            className="img-fluid rounded-start w-50"
            alt={name}
          />
        </div>
        <div className="col-md-2 my-auto">
          <h5>{name}</h5>
        </div>
        <div className="col-md-2 my-auto">
          <i
            className="fa fa-chevron-left chevron"
            aria-hidden="true"
            onClick={decreaseItem}
          ></i>
          <p className="m-0 d-inline-block">{quantity}</p>
          <i
            className="fa fa-chevron-right chevron"
            aria-hidden="true"
            onClick={increaseItem}
          ></i>
        </div>
        <p className="col-md-2 my-auto">{price}</p>
        <div className="col-md-2 my-auto">
          <button
            type="button"
            className="btn-close m-2 me-auto"
            aria-label="Close"
            onClick={removeItem}
          ></button>
        </div>
      </section>
    </article>
  );
};

export default CheckOutItem;
