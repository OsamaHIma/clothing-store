const CategoryPreviewCard = () => {
  const rndInt = Math.floor(Math.random() * 6) + 1;
  let starsArr = [];
  for (let index = 0; index <= rndInt; index++) {
    const star = "star"
    const starsArr = array[index];  
  }
  console.log(starsArr);
  return (
    <div className="carousel-item active">
      <div className="col-md-4 p-2">
        <img src="./images/lacoste_1.jpg" className="card-img" alt="..." />
        <button className="btn custom-btn d-block my-3 mx-auto">See more</button>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Polo T-shirt</h5>
          <p className="card-text">
            100% cotton made in Egypt hand made by the way
          </p>
          <div className="stars">
            
            <i className="fas fa-star star"></i>
            <i className="fas fa-star star"></i>
            <i className="fas fa-star star"></i>
            <i className="fas fa-star star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreviewCard;
