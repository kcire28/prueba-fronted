import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Prueba Tiendamia</Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
