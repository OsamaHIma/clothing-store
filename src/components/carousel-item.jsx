import { useNavigate } from "react-router-dom";

const CarouselItem = ({ category }) => {
  const { id, title, imageUrl, route, categoryType } = category;
  const navigateUser = useNavigate();
  const onNavigateHandler = () => navigateUser(route);
  let active = "";
  let type = "";
  let newClass = "";
  if (id === 1) {
    active = "active";
  } else if (id === 3) {
    type = "sales";
  } else if (id === 5) {
    newClass = "new";
  }

  // switch (id) {
  //   case 1:
  //     active = "active";
  //   case 3:
  //     type = "sales";
  //   case 5:
  //     newClass = "new";
  //     break;
  // }
  console.log(active);
  return (
    <div className={`carousel-item ${active}`} key={id}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-2 img">
            <img src={imageUrl} alt={title} title={title} />
          </div>
          <div className="col-md-5 pt-4 prod-col">
            <div className={`prod-details ${newClass}`} id={type}>
              <div className="prod-category px-4 py-2">
                <p className="mb-0">{type || newClass? (type.toUpperCase() || newClass.toUpperCase()):(categoryType.toUpperCase())}</p>
              </div>
              <h2 className="mb-3">{title.toUpperCase()}</h2>
              <a
                className="btn px-3 py-2 custom-btn"
                onClick={onNavigateHandler}
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
