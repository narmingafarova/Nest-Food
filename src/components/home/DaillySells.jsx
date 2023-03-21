import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ProductContext } from '../../context/ProductContext';
import DailyCard from "../cards/DailyCard";

const DaillySells = () => {
  const [products] = useContext(ProductContext);
  const [data, setData] = useState(products);

  const filterCategory = (category) => {
    const productData = products.filter(
      (item) => item.category === category && item.soldCount != null
    );
    if (productData) {
      setData(productData);
    } else {
      setData(products);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      btnRef.current.click();
    }, 1000); //miliseconds
  }, []);

  const btnRef = useRef();

  return (
    <div className="daily-sells">
      <Container>
        <div className="daily-title d-flex align-items-center justify-content-between mb-4">
          <h3>Daily Best Sells</h3>
          <ul className="d-flex align-items-center justify-content-between mb-0">
            <li className="list-unstyled">
              <Button ref={btnRef} variant="none" id="allBtn" onClick={() => { filterCategory("Baking material") }}>
                All
              </Button>
            </li>
            <li className="list-unstyled">
              <Button variant="none" onClick={() => { filterCategory("Deals Of The Day") }}>
                Deals Of the Day
              </Button>
            </li>
            <li className="list-unstyled">
              <Button variant="none" onClick={() => { filterCategory("Clothing & beauty") }}>
                Beauty
              </Button>
            </li>
            <li className="list-unstyled">
              <Button variant="none" onClick={() => { filterCategory("Bread and Juice") }}>
                Bread & Juice
              </Button>
            </li>
            <li className="list-unstyled">
              <Button variant="none" onClick={() => { filterCategory("Fresh Seafood") }}>
                Drinks
              </Button>
            </li>
            <li className="list-unstyled">
              <Button variant="none" onClick={() => { filterCategory("Fresh Fruit") }}>
                Milks
              </Button>
            </li>
          </ul>
        </div>
        <Row>
          <Col sm={0} md={3}>
            <div className="daily-cart d-flex flex-column justify-content-start">
              <h4 className="mb-3">Bring nature into your home</h4>
              <a href="/" className="cart-btn text-decoration-none">Shop Now &rarr;</a>
            </div>
          </Col>
          {data.length === 0
            ? products.slice(0, 4).map((item) => {
              return (
                <DailyCard
                  key={item.id}
                  frontImage={item.image.imgFront}
                  backImage={item.image.imgBack}
                  category={item.category}
                  title={item.title}
                  price={item.price.price}
                  discount={item.price.discount}
                />
              );
            })
            : data.slice(0, 4).map((item) => {
              return (
                <DailyCard
                  key={item.id}
                  frontImage={item.image.imgFront}
                  backImage={item.image.imgBack}
                  category={item.category}
                  title={item.title}
                  price={item.price.price}
                  discount={item.price.discount}
                  solded={item.soldCount.soldCount}
                  total={item.soldCount.totalCount}
                />
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default DaillySells;
