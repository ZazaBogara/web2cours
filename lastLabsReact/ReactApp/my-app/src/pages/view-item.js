import HeaderOfSite from "./components/header";
import FooterOfSite from "./components/footer";
import {useLocation } from 'react-router-dom';

let objectToView;

function ViewItem() {
  console.log(objectToView);
  const location = useLocation();
  const currentDataFromCheckoutPage = location.state;
  // data pass show here
  console.log('currentDataFromCheckoutPage', currentDataFromCheckoutPage);
  return (
    <div className="App">
      <HeaderOfSite page="catalog" />
      {objectToView}
      <FooterOfSite />
    </div>
  );
}

export default ViewItem;
