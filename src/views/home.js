import React from 'react'

import './home.css'

import NavbarJS from '../elements/navbar';
import MainHeader from '../elements/main-header';
import Header2 from '../elements/header-2';
import Main2 from '../elements/main2';
import FAQ from '../elements/FAQ';
import Footer from '../elements/footer';

const Home = (props) => {
  return (
    <div className="home-container">
      <NavbarJS />
      <MainHeader />
      <Header2 />
      <Main2 />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home;

