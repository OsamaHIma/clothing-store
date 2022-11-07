import { useContext } from "react";
import { CartContext } from "../context/cart.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  const { name, imageUrl, price } = product;

  return (
    <div className="col-md-3 my-2">
      <div className="card pb-3">
        <div
          className="image-container"
          style={{ height: "300px", overflow: "hidden" }}
        >
          <img src={imageUrl} className="card-img-top" alt={`${name}`} />
        </div>
        <div className="card-body d-flex justify-content-between">
          <p className="card-text d-inline">{name}</p>
          <span className="d-inline text-success">{price}$</span>
        </div>
        <button
          className="btn btn-success w-50 mx-auto"
          onClick={addProductToCart}
        >
          Add to cart
          <i className="fa fa-cart-plus mx-2" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;