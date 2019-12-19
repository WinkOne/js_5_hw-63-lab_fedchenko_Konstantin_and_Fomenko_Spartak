import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Home</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to={"/posts/new"}>Add Posts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to={"/aboutUs"}>About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to={"/contact"}>Contacts</NavLink>
                    </NavItem>
                </Nav>
        </Navbar>
    );
};

export default Navigation;