import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Aboutme from '../components/Aboutme'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Skills/>
      <Projects/>
      <Aboutme/>
      <Contact/>
    </div>
  )
}

export default Home
