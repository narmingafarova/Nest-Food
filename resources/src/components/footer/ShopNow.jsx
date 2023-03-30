import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const ShopNow = () => {
    return (
        <Container>
            <div className='shop-now'>
                <Row className='shop-news pt-5'>
                    <Col sm={12} md={6}>
                        <div className='shop-data-form d-flex flex-column align-items-start justify-content-center'>
                            <h1>Stay home & get your daily <br /> needs from our shop</h1>
                            <p>Start Your Daily Shopping with <a href='/' className='text-decoration-none'>Nest Mart</a> </p>
                            <Form>
                                <input type="email" placeholder='Your email address' />
                                <input type="submit" className='submit-btn' value="Subscribe" />
                            </Form>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="d-flex justify-content-center">
                        <img
                            className="d-block w-75"
                            src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/banner-9-min.png"
                            alt="Shop"
                        />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default ShopNow