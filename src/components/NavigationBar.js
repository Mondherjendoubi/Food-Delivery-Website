import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import React from "react";


function NavigationBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    );
}

export default NavigationBar;