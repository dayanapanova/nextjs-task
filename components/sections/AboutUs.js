
import SimpleMap from './SimpleMap';
import { Fragment } from 'react';
function AboutUs() {
    return(
        <Fragment>
            <h2 className='title' id='about'>ABOUT US</h2>
            <div className='about-us-holder'>
                <div className='about-us-single'>
                    <img src="https://picsum.photos/200" class="img-circle" alt="Cinque Terre" width="100" height="80"/>
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