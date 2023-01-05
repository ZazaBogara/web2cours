import HeaderOfSite from "./components/header";
import FooterOfSite from "./components/footer";
import StuffForm from "./components/item-add-page/form";

function AddItemPage() {
  return (
    <div>
      <HeaderOfSite page="add-item"/>
      <StuffForm />
      <FooterOfSite />
    </div>
  );
}

export default AddItemPage;
