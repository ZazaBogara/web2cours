import Home from "./pages/home";
import Catalog from "./pages/catalog";
import AddItemPage from "./pages/add-item";
import ViewItem from "./pages/view-item";
import { Route, Routes } from "react-router-dom";
import store from "./Redux-Cart/store";
import { Provider } from "react-redux";

export const site = "http://localhost:8080/";

function App() {
  return (
    <div>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/cart" element={<Catalog />}></Route>
        <Route path="/add-item" element={<AddItemPage />}></Route>
        <Route path="/view-item/:id" element={<ViewItem />}></Route>
      </Routes>
      </Provider>
    </div>
    
  );
}

export default App;
