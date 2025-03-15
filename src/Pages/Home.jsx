import React from 'react';
import Header from '../components/Header';
import Facilities from '../components/Facilities';
import LearnMore from '../components/LearnMore';
import BecomeATeacher from '../components/BecomeATeacher';
import SchoolClasses from '../components/SchoolClasses';
import Appointment from '../components/Appointment';
import PopularTeachers from '../components/PopularTeachers';  // Fixed path
import OurClients from '../components/OurClients';
import Contact from '../components/Contacts';

const Home = () => {
  return (
    <div>
      <Header />
      <Facilities />
      <LearnMore />
      <BecomeATeacher />
      <SchoolClasses />
      <Appointment />
      <PopularTeachers />
      <OurClients />
      <Contact />
    </div>
  );
};

export default Home;
