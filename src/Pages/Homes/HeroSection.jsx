import React from "react";
import Morinond from "../../img/MorinonVital.png";
import { FaAngular, FaJava, FaLaravel, FaLeaf, FaNodeJs, FaPhp, FaReact } from "react-icons/fa6";
function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <p className="section--tittle">Hey, Je suis Morinond</p>
          <h1 className="hero--section--tittle">
            <span className="hero--section-tittle--color">Full Stack</span>{" "}
            <br />
            Developer JS
          </h1>
          <p className="hero--section-description">
           React / Angular / React Native 
          </p>
        </div>
        <div className="hero--section--btns">
        <FaReact size={50} color="#61DAFB"/>
        <FaAngular size={50} color="red"/>
        <FaNodeJs size={50} color="green"/>
        <FaJava size={50} color="#5382A1"/>
        <FaLeaf size={50} color="#6DB33F" />
        <FaPhp size={50} color="#777BB4"/>
        <FaLaravel size={50} color="#FF2D20"/>
        </div>
        <button className="btns btn-primary">Télécharger CV</button>
      </div>
      <div className="hero--section--img">
        <img src={Morinond} alt="hero section"></img>
      </div>
    </section>
  );
}

export default HeroSection;
