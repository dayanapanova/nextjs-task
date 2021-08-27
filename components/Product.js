import { Container, Row, Col } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Fragment } from 'react';
function OurProduct() {
    const productData = [
        
        {
            event: 'first',
            title: 'Product1',
            image: 'https://picsum.photos/200/300?random=1'
        },
        {
           event: 'second',
           title: 'Product2',
           image: 'https://picsum.photos/200/300?random=2'
        },
       {
           event: 'third',
           title: 'Product3',
           image: 'https://picsum.photos/200/300?random=3'
       }
   ]
    return (
        <Fragment>
        <Container>
            <Row>
                {productData.map((i) => {
                    <div>
                    <Col lg={4}><img width='200px' height='140px' src={i.image}/></Col>
                    <Col lg={8}>
                        <h4>{i.title}</h4>
                        <p>Lorem picsum dolor</p>
                        <p>Lorem picsum dolor</p>
                        <p>Lorem picsum dolor</p>
                        <p>Lorem picsum dolor</p>
                        <p>Lorem picsum dolor</p>
                        <p>Lorem picsum dolor</p>
                    </Col>
                    </div>
                })}
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