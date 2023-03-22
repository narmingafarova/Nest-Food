import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Calendar } from 'react-bootstrap-icons';
import { ProductContext } from '../../context/ProductContext'
import ProductCard from '../cards/ProductCard';

const ShopItems = () => {
    const [products] = useContext(ProductContext);
    
    const [data, setData] = useState(products);

    const [bmLength, setBmlength] = useState(0);
    const [breadLength, setBreadlength] = useState(0);
    const [cloLength, setClolength] = useState(0);
    const [dealLength, setDeallength] = useState(0);
    const [seaLength, setSealength] = useState(0);
    const [milkLength, setMilklength] = useState(0);
    const [fruitLength, setFruitlength] = useState(0);
    const [wineLength, setWinelength] = useState(0);
    const [uncaLength, setUncalength] = useState(0);

    useEffect(() => {
        const categories = () => {
            const bake = products.filter(
                (item) => item.category === "Baking material"
            );
            const bread = products.filter(
                (item) => item.category === "Bread and Juice"
            );
            const clothing = products.filter(
                (item) => item.category === "Clothing & beauty"
            );
            const deals = products.filter(
                (item) => item.category === "Deals Of The Day"
            );
            const sea = products.filter(
                (item) => item.category === "Fresh Seafood"
            );
            const milk = products.filter(
                (item) => item.category === "Milks and Dairies"
            );
            const fruit = products.filter(
                (item) => item.category === "Fresh Fruit"
            );
            const wine = products.filter(
                (item) => item.category === "Wines & Drinks"
            );
            const unca = products.filter(
                (item) => item.category === "Uncategorized"
            );
            setBmlength(bake.length);
            setBreadlength(bread.length);
            setClolength(clothing.length);
            setDeallength(deals.length);
            setSealength(sea.length);
            setFruitlength(fruit.length);
            setMilklength(milk.length);
            setWinelength(wine.length);
            setUncalength(unca.length);
        }
        setData(products);
        categories();
    }, [products])

    const filterCategories = (category) => {
        const catItems = products.filter(
            (item) => item.category === category
        )
        setData(catItems);
    }

    return (
        <Container className='shop-items my-5'>
            <Row>
                <Col sm={12} md={9}>
                    <Row className='g-3'>
                        {data.length === 0 ?
                            <Container className="w-75 mx-auto mb-5">
                                <div className="empty-cart mb-3 d-flex align-items-center justify-content-center">
                                    <Calendar className="me-2" color="#3bb77e" />Unfortunately, we currently do not have any products in this category
                                </div>
                            </Container>
                            : 
                            data.map(item => {
                                return <ProductCard
                                    key={item.id}
                                    allData={item}
                                    frontImage={item.image.imgFront}
                                    backImage={item.image.imgBack}
                                    category={item.category}
                                    title={item.title}
                                    store={item.store}
                                    price={item.price.price}
                                    discount={item.price.discount}
                                    smValue={12}
                                    mdValue={3}
                                />
                            })}
                    </Row>
                </Col>
                <Col sm={12} md={3}>
                    <aside>
                        <h4>Category</h4>
                        <ul className='ps-0'>
                            <li className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div className="pb-0 categories d-flex align-items-center" onClick={() => filterCategories("Baking material")}>
                                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png" alt="category" width={25} />
                                    <span className='ms-2'>Baking material</span>
                                </div>
                                <span className='itemCount text-center position-absolute'>{bmLength}</span>
                            </li>
                            <li className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div className="pb-0 categories d-flex align-items-center" onClick={() => filterCategories("Bread and Juice")}>
                                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-11.png" alt="category" width={25} />
                                    <span className='ms-2'>Bread and Juice</span>
                                </div>
                                <span className='itemCount text-center position-absolute'>{breadLength}</span>
                            </li>
                            <li className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div className="pb-0 categories d-flex align-items-center" onClick={() => filterCategories("Clothing & beauty")}>
                                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-3.png" alt="category" width={25} />
                                    <span className='ms-2'>Clothing & beauty</span>
                                </div>
                                <span className='itemCount text-center position-absolute'>{cloLength}</span>
                            </li>
                            <li className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div className="pb-0 categories d-flex align-items-center" onClick={() => filterCategories("Deals Of The Day")}>
                                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-1.png" alt="category" width={25} />
                                    <span className='ms-2'>Deals Of The Day</span>
                                </div>
                                <span className='itemCount text-center position-absolute'>{dealLength}</span>
                            </li>
                            <li className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div className="pb-0 categories d-flex align-items-center" onClick={() => filterCategories("Fresh Seafood")}>
                                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-10.png" alt="category" width={25} />
                                    <span className='ms-2'>Fresh Seafood</span>
                                </div>
                                <span className='itemCount text-center position-absolute'>{seaLength}</span>
                            </li>
                            <li className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div className="pb-0 categories d-flex align-items-center" onClick={() => filterCategories("Milks and Dairies")}>
                                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-6.png" alt="category" width={25} />
                                    <span className='ms-2'>Milks and Dairies</span>
                                </div>
                                <span className='itemCount text-center position-absolute'>{milkLength}</span>
                            </li>
                            <li className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div className="pb-0 categories d-flex align-items-center" onClick={() => filterCategories("Vegetables")}>
                                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-8.png" alt="category" width={25} />
                                    <span className='ms-2'>Vegetables</span>
                                </div>
                                <span className='itemCount text-center position-absolute'>{fruitLength}</span>
                            </li>
                            <li className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div className="pb-0 categories d-flex align-items-center" onClick={() => filterCategories("Wines & Drinks")}>
                                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-9.png" alt="category" width={25} />
                                    <span className='ms-2'>Wines & Drinks</span>
                                </div>
                                <span className='itemCount text-center position-absolute'>{wineLength}</span>
                            </li>
                            <li className="position-relative list-unstyled d-flex justify-content-between align-items-center">
                                <div className="pb-0 categories d-flex align-items-center" onClick={() => filterCategories("Uncategorized")}>
                                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/woocommerce-placeholder-768x768.png" alt="category" width={25} />
                                    <span className='ms-2'>Uncategorized</span>
                                </div>
                                <span className='itemCount text-center position-absolute'>{uncaLength}</span>
                            </li>
                        </ul>
                    </aside>
                </Col>
            </Row>
        </Container>
    )
}

export default ShopItems