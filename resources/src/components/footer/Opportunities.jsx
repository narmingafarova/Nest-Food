import React from "react";
import { Container } from "react-bootstrap";

const Opportunities = () => {
    return (
        <Container>
            <div className="opportunities-card d-flex flex-wrap justify-content-between align-items-center">
                <div className="opp-card d-flex justify-content-center align-items-center p-3 mb-2">
                    <img
                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-1.png"
                        alt="icon"
                        width={50}
                    />
                    <div className="opp-text ps-3">
                        <h6 className="mb-1">
                            <a href="/" className="text-decoration-none">
                                Best prices & offers
                            </a>
                        </h6>
                        <span>Orders $50 or more</span>
                    </div>
                </div>
                <div className="opp-card d-flex justify-content-center align-items-center p-3 mb-2">
                    <img
                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-2.png"
                        alt="icon"
                        width={50}
                    />
                    <div className="opp-text ps-3">
                        <h6 className="mb-1">
                            <a href="/" className="text-decoration-none">Free delivery</a>
                        </h6>
                        <span>24/7 amazing services</span>
                    </div>
                </div>
                <div className="opp-card d-flex justify-content-center align-items-center p-3 mb-2">
                    <img
                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-3.png"
                        alt="icon"
                        width={50}
                    />
                    <div className="opp-text ps-3">
                        <h6 className="mb-1">
                            <a href="/" className="text-decoration-none">Great daily deal</a>
                        </h6>
                        <span>When you sign up</span>
                    </div>
                </div>
                <div className="opp-card d-flex justify-content-center align-items-center p-3 mb-2">
                    <img
                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-4.png"
                        alt="icon"
                        width={50}
                    />
                    <div className="opp-text ps-3">
                        <h6 className="mb-1">
                            <a href="/" className="text-decoration-none">Wide assortment</a>
                        </h6>
                        <span>Mega Discounts</span>
                    </div>
                </div>
                <div className="opp-card d-flex justify-content-center align-items-center p-3 mb-2">
                    <img
                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-5.png"
                        alt="icon"
                        width={50}
                    />
                    <div className="opp-text ps-3">
                        <h6 className="mb-1">
                            <a href="/" className="text-decoration-none">Easy returns</a>
                        </h6>
                        <span>Within 30 days</span>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Opportunities;
