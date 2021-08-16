
import Slider from '../componets/layout/Slider';
import Dropdown from "../componets/layout/Dropdown";
import AboutUs from "../componets/layout/AboutUs";
import OurWork from "../componets/layout/OurWork";
import ContactUs from "../componets/layout/ContactUs";
import  ScrollToTop  from "../componets/layout/ScrollToTop";
import { useRef } from 'react';
function HomePage() {
    const ContactUsSection = useRef(null);
    const goToContactUsSection = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }

    return (
            <div>
                    <ScrollToTop/>
                    <header className='header'>
                        <div>Logo</div>
                        <ul className='nav-items-links'>
                            <li><a>Home</a></li>
                            <li><a>About us</a></li>
                            <li><a>Our Work</a></li>
                            <li><a>Our Products</a></li>
                            <li><a onClick={goToContactUsSection}>Contact Us</a></li>
                            <li><Dropdown/></li>
                        </ul>
                    </header>
                    <Slider/>
                    <AboutUs/>
                    <OurWork/>
                    <ContactUs ref={ContactUsSection}/>
            </div>
            
    )
}

export default HomePage;