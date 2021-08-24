import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function Navigation() {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
                <Nav.Link href="#home">Our work</Nav.Link>
                <Nav.Link href="#home">Our products</Nav.Link>
                <Nav.Link href="#home">Contact us</Nav.Link>
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