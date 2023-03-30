import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const HeroAbout = () => {
    return (
        <Container className='hero-about mt-5'>
            <Row className='justify-content-center'>
                <Col sm={12} md={6} className="about-img d-flex justify-content-end">
                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-1.png" alt="about" width="80%" />
                </Col>
                <Col sm={12} md={6} className="px-3 d-flex flex-column justify-content-center">
                    <h2 className='mb-0 pb-4'>Welcome to Nest</h2>
                    <p className='pb-4 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                    <p className='pb-5 mb-0'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                    <div className="extra-img text-center">
                        <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-2.png" alt="about" width={170} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroAbout