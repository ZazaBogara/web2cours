import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import searchButton from "../../images/searchButton.svg"
import { site } from "../../App";
import { useState, useEffect } from "react";

let autoIncr = 0;

function HeaderOfSite(props) {

  let [searchInput, setStateSearchInput] = useState("someDefaultTextToSearchHopeNoOneCreateObjectLikeThat");

  useEffect(() => {
    const fetchSearchContent = async () => {
      await fetch(`${site}api/items/findByTitle/${searchInput}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if(data._embedded != null){
            props.saveDate(data._embedded.items);
          }
        });
    };
    if(autoIncr===0)
      fetchSearchContent();
    autoIncr++;
  }, [props, searchInput]);

  const searchFilterHandler = (event) => {
    autoIncr = 0;
    if(event.target.parentElement.children[1]){
      setStateSearchInput(event.target.parentElement.children[1].value);
    }
  };

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
  let searchFilter = <div className="empty-div"> </div>;
  if (props.page === "catalog") {
    catalog = (
      <Link to="/catalog">
        <button className="App-header-button" id="App-header-choosen">
          Catalog
        </button>
      </Link>
    );
    if(window.location.href === "http://localhost:3000/catalog")
    searchFilter = (
      <div className="App-header-searchFilter">
        <button onClick={searchFilterHandler}><img src={searchButton} alt="searchButton"/></button>
        <input type="text" placeholder="Search" />
      </div>
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
      {searchFilter}
    </header>
  );
}

export default HeaderOfSite;
