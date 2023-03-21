import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Recycle, Heart, Cart, Person, ArrowRight, ChevronDown, Fire, Headset } from 'react-bootstrap-icons';
import appSvg from '../assets/img/apps.svg';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <>
            <Navbar bg="white" expand="lg" className='header py-4'>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand className='me-5 py-0'><img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/logo.png" alt="logo" width={140} /></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form className="d-flex me-auto">
                            <Form.Control type="text" placeholder="Search for products..." className='border-0' />
                            <Button variant="success" type="submit">Search</Button>
                        </Form>
                        <Nav className="profile-menu ms-auto">
                            <a href="/" className="vendor d-flex align-items-center justify-content-center text-decoration-none me-3">Became Vendor &nbsp; <ArrowRight /></a>
                            <Nav.Link href="/" className='d-flex align-items-center justify-content-center'><Recycle fontSize={18} color={"$black"} className="me-1" /> Compare</Nav.Link>
                            <Nav.Link href="/" className='d-flex align-items-center justify-content-center'><Heart fontSize={18} color={"$black"} className="me-1" /> Wishlist</Nav.Link>
                            <Nav.Link href="/" className='d-flex align-items-center justify-content-center flex-row card'>
                                <Cart fontSize={18} color={"$black"} className="me-3 border-0" /> Cart
                                <span className='card-item'>0</span>
                            </Nav.Link>
                            <Nav.Link href="/" className='d-flex align-items-center justify-content-center'><Person fontSize={20} color={"$black"} className="me-1" /> Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar bg="white" expand="lg" className='head-menu position-sticky'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex align-items-center">
                            <a href="/" className='browse-all text-capitalize text-decoration-none d-flex align-items-center text-white me-4'>
                                <img src={appSvg} alt="app" width={16} className="pe-1" /> Browse all categories &nbsp; <ChevronDown fontSize={10} />
                            </a>
                            <a href="/" className='menu-item d-flex align-items-center text-decoration-none'><Fire color='#3bb77e' className='me-1' /> Hot Deals</a>
                        </Nav>
                        <Nav className="me-auto">
                            <NavDropdown title="Home" id="basic-nav-dropdown" className='me-2'>
                                <NavDropdown.Item href="/">Home 1</NavDropdown.Item>
                                <NavDropdown.Item href="/">Home 2</NavDropdown.Item>
                                <NavDropdown.Item href="/">Home 3</NavDropdown.Item>
                            </NavDropdown>
                            <LinkContainer to="/about">
                                <Nav.Link className='me-2'>About</Nav.Link>
                            </LinkContainer>
                            <Nav.Link href="/" className='me-2'>Shop</Nav.Link>
                            <NavDropdown title="Vendors" id="basic-nav-dropdown" className='me-2'>
                                <NavDropdown.Item href="/">Dashboard</NavDropdown.Item>
                                <NavDropdown.Item href="/">Store Listing</NavDropdown.Item>
                                <NavDropdown.Item href="/">Store Details</NavDropdown.Item>
                                <NavDropdown.Item href="/">My Orders</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/" className='me-2'>Mega Menu</Nav.Link>
                            <NavDropdown title="Blog" id="basic-nav-dropdown" className='me-2'>
                                <NavDropdown.Item href="/">Blog Default</NavDropdown.Item>
                                <NavDropdown.Item href="/">Blog Grid</NavDropdown.Item>
                                <NavDropdown.Item href="/">Blog List</NavDropdown.Item>
                                <NavDropdown.Item href="/">Blog Big</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Pages" id="basic-nav-dropdown" className='me-2'>
                                <NavDropdown.Item href="/">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="/">Contact</NavDropdown.Item>
                                <NavDropdown.Item href="/">My Account</NavDropdown.Item>
                                <NavDropdown.Item href="/">Shop Cart</NavDropdown.Item>
                            </NavDropdown>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <div className="ms-auto d-flex flex-row align-items-center">
                            <div className="headphone-icon me-2"><Headset fontSize={30} /></div>
                            <div className="support-center d-flex flex-column">
                                <a href='tel: 1900888123' className='text-decoration-none'>1900888123</a>
                                <span>24/7 Support Center</span>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;