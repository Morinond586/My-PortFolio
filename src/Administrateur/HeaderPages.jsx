import React from 'react'
import Img from "../img/male_user_30px.png";
import cloch from "../img/notification_32px.png";
import "./css/note.css";

function HeaderPages() {
  return (
    <div className="header--wrapper">
    <div className="header--title">
      <h2>Géstion des rélevées des notes</h2>
    </div>
    <div className="user--info">
      <div className="search-box">
        <i className="fa solid fa-search"></i>
        <img src={cloch} alt=""></img>
        <img src={Img} alt=""></img>
      </div>
    </div>
  </div>
  )
}

export default HeaderPages