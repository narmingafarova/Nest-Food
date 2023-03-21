import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ContactForm = () => {
    return (
        <Container className='contact-form mb-5'>
            <Row className='ps-5 ms-3'>
                <Col sm={12} md={6} className="d-flex flex-column justify-content-end">
                    <h4>Contact from</h4>
                    <p className='title mb-0 pb-3'>Drop Us a Line</p>
                    <span>Your email address will not be published. Required fields are marked *</span>
                    <form className='d-flex flex-wrap mt-3'>
                        <input type="text" placeholder='First Name' className='mb-2 me-2'/>
                        <input type="email" placeholder='Your Email' className='mb-2'/>
                        <input type="text" placeholder='Subject' className='mb-2 me-2'/>
                        <input type="text" placeholder='Your Phone' className='mb-2'/>
                        <textarea name="msg" id="msg" cols="30" rows="7" placeholder='Message'></textarea>
                        <Button type="submit" className='mt-2'>Send message</Button>
                    </form>
                </Col>
                <Col sm={12} md={6} className="form-img d-flex align-items-end justify-content-start">
                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/contact-2-min.png" alt="contact" width="70%"/>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactForm