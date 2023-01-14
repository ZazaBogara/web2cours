import { useNavigate } from "react-router-dom";
import default_image from "../../../images/defaultImage.svg";

let path = `/view-item/`;

function CatlogGroup(props) {
  let navigate = useNavigate();

  const viewButtonHandler = (event) => {
    navigate(path + props.id);
  };

  return (
    <div className="catalog-group">
      <div className="catalog-group-title">{props.title}</div>
      <img src={default_image} alt="default" />
      <div className="catalog-group-big-text">{props.bigText}</div>
      <div className="catalog-group-small-text">{props.text}</div>
      <div className="catalog-prices">
        <div className="catalog-price-text">Price:</div>
        <div className="catalog-price">{props.price}$</div>
      </div>
      <button className="catalog-group-button" onClick={viewButtonHandler}>
        View More
      </button>
    </div>
  );
}

export default CatlogGroup;
