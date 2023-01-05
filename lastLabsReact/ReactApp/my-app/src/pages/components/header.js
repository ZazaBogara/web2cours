import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function HeaderOfSite(props) {
  let home = (
    <Link to="/home">
      <button className="App-header-button">Home</button>
    </Link>
  );
  let catalog = (
    <Link to="/catalog">
      <button className="App-header-button">Catalog</button>
    </Link>
  );
  let cart = (
    <Link to="/cart">
      <button className="App-header-button">Cart</button>
    </Link>
  );
  let createItem = (
    <Link to="/add-item">
      <button className="App-header-button">Add item</button>
    </Link>
  );
  if (props.page === "catalog") {
    catalog = (
      <Link to="/catalog">
        <button className="App-header-button" id="App-header-choosen">
          Catalog
        </button>
      </Link>
    );
  } else if (props.page === "cart") {
    cart = (
      <Link to="/cart">
        <button className="App-header-button" id="App-header-choosen">
          Cart
        </button>
      </Link>
    );
  } else if (props.page === "add-item") {
    createItem = (
      <Link to="/add-item">
        <button className="App-header-button" id="App-header-choosen">
          Add Item
        </button>
      </Link>
    );
  } else {
    home = (
      <Link to="/home">
        <button className="App-header-button" id="App-header-choosen">
          Home
        </button>
      </Link>
    );
  }
  return (
    <header className="App-header">
      <img src={logo} className="App-header-logo" alt="logo" />
      <div className="App-header-choose">
        {home}
        {catalog}
        {cart}
        {createItem}
      </div>
      <div className="empty-div"> </div>
    </header>
  );
}

export default HeaderOfSite;
