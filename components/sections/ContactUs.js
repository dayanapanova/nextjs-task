import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

function ContactUs() {
    const { t } = useTranslation();
    const showToast = () => {
        toast.success("Your message was sent!")
    };
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log('form data', data);
    };
    return (
        <section className="section contact-section" id="contact">
            <Container>
                <h2 className='title'>{t('contact')}</h2>
                <Row>
                    <Col className='align-self-center' sm={6}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Label>{t('email')}</Form.Label>
                                <Form.Control  {...register("email")} type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>{t('message')}</Form.Label>
                                <Form.Control  {...register("message")} as="textarea" rows={3} />
                            </Form.Group>
                            <div className="mt-4 text-center">
                                <Button size="lg"
                                    type="submit"
                                    onClick={()=> {
                                        fetch('/api/contact', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({ name: 'Test name', email: 'test@test.com', message: 'test' })
                                        })
                                        .then(response => response.json())
                                    }}
                                    >{t('send')}</Button>
                                    <ToastContainer/>
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