// import CARD from "./card";
import CarouselItem from "./carousel-item";

const Directory = ({ categories }) => {
  return (
    <section className="container-custom container-fluid">
      {categories.map((category) => (
        <CarouselItem key={category.id} category={category} />
      ))
      }
    </section>
  );
};

export default Directory;
