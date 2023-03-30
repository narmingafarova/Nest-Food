import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Cart, Star } from 'react-bootstrap-icons'

const DealsDay = () => {
  return (
    <div className="deals-day">
      <Container>
        <div className="deals-title mb-4">
          <h3>Deals Of The Day</h3>
        </div>
        <Row className='gy-5 mt-4'>
          <Col sm={12} md={3} className="mt-0">
            <div className="deals-card d-flex flex-column justify-content-center">
              <div className="deals-img">
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/03/banner-5-min.png" alt="deals" height={250}/>
              </div>
              <div className="deals-content">
                <ul className='deals-time d-flex align-items-center justify-content-center ps-0'>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>708</span>Days</li>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>02</span>Hours</li>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>18</span>Mins</li>
                  <li className='list-unstyled d-flex flex-column align-items-center'><span>20</span>Secs</li>
                </ul>
                <div className="deals-info">
                  <h4 className='mt-1 mb-2'>
                    <a href="/" className='text-decoration-none'>Organic Cage Grade A Large Eggs</a>
                  </h4>
                  <div className="deals-rate">
                    <ul className='d-flex justify-content-start align-items-center ps-0 mb-1'>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'>0</li>
                    </ul>
                  </div>
                  <span className='store'>By <a href="/" className='text-decoration-none'>Hambger Hel</a></span>
                  <div className="prices-add d-flex justify-content-between align-items-center mt-2">
                    <div className="prices d-flex align-items-center">
                      <div className="disc-price me-2">$21.00</div>
                      <div className="gen-price">$24.00</div>
                    </div>
                    <Button variant='none' className="add-cart d-flex align-items-center"><Cart className='me-1' /> Add</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="mt-0">
            <div className="deals-card d-flex flex-column justify-content-center">
              <div className="deals-img">
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/03/banner-6-min.png" alt="deals" height={250} />
              </div>
              <div className="deals-content">
                <ul className='deals-time d-flex align-items-center justify-content-center ps-0'>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>708</span>Days</li>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>02</span>Hours</li>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>18</span>Mins</li>
                  <li className='list-unstyled d-flex flex-column align-items-center'><span>20</span>Secs</li>
                </ul>
                <div className="deals-info">
                  <h4 className='mt-1 mb-2'>
                    <a href="/" className='text-decoration-none'>Naturally Flavored Cinnamon Vanilla</a>
                  </h4>
                  <div className="deals-rate">
                    <ul className='d-flex justify-content-start align-items-center ps-0 mb-1'>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'>0</li>
                    </ul>
                  </div>
                  <span className='store'>By <a href="/" className='text-decoration-none'>Hambger Hel</a></span>
                  <div className="prices-add d-flex justify-content-between align-items-center mt-2">
                    <div className="prices d-flex align-items-center">
                      <div className="disc-price me-2">$51.00</div>
                      <div className="gen-price">$55.00</div>
                    </div>
                    <Button variant='none' className="add-cart d-flex align-items-center"><Cart className='me-1' /> Add</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="mt-0">
            <div className="deals-card d-flex flex-column justify-content-center">
              <div className="deals-img">
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/03/banner-7-min.png" alt="deals" height={250} />
              </div>
              <div className="deals-content">
                <ul className='deals-time d-flex align-items-center justify-content-center ps-0'>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>708</span>Days</li>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>02</span>Hours</li>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>18</span>Mins</li>
                  <li className='list-unstyled d-flex flex-column align-items-center'><span>20</span>Secs</li>
                </ul>
                <div className="deals-info">
                  <h4 className='mt-1 mb-2'>
                    <a href="/" className='text-decoration-none'>Seeds of Change Organic Watermelon</a>
                  </h4>
                  <div className="deals-rate">
                    <ul className='d-flex justify-content-start align-items-center ps-0 mb-1'>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'>0</li>
                    </ul>
                  </div>
                  <span className='store'>By <a href="/" className='text-decoration-none'>Hambger Hel</a></span>
                  <div className="prices-add d-flex justify-content-between align-items-center mt-2">
                    <div className="prices d-flex align-items-center">
                      <div className="disc-price me-2">$61.50</div>
                      <div className="gen-price">$66.00</div>
                    </div>
                    <Button variant='none' className="add-cart d-flex align-items-center"><Cart className='me-1' /> Add</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="mt-0">
            <div className="deals-card d-flex flex-column justify-content-center">
              <div className="deals-img">
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/03/banner-8-min.png" alt="deals" height={250} />
              </div>
              <div className="deals-content">
                <ul className='deals-time d-flex align-items-center justify-content-center ps-0'>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>708</span>Days</li>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>02</span>Hours</li>
                  <li className='list-unstyled d-flex flex-column align-items-center me-2'><span>18</span>Mins</li>
                  <li className='list-unstyled d-flex flex-column align-items-center'><span>20</span>Secs</li>
                </ul>
                <div className="deals-info">
                  <h4 className='mt-1 mb-2'>
                    <a href="/" className='text-decoration-none'>Dried fruit: apricots, figs, prunes</a>
                  </h4>
                  <div className="deals-rate">
                    <ul className='d-flex justify-content-start align-items-center ps-0 mb-1'>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'><Star fontSize={8} /></li>
                      <li className='list-unstyled'>0</li>
                    </ul>
                  </div>
                  <span className='store'>By <a href="/" className='text-decoration-none'>USA Noodle Soup</a></span>
                  <div className="prices-add d-flex justify-content-between align-items-center mt-2">
                    <div className="prices d-flex align-items-center">
                      <div className="disc-price me-2">$56.00</div>
                      <div className="gen-price">$76.00</div>
                    </div>
                    <Button variant='none' className="add-cart d-flex align-items-center"><Cart className='me-1' /> Add</Button>
                  </div>
                </div>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DealsDay