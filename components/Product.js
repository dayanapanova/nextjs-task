import { Image } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

function Product({
    title,
    description,
    image,
    firstList = [],
    secondList = [],
}) {
    return (
        <div className="product-item">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="image">
                            <Image
                                loader={() => image}
                                src={image}
                                alt={title}
                                fluid
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </Col>
                </Row>
                <Row>
                    {Boolean(firstList?.length) && (
                        <Col sm={6}>
                            <ListGroup>
                                {firstList.map((listItem, index) => (
                                    <ListGroup.Item key={`first-list-${listItem}-${index}`}>
                                        {listItem}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    )}

                    {Boolean(secondList?.length) && (
                        <Col sm={6}>
                            <ListGroup>
                                {secondList.map((listItem, index) => (
                                    <ListGroup.Item key={`second-list-${listItem}-${index}`}>
                                        {listItem}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Product;
