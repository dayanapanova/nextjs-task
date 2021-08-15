import { Fragment } from 'react';
import Head from 'next/head';
function ContactUs() {
    return(
        <Fragment>
            <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <h1>Contact Us</h1>
            <div className='contact-holder'>
            <div className='contact-holder-single'>
            <p>Your name</p>
            <input type='text'></input>
            <p>Message</p>
            <input type='text'></input>
            <button type="button" className="btn btn-success">Success</button>
            </div>
            <div className='contach-holder-single'>
                <h3>Lorem ipsum dolor</h3>
                <h3>Lorem ipsum dolor</h3>
                <h3>Lorem ipsum dolor</h3>
            </div>
            </div>
        </Fragment>
    )
}

export default ContactUs;