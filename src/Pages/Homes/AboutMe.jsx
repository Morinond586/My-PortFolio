import React from 'react';
import Aboutme from "../../img/AboutMe.png";

export default function AboutMe() {
    return (
        <section id="aboutMe" className="about--section">
            <div className="about--section--img">
                <img src={Aboutme} alt="aboutMe" />
            </div>
            <div className='hero--section--content--box about--section--content--box'>
                <div className='hero--section--content'>
                  <p className='section--title'>
                    About
                  </p>
                  <h1 className='skills--section--heading'> About Me
                  </h1>
                  <p className='hero--section-description'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Esse dolorem quas harum repudiandae eum impedit 
                     porro totam architecto deleniti eaque! Eveniet
                      exercitationem quisquam aspernatur ab, 
                      dolore quos quo veritatis consequuntur.
                  </p>
                  <p className='hero--section-description'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Esse dolorem quas harum repudiandae eum impedit 
                     porro totam architecto deleniti eaque! Eveniet
                      exercitationem quisquam aspernatur ab, 
                      dolore quos quo veritatis consequuntur.
                  </p>
                </div>
            </div>
        </section>
    );
}