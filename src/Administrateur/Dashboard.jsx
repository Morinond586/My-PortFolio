import React from 'react'
import { MdError, MdGppGood, MdSchool } from 'react-icons/md'
import "./css/note.css";

function Dashboard() {
  return (
    <div>
        <div className="card--container">
          <div className="d-flex">
            <h3 className="main--title">Tableau de bord : </h3>
            <select id="" style={{ textAlign: 'center', marginTop: '-14px' }}>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
          {/* Tableau des cartes */}
          <div className="card--wrapper">
            <div className="payment--card light-dark">
              <div className="card--header">
                <div className="amout">
                  <span className="title">Résultat L1</span>
                  <span className="amout--value">25%</span>
                </div>
                <i className="fas fa-solid fa-check dark-darkblue icon">
                  <MdGppGood />
                </i>
              </div>
              <span className="card-detail">*** *** *** 3456</span>
            </div>

            <div className="payment--card light-purple">
              <div className="card--header">
                <div className="amout">
                  <span className="title">Résultat L2</span>
                  <span className="amout--value">50%</span>
                </div>
                <i className="fas fa-list icon dark-purple">
                  <MdGppGood />
                </i>
              </div>
              <span className="card-detail">*** *** *** 39056</span>
            </div>

            <div className="payment--card light-green">
              <div className="card--header">
                <div className="amout">
                  <span className="title">Résultat L3</span>
                  <span className="amout--value">75%</span>
                </div>
                <i className="fas fa-users icon dark-green">
                  <MdGppGood />
                </i>
              </div>
              <span className="card-detail">*** *** *** 345666</span>
            </div>

            <div className="payment--card light-blue">
              <div className="card--header">
                <div className="amout">
                  <span className="title">Meilleur note</span>
                  <span className="amout--value">70%</span>
                </div>
                <i className="fas fa-solid fa-check dark-blue  icon">
                  <MdSchool />
                </i>
              </div>
              <span className="card-detail">*** *** *** 3456</span>
            </div>

            <div className="payment--card light-red">
              <div className="card--header">
                <div className="amout">
                  <span className="title">Note minimale</span>
                  <span className="amout--value">15%</span>
                </div>
                <i className="fas fa-dollar-sign icon">
                  <MdError />
                </i>
              </div>
              <span className="card-detail">*** *** *** 3456</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard