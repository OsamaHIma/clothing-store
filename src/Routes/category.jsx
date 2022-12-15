import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/product-card";

import { CategoriesContext } from "../context/categories.context";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <section className={`${category}-category`} aria-label={`${category} category`}>
      <h2 className="mx-auto">{category.toUpperCase()}</h2>
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
