import default_image from "../../../images/defaultImage.svg";

function Heading(){
    return <div className="Heading">
    <img
      src={default_image}
      className="Heading-default-image"
      alt="default"
    />
    <div className="Heading-content">
      <div className="Heading-title">Heading</div>
      <div className="Heading-text">
        Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala
        aspfpsfpsafpasfp dpsasdfs asfd asd
      </div>
    </div>
  </div>;
}

export default Heading;