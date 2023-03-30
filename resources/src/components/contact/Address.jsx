import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Clock, Envelope, GeoAlt, Headphones, Person } from 'react-bootstrap-icons'

const Address = () => {
    return (
        <Container className='address mb-5'>
            <iframe src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near" frameborder="0" title="London" width="100%" height={300} />
            <Row className='mt-5 ps-5'>
                <Col sm={12} md={3}>
                    <h5>About Company</h5>
                    <div className="contact-info mb-2">
                        <GeoAlt fontSize={12} color="#3bb77e" />
                        <abbr title='Address' className="mx-1">Address</abbr> 5171 W Campbell
                        Ave undefined Kent, Utah 53127 United States
                    </div>
                    <div className="contact-info mb-2">
                        <Headphones fontSize={12} color="#3bb77e" />
                        <abbr title='Call us' className="mx-1">Call Us</abbr>
                        <a
                            className="text-decoration-none contact-data"
                            href="tel: (+91)-540-025-124553"
                        >
                            (+91)-540-025-124553
                        </a>
                    </div>
                    <div className="contact-info mb-2">
                        <Envelope fontSize={12} color="#3bb77e" />
                        <abbr title='Email' className="mx-1">Email</abbr>
                        <a
                            className="text-decoration-none contact-data"
                            href="mailto: sale@Nest.com"
                        >
                            sale@Nest.com
                        </a>
                    </div>
                    <div className="contact-info">
                        <Clock fontSize={12} color="#3bb77e" />
                        <abbr title='Hours' className="mx-1">Hours</abbr> 10:00 - 18:00, Mon -
                        Sat
                    </div>
                    <a href="/" className='map-btn text-decoration-none d-flex align-items-center mt-4'><Person className='me-1' /> View Map</a>
                </Col>
                <Col sm={12} md={3}>
                    <h5>About Company</h5>
                    <div className="contact-info mb-2">
                        <GeoAlt fontSize={12} color="#3bb77e" />
                        <abbr title='Address' className="mx-1">Address</abbr> 5171 W Campbell
                        Ave undefined Kent, Utah 53127 United States
                    </div>
                    <div className="contact-info mb-2">
                        <Headphones fontSize={12} color="#3bb77e" />
                        <abbr title='Call us' className="mx-1">Call Us</abbr>
                        <a
                            className="text-decoration-none contact-data"
                            href="tel: (+91)-540-025-124553"
                        >
                            (+91)-540-025-124553
                        </a>
                    </div>
                    <div className="contact-info mb-2">
                        <Envelope fontSize={12} color="#3bb77e" />
                        <abbr title='Email' className="mx-1">Email</abbr>
                        <a
                            className="text-decoration-none contact-data"
                            href="mailto: sale@Nest.com"
                        >
                            sale@Nest.com
                        </a>
                    </div>
                    <div className="contact-info">
                        <Clock fontSize={12} color="#3bb77e" />
                        <abbr title='Hours' className="mx-1">Hours</abbr> 10:00 - 18:00, Mon -
                        Sat
                    </div>
                    <a href="/" className='map-btn text-decoration-none d-flex align-items-center mt-4'><Person className='me-1' /> View Map</a>
                </Col>
                <Col sm={12} md={3}>
                    <h5>About Company</h5>
                    <div className="contact-info mb-2">
                        <GeoAlt fontSize={12} color="#3bb77e" />
                        <abbr title='Address' className="mx-1">Address</abbr> 5171 W Campbell
                        Ave undefined Kent, Utah 53127 United States
                    </div>
                    <div className="contact-info mb-2">
                        <Headphones fontSize={12} color="#3bb77e" />
                        <abbr title='Call us' className="mx-1">Call Us</abbr>
                        <a
                            className="text-decoration-none contact-data"
                            href="tel: (+91)-540-025-124553"
                        >
                            (+91)-540-025-124553
                        </a>
                    </div>
                    <div className="contact-info mb-2">
                        <Envelope fontSize={12} color="#3bb77e" />
                        <abbr title='Email' className="mx-1">Email</abbr>
                        <a
                            className="text-decoration-none contact-data"
                            href="mailto: sale@Nest.com"
                        >
                            sale@Nest.com
                        </a>
                    </div>
                    <div className="contact-info">
                        <Clock fontSize={12} color="#3bb77e" />
                        <abbr title='Hours' className="mx-1">Hours</abbr> 10:00 - 18:00, Mon -
                        Sat
                    </div>
                    <a href="/" className='map-btn text-decoration-none d-flex align-items-center mt-4'><Person className='me-1' /> View Map</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Address