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
import { messageSchema } from '../Validations';
function ContactUs() {
    const { t } = useTranslation();
    const { register, handleSubmit } = useForm();
    const createMessage = async (event) => {
        event.preventDefault();
        let messageData = {
            name: event.target[0].value,
            email: event.target[1].value,
            message: event.target[2].value
        }
        const isValid = await messageSchema.isValid(messageData);
        console.log(isValid);
    }
    const onSubmit = (formData) => {
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if(response.ok) {
                toast.success("Your message was sent!")
            } else {
                toast.error("Your message was not sent!")
            }
        })
    };
    return (
        <section className="section contact-section" id="contact">
            <Container>
                <h2 className='title'>{t('contact')}</h2>
                <Row>
                    <Col className='align-self-center' sm={6}>
                        <Form onSubmit={createMessage}>
                        <Form.Group className="mb-3" >
                                <Form.Label>{t('name')}</Form.Label>
                                <Form.Control  {...register("name")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>{t('email')}</Form.Label>
                                <Form.Control  {...register("email")}  placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>{t('message')}</Form.Label>
                                <Form.Control  {...register("message")} as="textarea" rows={3} />
                            </Form.Group>
                            <div className="mt-4 text-center">
                                <Button size="lg"
                                    type="submit"
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