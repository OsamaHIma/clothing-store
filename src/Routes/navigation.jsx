import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../images/crown.svg";
import { UserContext } from "../context/user.context";
import { SignOutUser } from "../utils/firebase/firebase";
import { CartContext } from "../context/cart.context";
import Cart from "./cart";
import "../scss/navigation.styles.scss";
import "../scss/cart.scss";

export const toggleClass = () => {
  const cart = document.querySelector(".cart");
  cart.classList.toggle("show");
};

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartCount } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={SignOutUser}>
              Sing Out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
          <Link className="" onClick={toggleClass}>
            <i className="fa fa-shopping-cart" aria-hidden="true">
              <span>{cartCount > 0 ? cartCount : null}</span>
            </i>
          </Link>
        </div>
      </div>
      <Cart />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
