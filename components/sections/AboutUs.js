
import SimpleMap from './SimpleMap';
import { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
function AboutUs() {
    const { t } = useTranslation();
    return(
        <Fragment>
            <h2 className='title' id='about'>{t('about')}</h2>
            <div className='about-us-holder'>
                <div className='about-us-single'>
                 <Image className='image-circle' src="https://i.picsum.photos/id/274/3824/2520.jpg?hmac=OOl_w8LX_psogyruUe1z986AuqeS_TY7rLxAFgG4wrc" roundedCircle />
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                </div>
                <div className='about-us-single'>
                    <SimpleMap/>
                </div>
            </div>
        </Fragment>
    )
}


export default AboutUs;