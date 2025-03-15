import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
const Contacts = () => {
  return (
    <div>
        <h1><b>Get In Touch</b></h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br />vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        <div>
            <div>
                <span><FaLocationDot /></span>
                <p>123 Main St, Anytown, USA 12345</p>
            </div>
            <div>
                <span><IoMdMailOpen /></span>
                <p>info@school.com</p>
            </div>
            <div>
                <span><FaPhone /></span>
                <p>+012 345 67890</p>
            </div>
        </div>
    </div>
  )
}

export default Contacts