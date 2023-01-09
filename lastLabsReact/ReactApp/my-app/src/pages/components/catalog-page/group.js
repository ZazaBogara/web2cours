import { Link } from "react-router-dom";
import default_image from "../../../images/defaultImage.svg";
import { useLocation } from 'react-router-dom';

let objectToView;

function CatlogGroup(props) {
  const location = useLocation();

  const viewButtonHandler = (event) => {
    let group = event.target.parentElement;
    console.log(objectToView);
    alert();
    objectToView = {
      title: group.children[0].innerText,
      bigText: group.children[2].innerText,
      description: group.children[3].innerText,
      price: +group.children[4].children[1].innerText.split("$").at(0),
    };
    alert();
    location.state = objectToView;
    console.log(objectToView);
    alert();
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
      <Link
        to={{
          pathname: "/view-item",
          state: objectToView, // your data array of objects
        }}
      >
        <button className="catalog-group-button" onClick={viewButtonHandler}>View More</button>
      </Link>
    </div>
  );
}

export default CatlogGroup;
