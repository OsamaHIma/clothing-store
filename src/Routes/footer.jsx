import { Outlet } from "react-router-dom";
import "../scss/footer.scss";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <>
      <Outlet />
      <footer className="footer" aria-label="Footer section">
        <section className="row container-fluid">
          <section className="col-md-3 copyright">
            <p className="my-auto">
              All rights reserved <time>{Year}</time>&copy;
            </p>
          </section>
          <section className="col-md-6 subscribe">
            {/* <p className="m-0">Subscribe to get the newest offers</p> */}
            <form className="my-auto">
              <input
                className="form-control w-50 d-inline-block"
                type="email"
                name="email"
                placeholder="subscribe by email to get offers"
                required
              />
              <button
                className="d-inline-block btn btn-secondary ms-2"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </section>
          <section className="col-md-3 social-links">
            <section className="social-links-container">
              <i className="fab fa-twitter" aria-hidden="true"></i>
              <i className="fab fa-facebook" aria-hidden="true"></i>
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </section>
          </section>
        </section>
      </footer>
    </>
  );
};
export default Footer;
