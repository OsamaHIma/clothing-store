import { Fragment, useContext } from "react";
import { CartContext } from "../context/cart.context";
const CheckOutItem = ({ item }) => {
  const { cartItems, setCartItems, addItemToCart, removeFromCart } =
    useContext(CartContext);
  let { name, quantity, price, imageUrl } = item;

  const removeItem = () => {
    setCartItems(cartItems.filter((product) => product !== item));
  };

  if (quantity < 1) {
    removeItem();
  } 
  if (quantity > 10) {
    alert(`Ok stop it we know you're rich`)
  }

  return (
    <Fragment>
      <hr />
      <div className="row checkoutItem">
        <div className="col-md-4 ps-0">
          <img
            src={imageUrl}
            className="img-fluid rounded-start w-50"
            alt={name}
          />
        </div>
        <div className="col-md-2 my-auto">
          <h5>{name}</h5>{" "}
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
        <div className="col-md-2 my-auto">{price}</div>
        <div className="col-md-2 my-auto">
          <button
            type="button"
            className="btn-close m-2 me-auto"
            aria-label="Close"
            onClick={removeItem}
          ></button>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckOutItem;
