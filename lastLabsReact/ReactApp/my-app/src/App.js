import Home from "./pages/home";
import Catalog from "./pages/catalog";
import AddItemPage from "./pages/add-item";
import { Route, Routes } from "react-router-dom";

export const site = 'http://localhost:8080/';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/cart" element={<Catalog />}></Route>
        <Route path="/add-item" element={<AddItemPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
