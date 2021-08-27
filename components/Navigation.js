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
        <Navbar className="main-navigation" expand="md">
            <Container>
                <Navbar.Brand>Next.JS</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="main-navbar-nav">
                    <Nav>
                        {NAV_ITEMS.map(({ id, label }, index) => (
                            <Link
                                key={`nav-item-${id}-${label}-${index}`}
                                to={id}
                                spy={true}
                                smooth={true}
                                className="nav-link"
                            >
                                {label}
                            </Link>
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