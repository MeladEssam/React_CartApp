import { Routes, Route, Outlet } from "react-router-dom";

import "./App.css";
import NavbarApp from "./components/NavbarApp";
import Products from "./components/Products";
import Cart from "./components/Cart";

// import ProductsCategory from "./Components/Pages/ProductsCategory";
function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
// export default GetName;
