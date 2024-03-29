import Directory from "../components/directory";
import "../scss/categories.styles.scss";
import { Outlet } from "react-router-dom";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: "shop/hats",
      categoryType: "hats"
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "shop/jackets",
      categoryType: "jackets"

    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "shop/sneakers",
      categoryType: "sneakers"
    },
    {
      id: 4,
      title: "women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: "shop/womens",
      categoryType: "women"
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: "shop/mens",
      categoryType: "men"
    },
  ];
  // console.log('DIR',Directory);
  return (
    <header aria-label="Home">
      <div className="row">
        <div className="col-md-12 px-0">
          <div id="slider" className="carousel slide pt-5" data-ride="carousel">
            <div className="carousel-inner">
              <Directory categories={categories} />
              <a
                className="carousel-control-prev"
                href="#slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-chevron-left text-dark slider-icon"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-chevron-right text-dark slider-icon offset-4"></i>
                <span className="sr-only text-dark">Next</span>
              </a>
              <ol className="carousel-indicators">
                <img
                  data-target="#slider"
                  src="https://i.ibb.co/cvpntL1/hats.png"
                  className="active"
                  data-slide-to="0"
                  alt="Hats section"
                />

                <img
                  data-target="#slider"
                  src="https://i.ibb.co/px2tCc3/jackets.png"
                  data-slide-to="1"
                  alt="Jackets section"
                />

                <img
                  data-target="#slider"
                  src="https://i.ibb.co/0jqHpnp/sneakers.png"
                  data-slide-to="2"
                  alt="sneakers section"
                />

                <img
                  data-target="#slider"
                  src="https://i.ibb.co/GCCdy8t/womens.png"
                  data-slide-to="3"
                  alt="women section"
                />
                <img
                  data-target="#slider"
                  src="https://i.ibb.co/R70vBrQ/men.png"
                  data-slide-to="4"
                  alt="men section"
                />
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </header>
  );
};

export default Home;
