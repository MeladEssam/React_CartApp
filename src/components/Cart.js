import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../rtk/slices/cartSlice";
import Table from "react-bootstrap/Table";
import { Button, Image } from "react-bootstrap";
import "./cart.css";
function Cart() {
  let dispatch = useDispatch();
  let productsInCart = useSelector((state) => state.cart);
  console.log(productsInCart);

  let totalPrice = productsInCart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="container py-5 mt-5">
      <h1 className="text-center mt-5 mb-5 text-light">
        The Products In Your Cart
      </h1>
      {productsInCart.length > 0 ? (
        <>
          <h3 className="mt-5  text-light">
            <Button
              className="px-5 fw-bold fs-5"
              variant="danger"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Clear Your Cart
            </Button>
          </h3>
        </>
      ) : null}
      <h3 className="mt-4 mb-4 text-light">
        The Total Price Is{" "}
        <span className="total-price fw-bold fs-2">
          {totalPrice.toFixed(2)} $
        </span>
      </h3>
      <Table
        responsive
        striped
        bordered
        hover
        variant="dark"
        className="cart-table"
      >
        <thead>
          <tr>
            <th className="text-capitalize align-middle text-center fw-bold fs-5">
              Id
            </th>
            <th className="text-capitalize align-middle text-center fw-bold fs-5">
              title
            </th>
            <th className="text-capitalize align-middle text-center fw-bold fs-5">
              description
            </th>
            <th className="text-capitalize align-middle text-center fw-bold fs-5">
              image
            </th>
            <th className="text-capitalize align-middle text-center fw-bold fs-5">
              price
            </th>
            <th className="text-capitalize align-middle text-center fw-bold fs-5">
              quantity
            </th>
            <th className="text-capitalize align-middle text-center fw-bold fs-5">
              actions
            </th>
          </tr>
        </thead>
        <tbody>
          {productsInCart.map((product) => {
            return (
              <tr key={product.id}>
                <td className="align-middle text-center">{product.id}</td>
                <td className="align-middle text-center">{product.title}</td>
                <td className="align-middle text-center">
                  {`${product.description.slice(0, 50)}...`}
                </td>
                <td className="text-center">
                  <Image
                    src={product.image}
                    alt="..."
                    style={{ height: "100px", width: "100px" }}
                  />
                </td>
                <td className="align-middle text-center">{product.price} $</td>
                <td className="align-middle text-center">{product.quantity}</td>
                <td className="align-middle text-center">
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch(deleteFromCart(product));
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
