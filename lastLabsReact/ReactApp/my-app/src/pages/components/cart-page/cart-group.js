import defaultImage from "../../../images/defaultImage.svg";
import classes from "../../../css/cart-group.module.css";
import { useDispatch } from "react-redux";
import { decrementCount, incrementCount } from "../../../Redux-Cart/cartSlice";
import { useState } from "react";

function CartGroup(props) {
  const [countState, setCountState] = useState(props.info.count || 1);
  let dispatch = useDispatch();
  return (
    <div className={classes.square}>
      <div className={classes.image_cointainer}>
        <img src={defaultImage} alt="default" className={classes.def_image} />
      </div>
      <div className={classes.content_container}>
        <div className={classes.title}>{props.info.title}</div>
        <div className={classes.count_container}>
          <button
            className={classes.minus}
            onClick={() => {
              dispatch(decrementCount(props.info.id));
              setCountState(+countState-1);
            }}
          >
            -
          </button>
          <div className={classes.count}>{countState}</div>
          <button
            className={classes.plus}
            onClick={() => {
              dispatch(incrementCount(props.info.id));
              setCountState(+countState+1);
            }}
          >
            +
          </button>
        </div>
        <div className={classes.price}>{80 * countState} $</div>
      </div>
    </div>
  );
}

export default CartGroup;
