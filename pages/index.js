
import Slider from '../components/sections/Slider';
import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import OurWork from '../components/sections/OurWork';
import OurProducts from '../components/sections/OurProducts';
import Head from 'next/head';

function HomePage() {
    return (
            <div>
                     <Head>
                        <title>My page title</title>
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                     </Head>
                    <Slider/>
                    <AboutUs/>
                    <OurWork/>
                    <OurProducts/>
                    <ContactUs/>
            </div>
            
    )
}

export default HomePage;