import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { addProductToCart } from "../rtk/slices/cartSlice";
import "./products.css";
function Products() {
  let products = useSelector((state) => state.products);
  let dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container mt-5 py-5">
      <h1 className="my-4 mb-5 text-white text-center">
        Our Products In The Store
      </h1>
      <div className="row">
        {products.map((product) => {
          return (
            <div className=" col-md-4 mb-4" key={product.id}>
              <div className="card h-100 product-card">
                <div className="product-image ">
                  <img
                    src={product.image}
                    className="card-img-top img-fluid "
                    alt="..."
                  />
                </div>

                <div className="card-body d-flex  flex-column justify-content-between">
                  <h5 className="card-title text-white-50">{product.title}</h5>
                  <h5 className="card-title fs-3 fw-bold product-price mt-4 text-white">
                    {product.price} $
                  </h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <button
                    onClick={() => {
                      dispatch(addProductToCart(product));
                    }}
                    className="btn btn-primary w-100 fw-bold fs-5 addTo-cart"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
