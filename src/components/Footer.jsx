import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import classes1 from '../assets/classes-1.jpg'
import classes2 from '../assets/classes-2.jpg'
import classes3 from '../assets/classes-3.jpg'
import classes4 from '../assets/classes-4.jpg'
import classes5 from '../assets/classes-5.jpg'
import classes6 from '../assets/classes-6.jpg'
const Footer = () => {
  return (
    <footer className="Footer text-white">
      <Container>
        <Row>
          {/* Get In Touch */}
          <Col md={3}>
            <h5 className="mb-3">Get In Touch</h5>
            <p><FaMapMarkerAlt /> 123 Street, New York, USA</p>
            <p><FaPhoneAlt /> +012 345 67890</p>
            <p><FaEnvelope /> info@example.com</p>
            <div className="d-flex gap-2 mt-3">
              <a href="#" className="text-white p-2 bg-secondary rounded-circle"><FaTwitter /></a>
              <a href="#" className="text-white p-2 bg-secondary rounded-circle"><FaFacebookF /></a>
              <a href="#" className="text-white p-2 bg-secondary rounded-circle"><FaYoutube /></a>
              <a href="#" className="text-white p-2 bg-secondary rounded-circle"><FaLinkedinIn /></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
              <li><a href="#" className="text-white">Our Services</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Terms & Condition</a></li>
            </ul>
          </Col>

          {/* Photo Gallery */}
          <Col md={3}>
            <h5 className="mb-3">Photo Gallery</h5>
            <Row className="g-2">
              <Col xs={4}><img src={classes1} alt="Gallery" className="img-fluid rounded" /></Col>
              <Col xs={4}><img src={classes2} alt="Gallery" className="img-fluid rounded" /></Col>
              <Col xs={4}><img src={classes3} alt="Gallery" className="img-fluid rounded" /></Col>
              <Col xs={4}><img src={classes4} alt="Gallery" className="img-fluid rounded" /></Col>
              <Col xs={4}><img src={classes5} alt="Gallery" className="img-fluid rounded" /></Col>
              <Col xs={4}><img src={classes6} alt="Gallery" className="img-fluid rounded" /></Col>
            </Row>
          </Col>

          {/* Newsletter */}
          <Col md={3}>
            <h5 className="mb-3">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Your email" className="me-2" />
              <Button variant="warning" className="sign-up">SignUp</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      
      {/* Bottom Footer */}
      <div className="border-top mt-4 pt-3 text-center">
        <p>© <span className="fw-bold">Your Site Name</span>, All Rights Reserved. Designed By <a href="#" className="text-warning">Obadimu Adedamola</a></p>
        <div>
          <a href="#" className="px-2 text-white">Home</a>
          <a href="#" className="px-2 text-white">Cookies</a>
          <a href="#" className="px-2 text-white">Help</a>
          <a href="#" className="px-2 text-white">FAQs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
