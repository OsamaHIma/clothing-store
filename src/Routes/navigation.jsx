import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../images/crown.svg";
import { SignOutUser } from "../utils/firebase/firebase";
import Cart from "./cart";
import "../scss/navigation.styles.scss";
import "../scss/cart.scss";
import { useSelector } from "react-redux";
import { Tooltip } from "bootstrap";

export const toggleClass = () => {
  const cart = document.querySelector(".cart");
  cart.classList.toggle("show");
};

const Navigation = () => {

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
  );

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
            <Link
              aria-label="Cart"
              className="ms-3 btn btn-light px-4 border border-secondary text-center"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Shopping cart"
              onClick={toggleClass}
            >
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
