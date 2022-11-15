import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home";
import Navigation from "./Routes/navigation";
import Authentication from "./Routes/authentication";
import Shop from "./Routes/shop";
import CheckOut from "./Routes/check out";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocument,
} from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="check-out" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
