import React from "react";
import { Star } from "react-bootstrap-icons";

const PopulateCard = ({ image, title, price, discount }) => {
    return (
        <div className="product-card h-100 py-3 d-flex">
            <div className="product-img text-center">
                <img src={image} alt="product" width={80} />
            </div>
            <div className="product-details">
                <h4 className='mt-1 mb-2'>
                    <a href="/" className='text-decoration-none'>{title}</a>
                </h4>
                <div className="product-rate">
                    <ul className='d-flex justify-content-start align-items-center ps-0 mb-1'>
                        <li className='list-unstyled'><Star fontSize={8} /></li>
                        <li className='list-unstyled'><Star fontSize={8} /></li>
                        <li className='list-unstyled'><Star fontSize={8} /></li>
                        <li className='list-unstyled'><Star fontSize={8} /></li>
                        <li className='list-unstyled'><Star fontSize={8} /></li>
                        <li className='list-unstyled'>0</li>
                    </ul>
                </div>
                <div className="prices-add d-flex justify-content-between align-items-center mt-2">
                    <div className="prices d-flex align-items-center">
                        <div className="disc-price me-2">${discount}</div>
                        <div className="gen-price">${price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopulateCard;
