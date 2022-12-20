import { Link } from "react-router-dom";
import ProductCard from "./product-card";

const CategoryPreview = ({ title, products }) => {
  return (
    <section className="category-preview container" aria-label="Category name">
      <h3 className="ms-3 d-inline-block">{title.toUpperCase()}</h3>
      <p className="d-inline-block">
        <Link
          className="nav-link"
          to={title}
          style={{ position: "fixed", right: "25px" }}
        >
          See more
        </Link>
      </p>
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
