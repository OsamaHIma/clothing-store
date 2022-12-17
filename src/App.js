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
import { setCurrentUser } from "./store/features/userSlice";
import { useDispatch } from "react-redux";
import Footer from "./Routes/footer";
import Loader from "./components/loader";
const App = () => {
  window.addEventListener("load", () => {
    document.querySelector(".loader-wrapper").classList.add("fade-out");
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Loader />}>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Footer />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="check-out" element={<CheckOut />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
