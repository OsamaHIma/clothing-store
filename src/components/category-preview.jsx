import { Link } from "react-router-dom";
import ProductCard from "./product-card";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview container">
      <h2>
        <Link className="btn" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="row">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
