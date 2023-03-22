import React, { useContext, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../cards/ProductCard";

const Products = () => {
  const [products] = useContext(ProductContext);
  const [data, setData] = useState(products);

  const filterCategories = (categoryName) => {
    const productData = products.filter(
      (item) => item.category === categoryName
    );
    if (productData) {
      setData(productData);
    } else {
      setData(products);
    }
  };

  return (
    <div className="products">
      <Container>
        <div className="products-title d-flex align-items-center justify-content-between mb-4">
          <h3>Popular Products</h3>
          <ul className="d-flex align-items-center justify-content-between mb-0">
            <li className="list-unstyled">
              <Button
                variant="none"
                onClick={() => {
                  filterCategories("All");
                }}
                autoFocus
              >
                All
              </Button>
            </li>
            <li className="list-unstyled">
              <Button
                variant="none"
                onClick={() => {
                  filterCategories("Baking material");
                }}
              >
                Baking material
              </Button>
            </li>
            <li className="list-unstyled">
              <Button
                variant="none"
                onClick={() => {
                  filterCategories("Fresh Fruit");
                }}
              >
                Fresh Fruits
              </Button>
            </li>
            <li className="list-unstyled">
              <Button
                variant="none"
                onClick={() => {
                  filterCategories("Bread and Juice");
                }}
              >
                Milks & Dairies
              </Button>
            </li>
            <li className="list-unstyled">
              <Button
                variant="none"
                onClick={() => {
                  filterCategories("Fresh Seafood");
                }}
              >
                Meats
              </Button>
            </li>
            <li className="list-unstyled">
              <Button
                variant="none"
                onClick={() => {
                  filterCategories("Deals Of The Day");
                }}
              >
                Vegetables
              </Button>
            </li>
          </ul>
        </div>
        <Row className="gy-4">
          {data.length === 0
            ? products.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  allData={item}
                  frontImage={item.image.imgFront}
                  backImage={item.image.imgBack}
                  category={item.category}
                  title={item.title}
                  store={item.store}
                  price={item.price.price}
                  discount={item.price.discount}
                  smValue={6}
                  mdValue={2}
                />
              );
            })
            : data.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  allData={item}
                  frontImage={item.image.imgFront}
                  backImage={item.image.imgBack}
                  category={item.category}
                  title={item.title}
                  store={item.store}
                  price={item.price.price}
                  discount={item.price.discount}
                  smValue={6}
                  mdValue={2}
                />
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
