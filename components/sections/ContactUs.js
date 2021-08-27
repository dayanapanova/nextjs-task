import { Fragment } from 'react';
function ContactUs() {
    return(
        <Fragment>
            <h2 className='title' id='contact'>CONTACT US</h2>
            <div className='contact-holder'>
            <div className='contact-holder-single'>
            <p>Your name</p>
            <input className='input-name' type='text'></input>
            <p>Message</p>
            <input className='input-message' type='text'></input>
            <button type="button" className="btn btn-success">Send</button>
            </div>
            <div className='contact-holder-single'>
                    <div className='contact-holder-single-para'>
                        <i className="fas fa-check"></i>
                        <h3>Lorem ipsum dolor</h3>
                    </div>
                    <div className='contact-holder-single-para'>
                        <i className="fas fa-check"></i>
                        <h3>Lorem ipsum dolor</h3>
                    </div>
                    <div className='contact-holder-single-para'>
                        <i className="fas fa-check"></i>
                        <h3>Lorem ipsum dolor</h3>
                    </div>
            </div>
            </div>
        </Fragment>
    )
}

export default ContactUs;