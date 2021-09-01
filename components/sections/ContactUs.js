import {
    Container,
    Row,
    Col,
    Form,
    Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { messageSchema } from '../../utils/validations/validations';
function ContactUs() {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(messageSchema)
      });

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

    const FIELDS = [
        {
            component: Form.Control,
            label: t('name'),
            name: 'name',
            componentProps: {
                placeholder: 'Enter name',
                type: 'text',
            }
        },
        {
            component: Form.Control,
            label: t('email'),
            name: 'email',
            componentProps: {
                placeholder: 'name@example.com',
                type: 'text',
            }
        },
        {
            component: Form.Control,
            label: t('message'),
            name: 'message',
            componentProps: {
                as: 'textarea',
                rows: 3,
            }
        }
    ];

    return (
        <section className="section contact-section" id="contact">
            <Container>
                <h2 className='title'>{t('contact')}</h2>
                <Row>
                    <Col className='align-self-center' sm={6}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            {FIELDS.map(({ name, label, componentProps }, index)=> {
                                const error = errors?.[name]?.message;
                                const hasError = Boolean(error);
                                return (
                                    <Form.Group key={`${name}-${index}`} className="mb-3" >
                                        <Form.Label>{label}</Form.Label>
                                        <Form.Control {...register(name)} {... componentProps} isInvalid={hasError} />
                                        {hasError && (
                                            <Form.Control.Feedback type="invalid">
                                                {errors?.[name]?.message}
                                            </Form.Control.Feedback>
                                        )}
                                    </Form.Group>
                                )
                            })}

                            <div className="mt-4 text-center">
                                <Button size="lg" type="submit">
                                    {t('send')}
                                </Button>
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