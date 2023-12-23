import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = ({ onLogout, onShowBetForm }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">AleaRise</Navbar.Brand>
      <Nav>
        <Nav.Link onClick={onShowBetForm}>Bahis</Nav.Link>
        <Nav.Link onClick={onLogout}>Çıkış</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
