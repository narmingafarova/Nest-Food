import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Clock, Envelope, Facebook, GeoAlt, Headphones, Instagram, Skype, Twitter } from "react-bootstrap-icons";

const FooterMenu = () => {
  return (
    <>
      <div className="footer-menu">
        <Container>
          <Row>
            <Col sm={12} md={2} className="logo-part d-flex justify-content-center">
              <div className="foot-col">
                <img
                  src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/logo.png"
                  alt="logo"
                  width={150}
                />
                <div className="foot-content mt-4">
                  <h4>Awesome grocery store website template</h4>
                  <div className="foot-contact">
                    <div className="contact-info mb-2">
                      <GeoAlt fontSize={12} color="#3bb77e" />
                      <strong className="mx-1">Address</strong> 5171 W Campbell
                      Ave undefined Kent, Utah 53127 United States
                    </div>
                    <div className="contact-info mb-2">
                      <Headphones fontSize={12} color="#3bb77e" />
                      <strong className="mx-1">Call Us</strong>
                      <a
                        className="text-decoration-none contact-data"
                        href="tel: (+91)-540-025-124553"
                      >
                        (+91)-540-025-124553
                      </a>
                    </div>
                    <div className="contact-info mb-2">
                      <Envelope fontSize={12} color="#3bb77e" />
                      <strong className="mx-1">Email</strong>
                      <a
                        className="text-decoration-none contact-data"
                        href="mailto: sale@Nest.com"
                      >
                        sale@Nest.com
                      </a>
                    </div>
                    <div className="contact-info">
                      <Clock fontSize={12} color="#3bb77e" />
                      <strong className="mx-1">Hours</strong> 10:00 - 18:00, Mon -
                      Sat
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} md={2} className="d-flex justify-content-center">
              <div className="foot-col">
                <div className="foot-content mt-4">
                  <div className="title mb-3">Company</div>
                  <div className="foot-contact">
                    <ul className="contact-info contact-info-list ps-0">
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          About Us
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Delivery Information
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Terms & Conditions
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Contact Us
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Support Center
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} md={2} className="d-flex justify-content-center">
              <div className="foot-col">
                <div className="foot-content mt-4">
                  <div className="title mb-3">Account</div>
                  <div className="foot-contact">
                    <ul className="contact-info contact-info-list ps-0">
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Sign In
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          View Cart
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          My Wishlist
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Track My Order
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Help Ticket
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Shipping Details
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Compare Products
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} md={2} className="d-flex justify-content-center">
              <div className="foot-col">
                <div className="foot-content mt-4">
                  <div className="title mb-3">Corporate</div>
                  <div className="foot-contact">
                    <ul className="contact-info contact-info-list ps-0">
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Become A Vendor
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Affiliate Program
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Farm Business
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Farm Careers
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Our Suppliers
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Accessibility
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Promotions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} md={2} className="d-flex justify-content-center">
              <div className="foot-col">
                <div className="foot-content mt-4">
                  <div className="title mb-3">Popular</div>
                  <div className="foot-contact">
                    <ul className="contact-info contact-info-list ps-0">
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Milk & Flavoured Milk
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Butter and Margarine
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Eggs Substitutes
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Marmalades
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Sour Cream and Dips
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Tea & Kombucha
                        </a>
                      </li>
                      <li className="list-unstyled mb-2">
                        <a href="/" className="text-decoration-none">
                          Cheese
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={2} className="d-flex justify-content-center">
              <div className="foot-col">
                <div className="foot-content mt-4">
                  <div className="title mb-3">Install App</div>
                  <h4 className="app-google">From App Store or Google Play</h4>
                  <div className="foot-contact">
                    <div className="contact-info ps-0">
                      <div className="download d-flex justify-content-between mb-4">
                        <a href="/">
                          <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/google-play.jpg" alt="g-play" width="90%" />
                        </a>
                        <a href="/">
                          <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/app-store.jpg" alt="a-store" width="90%" />
                        </a>
                      </div>
                      <div className="payment mb-2">Secured payment Gateways</div>
                      <a href="/" className="payment-img">
                        <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/payment-method.png" alt="payment" width="80%" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="sub-footer py-4">
        <Container>
          <div className="sub-footer-items d-flex flex-wrap justify-content-between align-items-center">
            <div className="copyright">
              &copy; 2023, Nest – WordPress Ecommerce Template. <br /> All rights reserved
            </div>
            <div className="sub-footer-contact d-flex align-items-center justify-content-center">
              <div className="sub-contact me-5">
                <div className="call d-flex align-items-center">
                  <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/phone-call.png" alt="call" width={30} height={30} className="me-2" />
                  <div className="support-center d-flex flex-column">
                    <a href='tel: 1900646666' className='text-decoration-none'>1900646666</a>
                    <span>Working 8:00 - 22:00</span>
                  </div>
                </div>
              </div>
              <div className="sub-contact">
                <div className="call d-flex align-items-center">
                  <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/phone-call.png" alt="call" width={30} height={30} className="me-2" />
                  <div className="support-center d-flex flex-column">
                    <a href='tel: 1900648888' className='text-decoration-none'>1900648888</a>
                    <span>24/7 Support Center</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="social d-flex flex-column align-items-end">
              <div className="social-icons d-flex align-items-center justify-content-end">
                <h6 className="me-2 mb-0">Follow Us</h6>
                <a href="/" className="me-2 d-flex justify-content-center align-items-center"><Facebook color="#fff" fontSize={10}/></a>
                <a href="/" className="me-2 d-flex justify-content-center align-items-center"><Twitter color="#fff" fontSize={10}/></a>
                <a href="/" className="me-2 d-flex justify-content-center align-items-center"><Skype color="#fff" fontSize={10}/></a>
                <a href="/" className="d-flex justify-content-center align-items-center"><Instagram color="#fff" fontSize={10}/></a>
              </div>
              <p className="mb-0 mt-1">Up to 15% discount on your first subscribe</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FooterMenu;
