import './Facilities.css'
import { FaBusAlt } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { FaHouseUser } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Facilities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
  }, []);
  return (
    <div className='container text-center mt-5 py-5'>
      <div>
        <h1 className='Facilities-h1' data-aos="fade-up"><b>School Facilities</b></h1>
        <p className='Facilities-p' data-aos="fade-up">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br />vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        <div className='facilities-flex mt-5' data-aos="fade-up">
          <div className='hover'>
            <div className='FaBusAlt'><FaBusAlt size={50}/></div>
            <div className='Facilities-school-bus'>
              <h4 className='Facilities-h3'>School Bus</h4>
              <p>Eirmod sed ipsum dolor sit <br />rebum magna erat lorem <br /> kasd vero ipsum sit</p>
            </div>
          </div>
          <div>
            <div className='IoIosFootball'><IoIosFootball size={50}/></div>
            <div className='Facilities-playground'>
              <h4 className='Facilities-playground-h3'>playground</h4>
              <p>Eirmod sed ipsum dolor sit <br />rebum magna erat lorem <br />kasd vero ipsum sit</p>
            </div>
          </div>
          <div>
            <div className='FaHouseUser'><FaHouseUser size={50}/></div>
            <div className='Facilities-healthy-canteen'>
              <h4 className='Facilities-healthy-canteen-h3'>Healthy Canteen</h4>
              <p>Eirmod sed ipsum dolor sit <br />rebum magna erat lorem <br />kasd vero ipsum sit</p>
            </div>
          </div>
          <div>
            <div className='FaChalkboardTeacher'><FaChalkboardTeacher size={50} color="cyan" /></div>
            <div className='Facilities-positive-learning'>
              <h4 className='Facilities-positive-learning-h3'>Positive Learning</h4>
              <p>Eirmod sed ipsum dolor sit <br />rebum magna erat lorem <br />kasd vero ipsum sit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities