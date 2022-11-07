import CARD from "./card";
const Directory = ({ categories }) => {
  console.log("dir");
  return (
    <div className="container-custom">
      {categories.map((category) => (
        <CARD key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
