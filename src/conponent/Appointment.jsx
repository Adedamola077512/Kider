import React from 'react'
import './Appointment.css'
import appointment from '../assets/appointment.jpg'
const Appointment = () => {
  return (
    <div className='container'>
        <div className='Appointment-flex'>
            <div>
                <h1 className='school-h4'>Make Appointment</h1>
                <div>
                    <input type="text" placeholder='Gurdian Name'/>
                    <input type="email" placeholder='Gurdian Email'/>
                </div>
                <div>
                    <input type="text" placeholder='Child Name'/>
                    <input type="email" placeholder='Child Age'/>
                </div>
                <input type="message" placeholder='Message' className='message'/>
                <button className='submit'>Submit</button>
            </div>
            <div>
                <img src={appointment} alt="" className='appointment-img'/>
            </div>
        </div>
    </div>
  )
}

export default Appointment