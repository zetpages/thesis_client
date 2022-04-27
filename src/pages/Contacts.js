import React from "react";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../routes";
import ReactHero from "../assets/img/technologies/oku-hero-logo.svg";
import Presentation from "./Presentation";


export default () => {


  return (
    <>
      <Navbar expand="lg" className="bg_transparent sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={Link} to={Routes.Presentation.path} className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={Link} to={Routes.Docs.path}>Докумнтация</Nav.Link>
                <Nav.Link as={Link} to={Routes.Support.path}>Поддержа</Nav.Link>
                <Nav.Link as={Link} to={Routes.Contacts.path}>Контакты</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <Button as={Link} to={Routes.DashboardOverview.path} variant="outline-dark" className="ms-3">Попробовать</Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
