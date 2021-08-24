import { Fragment } from 'react';
import Head from 'next/head';
function ContactUs() {
    return(
        <Fragment>
            <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </Head>
            <h2 className='title'>CONTACT US</h2>
            <div className='contact-holder'>
            <div className='contact-holder-single'>
            <p>Your name</p>
            <input className='input-name' type='text'></input>
            <p>Message</p>
            <input className='input-message' type='text'></input>
            <button type="button" className="btn btn-success">Send</button>
            </div>
            <div className='contact-holder-single'>
                <h3>Lorem ipsum dolor</h3>
                <h3>Lorem ipsum dolor</h3>
                <h3>Lorem ipsum dolor</h3>
            </div>
            </div>
        </Fragment>
    )
}

export default ContactUs;