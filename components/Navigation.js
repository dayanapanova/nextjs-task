import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;