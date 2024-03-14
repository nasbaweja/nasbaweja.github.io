import React from 'react'

import './home.css'

import NavbarJS from '../elements/navbar';
import Skillsection from '../elements/skillsection';
import Footer from '../elements/footer';

const Skills = (props) => {
  return (
    <div className="home-container">
      <NavbarJS />
        <Skillsection />
      <Footer />
    </div>
  )
}

export default Skills;

