import { Container } from 'react-bootstrap';
import { House } from 'react-bootstrap-icons';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadCrumb({title, category}) {
    return (
        <div className="about-crumb py-3 mb-2">
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/"><House className='me-1'/> Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{title}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </div>
    );
}

export default BreadCrumb;