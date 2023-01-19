import { Outlet } from "react-router-dom";
import "../scss/scroll to top btn.style.scss";
const ScrollToTopBtn = () => {
  const toTop = document.querySelector(".toTop");
  window.onscroll = () => {
    //scroll to top
    if (
      document.body.scrollTop > 420 ||
      document.documentElement.scrollTop > 420
    ) {
      toTop.classList.add("show")
    } else {
      toTop.style.right = "-100px";
    }
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Outlet />
      <button className="btn toTop" onClick={goToTop}>
        <i className="fa fa-arrow-up"></i>
      </button>
    </>
  );
};
export default ScrollToTopBtn;
