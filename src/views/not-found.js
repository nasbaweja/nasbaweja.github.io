import React from 'react'

import { Helmet } from 'react-helmet'
import NOTFOUND from '../images/404.jpg';
import './not-found.css'
import NavbarJS from '../elements/navbar';
import Footer from '../elements/footer';

const NotFound = (props) => {
  return (
    <div>
      <NavbarJS />
    <div className="not-found-container">
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found-container1">
        <h1 className="not-found-text1">404</h1>
      </div>
      <div className="not-found-container1">
        <img src={NOTFOUND} alt='NOT-FOUND' />
      </div>
      <div className="not-found-container2">
        <h2 className="not-found-text2">
          MOVE ALONG
        </h2>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
