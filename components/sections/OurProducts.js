import { Tab } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Product from '../Product';

function OurProducts() {
    const { t } = useTranslation();
    const PRODUCTS = [
        {
            title: t('product1'),
            image: 'https://picsum.photos/200/300?random=1',
            description: t("description1"),
            firstList: [
                t("item1"),
                t("item2"),
                t("item3"),
            ],
            secondList: [
                t("item1"),
                t("item2"),
                t("item3"),
            ],
        },
        {
            title: t('product2'),
            image: 'https://picsum.photos/200/300?random=2',
            description: t("description2"),
            firstList: [
                'Item 1',
                'Item 2',
                'Item 3',
            ],
            secondList: [
                'Item 1',
                'Item 2',
                'Item 3',
            ],
        },
        {
            title: t('product3'),
            image: 'https://picsum.photos/200/300?random=3',
            description: t("description3"),
            firstList: [
                t('Item 1'),
                t('Item 2'),
                t('Item 3'),
            ],
            secondList: [
                t('Item 1'),
                t('Item 2'),
                t('Item 3'),
            ],
        }
    ];

    return (
        <div>
            <h2 className='title' id='products'>{t('product')}</h2>
            <Container>
                <Tab.Container defaultActiveKey="product-0">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {PRODUCTS.map(({ title }, index) => (
                                    <Nav.Item key={`product-nav-${index}`}>
                                        <Nav.Link eventKey={`product-${index}`}>{title}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                {PRODUCTS.map(({ title, image, description, firstList, secondList }, index) => (
                                    <Tab.Pane key={`product-content-${index}`} eventKey={`product-${index}`}>
                                        <Product
                                            title={title}
                                            image={image}
                                            description={description}
                                            firstList={firstList}
                                            secondList={secondList}
                                        />
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    )
}

export default OurProducts;