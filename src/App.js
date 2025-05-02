import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavbarApp from "./components/NavbarApp";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route path="" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
