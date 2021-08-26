import { Container, Row, Col } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Fragment } from 'react';
function OurProduct() {
    return (
        <Fragment>
        <Container>
            <Row>
                <Col lg={3}><img width='200px' height='140px' src="https://picsum.photos/200/300?random=1"/></Col>
                <Col lg={9}>
                    <h4>Product 1</h4>
                    <p>Lorem picsum dolor</p>
                    <p>Lorem picsum dolor</p>
                    <p>Lorem picsum dolor</p>
                    <p>Lorem picsum dolor</p>
                    <p>Lorem picsum dolor</p>
                    <p>Lorem picsum dolor</p>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col lg={4}>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        </Container>
        </Fragment>
    )
}

export default OurProduct;