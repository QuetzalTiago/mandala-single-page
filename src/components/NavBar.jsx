import React, { Component, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="pb-0">
      <Navbar color="light" light expand="md">
        <NavbarBrand className="mr-auto" href="/">
          <img
            src="assets/images/Mandala.png"
            alt="Rotisería Mandala"
            height="60"
            width="auto"
            className="p-1"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" href="/home">
                <span>Inicio</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/menu">
                <span>Menu</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactus">
                <span>Contacto</span>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline>
                <span className="fa fa-sign-in fa-lg"></span> Iniciar sesión
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
