import Layout from "../componets/layout/Layout";
import Link from 'next/link';
import AboutUs from "./aboutus";
import Slider from '../componets/layout/Slider';
import Dropdown from "../componets/layout/Dropdown";

function HomePage() {
    return (
            <div>
            <header className='header'>
                <div>Logo</div>
                <ul className='nav-items-links'>
                    <li><a>Home</a></li>
                    <li><Link href='/aboutus'>About us</Link></li>
                    <li><Link href='/ourwork'>Our Work</Link></li>
                    <li><Link href='/ourproducts'>Our Products</Link></li>
                    <li><Link href='/contactus'>Contact us</Link></li>
                    <li><Dropdown/></li>
                </ul>
            </header>
            <Slider/>
            </div>
            
    )
}

export default HomePage;