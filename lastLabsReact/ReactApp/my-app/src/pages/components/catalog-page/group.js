import default_image from "../../../images/defaultImage.svg";
function CatlogGroup(props) {
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
      <button className="catalog-group-button">View More</button>
    </div>
  );
}

export default CatlogGroup;
