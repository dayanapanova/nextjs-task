import { Tab } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import OurProduct from './OurProduct';
function OurProducts() {
    return(
        <div>
            <h2 className='title' id='products'>OUR PRODUCTS</h2>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Product 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Product 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Product 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <OurProduct/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <OurProduct/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <OurProduct/>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
        </div>
    )
}

export default OurProducts;