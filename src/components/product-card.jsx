import { useDispatch } from "react-redux";
import { addItemToCart, updateCartItems } from "../store/features/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addItemToCart(product));
    dispatch(updateCartItems())
  };

  const { name, imageUrl, price } = product;

  return (
    <article className="col-md-3 my-2" aria-label="Product card">
      <article className="card pb-3">
        <div
          className="image-container"
          style={{ height: "300px", overflow: "hidden" }}
        >
          <img src={imageUrl} className="card-img-top" alt={name} />
        </div>
        <div className="card-body d-flex justify-content-between">
          <p className="card-text d-inline">{name}</p>
          <p className="d-inline text-success">${price}</p>
        </div>
        <button
        type="button"
          className="btn btn-danger w-50 mx-auto px-2"
          onClick={addProductToCart}
          // style={{backgroundColor:"#ff3956", border:"none"}}
        >
          Add to cart
          <i
            className="fa-solid fa-cart-arrow-down ml-2"
            aria-hidden="true"
          ></i>
        </button>
      </article>
    </article>
  );
};

export default ProductCard;
