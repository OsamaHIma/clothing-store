import { Outlet } from "react-router-dom";
import "../scss/scroll to top btn.style.scss";
const ScrollToTopBtn = () => {
  
  return (
    <>
      <Outlet />
      <button className="btn toTop">
        <i className="fa fa-arrow-up"></i>
      </button>
    </>
  );
};
export default ScrollToTopBtn;
