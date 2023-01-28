import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../images/crown.svg";
import { SignOutUser } from "../utils/firebase/firebase";
import Cart from "./cart";
import "../scss/navigation.styles.scss";
import "../scss/cart.scss";
import { useSelector } from "react-redux";
import ScrollToTopBtn from "../components/scroll to top btn";

// import { Tooltip } from "bootstrap";

export const toggleClass = () => {
  const cart = document.querySelector(".cart");
  cart.classList.toggle("show");
};

const Navigation = () => {
  // const tooltipTriggerList = document.querySelectorAll(
  //   '[data-bs-toggle="tooltip"]'
  // );
  // const tooltipList = [...tooltipTriggerList].map(
  //   (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
  // );

  const { currentUser } = useSelector((store) => store.user);
  console.log(currentUser);
  const { displayName } = currentUser
    ? currentUser.providerData[0]
    : { displayName: "loading" };
  const photoURL = `https://api.dicebear.com/5.x/micah/svg?size=48`;
  // console.log(currentUser.providerData);

  const { cartCount } = useSelector((store) => store.cart);
  return (
    // <>
    //   <nav className="navigation">
    //     <Link className="logo-container" to={"/"}>
    //       <CrownLogo />
    //     </Link>
    //     <ul className="nav-links-container">
    //       <li>
    //         <Link className="nav-link" to={"/shop"}>
    //           SHOP
    //         </Link>
    //       </li>
    //       {currentUser ? (
    //         <>
    //           <li className="nav-link">
    //             <img src={photoURL} alt="av" className="w-50" />
    //             <p>{displayName}</p>
    //           </li>

    //           <li className="nav-link mb-0" onClick={SignOutUser}>
    //             Sing Out
    //           </li>
    //         </>
    //       ) : (
    //         <li>
    //           <Link className="nav-link" to={"/auth"}>
    //             SIGN IN
    //           </Link>
    //         </li>
    //       )}
    //       <li>
    //         <Link
    //           aria-label="Cart"
    //           className="ml-3 btn btn-light px-4 border border-secondary text-center"
    //           data-bs-toggle="tooltip"
    //           data-bs-placement="bottom"
    //           data-bs-title="Shopping cart"
    //           onClick={toggleClass}
    //         >
    //           <i className="fa fa-shopping-cart" aria-hidden="true">
    //             <span>{cartCount > 0 ? cartCount : null}</span>
    //           </i>
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Cart />
    //   <Outlet />
    // </>
    <>
      <div className="row d-block">
        {/* <!--Navbar start--> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-3">
          <div className="container-fluid">
            <Link className="logo-container nav-brand" to={"/"}>
              <CrownLogo />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse ml-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link px-3" to={"/"}>
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                {/* <!-- Section drop down menu--> */}
                <li className="nav-item">
                  <div className="btn-group dropdown">
                    <p
                      className="nav-link dropdown-toggle px-3"
                      // href="#"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sections
                    </p>
                    <ul
                      className="dropdown-menu dropdown-costume"
                      aria-labelledby="navbarDropdown"
                    >
                      <li className="dropdown-item">
                        <Link
                          className="nav-link text-center"
                          to={"/shop/mens"}
                        >
                          Men
                        </Link>
                      </li>
                      <li className="dropdown-item">
                        <Link
                          className="nav-link text-center"
                          to={"/shop/womens"}
                        >
                          Women
                        </Link>
                      </li>
                      <li className="dropdown-item">
                        <Link
                          className="nav-link text-center"
                          to={"/shop/jackets"}
                        >
                          Jackets
                        </Link>
                      </li>
                      <li className="dropdown-item">
                        <Link
                          className="nav-link text-center"
                          to={"/shop/hats"}
                        >
                          Hats
                        </Link>
                      </li>
                      <li className="dropdown-item">
                        <Link
                          className="nav-link text-center"
                          to={"/shop/sneakers"}
                        >
                          Sneakers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className=" nav-item">
                  <a className="nav-link px-3" href="#">
                    Advanced search
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to={"/shop"}>
                    Shop
                  </Link>
                </li>

                {currentUser ? (
                  <>
                    <li className="nav-item">
                      <div className="btn-group">
                        <img
                          src={photoURL}
                          alt="avatar"
                          type="button"
                          className="w-100 rounded-circle dropdown-toggle dropdown-toggle-split"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                        <div
                          className="user-menu dropdown-menu"
                          style={{ width: "180px" }}
                        >
                          <div
                            className="dropdown-item disabled px-2"
                            style={{ fontSize: "14px" }}
                          >
                            <i className="fas fa-user px-2"></i> {displayName}
                          </div>
                          <p
                            className="dropdown-item mb-0 px-2"
                            type="button"
                            onClick={SignOutUser}
                          >
                            <i className="fas fa-sign-out px-2"></i>
                            Sign Out
                          </p>
                        </div>
                      </div>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link px-3" to={"/auth"}>
                      Sing in
                    </Link>
                  </li>
                  // className="nav-link ml-3 btn btn-light px-4 border border-secondary"
                )}
                <li className="nav-item mt-1">
                  <button
                    type="button"
                    aria-label="Cart"
                    className="ml-3 btn btn-light px-4 border border-secondary text-center"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Shopping cart"
                    onClick={toggleClass}
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true">
                      <span className="pl-2">
                        {cartCount > 0 ? cartCount : null}
                      </span>
                    </i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!--Navbar end--> */}
      </div>
      <Cart />
      <ScrollToTopBtn />
      {/* <Outlet /> */}
    </>
  );
};

export default Navigation;
