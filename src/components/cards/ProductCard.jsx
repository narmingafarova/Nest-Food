import { useState } from 'react'
import { Button, Col, NavLink } from 'react-bootstrap'
import { Cart, Star } from 'react-bootstrap-icons'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LinkContainer } from 'react-router-bootstrap';
// import { ProductContext } from '../context/ProductContext'

const ProductCard = ({ allData, id, frontImage, backImage, category, title, store, price, discount, flexVal, smValue, mdValue }) => {
    const [img, setImg] = useState(frontImage);
    const { addItem } = useCart();

    const succesNotify = () =>
        toast.success(`"${title}" added`, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    // const [products] = useContext(ProductContext);
    // const [proPercent, setPropercent] = useState("");
    // const [perBgc, setPerbgc] = useState("");

    // style={{ backgroundColor: `${perBgc}` }} {proPercent}
    return (
        <>
            <Col sm={smValue} md={mdValue}>
                <div className={`product-card d-flex ${flexVal} h-100 py-3`} onMouseEnter={() => { setImg(backImage) }} onMouseLeave={() => { setImg(frontImage) }}>
                    <span className='sale-percent'>8%</span>
                    <div className="product-img text-center">
                        <img src={img} alt="product" width={160} />
                    </div>
                    <div className="product-details">
                        <a href='/' className='product-cat text-decoration-none'>{category}</a>
                        <h4 className='mt-1 mb-2'>
                            <LinkContainer to={`/${id}`}>
                                <NavLink className='text-decoration-none'>{title}</NavLink>
                            </LinkContainer>
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
                        <span className='store'>By <a href="/" className='text-decoration-none'>{store}</a></span>
                        <div className="prices-add d-flex justify-content-between align-items-center mt-2">
                            <div className="prices d-flex align-items-center">
                                <div className="disc-price me-2">${discount}</div>
                                <div className="gen-price">${price}</div>
                            </div>
                            <Button variant='none' className="add-cart d-flex align-items-center" onClick={() => { succesNotify(addItem(allData)) }}>
                                <Cart className='me-1' /> Add
                            </Button>
                        </div>
                    </div>
                </div>
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
            </Col>
        </>
    )
}

export default ProductCard