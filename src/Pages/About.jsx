import React from 'react'
import LearnMore from '../components/LearnMore';
import BecomeATeacher from '../components/BecomeATeacher';
const About = () => {
  return (
    <div>
      <h1 className='Facilities-h1 text-center mt-5'><b>About Us</b></h1>
        <LearnMore />
        <BecomeATeacher />
    </div>
  )
}

export default About