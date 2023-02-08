import { useSelector } from "react-redux";

const Orders = () => {
  const { orders } = useSelector((store) => store.orders);
  const ordersList = orders.map((order) => {
    const { imageUrl, name, quantity, price, id } = order;
    return (
      <article aria-label="checkout item" key={id}>
        <hr />
        <section className="row checkoutItem" aria-label="checkout item">
          <div className="col-md-4 pl-0">
            <img src={imageUrl} className="img-fluid rounded w-50" alt={name} />
          </div>
          <div className="col-md-2 my-auto">
            <h5>{name}</h5>
          </div>
          <div className="col-md-2 my-auto">
            <p className="m-0 d-inline-block">{quantity}</p>
          </div>
          <p className="col-md-2 my-auto">${price}</p>
        </section>
      </article>
    );
  });
  return (
    <div className="container mb-3">
      <h1>Your orders</h1>
      {ordersList}
    </div>
  );
};
export default Orders;
