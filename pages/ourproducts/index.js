import Link from 'next/link';
import Dropdown from '../../componets/layout/Dropdown';
function OurProducts() {
    return (
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
    )
}

export default OurProducts;