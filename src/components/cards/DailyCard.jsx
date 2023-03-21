import React, { useState } from 'react'
import { Button, Col, ProgressBar } from 'react-bootstrap'
import { Cart, Star } from 'react-bootstrap-icons'

const DailyCard = ({ frontImage, backImage, title, category, price, discount, total, solded }) => {
    const [img, setImg] = useState(frontImage);
    return (
        <Col sm={6} md={2}>
            <div className="product-card h-100 py-2" onMouseEnter={() => { setImg(backImage) }} onMouseLeave={() => { setImg(frontImage) }}>
                <div className="product-img text-center">
                    <img src={img} alt="product" width="100%" />
                </div>
                <div className="product-details">
                    <a href='/' className='product-cat text-decoration-none'>{category}</a>
                    <h4 className='mt-1 mb-2'>
                        <a href="/" className='text-decoration-none'>{title}</a>
                    </h4>
                    <div className="product-rate">
                        <ul className='d-flex justify-content-start align-items-center ps-0 mb-1'>
                            <li className='list-unstyled'><Star fontSize={10} /></li>
                            <li className='list-unstyled'><Star fontSize={10} /></li>
                            <li className='list-unstyled'><Star fontSize={10} /></li>
                            <li className='list-unstyled'><Star fontSize={10} /></li>
                            <li className='list-unstyled'><Star fontSize={10} /></li>
                            <li className='list-unstyled'>0</li>
                        </ul>
                    </div>
                    <div className="prices-add d-flex justify-content-between align-items-center mt-2">
                        <div className="prices d-flex align-items-center">
                            <div className="disc-price me-2">${discount}</div>
                            <div className="gen-price">${price}</div>
                        </div>
                    </div>
                    <ProgressBar now={solded} max={total}/>
                    <span>Sold: {solded}/{total}</span>
                    <Button variant='none' className="add-cart d-flex align-items-center justify-content-center mt-1"><Cart className='me-2' /> Add to cart</Button>
                </div>
            </div>
            </Col>
    )
}

export default DailyCard