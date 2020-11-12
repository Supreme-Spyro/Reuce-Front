import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import jwtDecode from "jwt-decode";
import {
  Navbar,
  //   NavDropdown,
  Nav,
  //   Form,
  //   FormControl,
  Button,
  Container,
  //   InputGroup,
  Modal,
  Spinner,
} from "react-bootstrap";

// import { getSearchActions } from "../../redux/actions/search.action";

import "../../styles/navbar.scss";
import reucelite from "../../assets/reuce-lite.png";

export default function NavbarBootstrap() {
  const history = useHistory();

  const logoutFunction = (event, history) => {
    event.preventDefault();
    localStorage.clear();
    pushHome();
  };

  const pushHome = () => {
    document.location.href = "/";
  };

  // loading modal variables
  const [showLoading, setShowLoading] = useState(false);
  const handleClose = () => setShowLoading(false);
  // const handleShow = () => setShowLoading(true);
  // loading modal variables

  return (
    <div>
      <Navbar
        className="navlink lato shadowNavbar"
        fixed="top"
        bg="light"
        expand="lg"
      >
        {/* loading modal */}
        <Modal
          style={{ position: "fixed", left: "25%", top: "25%" }}
          show={showLoading}
          onHide={handleClose}
          className="w-50"
        >
          <Modal.Header className="text-center">
            <Modal.Title className="text-center">Please Wait...</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Spinner className="mx-auto " animation="border" variant="info" />
          </Modal.Body>
        </Modal>
        {/* loading modal */}

        <Container>
          {/* <Link
            onClick={() => {
              setShowLoading(true);
              window.location.href = `/`;
            }}
            to="/"
          > */}
          <Navbar.Brand
            as={Link}
            // onClick={() => {
            //   setShowLoading(true);
            //   window.location.href = `/admin`;
            // }}
            to="/admin"
          >
            <img
              src={reucelite}
              width="150"
              height="35px"
              width="35px"
              className="d-inline-block align-top mx-auto"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>{" "}
          {/* </Link> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/admin/users" className="link-kategori">
                User
              </Nav.Link>
              {/* </Nav> */}
              {/* <Nav> */}
              <Nav.Link
                as={Link}
                to="/admin/products"
                className="link-kategori"
              >
                Product
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/admin/articles"
                className="link-kategori"
              >
                Article
              </Nav.Link>
            </Nav>
            <Nav className="ml-5 justify-content-end text-right">
              <Nav.Link>
                <Button
                  className="button-daftar nunito justify-content-end"
                  size="sm"
                  onClick={(event) => {
                    setShowLoading(true);
                    logoutFunction(event, history);
                  }}
                >
                  Logout
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
