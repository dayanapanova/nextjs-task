
import GoogleMap from '../sections/GoogleMap';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function AboutUs() {
    const { t } = useTranslation();

    return (
        <section className="section about-section" id="about">
            <Container>
                <Row>
                    <Col className='align-self-center' xs={12} md={6}>
                        <div className='text-center'>
                            <h2 className='title'>{t('about')}</h2>
                            <Image
                                src="https://i.picsum.photos/id/274/3824/2520.jpg?hmac=OOl_w8LX_psogyruUe1z986AuqeS_TY7rLxAFgG4wrc"
                                roundedCircle
                                alt={t('about')}
                            />
                            <p className="text">
                            {t('loremIpsum')}
                            </p>
                        </div>
                    </Col>
                    <Col className='align-self-center' xs={12} md={6}>
                        <GoogleMap
                            center={{
                                lat: 10.99835602,
                                lng: 77.01502627,
                            }}
                            zoom={11}
                            markerProps={{
                                lat: 59.955413,
                                lng: 30.337844,
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default AboutUs;