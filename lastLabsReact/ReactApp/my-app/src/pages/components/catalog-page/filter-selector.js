
function FilterSelector(props) {
  const changeHandler = (event) => {
    props.result(event.target.value);
  }
  return (
    <select className="catalog-filter-selector" onChange={changeHandler}>
      {props.tags.map((TAG, index) => {
        return (
          <option className="catalog-filter-option" key={index} value={TAG.tag}>
            {TAG.tag}
          </option>
        );
      })}
    </select>
  );
}

export default FilterSelector;
