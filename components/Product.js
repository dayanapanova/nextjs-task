import Image from 'next/image';
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
        <>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Image width='200' height='140' loader={() => image} src={image} alt={title} />
                    </Col>
                    <Col lg={8}>
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
        </>
    )
}

export default Product;