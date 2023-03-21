import { Container } from 'react-bootstrap';
import { House } from 'react-bootstrap-icons';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadCrumb() {
    return (
        <div className="about-crumb py-3" style={{ borderBottom: "1px solid #ececec" }}>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/"><House className='me-1'/> Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </div>
    );
}

export default BreadCrumb;