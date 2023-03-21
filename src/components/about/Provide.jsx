import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Provide = () => {
    return (
        <Container className='provide mb-5 mt-5'>
            <div className="title text-center pb-4 mb-5">What We Provide?</div>
            <Row className='g-3'>
                <Col sm={12} md={4}>
                    <div className="provide-card text-center">
                        <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-1.png" alt="icon" width={80}/>
                        <h4 className='my-4'>
                            <a href="/" className='text-decoration-none'>Best Prices & Offers</a>
                        </h4>
                        <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <a href="/" className='text-decoration-none more-btn'>Read More</a>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className="provide-card text-center">
                        <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-2.png" alt="icon" width={80}/>
                        <h4 className='my-4'>
                            <a href="/" className='text-decoration-none'>Wide Assortment</a>
                        </h4>
                        <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <a href="/" className='text-decoration-none more-btn'>Read More</a>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className="provide-card text-center">
                        <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-3.png" alt="icon" width={80}/>
                        <h4 className='my-4'>
                            <a href="/" className='text-decoration-none'>Free Delivery</a>
                        </h4>
                        <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <a href="/" className='text-decoration-none more-btn'>Read More</a>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className="provide-card text-center">
                        <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-4.png" alt="icon" width={80}/>
                        <h4 className='my-4'>
                            <a href="/" className='text-decoration-none'>Easy Returns</a>
                        </h4>
                        <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <a href="/" className='text-decoration-none more-btn'>Read More</a>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className="provide-card text-center">
                        <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-5.png" alt="icon" width={80}/>
                        <h4 className='my-4'>
                            <a href="/" className='text-decoration-none'>100% Satisfaction</a>
                        </h4>
                        <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <a href="/" className='text-decoration-none more-btn'>Read More</a>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className="provide-card text-center">
                        <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-6.png" alt="icon" width={80}/>
                        <h4 className='my-4'>
                            <a href="/" className='text-decoration-none'>Great Daily Deal</a>
                        </h4>
                        <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <a href="/" className='text-decoration-none more-btn'>Read More</a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Provide