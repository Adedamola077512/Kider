import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBookReader } from "react-icons/fa";
import './NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" sticky="top" className="py-3 scalloped">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand className="Kider" data-aos="fade-right">
          <FaBookReader /> Kider
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center" data-aos="fade-up">
            {/* Navigation Links */}
            <Nav.Link as={Link} to="/" className="home" id="line">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="home">About Us</Nav.Link>
            <Nav.Link as={Link} to="/classes" className="home">Classes</Nav.Link>
            
            {/* Dropdown Menu */}
            <NavDropdown title="Page" id="page-dropdown">
              <NavDropdown.Item as={Link} to="/page">School Facilities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/page">School Teacher</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/page">Become A Teacher</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/page">Make Appointment</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="page">Testimonial</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact" className="home">Contact Us</Nav.Link>
          </Nav>

          {/* Sign-Up Button */}
          <Button variant="primary" className="btn btn-primary btn-rounded" data-aos="fade-left">
            Sign Up <FaArrowRight />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
