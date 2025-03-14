import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import './NavigationBar.css';
import { FaArrowRight } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" sticky="top" className="py-3 scalloped">
      <Container>
        <Navbar.Brand className='Kider' data-aos="fade-right"><FaBookReader /> Kider
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center" data-aos="fade-up">
            <Nav.Link href="/home" className='home' id='line'>Home</Nav.Link>
            <Nav.Link href="/about" className='home'>About Us</Nav.Link>
            <Nav.Link href="/blog" className='home'>Sign Up</Nav.Link>
            <NavDropdown title="Page" id="page-dropdown" className='home'>
              <NavDropdown.Item href="#item1">School Facilities</NavDropdown.Item>
              <NavDropdown.Item href="#item2">School Teacher</NavDropdown.Item>
              <NavDropdown.Item href="#item3">Become A Teacher</NavDropdown.Item>
              <NavDropdown.Item href="#item4">Make Appointment</NavDropdown.Item>
              <NavDropdown.Item href="#item5">Testimonial</NavDropdown.Item>
              <NavDropdown.Item href="#item6">406 Error</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog" className='home'>Contact Us</Nav.Link>
          </Nav>
          {/* button */}
          <Button variant="primary" className="btn btn-primary btn-rounded" data-aos="fade-left">Sign up <FaArrowRight /></Button>
        </Navbar.Collapse>      
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
