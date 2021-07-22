import { Container } from "@material-ui/core"

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' bg='dark' variant='dark' bg='sm'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href='/aulas'>Aulas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Navigation;