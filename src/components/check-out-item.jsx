import { useDispatch } from "react-redux";

import {
  addItemToCart,
  removeFromCart,
  clearItemFormCart,
  updateCartItems,
} from "../store/features/cartSlice";
const CheckOutItem = ({ item }) => {
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
        <div className="col-md-4 pr-0">
          <img
            src={imageUrl}
            className="img-fluid rounded-right w-50"
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
        <p className="col-md-2 my-auto">${price}</p>
        <div className="col-md-2 my-auto">
        <i
        className="fa-solid fa-xmark m-3 mt-1 fa-xl"
        type="button"
        aria-label="Remove item"
        onClick={removeItem}
      ></i>
        </div>
      </section>
    </article>
  );
};

export default CheckOutItem;
