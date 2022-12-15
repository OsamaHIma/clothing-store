import { Fragment, useContext } from "react";
// import { CartContext } from "../context/cart.context";
import {
  addItemToCart,
  removeFromCart,
  clearItemFormCart,
} from "../store/features/cartSlice";
const CheckOutItem = ({ item }) => {
  // const { addItemToCart, removeFromCart, clearItemFormCart } =
  //   useContext(CartContext);
  let { name, quantity, price, imageUrl } = item;

  const removeItem = () => {
    clearItemFormCart(item);
  };

  // if (quantity < 1) {
  //   removeItem();
  // }

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
            onClick={() => removeFromCart(item)}
          ></i>
          <span>{quantity}</span>
          <i
            className="fa fa-chevron-right chevron"
            aria-hidden="true"
            onClick={() => addItemToCart(item)}
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
