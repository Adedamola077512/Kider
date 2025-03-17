import React from 'react'
import './Contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
const Contacts = () => {
  return (
    <div className='container mt-5 py-5'>
        <h1 className='Facilities-h1 text-center'><b>Get In Touch</b></h1>
        <p className='Facilities-p text-center'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br />vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        <div className='contact-flex'>
            <div>
                <div className='icon'><FaLocationDot /></div>
                <p className='contact-p'><b>123 Main St, Anytown, USA 12345</b></p>
            </div>
            <div>
                <div className='icon'><IoMdMailOpen /></div>
                <p className='contact-p'><b>info@school.com</b></p>
            </div>
            <div>
                <div className='icon'><FaPhone /></div>
                <p className='contact-p'><b>+012 345 67890</b></p>
            </div>
        </div>

        <div className='info-flex'>
            <div>
                <p className='contact-info-p'>The contact form is currently inactive. Get a functional and <br />working contact form with Ajax & PHP in a few minutes. <br />Just copy and paste the files, add a little code and you're done. <br /><a href="#">Download Now.</a></p>
                <div>
                    <input type="text" placeholder='Your Name'/>
                    <input type="email" placeholder='Your Email'/><br />
                    <input type="text" placeholder='Subject' className='input-subject'/><br />
                    <textarea placeholder='Your Message' className='input-message'></textarea><br />
                    <button className='submit'><b>Send Message</b></button>
                </div>
            </div>
            <div>
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.96305791531594!3d-37.81362797975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614071848392!5m2!1sen!2sus"  frameborder="0"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contacts