import FilterSelector from "./filter-selector";
import { useState, useEffect } from "react";
import { site } from "../../../App";


let res1 = null;
let res2 = null;

function FilterForm(props) {

  if (props && props.defaultTag && props.defaultTag.tag) {
    res1 = props.defaultTag.tag;
    res2 = props.defaultTag.tag;
  }

  const [stateApply, setStateApply] = useState([]);

  const fetchFilters = async () => {
    await fetch(`${site}api/items/${res1}/${res2}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data._embedded) {
          props.saveDate(data._embedded.items);
        }
      });
    setStateApply(stateApply);
  };


  const applyHandler = () => {
    fetchFilters();
  };

  useEffect(() => {
    
  }, [stateApply, props]);


  let result1 = (a) => {
    res1 = a;
  };
  let result2 = (a) => {
    res2 = a;
  };

  return (
    <div className="catalog-filter">
      <div className="catalog-close-filters">
        <FilterSelector tags={props.tags} result={result1} />
        <FilterSelector tags={props.tags} result={result2} />
      </div>
      <button className="catalog-apply-button" onClick={applyHandler}>
        Apply
      </button>
    </div>
  );
}

export default FilterForm;
