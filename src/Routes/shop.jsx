import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "./categories-preview";
import Category from "./category";

const Shop = () => {
  //  useEffect(() => {
  //   const getCategoryMap = async () => {
  //     const categoryMap = await getCollection();
  //     console.log(categoryMap);
  //     setCategories(categoryMap);
  //   };
  //   getCategoryMap();
  // }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
