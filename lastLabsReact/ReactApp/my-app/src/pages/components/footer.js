import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import Linkedin from "../../images/Linkedin.svg";
import google from "../../images/google.svg";
import logo from "../../images/logo.svg";

function FooterOfSite() {
  return (
    <footer className="App-footer">
      <div className="upper-footer">
        <div className="Branding-stuff-container">
          <div className="Branding-stuff-title">Branding stuff</div>
          <div className="Branding-stuff-text">
            Lorem ipsum tralala Lorem ipsum tralala Lorem ipsum tralala
            aspfpsfpsafpasfp dpsasdfs asfd asd
          </div>
        </div>
        <img src={logo} className="App-footer-logo" alt="logo" />
        <div className="footer-social">
          <img src={facebook} alt="logo" />
          <img src={twitter} alt="logo" />
          <img src={Linkedin} alt="logo" />
          <img src={google} alt="logo" />
        </div>
      </div>
      <div className="footer-copyright">2020 IoT ©️ copyright</div>
    </footer>
  );
}

export default FooterOfSite;
