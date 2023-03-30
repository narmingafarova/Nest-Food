import React from "react";
import { Container } from "react-bootstrap";

const Categories = () => {
  return (
    <div className="categories">
      <Container>
        <div className="cat-title d-flex align-items-center mb-3">
          <h3 className="mb-0">Featured Categories</h3>
          <ul className="featured-categories d-flex justify-content-end mb-0">
            <li className="me-3 list-unstyled">
              <a href="/" className="text-decoration-none">
                Cake & Milk
              </a>
            </li>
            <li className="me-3 list-unstyled">
              <a href="/" className="text-decoration-none">
                Coffees & Teas
              </a>
            </li>
            <li className="me-3 list-unstyled">
              <a href="/" className="text-decoration-none">
                Pet Foods
              </a>
            </li>
            <li className="list-unstyled">
              <a href="/" className="text-decoration-none">
                Vegetables
              </a>
            </li>
          </ul>
        </div>
        <div className="categorie-items d-flex align-items-center justify-content-between flex-wrap">
          <div className="cat-item d-flex flex-column align-items-center">
            <a href="/">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"
                alt="categorie"
                width={65}
              />
            </a>
            <h5 className="mb-0 mt-3">
              <a href="/" className="text-decoration-none">
                Cake & Milk
              </a>
            </h5>
            <span>11 items</span>
          </div>
          <div className="cat-item d-flex flex-column align-items-center">
            <a href="/">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-12.png"
                alt="categorie"
                width={65}
              />
            </a>
            <h5 className="mb-0 mt-3">
              <a href="/" className="text-decoration-none">
                Organic Kiwi
              </a>
            </h5>
            <span>6 items</span>
          </div>
          <div className="cat-item d-flex flex-column align-items-center">
            <a href="/">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-11.png"
                alt="categorie"
                width={65}
              />
            </a>
            <h5 className="mb-0 mt-3">
              <a href="/" className="text-decoration-none">
                Peach
              </a>
            </h5>
            <span>6 items</span>
          </div>
          <div className="cat-item d-flex flex-column align-items-center">
            <a href="/">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-9.png"
                alt="categorie"
                width={65}
              />
            </a>
            <h5 className="mb-0 mt-3">
              <a href="/" className="text-decoration-none">
                Read Apple
              </a>
            </h5>
            <span>10 items</span>
          </div>
          <div className="cat-item d-flex flex-column align-items-center">
            <a href="/">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-3.png"
                alt="categorie"
                width={65}
              />
            </a>
            <h5 className="mb-0 mt-3">
              <a href="/" className="text-decoration-none">
                Snacks
              </a>
            </h5>
            <span>11 items</span>
          </div>
          <div className="cat-item d-flex flex-column align-items-center">
            <a href="/">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-1.png"
                alt="categorie"
                width={65}
              />
            </a>
            <h5 className="mb-0 mt-3">
              <a href="/" className="text-decoration-none">
                Vegetables
              </a>
            </h5>
            <span>6 items</span>
          </div>
          <div className="cat-item d-flex flex-column align-items-center">
            <a href="/">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-2.png"
                alt="categorie"
                width={65}
              />
            </a>
            <h5 className="mb-0 mt-3">
              <a href="/" className="text-decoration-none">
                Strawberry
              </a>
            </h5>
            <span>10 items</span>
          </div>
          <div className="cat-item d-flex flex-column align-items-center">
            <a href="/">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-4.png"
                alt="categorie"
                width={65}
              />
            </a>
            <h5 className="mb-0 mt-3">
              <a href="/" className="text-decoration-none">
                Black plum
              </a>
            </h5>
            <span>10 items</span>
          </div>
          <div className="cat-item d-flex flex-column align-items-center">
            <a href="/">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-5.png"
                alt="categorie"
                width={65}
              />
            </a>
            <h5 className="mb-0 mt-3">
              <a href="/" className="text-decoration-none">
                Custard apple
              </a>
            </h5>
            <span>10 items</span>
          </div>
          <div className="cat-item d-flex flex-column align-items-center">
            <a href="/">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-14.png"
                alt="categorie"
                width={65}
              />
            </a>
            <h5 className="mb-0 mt-3">
              <a href="/" className="text-decoration-none">
                Coffee & Tea
              </a>
            </h5>
            <span>11 items</span>
          </div>
        </div>
        <div className="cat-shop-carts d-flex justify-content-between align-items-center flex-wrap mt-3">
            <div className="shop-cart">
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-1.png" alt="" width="100%" />
                <div className="shop-cart-text d-flex flex-column justify-content-between">
                    <h4 className="mb-3">Everyday Fresh &<br />Clean with Our<br />Products</h4>
                    <a href="/" className="cart-btn text-decoration-none">Shop Now &rarr;</a>
                </div>
            </div>
            <div className="shop-cart">
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-2.png" alt="" width="100%" />
                <div className="shop-cart-text d-flex flex-column justify-content-between">
                    <h4 className="mb-3">Make your Breakfast<br />Healthy and Easy</h4>
                    <a href="/" className="cart-btn text-decoration-none">Shop Now &rarr;</a>
                </div>
            </div>
            <div className="shop-cart">
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-3.png" alt="" width="100%" />
                <div className="shop-cart-text d-flex flex-column justify-content-between">
                    <h4 className="mb-3">The best Organic <br />Products Online</h4>
                    <a href="/" className="cart-btn text-decoration-none">Shop Now &rarr;</a>
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
