import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../images/crown.svg";
import { SignOutUser } from "../utils/firebase/firebase";
import Cart from "./cart";
import "../scss/navigation.styles.scss";
import "../scss/cart.scss";
import { useSelector } from "react-redux";

export const toggleClass = () => {
  const cart = document.querySelector(".cart");
  cart.classList.toggle("show");
};

const Navigation = () => {
  const { currentUser } = useSelector((store) => store.user);
  console.log("currentUser", currentUser);
  const { cartCount } = useSelector((store) => store.cart);
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrownLogo />
        </Link>
        <ul className="nav-links-container">
          <li>
            <Link className="nav-link" to={"/shop"}>
              SHOP
            </Link>
          </li>
          <li>
            {currentUser ? (
              <p className="nav-link mb-0" onClick={SignOutUser}>
                Sing Out
              </p>
            ) : (
              <Link className="nav-link" to={"/auth"}>
                SIGN IN
              </Link>
            )}
          </li>
          <li>
            <Link className="Cart-icon" aria-label="Cart" onClick={toggleClass}>
              <i className="fa fa-shopping-cart" aria-hidden="true">
                <span>{cartCount > 0 ? cartCount : null}</span>
              </i>
            </Link>
          </li>
        </ul>
      </nav>
      <Cart />
      <Outlet />
    </>
  );
};

export default Navigation;
