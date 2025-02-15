import React from 'react'
import Morinond from "../../img/milay.png"
function HeroSection() {
  return (
    <section id='heroSection' className='hero--section'>
    <div className='hero--section--content-box'>
     <div className='hero--section--content'>
       <p className='section--tittle'>Hey, I'm Morinond</p>
       <h1 className='hero--section--tittle'>
        <span className='hero--section-tittle--color'>
          Full Stack  
        </span>{" "}
        <br />
          Developer
       </h1>
       <p className='hero--section-description'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        <br />
        Similique culpa est eum laudantium totam!
       </p>
     </div>
     <button className='btns btn-primary'>Get In Touch</button>
    </div>
    <div className='hero--section--img'>
     <img src={Morinond} alt='hero section'></img>
    </div>
    </section> 
  )
}

export default HeroSection