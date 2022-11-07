import { useNavigate } from "react-router-dom";
import "../scss/categories.styles.scss";
const CARD = ({ category }) => {
  console.log("card");
  const { id, title, imageUrl, route } = category;
  const navigateUser = useNavigate();
  const onNavigateHandler = () => navigateUser(route);
  return (
    <div key={id} className="card-custom">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <button className="btn btn-secondary mb-2" onClick={onNavigateHandler}>
          Shop now
        </button>
      </div>
    </div>
  );
};
export default CARD;
