import React from 'react';
import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-bg slide1"></div>
        <div className="OnlineCourses"></div>
        <Carousel.Caption>
            <div className='carousel-content'>
              <h1 className='content'>The Best Kindergarten <br />School For Your Child</h1>
              <p className='content-p'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum <br />et diam justo clita et kasd rebum sea elitr.</p>
            </div>
            <button className='header-btn'><b>Learn More</b></button>
            <button className='header-btnn'><b>Our Classes</b></button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-bg slide2"></div>
        <div className="OnlineCourses"></div>
        <Carousel.Caption>
          <div className='carousel-content'>
             <h1 className='content'>Make A Brighter Future <br />For Your Child</h1>
             <p className='content-p'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et <br />diam justo clita et kasd rebum sea elitr.</p>
          </div>
          <button className='header-btn'><b>Learn More</b></button>
          <button className='header-btnn'><b>Our Classes</b></button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item>
        <div className="carousel-bg slide3"></div>
        <div className="OnlineCourses"></div>
        <Carousel.Caption>
          <h1 className='content'> The Best Kindergarten <br />School For Your Child</h1>
          <p className='content-p'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum <br />et diam justo clita et kasd rebum sea elitr.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CustomCarousel;
