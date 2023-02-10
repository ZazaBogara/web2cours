import { useSelector } from "react-redux";
import FooterOfSite from "../footer";
import HeaderOfSite from "../header";
import CartGroup from "./cart-group";
import classes from "../../../css/cart.module.css";
import { Link } from "react-router-dom";
function Cart(props) {
  let data = useSelector((state) => state.cart.content);

  let totalPrice = (data) => {
    let out = 0;
    for (let i = 0; i < data.length; i++) {
      out += data[i].count * 80;
    }
    return out;
  };
  return (
    <div className="App">
      <HeaderOfSite page="cart" />
      <div className={classes.cart_container}>
        <div className={classes.shoppingCart}>Shopping Cart</div>
        {data.map((el, index) => {
          return <CartGroup info={el} key={el.id} />;
        })}
        <div className={classes.total}>
          {totalPrice(data) ? "Total:" + totalPrice(data) + " $" : ""}
        </div>
      </div>
      <div className={classes.buttons_container}>
        <Link to="../catalog">
          <button className={classes.goBack}>Go Back</button>
        </Link>
        <Link to="../checkout" className={classes.checkout}>
          <button className={classes.finish}>Finish</button>
        </Link>
      </div>
      <FooterOfSite />
    </div>
  );
}

export default Cart;
