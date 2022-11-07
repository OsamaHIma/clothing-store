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
    <>
      <h2 className="mx-auto">{category.toUpperCase()}</h2>
      <div className="row">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
export default Category;
