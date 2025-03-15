import React from 'react'
import './BecomeATeacher.css'
import call from '../assets/call-to-action.jpg'
import { FaArrowRight } from "react-icons/fa";
const BecomeATeacher = () => {
  return (
    <div className='container mt-5 py-5' data-aos="fade-up">
        <div className='become-flex'>
            <div>
                <img src={call} alt="" className='img4'/>
            </div>
            <div>
                <h1 className='become-h1'><b>Become A Teacher</b></h1>
                <p className='become-p'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam <br />amet diam et eos. Clita erat ipsum et lorem et sit, sed stet <br />lorem sit clita duo justo magna dolore erat amet</p>
                <button className='become-btn'>Get Started Now <FaArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default BecomeATeacher