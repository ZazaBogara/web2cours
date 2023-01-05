import { useState } from "react";
import HeaderOfSite from "./components/header";
import FooterOfSite from "./components/footer";
import "../css/App.css";
import Heading from "./components/landing-page/heading";
import LandingPageGroup from "./components/landing-page/group";

let lastId = 2;

function Home() {
  let LANDING_DATA = [
    {
      id: 0,
      title: "Tile 0 heading",
      text: "Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd",
    },
    {
      id: 1,
      title: "Tile 1 heading",
      text: "Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd",
    },
    {
      id: 2,
      title: "Tile 2 heading",
      text: "Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd",
    },
  ];
  
  const [info, setInfo] = useState(LANDING_DATA);

  
  function addThreeGroups() {
    let newExamples = [
      {
        id: lastId++ ,
        title: "Tile" + lastId + " heading",
        text: "Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd",
      },
      {
        id: lastId++,
        title: "Tile" + lastId + " heading",
        text: "Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd",
      },
      {
        id: lastId++,
        title: "Tile" + lastId + " heading",
        text: "Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd",
      },
    ];
    setInfo([...info, ...newExamples]);
  }
  return (
    <div className="App">
      <HeaderOfSite page="home" />
      <div className="container-landing-page">
        <Heading />
        <div className="landing-page-groups">
          {info.map((data, index) => {
            return (
              <LandingPageGroup
                key={index}
                title={data.title}
                text={data.text}
              />
            );
          })}
          {}
        </div>
        <div className="view-more">
          <button className="view-more-button" onClick={addThreeGroups}>
            View more
          </button>
        </div>
      </div>
      <FooterOfSite />
    </div>
  );
}

export default Home;
