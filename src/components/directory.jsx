import CARD from "./card";
const Directory = ({ categories }) => {
  return (
    <section className="container-custom">
      {categories.map((category) => (
        <CARD key={category.id} category={category} />
      ))}
    </section>
  );
};

export default Directory;
