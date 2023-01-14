import FooterOfSite from "./components/footer";
import HeaderOfSite from "./components/header";
import FilterForm from "./components/catalog-page/filter-form";
import CatalogGroup from "./components/catalog-page/group";
import { useState, useEffect } from "react";
import "../css/App.css";
import "../css/container-catalog-page.css";
import { getAllItem, getAllTags } from "../api";
import LoadingLogo from "./components/catalog-page/loadingLogo";

let DATA = [];
let tags = [];

function Catalog() {
  const [stateLoading, setStateLoading] = useState(false);
  const [stateTags, setStateTags] = useState(tags);

  const fetchStateTags = async () => {
    setStateTags(await getAllTags());
  };

  useEffect(() => {
    if (stateTags.length === 0) fetchStateTags();
  }, [stateTags]);

  let [stateDATA, setStateDATA] = useState(DATA);

  const fetchStateData = async () => {
    setStateDATA(await getAllItem());
  };

  useEffect(() => {
    fetchStateData();
    setTimeout(() => {
      setStateLoading(true);
    }, 1000);
  }, []);

  const saveResultFilters = (resultFilters) => {
    setStateDATA(resultFilters);
  };

  return (
    <div className="App">
      <HeaderOfSite page="catalog" saveDate={saveResultFilters} />
      <div className="container-catalog-page">
        <FilterForm
          tags={stateTags}
          defaultTag={stateTags[0]}
          saveDate={saveResultFilters}
        />
        {stateLoading ? (
          <div className="catalog-page-groups">
            {stateDATA.map((data, index) => {
              return (
                <CatalogGroup
                  title={data.title}
                  bigText={"Amazing Stuff"}
                  text={data.description}
                  price={88}
                  id={data.id}
                  key={index}
                />
              );
            })}
          </div>
        ) : (
          <LoadingLogo />
        )}
      </div>
      <FooterOfSite />
    </div>
  );
}

export default Catalog;
