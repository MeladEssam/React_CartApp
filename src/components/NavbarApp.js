import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";
// import { updateStateFromLocalStorage } from "../rtk/slices/cartSlice";
import { useEffect } from "react";
function NavbarApp() {
  let cartProducts = useSelector((state) => state.cart);

  console.log(cartProducts);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <nav className="navbar navbar-expand-lg myNav  fixed-top ">
      <div className="container">
        <Link className="navbar-brand logo fs-4 fw-bold" to={"/"}>
          CartApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
            <li className="nav-item ">
              <Link
                className="nav-link active text-white fs-5 me-5 fw-bold myLink"
                aria-current="page"
                to={"/"}
              >
                Products
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active text-white fs-5 fw-bold myLink position-relative"
                to={"cart"}
              >
                Cart <span className="cart-span">{cartProducts.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarApp;
