import HeaderOfSite from "./components/header";
import FooterOfSite from "./components/footer";
import defaultImage from "./../images/defaultImage.svg";
import { getOneItemById } from "../api";
import { useEffect, useState } from "react";
import classes from "../css/view-item-page.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux-Cart/cartSlice";


let DATA = {
  id: 2,
  title: "apple",
  description: "very tasty fruit with tralalalalalalala",
  tagsNames: [
    {
      2: "veggitable",
    },
    {
      1: "fruit",
    },
  ],
};

function ViewItem() {
  
  const [countState, setCountState] = useState();

  const [data, setData] = useState(DATA);
  let dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let idToSearch = window.location.href.split("/view-item/")[1];
      DATA = await getOneItemById(idToSearch);
      if (DATA.id !== data.id) setData(DATA);
    })();
  }, [data]);

  return (
    <div className="App">
      <HeaderOfSite page="catalog" />
      <div className={classes.container}>
        <div className={classes.flexImageAndContent}>
          <img
            src={defaultImage}
            alt="default"
            className={classes.defaultImage}
          />
          <div className={classes.content}>
            <div className={classes.tags}>
              {data.tagsNames.map((tag) => {
                let tagName = tag[Object.keys(tag)[0]];
                return (
                  <div className={classes.tag} key={Object.keys(tag)[0]}>
                    {tagName}
                  </div>
                );
              })}
            </div>
            <div className={classes.title}>{data.title}</div>
            <div className={classes.description}>{data.description}</div>
            <div className={classes.fieldsContent}>
              <div className={classes.field1}>
                <div className={classes.fieldText}>How Much?</div>
                <input
                  type="text"
                  className={classes.field1Input}
                  placeholder="1337.."
                  onChange={e => {setCountState(e.target.value)}}
                />
              </div>
              <div className={classes.field2}>
                <div className={classes.fieldText}>Non usefull field</div>
                <select className={classes.field2Input}>
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.priceContainer}>
          <div className={classes.price}>Price: 88$</div>
          <div className={classes.buttonContainer}>
            <Link to="../catalog">
              <button className={classes.goBack}>Go Back</button>
            </Link>
            <button
              className={classes.addToCart}
              onClick={() => {
                DATA.count = countState || 1;
                console.log(DATA.count);
                dispatch(addToCart(DATA));
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <FooterOfSite />
    </div>
  );
}

export default ViewItem;
