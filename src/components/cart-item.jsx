import "../scss/cart-item.scss";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <article className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <section className="item-details">
        <p className="name">{name}</p>
        <p className="price">
          {quantity} x ${price}
        </p>
      </section>
    </article>
  );
};
export default CartItem;
