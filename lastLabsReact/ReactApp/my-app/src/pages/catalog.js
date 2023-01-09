import FooterOfSite from "./components/footer";
import HeaderOfSite from "./components/header";
import FilterForm from "./components/catalog-page/filter-form";
import CatalogGroup from "./components/catalog-page/group";
import { site } from "../App";
import { useState, useEffect } from "react";
import "../css/App.css";
import "../css/container-catalog-page.css";

let DATA = [
  
];
let tags = [

];

function Catalog() {
  const [stateTags, setStateTags] = useState(tags);

  const fetchStateTags = async () => {
    await fetch(site + "api/tags")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data._embedded.tags.forEach((tmp) => {
          tags.push({id: tmp.id, tag: tmp.tag})
        });
      });
    setStateTags(tags);
  };

  useEffect(() => {  
    fetchStateTags();
  }, [stateTags]);

  let [stateDATA, setStateDATA] = useState(DATA);

  const fetchStateData = async () => {
    await fetch(site + "api/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        DATA = data._embedded.items;
      });
      setStateDATA(DATA);
  };

  useEffect(() => {
    fetchStateData();
  }, []);
  
  const saveResultFilters = (resultFilters) =>{
    setStateDATA(resultFilters);
  }

  return (
    <div className="App">
      <HeaderOfSite page="catalog" saveDate={saveResultFilters}/>
      <div className="container-catalog-page">
        <FilterForm tags={stateTags} defaultTag={stateTags[0]} saveDate={saveResultFilters}/>
        <div className="catalog-page-groups">
          {stateDATA.map((data, index) => {
            return (
              <CatalogGroup
                title={data.title}
                bigText={"Amazing Stuff"}
                text={data.description}
                price={88}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <FooterOfSite />
    </div>
  );
}

export default Catalog;
