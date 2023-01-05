import default_image from "../../../images/defaultImage.svg";

function Group(props){
  
    return <div className="landing-page-group">
    <img src={default_image} alt="default" />
    <div className="landing-page-group-title">{props.title}</div>
    <div className="landing-page-group-text">
    {props.text}
    </div>
  </div>;
}

export default Group;