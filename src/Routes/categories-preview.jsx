import { useSelector } from "react-redux";
import CategoryPreview from "../components/category-preview";

const CategoriesPreview = () => {
  const { categoriesMap } = useSelector((store) => store.categories);

  return (
    <section className="category-container row">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </section>
  );
};

export default CategoriesPreview;
