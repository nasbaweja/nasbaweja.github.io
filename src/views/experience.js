import React from 'react'

import './home.css'

import NavbarJS from '../elements/navbar';
import ExperienceSection from '../elements/experience';
import Footer from '../elements/footer';

const Experience = (props) => {
  return (
    <div className="home-container">
      <NavbarJS />
      <ExperienceSection />
      <Footer />
    </div>
  )
}

export default Experience;

