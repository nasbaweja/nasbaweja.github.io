import React from 'react'

import './home.css'

import NavbarJS from '../elements/navbar';
import AboutMe from '../elements/aboutMe';
import Footer from '../elements/footer';

const Home = (props) => {
  return (
    <div className="home-container">
      <NavbarJS />
        <AboutMe />
      <Footer />
    </div>
  )
}

export default Home;

