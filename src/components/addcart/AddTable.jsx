// import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import Table from "react-bootstrap/Table";
import { useCart } from "react-use-cart";

function AddTable() {
  const { items, updateItemQuantity, removeItem, cartTotal, emptyCart } =
    useCart();
  // const [quant, setQuant] = useState("");
//   const [price, setPrice] = useState("");

  return (
    <Container className="add-table mb-5">
      <Table className="shop-cart-items w-75 my-0 mx-auto">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, count) => (
            <tr key={item.id}>
              <td>
                <a
                  href="/cart"
                  className="text-decoration-none delete-btn"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  x
                </a>
              </td>
              <td>
                <a href="/">
                  <img width={50} src={item.image.imgFront} alt={item.title} />
                </a>
              </td>
              <td>
                <a href="/cart" className="text-decoration-none">
                  {item.title}
                </a>
              </td>
              <td>${item.price.discount}</td>
              <td className="position-relative">
                <input
                  id="number"
                  type="number"
                  className="quantity text-center"
                  defaultValue={item.quantity}
                  min="0"
                  step="1"
                  value={item.quantity}
                  onChange={(e) => (item.quantity = e.target.value)}
                />
                <div className="input-btns d-flex flex-column position-absolute">
                  <Button
                    className="py-0"
                    onClick={() => {
                      updateItemQuantity(item.id, item.quantity + 1);
                    }}
                  >
                    <ChevronUp color="#3bb77e" fontSize={10} />
                  </Button>
                  <Button
                    className="py-0"
                    onClick={() => {
                      updateItemQuantity(item.id, item.quantity - 1);
                    }}
                  >
                    <ChevronDown color="#3bb77e" fontSize={10} />
                  </Button>
                </div>
              </td>
              <td>${(item.price.discount * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={6}>
              <div className="coupon-update d-flex justify-content-between">
                <div className="coupon d-flex">
                  <input type="text" placeholder="Coupon Code" />
                  <Button
                    type="submit"
                    className="add-cart-btn ms-2 d-flex align-items-center"
                  >
                    Apply coupon
                  </Button>
                </div>
                <div className="update">
                  <Button className="add-cart-btn d-flex align-items-center">
                    Update cart
                  </Button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <Row className="d-flex flex-row-reverse mt-4">
        <Col sm={12} md={6}>
          <h5>Cart totals</h5>
          <Table bordered className="totals">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>100</td>
              </tr>
            </tbody>
          </Table>
          <Button
            type="submit"
            className="add-cart-btn d-flex align-items-center"
          >
            Proceed to checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AddTable;
