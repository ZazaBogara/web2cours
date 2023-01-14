import classes from "../../../css/add-item-page.module.css";
import { useRef, useState, useEffect } from "react";
import { getAllTags, postItem } from "../../../api";

let tags = [
  {
    id: 1,
    tag: "fruit",
  },
];

function StuffForm() {
  const [state, setState] = useState(tags);

  useEffect(() => {
    const tmp = async () => {
      setState(await getAllTags());
    };
    tmp();
  }, []);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const clearRef = useRef();
  const refTmp = useRef();

  let tagToAdd = [];
  function submitHandler(event) {
    event.preventDefault();

    tagToAdd = [];
    state.forEach((tag, i) => {
      if (event.target.children[3].children[i].children[0].checked) {
        let tmp = { id: tag.id, tag: tag.tag };
        tagToAdd.push(tmp);
      }
    });

    let currentData = {
      id: 0,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      tags: tagToAdd,
    };

    console.log(currentData);
    postItem(currentData);
    //clear inputs
    if (clearRef.current.checked === true) {
      titleRef.current.value = "";
      descriptionRef.current.value = "";
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.content}>
        <label htmlFor="clear">Clear input?</label>
        <input
          type="checkbox"
          id="clear"
          ref={clearRef}
          className={classes.check}
        ></input>
      </div>
      <div className={classes.content}>
        <label htmlFor="title">Title</label>
        <input type="text" required id="title" ref={titleRef}></input>
      </div>
      <div className={classes.content}>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" ref={descriptionRef}></input>
      </div>
      <div className={classes.containertag}>
        {state.map((data, i) => {
          return (
            <div className={classes.checkboxtag} key={data.id}>
              <input
                type="checkbox"
                id={data.id}
                ref={refTmp}
                name={data.id}
              ></input>
              <label htmlFor={data.id}>{data.tag}</label>
            </div>
          );
        })}
      </div>
      <button className={classes.submitButton}>Submit</button>
    </form>
  );
}

export default StuffForm;
