import { Link } from "react-router-dom";
import "../scss/category-preview-card.scss";
const CategoryPreviewCard = ({ product }) => {
  const { id, name, imageUrl } = product;

  const rndInt = Math.floor(Math.random() * 4) + 1;
  let starsArr = [];
  let emptyStarsArr = ["empty", "empty", "empty", "empty", "empty"];
  for (let index = 0; index <= rndInt; index++) {
    starsArr.push(index);
  }

  emptyStarsArr.length = emptyStarsArr.length - starsArr.length;
  let active = "";
  if (id === 1) {
    active = "active";
  }
  return (
    <div className={`carousel-item ${active}`} key={id}>
      <div className="col-md-4 p-2">
        <img src={imageUrl} className="card-img" alt={name} />
        <Link className="btn custom-btn d-block my-3 mx-auto">See more</Link>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            100% cotton made in Egypt hand made by the way
          </p>
          <div className="stars">
            {starsArr.map((star) => (
              <i className="fas fa-star star" key={id}></i>
            ))}
            {emptyStarsArr.map((star) => (
              <i className="fas fa-star" key={id}></i>
            ))}
            {/*             
            <i className="fas fa-star star"></i>
            <i className="fas fa-star star"></i>
            <i className="fas fa-star star"></i>
            <i className="fas fa-star star"></i>
            <i className="fas fa-star"></i> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreviewCard;
