import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


import './App.css'
import Home from './views/home'
import AboutMe from './views/aboutMe'
import NotFound from './views/not-found'
import Skills from './views/skills'
import Experience from './views/experience'

const App = () => {
  return (
    <Router baseline="/">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutMe' element={<AboutMe/>} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App;
