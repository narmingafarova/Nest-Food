import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import { Calendar, Grid3x3Gap, ListUl } from "react-bootstrap-icons";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../cards/ProductCard";
// import { SearchContext } from "../Header";

const ShopItems = () => {
    const [products] = useContext(ProductContext);
    // const searchKey = useContext(SearchContext);

    // Searching
    const [word, setWord] = useState("");
    const [searchKey, setSearchkey] = useState("");

    // List View
    const [data, setData] = useState(products);
    const [colValue, setColvalue] = useState(3);
    const [flexForm, setFlexform] = useState("flex-column");

    // List Buttons
    const [prevBtn, setPrevbtn] = useState(1);
    const [classname, setClassname] = useState("active")
    const [secClass, setSecclass] = useState("");

    // Category Lengths
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
        };
        setData(products);
        categories();

        setTimeout(() => {
            allRef.current.focus();
        }, 1000);
    }, [products]);

    const filterCategories = (category) => {
        const catItems = products.filter((item) => item.category === category);
        if (catItems) {
            setData(catItems);
        } else {
            setData(products);
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        setSearchkey(word);
    }

    const allRef = useRef();

    return (
        <Container className="shop-items my-5">
            <Row className="shop-row">
                <Col sm={12} md={9}>
                    <div className="search-bar d-flex justify-content-between align-items-center mb-4">
                        <Form className="d-flex justify-content-between align-items-center mx-auto" onSubmit={formSubmit}>
                            <Form.Control type="text" placeholder="Search for products..." className='border-0' value={word} onChange={(e) => setWord(e.target.value)} />
                            <Button variant="success" type="submit">Search</Button>
                        </Form>
                        <Button variant="danger" className="reset-btn ms-4" onClick={() => { setSearchkey(""); setWord("") }}>Reset</Button>
                    </div>
                    <div className="shoplist-btns d-flex mb-3">
                        <Button
                            className={`list-design d-flex justify-content-center align-items-center ${classname} me-2`}
                            onClick={() => {
                                setColvalue(3);
                                setFlexform("flex-column");
                                if (prevBtn == null) {
                                    setPrevbtn(1);
                                    setClassname("active");
                                    setSecclass("");
                                }
                            }}
                        >
                            <Grid3x3Gap />
                        </Button>
                        <Button
                            className={`list-design d-flex justify-content-center align-items-center ${secClass}`}
                            onClick={() => {
                                setColvalue(6);
                                setFlexform("flex-row");
                                if (prevBtn === 1) {
                                    setPrevbtn(null);
                                    setSecclass("active")
                                    setClassname("")
                                }
                            }}
                        >
                            <ListUl />
                        </Button>
                    </div>
                    <Row className="g-3">
                        {
                            searchKey ? (
                                products.filter(value => value.title.toLocaleLowerCase().includes(searchKey)).map((item) => {
                                    return <ProductCard
                                        key={item.id}
                                        allData={item}
                                        id={item.id}
                                        frontImage={item.image.imgFront}
                                        backImage={item.image.imgBack}
                                        category={item.category}
                                        title={item.title}
                                        store={item.store}
                                        price={item.price.price}
                                        discount={item.price.discount}
                                        flexVal={flexForm}
                                        smValue={12}
                                        mdValue={colValue}
                                    />
                                })
                            ) : (data.length === 0 ? (
                                <Container className="w-75 mx-auto mb-5">
                                    <div className="empty-cart mb-3 d-flex align-items-center justify-content-center">
                                        <Calendar className="me-2" color="#3bb77e" />
                                        Unfortunately, we currently do not have any products in this
                                        category
                                    </div>
                                </Container>
                            ) : (
                                data.map((item) => {
                                    return (
                                        <ProductCard
                                            key={item.id}
                                            allData={item}
                                            id={item.id}
                                            frontImage={item.image.imgFront}
                                            backImage={item.image.imgBack}
                                            category={item.category}
                                            title={item.title}
                                            store={item.store}
                                            price={item.price.price}
                                            discount={item.price.discount}
                                            flexVal={flexForm}
                                            smValue={12}
                                            mdValue={colValue}
                                        />
                                    );
                                })
                            ))
                        }
                    </Row>
                </Col>
                <Col sm={12} md={3}>
                    <aside>
                        <h4>Category</h4>
                        <ul className="ps-0">
                            <li tabIndex="1" ref={allRef} className="position-relative list-unstyled mb-2 d-flex justify-content-center align-items-center">
                                <div
                                    className="pb-0 categories d-flex align-items-center"
                                    onClick={() => setData(products)}
                                >
                                    <span className="ms-2">All</span>
                                </div>
                                <span className="itemCount text-center position-absolute">
                                    {products.length}
                                </span>
                            </li>
                            <li tabIndex="1" className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div
                                    className="pb-0 categories d-flex align-items-center"
                                    onClick={() => filterCategories("Baking material")}
                                >
                                    <img
                                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png"
                                        alt="category"
                                        width={25}
                                    />
                                    <span className="ms-2">Baking material</span>
                                </div>
                                <span className="itemCount text-center position-absolute">
                                    {bmLength}
                                </span>
                            </li>
                            <li tabIndex="1" className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div
                                    className="pb-0 categories d-flex align-items-center"
                                    onClick={() => filterCategories("Bread and Juice")}
                                >
                                    <img
                                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-11.png"
                                        alt="category"
                                        width={25}
                                    />
                                    <span className="ms-2">Bread and Juice</span>
                                </div>
                                <span className="itemCount text-center position-absolute">
                                    {breadLength}
                                </span>
                            </li>
                            <li tabIndex="1" className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div
                                    className="pb-0 categories d-flex align-items-center"
                                    onClick={() => filterCategories("Clothing & beauty")}
                                >
                                    <img
                                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-3.png"
                                        alt="category"
                                        width={25}
                                    />
                                    <span className="ms-2">Clothing & beauty</span>
                                </div>
                                <span className="itemCount text-center position-absolute">
                                    {cloLength}
                                </span>
                            </li>
                            <li tabIndex="1" className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div
                                    className="pb-0 categories d-flex align-items-center"
                                    onClick={() => filterCategories("Deals Of The Day")}
                                >
                                    <img
                                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-1.png"
                                        alt="category"
                                        width={25}
                                    />
                                    <span className="ms-2">Deals Of The Day</span>
                                </div>
                                <span className="itemCount text-center position-absolute">
                                    {dealLength}
                                </span>
                            </li>
                            <li tabIndex="1" className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div
                                    className="pb-0 categories d-flex align-items-center"
                                    onClick={() => filterCategories("Fresh Seafood")}
                                >
                                    <img
                                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-10.png"
                                        alt="category"
                                        width={25}
                                    />
                                    <span className="ms-2">Fresh Seafood</span>
                                </div>
                                <span className="itemCount text-center position-absolute">
                                    {seaLength}
                                </span>
                            </li>
                            <li tabIndex="1" className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div
                                    className="pb-0 categories d-flex align-items-center"
                                    onClick={() => filterCategories("Milks and Dairies")}
                                >
                                    <img
                                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-6.png"
                                        alt="category"
                                        width={25}
                                    />
                                    <span className="ms-2">Milks and Dairies</span>
                                </div>
                                <span className="itemCount text-center position-absolute">
                                    {milkLength}
                                </span>
                            </li>
                            <li tabIndex="1" className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div
                                    className="pb-0 categories d-flex align-items-center"
                                    onClick={() => filterCategories("Fresh Fruit")}
                                >
                                    <img
                                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-8.png"
                                        alt="category"
                                        width={25}
                                    />
                                    <span className="ms-2">Vegetables</span>
                                </div>
                                <span className="itemCount text-center position-absolute">
                                    {fruitLength}
                                </span>
                            </li>
                            <li tabIndex="1" className="position-relative list-unstyled mb-2 d-flex justify-content-between align-items-center">
                                <div
                                    className="pb-0 categories d-flex align-items-center"
                                    onClick={() => filterCategories("Wines & Drinks")}
                                >
                                    <img
                                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-9.png"
                                        alt="category"
                                        width={25}
                                    />
                                    <span className="ms-2">Wines & Drinks</span>
                                </div>
                                <span className="itemCount text-center position-absolute">
                                    {wineLength}
                                </span>
                            </li>
                            <li tabIndex="1" className="position-relative list-unstyled d-flex justify-content-between align-items-center">
                                <div
                                    className="pb-0 categories d-flex align-items-center"
                                    onClick={() => filterCategories("Uncategorized")}
                                >
                                    <img
                                        src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/woocommerce-placeholder-768x768.png"
                                        alt="category"
                                        width={25}
                                    />
                                    <span className="ms-2">Uncategorized</span>
                                </div>
                                <span className="itemCount text-center position-absolute">
                                    {uncaLength}
                                </span>
                            </li>
                        </ul>
                    </aside>
                </Col>
            </Row>
        </Container>
    );
};

export default ShopItems;
