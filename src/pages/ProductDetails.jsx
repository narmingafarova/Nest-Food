import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import Magnifier from 'react-magnifier';

const ProductDetails = () => {
    const [products] = useContext(ProductContext);
    const { addItem } = useCart();

    const succesNotify = () =>
        toast.success(`"${details.title}" added`, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })

    const { url } = useParams();
    const details = products.find(item => item.id == url);
    return (
        <>
            {!details ?
                "Loading..."
                :
                <Container className='details my-5'>
                    <Row className='d-flex justify-content-center'>
                        <Col sm={12} md={5}>
                            <div className="details-img d-flex justify-content-end">
                                <Magnifier src={details.image.imgFront} width="70%" />
                            </div>
                        </Col>
                        <Col sm={12} md={7}>
                            <div className='w-75 mx-auto pt-4'>
                                <h5 className='sale mb-4'>Sale!</h5>
                                <h2>{details.title}</h2>
                                <div className="prices mb-3">
                                    <span className="main-price me-2">${details.price.price}</span>
                                    <span className="disc-price">${details.price.discount}</span>
                                </div>
                                <div className="desc mb-3">{details.description}</div>
                                <Button className="add-cart-btn d-flex align-items-center" onClick={() => { succesNotify(addItem(details)) }}>
                                    Add to cart
                                </Button>
                            </div>
                        </Col>
                        <ToastContainer
                            position="bottom-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </Row>
                </Container>
            }
        </>
    )
}

export default ProductDetails