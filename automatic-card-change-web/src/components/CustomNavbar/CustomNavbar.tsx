import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import './CustomNavbar.css'

function CustomNavbar() {

    return(
        <Fragment>
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="navbar-brand-txt">Automatic Card Change</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">User name</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Fragment>
    );
}

export default CustomNavbar;