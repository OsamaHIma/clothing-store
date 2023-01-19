import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../components/product-card";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useSelector((state) => state.categories);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <section
      className={`${category}-category container-fluid`}
      aria-label={`${category} category`}
    >
      <h2 className="mx-auto ml-3">{category.toUpperCase()}</h2>
      <div className="row" aria-label={`${category} products`}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};
export default Category;
