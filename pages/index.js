
import Slider from '../components/sections/Slider';
import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import OurWork from '../components/sections/OurWork';
import OurProducts from '../components/sections/OurProducts';

function HomePage() {
    return (
            <div>
                    <Slider/>
                    <AboutUs/>
                    <OurWork/>
                    <OurProducts/>
                    <ContactUs/>
            </div>
            
    )
}

export default HomePage;