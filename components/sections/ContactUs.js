import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function ContactUs() {
    const { t } = useTranslation();
    return (
        <section className="section contact-section" id="contact">
            <Container>
                <h2 className='title'>{t('contact')}</h2>
                <Row>
                    <Col className='align-self-center' sm={6}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>{t('email')}</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>{t('message')}</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <div className="mt-4 text-center">
                                <Button size="lg">{t('send')}</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col className='align-self-center' sm={6}>
                        <div className="contact-info">
                            <div className='contact-item'>
                                <i className="fas fa-check"></i>
                                <h3>Lorem ipsum dolor</h3>
                            </div>
                            <div className='contact-item'>
                                <i className="fas fa-check"></i>
                                <h3>Lorem ipsum dolor</h3>
                            </div>
                            <div className='contact-item'>
                                <i className="fas fa-check"></i>
                                <h3>Lorem ipsum dolor</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactUs;