import React from 'react'
import SchoolClasses from '../components/SchoolClasses';
import Appointment from '../components/Appointment';
import OurClients from '../components/OurClients';
const Classes = () => {
  return (
    <div>
      <SchoolClasses />
      <Appointment />
      <div style={{marginTop: "250px"}}>
        <OurClients />
      </div>
    </div>
  )
}

export default Classes