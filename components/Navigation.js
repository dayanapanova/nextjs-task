import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';
function Navigation() {
    const { t, i18n } = useTranslation();

    const NAV_ITEMS = [
        {
            label: t('home'),
            id: 'home',
        },
        {
            label: t('about'),
            id: 'about',
        },
        {
            label: t('work'),
            id: 'work',
        },
        {
            label: t('product'),
            id: 'products',
        },
        {
            label: t('contact'),
            id: 'contact',
        },
    ];

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="main-navigation">
                    <Image className='image-circle' src="https://i.picsum.photos/id/274/3824/2520.jpg?hmac=OOl_w8LX_psogyruUe1z986AuqeS_TY7rLxAFgG4wrc" fluid />
                    <Nav className="me-auto">
                        {NAV_ITEMS.map(({ id, label }, index) => (
                            <Nav.Link key={`nav-item-${id}-${label}-${index}`}>
                                <Link to={id} spy={true} smooth={true}>{label}</Link>
                            </Nav.Link>
                        ))}

                        <NavDropdown title={t(i18n.language)}>
                            {['en', 'bg'].map((langCode, index) => (
                                <NavDropdown.Item
                                    key={`lang-item-${langCode}-${index}`}
                                    onClick={() => i18n.changeLanguage(langCode)}
                                >
                                    {t(langCode)}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;