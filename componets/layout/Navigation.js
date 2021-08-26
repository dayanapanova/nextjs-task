import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
function Navigation() {
    const { t } = useTranslation();
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home"><Link activeClass='active' to='home' spy={true} smooth={true}>t('home')</Link></Nav.Link>
                <Nav.Link href="#home"><Link to='about' spy={true} smooth={true}>About us</Link></Nav.Link>
                <Nav.Link href="#home"><Link to='work' spy={true} smooth={true}>Our work</Link></Nav.Link>
                <Nav.Link href="#home"><Link to='products' spy={true} smooth={true}>Our products</Link></Nav.Link>
                <Nav.Link href="#home"><Link to='contact' spy={true} smooth={true}>Contact us</Link></Nav.Link>
                <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Български</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Navigation;