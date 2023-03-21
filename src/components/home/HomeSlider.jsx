import { Container, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function HomeSlider() {
    return (
        <Container>
            <Carousel className='py-4 carousel-fade'>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-1-min.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className='d-flex flex-column align-items-start justify-content-center'>
                        <h1>Don’t miss amazing<br /> grocery deals</h1>
                        <p>Sign up for the daily newsletter</p>
                        <Form>
                            <input type="email" placeholder='Your email address' />
                            <input type="submit" className='submit-btn' value="Subscribe" />
                        </Form>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-2-min.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='d-flex flex-column align-items-start justify-content-center'>
                        <h1>Fresh Vegetables<br /> Big discount</h1>
                        <p>Save up to 50% off on your first order</p>
                        <Form>
                            <input type="email" placeholder='Your email address' />
                            <input type="submit" className='submit-btn' value="Subscribe" />
                        </Form>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default HomeSlider;