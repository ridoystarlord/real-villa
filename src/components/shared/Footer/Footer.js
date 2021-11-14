import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="py-3 bg-footer">
      <Container>
        <Row className="g-3 align-items-center">
          <Col className="col-md-6 col-12 text-lg-start text-center">
            <img width="250" src={logo} alt="" />
          </Col>
          <Col className="col-md-6 col-12">
            <p className="footer-name text-white text-lg-end text-center">
              &copy; Copyright 2021 <span>Real villa</span> All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
