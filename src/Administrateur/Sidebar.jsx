import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaClipboardList, FaHome, FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import "./css/note.css";
import Emit from "../img/Emit.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
      <img src={Emit} alt="logo emit" style={{width: "50px"}}></img>
        <br />
      </div>
      <ul className="menu" style={{ marginTop: "20px" }}>
        <li>
          <a href="/Releve-de-note">
            <i className="fas fa-user">
              <FaHome size={30} color="#5b90eb" />
            </i>
            <span style={{color: "#5b90eb"}}>Home</span>
          </a>
        </li>
        <li>
          <a href="/listetud">
            <i className="fas fa-list">
              <MdSchool size={30} color="#5b90eb" />
            </i>
            <span style={{color: "#5b90eb"}}>List Etudiant</span>
          </a>
        </li>
        <li>
          <a href="/notes">
            <i className="fas fa-chart-bar">
              <FaClipboardList size={30} color="#5b90eb" />
            </i>
            <span style={{color: "#5b90eb"}}>Notes</span>
          </a>
        </li>
        <li className="logout">
          <a href="">
            <i className="fas fa-sign-out-alt">
              <AiOutlineLogout size={30} color="#e61313" />
            </i>
            <span style={{color: "#5b90eb"}}>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
