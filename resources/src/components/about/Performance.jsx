import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Performance = () => {
    return (
        <Container className='performance mb-5'>
            <Row>
                <Col sm={12} md={6} className="perform-img d-flex justify-content-end">
                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-5.png" alt="about" width="80%"/>
                </Col>
                <Col sm={12} md={6} className="about-data pe-5 d-flex flex-column justify-content-center">
                    <h4 className='mb-4'>Our performance</h4>
                    <div className="title pb-4">Your Partner for<br />e-commerce grocery solution</div>
                    <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    <p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Performance