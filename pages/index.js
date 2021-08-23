
import Slider from '../componets/layout/Slider';
import Dropdown from "../componets/layout/Dropdown";
import AboutUs from "../componets/layout/AboutUs";
import ContactUs from "../componets/layout/ContactUs";
import OurWork from '../componets/layout/OurWork';
import OurProducts from '../componets/layout/OurProducts';
import  ScrollToTop  from "../componets/layout/ScrollToTop";
import { useRef } from 'react';
import Navigation from '../componets/layout/Navigation';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
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
                    <Navigation/>
                    <Slider/>
                    <AboutUs/>
                    <OurWork/>
                    <OurProducts/>
                    <ContactUs ref={ContactUsSection}/>
            </div>
            
    )
}

export default HomePage;