import { Link } from "react-router-dom";
import ProductCard from "./product-card";

const CategoryPreview = ({ title, products }) => {
  return (
    <section
      className="category-preview container"
      aria-label={`${title}-category`}
    >
      <div className="category-text-container d-flex justify-content-between">
        <h3 className="mr-3">{title.toUpperCase()}</h3>
        <Link className="nav-link" to={title}>
          {/* // style={{ position: "absolute", right: "25px" }} */}
          See more
        </Link>
      </div>
      <section className="row" aria-label="category products">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </section>
  );
};
export default CategoryPreview;
