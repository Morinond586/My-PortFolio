import React from 'react';
import Aboutme from "../../img/milays.png";

export default function AboutMe() {
    return (
        <section id="aboutMe" className="about--section">
            <div className="about--section--img">
                <img src={Aboutme} alt="aboutMe" />
            </div>
            <div className='hero--section--content--box about--section--content--box'>
                <div className='hero--section--content'>
                  <p className='section--title'>
                    A Propos
                  </p>
                  <h1 className='skills--section--heading'> A Propos de Moi
                  </h1>
                  <p className='hero--section-description'>
                     Après l'information de Developpemenet Intranet 
                     Internet pendant trois ans au sein de 
                     l'Ecole de manangement et d'innvation technologie,
                     je suis pensionné sur le developpement logiciel.
                  </p>
                  <p className='hero--section-description'>
                    Et actuellement je cherche de travail sur le developpement web, 
                    logiciel et application mobile en utilisant quelque langanges de programmation
                    comme Javascript, PHP, Java et Python ainsi que je maitrise les framwork comme
                    React, Next, Angular, React-Native, Laravel.
                  </p>
                </div>
            </div>
        </section>
    );
}