import React, { useState } from "react";
import "./css/note.css";
import {
  MdHome,
  MdSearch,
  MdImportExport,
  MdPrint,
  MdNoteAlt,
  MdNotes,
} from "react-icons/md";
import { MdEditSquare } from "react-icons/md"; // Icone pour le bouton de modification
import { MdDeleteForever } from "react-icons/md";

import { RiStickyNoteAddFill } from "react-icons/ri";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import HeaderPages from "./HeaderPages";

function ListEtudiant() {

  const [showModal, setShowModal] = useState(false); // Pour gérer l'affichage du modal d'ajout
  const [showEditModal, setShowEditModal] = useState(false); // Pour gérer l'affichage du modal de modification


  // Fonction pour fermer le modal
  const handleClose = () => setShowModal(false);

  // Fonction pour afficher le modal d'ajout
  const handleShow = () => setShowModal(true);

  // Fonction pour fermer le modal de modification
  const handleCloseEdit = () => setShowEditModal(false);

  return (
    <div className="body">
      <Sidebar />
      <div className="main--content">
        <HeaderPages />
        <Dashboard />
        <div className="tabular--wrapper">
          <div className="header--wrapper">
            <div className="header--title">
              <h2>Lists des étudiants inscrits</h2>
            </div>
            <Link
              to={"/Releve-de-note"}
              style={{ textDecoration: "none", size: "10px", color: "#26678e" }}
            >
              <MdHome size={"19px"} />
              Home
            </Link>
            <Link
              to={"/notes"}
              style={{ textDecoration: "none", size: "12px", color: "#26678e" }}
            >
              <MdNoteAlt />
              Notes
            </Link>
            <Link
              to={"/Relevee"}
              style={{ textDecoration: "none", size: "12px", color: "#26678e" }}
            >
              <MdNotes /> Relevée de note
            </Link>
            <Link
              to={"#"}
              style={{ textDecoration: "none", size: "12px", color: "#26678e" }}
            >
              <MdPrint /> Imprimer
            </Link>
            <Link
              to={"#"}
              style={{ textDecoration: "none", size: "12px", color: "#26678e" }}
            >
              <MdImportExport /> Exporter
            </Link>
            {/* Boîte de recherche */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Rechercher"
              />
              <MdSearch />
            </div>
            <div className="user--info">
              <button
                onClick={handleShow}
                className="btn btn"
                style={{ background: "#2196F3" }}
              >
                <RiStickyNoteAddFill /> Nouveau Etudiant
              </button>
            </div>
          </div>

          {/* Tableau des étudiants */}
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Matricule</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>
                      <Button
                        variant=""
                      >
                        <MdEditSquare color="#2196F3" size={20} /> Modifier
                      </Button>
                      <Button
                        variant=""
                      >
                        <MdDeleteForever color="#e10d0d" size={20} /> Supprimer
                      </Button>
                    </td>
                  </tr>
              </tbody>
            </table>
        
          </div>
        </div>
        {/* Modale d'ajouut */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter une note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formStudentName">
                <Form.Label>Matricule</Form.Label>
                <Form.Control
                  type="text"
                  name="matricule"
                  placeholder="Matricule"
                />
              </Form.Group>

              <Form.Group controlId="formStudentLastName">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="nom"
                  placeholder="Nom"
                />
              </Form.Group>

              <Form.Group controlId="formStudentFirstName">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
            <Button variant="primary">
              Ajouter
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal de modification */}
        <Modal show={showEditModal} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier une note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formStudentName">
                <Form.Label>Matricule</Form.Label>
                <Form.Control
                  type="text"
                  name="matricule"
                  placeholder="Matricule"
                />
              </Form.Group>
              <Form.Group controlId="formStudentLastName">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="nom"
                  placeholder="Nom"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Fermer
            </Button>
            <Button variant="primary">
              Modifier
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ListEtudiant;
