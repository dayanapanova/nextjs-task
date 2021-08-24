import GoogleMapReact from 'google-map-react';
import SimpleMap from './SimpleMap';
import { withNamespaces } from 'react-i18next';
import { useTranslation } from 'react-i18next';
function AboutUs() {
    return(
        <div>
            <h2 className='contact-us-title'>ABOUT US</h2>
            <div className='about-us-holder'>
                <div className='about-us-single'>
                    <img src="https://media.mercola.com/ImageServer/Public/2018/October/FB/dog-breeds-for-active-people-fb.jpg" class="img-circle" alt="Cinque Terre" width="100" height="80"/>
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
        </div>
    )
}


export default AboutUs;