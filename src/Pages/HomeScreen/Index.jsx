import React from 'react'
import HeroSection from '../Homes/HeroSection'
import Myskills from '../Homes/Myskills'
import AboutMe from '../Homes/AboutMe'
import MyPorfolio from '../Homes/MyPorfolio'
import Testimonials from '../Homes/Testimonials'
import ContactMe from '../Homes/ContactMe'
import Footer from '../Homes/Footer'

function Index() {
  return (
    <div>
        <HeroSection />
        <Myskills />
        <AboutMe />
        <MyPorfolio  />
        <Testimonials />
        <ContactMe />
        <Footer />
    </div>
  )
}

export default Index