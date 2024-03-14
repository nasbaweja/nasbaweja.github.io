import React from 'react'

import './home.css'

import NavbarJS from '../elements/navbar';
import CertificationSection from '../elements/certifications';
import Footer from '../elements/footer';

const Certifications = (props) => {
  return (
    <div className="home-container">
      <NavbarJS />
        <CertificationSection />
      <Footer />
    </div>
  )
}

export default Certifications;

