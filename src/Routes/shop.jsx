import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "./categories-preview";
import { getCollection } from "../utils/firebase/firebase";
import { setCategories } from "../store/features/categories";
import { useDispatch } from "react-redux";
import Category from "./category";

const Shop = () => {
  const dispatch = useDispatch()
   useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollection();
      console.log(categoryMap);
      dispatch(setCategories(categoryMap));
    };
    getCategoryMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
