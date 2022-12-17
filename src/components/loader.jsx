import "../scss/loader.scss";
import { Outlet } from "react-router-dom";
const Loader = () => {
  return (
    <>
      <Outlet />
      <section className="loader-wrapper">
        <div className="spinner-grow text-primary">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    </>
  );
};

export default Loader;
