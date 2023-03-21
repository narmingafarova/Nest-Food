import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'

const History = () => {
  return (
    <Container className='history mb-5'>
        <Row className='g-5 mb-4'>
            <Col sm={12} md={4}>
                <div className="title pb-3 mb-1">Who we are</div>
                <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
            </Col>
            <Col sm={12} md={4}>
                <div className="title pb-3 mb-1">Our history</div>
                <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
            </Col>
            <Col sm={12} md={4}>
                <div className="title pb-3 mb-1">Our mission</div>
                <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
            </Col>
        </Row>
        <div className="numbers d-flex justify-content-evenly position-relative">
            <div className="bg-overlay position-absolute"></div>
            <div className="num-item text-center">
                <p className='mb-0'>3+</p>
                <span>Glorious years</span>
            </div>
            <div className="num-item text-center">
                <p className='mb-0'>15+</p>
                <span>Happy clients</span>
            </div>
            <div className="num-item text-center">
                <p className='mb-0'>17+</p>
                <span>Projects complete</span>
            </div>
            <div className="num-item text-center">
                <p className='mb-0'>7+</p>
                <span>Team advisor</span>
            </div>
            <div className="num-item text-center">
                <p className='mb-0'>8+</p>
                <span>Products Sale</span>
            </div>
        </div>
    </Container>
  )
}

export default History