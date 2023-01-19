import Directory from "../components/directory";
import "../scss/categories.styles copy.scss";
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
              {/* <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4 offset-2 img">
                    <img
                      src="https://i.ibb.co/cvpntL1/hats.png"
                      alt="T-SHIRT form lacoste"
                      title="T-SHIRT form lacoste"
                    />
                  </div>
                  <div className="col-md-5 pt-4">
                    <div className="prod-details" id="sales">
                      <div className="prod-category px-4 py-2">
                        <p className="mb-0">Sales%</p>
                      </div>
                      <h2 className="mb-3">
                        Sales on all of the product shop now!
                      </h2>
                      <a href="/shop" className="btn px-3 py-2 custom-btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              <Directory categories={categories} />
              {/* <div className="carousel-item">
                <div className="contaier">
                  <div className="row">
                    <div className="col-md-4 offset-2 img">
                      <img
                        src="https://i.ibb.co/cvpntL1/hats.png"
                        alt="Woman's Handbag"
                        title="Woman's Handbag"
                      />
                    </div>
                    <div className="col-md-5 pt-4">
                      <div className="prod-details">
                        <div className="prod-category px-4 py-2">
                          <p className="mb-0">Women</p>
                        </div>
                        <h2 className="mb-3">Women's Handbag Form Lacoste</h2>
                        <a
                          href="product.html"
                          className="btn px-3 py-2 custom-btn"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="contaier">
                  <div className="row">
                    <div className="col-md-4 offset-2 img">
                      <img
                        src="https://i.ibb.co/cvpntL1/hats.png"
                        alt="This guy is for sale"
                        title="An guy for sale"
                      />
                    </div>
                    <div className="col-md-5 pt-4">
                      <div className="prod-details">
                        <div className="prod-category px-4 py-2">
                          <p className="mb-0">Men</p>
                        </div>
                        <h2 className="mb-3">A Guy for sale</h2>
                        <a
                          href="product.html"
                          className="btn px-3 py-2 custom-btn"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="contaier">
                  <div className="row">
                    <div className="col-md-4 offset-2 img">
                      <img
                        src="https://i.ibb.co/cvpntL1/hats.png"
                        alt="T-SHIRT form Adidas"
                        title="T-SHIRT form Adidas"
                      />
                    </div>
                    <div className="col-md-5 pt-4">
                      <div className="prod-details">
                        <div className="prod-category px-4 py-2">
                          <p className="mb-0">New</p>
                        </div>
                        <h2 className="mb-3">T-Shirt Form Adidas</h2>
                        <a
                          href="product.html"
                          className="btn px-3 py-2 custom-btn"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
                  alt="This guy is for sale"
                />

                <img
                  data-target="#slider"
                  src="https://i.ibb.co/px2tCc3/jackets.png"
                  data-slide-to="1"
                  alt="This guy is for sale"
                />

                <img
                  data-target="#slider"
                  src="https://i.ibb.co/0jqHpnp/sneakers.png"
                  data-slide-to="2"
                  alt="This guy is for sale"
                />

                <img
                  data-target="#slider"
                  src="https://i.ibb.co/GCCdy8t/womens.png"
                  data-slide-to="3"
                  alt="This guy is for sale"
                />
                <img
                  data-target="#slider"
                  src="https://i.ibb.co/R70vBrQ/men.png"
                  data-slide-to="4"
                  alt="This guy is for sale"
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
