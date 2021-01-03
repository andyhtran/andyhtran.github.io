import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar className="navBar" expand="md">
        <Navbar.Brand as={NavLink} to="/">Andy Tran</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/#about">About Me</Nav.Link>
                <Nav.Link href="/#contact">Contact</Nav.Link>
                <NavDropdown title="Interests" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/blog">Blog</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/travel">Travel</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/books">Books</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/projects">Projects</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;