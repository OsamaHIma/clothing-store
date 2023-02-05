import { Link } from "react-router-dom";
import ProductCard from "./product-card";
import CategoryPreviewCard from "./category-preview-card";
const CategoryPreview = ({ title, products }) => {
  return (
    <section
      className="category-preview container-fluid my-4 mx-3"
      aria-label={`${title}-category`}
    >
      <div className="category-text-container d-flex justify-content-between">
        <h3 className="mx-3">{title.toUpperCase()}</h3>
        <Link className="nav-link" to={title}>
          {/* // style={{ position: "absolute", right: "25px" }} */}
          See more
        </Link>
      </div>
      <section className="row" aria-label="category products">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </section>
    // <section className="brands pb-2">
    //   <div className="container">
    //     {/* <br /> */}
    //     <div className="row">
    //       <div className="col-md-6">
    //         <div className="card mb-3" >
    //           <div className="row no-gutters">
    //             <div
    //               id="carouselExampleControls"
    //               className="carousel slide"
    //               data-ride="carousel"
    //             >
    //               <div className="carousel-inner">
    //                 {products
    //                   .filter((_, idx) => idx < 4)
    //                   .map((product) => (
    //                     <CategoryPreviewCard
    //                       key={product.id}
    //                       product={product}
    //                     />
    //                   ))}
    //                 <div className="sliders mb-2 float-right">
    //                   <a
    //                     className="carousel-control-prev "
    //                     href="#carouselExampleControls-4"
    //                     role="button"
    //                     data-slide="prev"
    //                   >
    //                     <i className="fas fa-chevron-left"></i>
    //                   </a>
    //                   <a
    //                     className="carousel-control-next "
    //                     href="#carouselExampleControls-4"
    //                     role="button"
    //                     data-slide="next"
    //                   >
    //                     <i className="fas fa-chevron-right"></i>
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <div className="col-md-6">
    //         <div className="card mb-3" style={{maxWidth: "540px"}}>
    //           <div className="row no-gutters">
    //             <div
    //               id="carouselExampleControls"
    //               className="carousel slide"
    //               data-ride="carousel"
    //             >
    //               <div className="carousel-inner">
    //                 {products
    //                   .filter((_, idx) => idx < 4)
    //                   .map((product) => (
    //                     <CategoryPreviewCard
    //                       key={product.id}
    //                       product={product}
    //                     />
    //                   ))}
    //                 <div className="sliders mb-2 float-right">
    //                   <a
    //                     className="carousel-control-prev "
    //                     href="#carouselExampleControls-4"
    //                     role="button"
    //                     data-slide="prev"
    //                   >
    //                     <i className="fas fa-chevron-left"></i>
    //                   </a>
    //                   <a
    //                     className="carousel-control-next "
    //                     href="#carouselExampleControls-4"
    //                     role="button"
    //                     data-slide="next"
    //                   >
    //                     <i className="fas fa-chevron-right"></i>
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}
    //     </div>
    //   </div>
    // </section>
  );
};
export default CategoryPreview;
