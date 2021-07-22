import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Navbar collapseOnSelect fixed='top' bg='dark' variant='dark' expand='sm'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href='/'><i class="fa fa-fw fa-home"></i></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/aulas'>Aulas</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/sobre-o-projeto'>Saiba Mais</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Navigation;