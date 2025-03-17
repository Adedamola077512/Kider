import React from 'react'
import LearnMore from '../components/LearnMore';
import BecomeATeacher from '../components/BecomeATeacher';
// import PopularTeachers from '../components/PopularTeachers';
const About = () => {
  return (
    <div>
      <h1 className='Facilities-h1 text-center mt-5'><b>About Us</b></h1>
        <LearnMore />
        <BecomeATeacher />
        {/* <PopularTeachers /> */}
    </div>
  )
}

export default About