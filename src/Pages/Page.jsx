import React from 'react'
import Facilities from '../components/Facilities';
import OurClients from '../components/OurClients';
import BecomeATeacher from '../components/BecomeATeacher';
import Appointment from '../components/Appointment';
// import PopularTeachers from '../components/PopularTeachers';  
const Page = () => {
  return (
    <div>
      <Facilities />
      {/* <PopularTeachers /> */}
      <BecomeATeacher />
      <Appointment />
      <OurClients />
    </div>
  )
}

export default Page