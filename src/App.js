import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home";
import Navigation from "./Routes/navigation";
import Authentication from "./Routes/authentication";
import Shop from "./Routes/shop";
import CheckOut from "./Routes/check out";
import { useEffect, useState } from "react";
import {
  onAuthStateChangedListener,
  createUserDocument,
} from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/features/userSlice";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

import "./scss/preloader.scss";
const App = () => {
  // Preloader
  const override = {
    borderColor: "#eee",
  };
  let [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(false);
  }, []);

  // User Auth
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
    <>
      {loading ? (
        // <div className="loader-wrapper">
        //   <ClipLoader
        //     color={"#222"}
        //     loading={loading}
        //     cssOverride={override}
        //     size={150}
        //     aria-label="Loading Spinner"
        //     data-testid="loader"
        //   />
        // </div>
        <div className="preloader">
          <div className="preloader-wrapper">
            <div className="loading">
              {/* <div className="text-center">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div> */}
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="check-out" element={<CheckOut />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
