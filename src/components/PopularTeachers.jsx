import React from 'react'
import './PopularTeachers.css'
import team1 from '../assets/team-1.jpg'
import team2 from '../assets/team-2.jpg'
import team3 from '../assets/team-3.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const PopularTeachers = () => {
  return (
    <div className='container text-center popular-teachers'>
        <h1 className='popular'><b>Popular Teachers</b></h1>
        <p className='Facilities-p'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br />vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        <div className='popular-flex mt-5'>
            <div>
                <div className='team1'><img src={team1} alt="team1" className='img6'/></div>
                <div className='team'>
                  <h4><b>Full Name</b></h4>
                  <p>Designation</p>
                  <div>
                    <span className='FaFacebook'><FaFacebook /></span>
                    <span className='FaFacebook'><FaTwitter /></span>
                    <span className='FaFacebook'><FaInstagram /></span>
                  </div>
                </div>
            </div>
            <div>
                <div className='team2'><img src={team2} alt="team2" className='img6'/></div>
                <div className='teamm'>
                  <h4><b>Full Name</b></h4>
                  <p>Designation</p>
                  <div>
                    <span className='FaFacebook'><FaFacebook /></span>
                    <span className='FaFacebook'><FaTwitter /></span>
                    <span className='FaFacebook'><FaInstagram /></span>
                  </div>
                </div>
            </div>
            <div>
                <div className='team3'><img src={team3} alt="team3" className='img6'/></div>
                <div className='teamm1'>
                  <h4><b>Full Name</b></h4>
                  <p>Designation</p>
                  <div>
                    <span className=' FaFacebook'><FaFacebook /></span>
                    <span className=' FaFacebook'><FaTwitter /></span>
                    <span className=' FaFacebook'><FaInstagram /></span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopularTeachers