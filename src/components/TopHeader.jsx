import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TopHeader() {
  return (
    <Navbar bg="white" expand="lg" className="top-header">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="top-nav me-auto text-capitalize">
            <Nav.Link href="/about" className="border-line py-0">About us</Nav.Link>
            <Nav.Link href="/account" className="border-line py-0">My account</Nav.Link>
            <Nav.Link href="/wishlist" className="border-line py-0">Wishlist</Nav.Link>
            <Nav.Link href="/orders" className="py-0">Order tracking</Nav.Link>
          </Nav>
          <Nav className="midtext mx-auto">
            <a href="/" className="text-decoration-none">100% Secure delivery without contacting the courier</a>
          </Nav>
          <Nav className="top-nav ms-auto d-flex align-items-center">
            <span className="border-line pe-2">Need help? Call Us: <a href="tel:+1800900122" className="top-tel text-decoration-none">+1800900122</a></span>
            <NavDropdown title="English" id="basic-nav-dropdown" className="border-line">
              <NavDropdown.Item href="/"><img src="https://themepanthers.com/wp/nest/d1/wp-content/plugins/elementor/assets/images/placeholder.png" alt="flag" width={15} className="me-1"/> Français</NavDropdown.Item>
              <NavDropdown.Item href="/"><img src="https://themepanthers.com/wp/nest/d1/wp-content/plugins/elementor/assets/images/placeholder.png" alt="flag" width={15} className="me-1"/> Deutsch</NavDropdown.Item>
              <NavDropdown.Item href="/"><img src="https://themepanthers.com/wp/nest/d1/wp-content/plugins/elementor/assets/images/placeholder.png" alt="flag" width={15} className="me-1"/> Русский</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="INR" id="basic-nav-dropdown" className="py-0">
              <NavDropdown.Item href="/"><img src="https://themepanthers.com/wp/nest/d1/wp-content/plugins/elementor/assets/images/placeholder.png" alt="flag" width={15} className="me-1"/> USD</NavDropdown.Item>
              <NavDropdown.Item href="/"><img src="https://themepanthers.com/wp/nest/d1/wp-content/plugins/elementor/assets/images/placeholder.png" alt="flag" width={15} className="me-1"/> MBP</NavDropdown.Item>
              <NavDropdown.Item href="/"><img src="https://themepanthers.com/wp/nest/d1/wp-content/plugins/elementor/assets/images/placeholder.png" alt="flag" width={15} className="me-1"/> EU</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopHeader;
