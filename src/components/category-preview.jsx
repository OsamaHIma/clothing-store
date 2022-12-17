import { Link } from "react-router-dom";
import ProductCard from "./product-card";

const CategoryPreview = ({ title, products }) => {
  return (
    <section className="category-preview container" aria-label="Category name">
      <h2 className="ms-2">
        <Link className="btn" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
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
