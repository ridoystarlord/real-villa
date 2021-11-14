import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Button from "@mui/material/Button";
import logo from "../../../images/logo_black.svg";
import "./Header.css";
import { useHistory } from "react-router";

const Header = () => {
  const { user, logout, setUser, setIsLoading } = useAuth();
  const history = useHistory();
  const handleLogout = () => {
    logout()
      .then(() => {
        setUser({});
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold text-center">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/properties">
              Properties
            </Nav.Link>
            {user.email
              ? [
                  <Nav.Link key="dashboard" as={NavLink} to="/dashboard">
                    Dashboard
                  </Nav.Link>,
                  <Button
                    key="logout"
                    onClick={handleLogout}
                    className="explore-btn"
                    sx={{
                      backgroundColor: "#26ae61",
                      borderColor: "#26ae61",
                    }}
                    variant="contained"
                  >
                    Logout
                  </Button>,
                ]
              : [
                  <Nav.Link
                    key="register"
                    className="bg-register-btn rounded-pill text-white px-3 fw-normal"
                    as={NavLink}
                    to="/register"
                  >
                    Register
                  </Nav.Link>,
                  <Nav.Link
                    key="login"
                    className="bg-login-btn rounded-pill text-white px-3 ms-lg-2 fw-normal mt-lg-0 mt-2"
                    as={NavLink}
                    to="/login"
                  >
                    Login
                  </Nav.Link>,
                ]}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
