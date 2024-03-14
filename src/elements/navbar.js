import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

import { Helmet } from 'react-helmet'
import LogoBlack from '../images/Logos/Default-Monochrome-Black.svg'
import LogoWhite from '../images/Logos/Default-Monochrome-White.svg'
import Resume from "../content/NimerSingh_Resume.pdf";

function CustomNavbar() {
  const [navbarShrink, setNavbarShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarShrink(true);
      } else {
        setNavbarShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Nimer Singh</title>
        <meta property="og:title" content="Nimer Singh" />
      </Helmet>
      <div className="home-header">
        {/* <Navbar bg={navbarShrink ? 'light' : 'transparent'} variant="dark" expand="lg" fixed="top" className={navbarShrink ? 'shrink' : ''}> */}
        <Navbar
          // bg={navbarShrink ? 'rgba(255,255,255,0.0)' : 'light'}
          variant="dark"
          expand="lg"
          fixed="top"
          style={{
            transition: 'background-color 0.3s ease', // Inline transition style for the background color
            backgroundColor: navbarShrink ? 'rgba(255,255,255,0.0)' : 'light', // Initial background color based on navbarShrink state
          }}
        >
        <Navbar.Brand href="/" className="me-auto ms-auto"> <img width={navbarShrink ? '30%' : '50%'} className="img-responsive ms-5" src={navbarShrink ? LogoBlack : LogoBlack} style={{ filter: navbarShrink ? 'invert(100%)' : '' }} alt="logo" /></Navbar.Brand>
            {/* <Navbar.Collapse id="home-desktop-menu"> */}
              <Nav className="home-links">
                <Nav.Link href="/AboutMe" className='bodySmall' style={{color: navbarShrink ? 'white' : 'black'}}>About Me</Nav.Link>
                <Nav.Link href="/Skills" className="home-nav22 bodySmall" style={{color: navbarShrink ? 'white' : 'black'}}>Skills</Nav.Link>
                <Nav.Link href="/Experience" className="home-nav32 bodySmall" style={{color: navbarShrink ? 'white' : 'black'}}>Experience</Nav.Link>
                {/* <Nav.Link href="/Certifications" className="home-nav42 bodySmall">Certifications</Nav.Link> */}
                {/* <Nav.Link href="/ContactInfo" className="home-nav52 bodySmall" style={{color: navbarShrink ? 'white' : 'black'}}>Contact me</Nav.Link> */}
                <Nav.Link href={Resume} className="home-nav62 bodySmall" download="Nimer A. Singh Resume.pdf" target='_blank' style={{color: navbarShrink ? 'white' : 'black'}}>Resume</Nav.Link>
              </Nav>
            {/* </Navbar.Collapse> */}
        </Navbar>
      </div>
    </>
  );
}

export default CustomNavbar;