import FooterOfSite from "./components/footer";
import HeaderOfSite from "./components/header";
import successImage from "../images/OK.svg"
import classes from "../css/success.module.css";
import { Link } from "react-router-dom";
function Success(){
    
    return (
        <div className="App">
          <HeaderOfSite page="cart" />
          <div className={classes.container}>
          <img src={successImage} alt="OK" className={classes.imagee}/>
          <div className={classes.successTitle}>
            Success
          </div>
          <div className={classes.description}>
            Your order was sent to processing! Check your email box for futher information.
          </div>
          <Link to="/catalog"  className={classes.aa}>
          <button type="submit" className={classes.goBack}>
            go Back
          </button>
        </Link>
          </div>
          <FooterOfSite />
          </div>
  );
}

export default Success;