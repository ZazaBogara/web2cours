import logo from "./images/logo.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import Linkedin from "./images/Linkedin.svg";
import google from "./images/google.svg";
import default_image from "./images/defaultImage.svg";
import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-header-logo" alt="logo"/>
        <div className="App-header-choose">
          <button id="App-header-choosen" component={Link} to="/home">Home</button>
          <button component={Link} to="/catalog">Catalog</button>
          <button component={Link} to="/cart">Cart</button>
        </div>
        <div className="empty-div"> </div>
      </header>
      <div className="container-landing-page">
        <div className="Heading">
          <img src={default_image} className="Heading-default-image" alt="default"/>
          <div className = "Heading-content">
            <div className = "Heading-title">
              Heading
            </div>
            <div className = "Heading-text">
              Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd
            </div>
          </div>
        </div>
        <div className="landing-page-groups">
          <div className="landing-page-group">
            <img src={default_image} alt="default"/>
            <div className="landing-page-group-title">
              Tile 1 heading
            </div>
            <div className="landing-page-group-text">
              Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd
            </div>
          </div>
          <div className="landing-page-group">
            <img src={default_image} alt="default"/>
            <div className="landing-page-group-title">
              Tile 2 heading
            </div>
            <div className="landing-page-group-text">
              Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd
            </div>
          </div>
          <div className="landing-page-group">
            <img src={default_image} alt="default"/>
            <div className="landing-page-group-title">
              Tile 3 heading
            </div>
            <div className="landing-page-group-text">
              Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd
            </div>
          </div>
        </div>
        <div className="view-more">
          <button className="view-more-button">
            View more
          </button>  
        </div>
      </div>
      <footer className="App-footer">
        <div className="upper-footer">
          <div className="Branding-stuff-container">
            <div className="Branding-stuff-title">Branding stuff</div>
            <div className="Branding-stuff-text">
              Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala aspfpsfpsafpasfp dpsasdfs asfd asd
            </div>
          </div>
          <img src={logo} className="App-footer-logo" alt="logo"/>
          <div className="footer-social">
            <img src={facebook} alt="logo"/>
            <img src={twitter} alt="logo"/>
            <img src={Linkedin} alt="logo"/>
            <img src={google} alt="logo"/>
          </div>
        </div>
        <div className="footer-copyright">
          2020 IoT ©️ copyright
        </div>
      </footer>
    </div>
  );
}

export default App;
