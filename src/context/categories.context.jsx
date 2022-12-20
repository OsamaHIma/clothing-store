import { createContext, useState, useEffect } from "react";
import { getCollection } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollection();
      setCategories(categoryMap);
    };
    getCategoryMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
