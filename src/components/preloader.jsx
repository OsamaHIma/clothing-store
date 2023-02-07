import "../scss/preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-wrapper">
        <div className="loading">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
