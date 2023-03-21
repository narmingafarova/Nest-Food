import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductContext } from '../../context/ProductContext';
import PopulateCard from '../cards/PopulateCard';

const Populate = () => {
  const [products] = useContext(ProductContext);
  const [topSell, setTopsell] = useState(products);
  const [trend, setTrend] = useState(products);
  const [recadd, setRecadd] = useState(products);
  const [rate, setRate] = useState(products);

  useEffect(() => {
    const topSellItems = () => {
      const topSellData = products.filter(
        (item) => item.populate === "Top Selling"
      );
      const trendData = products.filter(
        (item) => item.populate === "Trending Products"
      );
      const recAddData = products.filter(
        (item) => item.populate === "Top Selling"
      );
      const rateData = products.filter(
        (item) => item.populate === "Recently Added"
      );
      setTopsell(topSellData);
      setTrend(trendData);
      setRecadd(recAddData);
      setRate(rateData)
    }
    topSellItems();
  }, [products])

  return (
    <div className="populate">
      <Container>
        <Row>
          <Col sm={12} md={3} className="populate-cards">
            <div className='top-sell'>
              <div className="title">Top Selling</div>
              <div className="pop-card-items">
                {topSell.map((item) => {
                  return (
                    <PopulateCard
                      key={item.id}
                      image={item.image.imgFront}
                      title={item.title}
                      price={item.price.price}
                      discount={item.price.discount}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="populate-cards">
            <div className='top-sell'>
              <div className="title">Trending Products</div>
              <div className="pop-card-items">
                {trend.map((item) => {
                  return (
                    <PopulateCard
                      key={item.id}
                      image={item.image.imgFront}
                      title={item.title}
                      price={item.price.price}
                      discount={item.price.discount}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="populate-cards">
            <div className='top-sell'>
              <div className="title">Recently Added</div>
              <div className="pop-card-items">
                {recadd.map((item) => {
                  return (
                    <PopulateCard
                      key={item.id}
                      image={item.image.imgFront}
                      title={item.title}
                      price={item.price.price}
                      discount={item.price.discount}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="populate-cards">
            <div className='top-sell'>
              <div className="title">Top Rated</div>
              <div className="pop-card-items">
                {rate.map((item) => {
                  return (
                    <PopulateCard
                      key={item.id}
                      image={item.image.imgFront}
                      title={item.title}
                      price={item.price.price}
                      discount={item.price.discount}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Populate