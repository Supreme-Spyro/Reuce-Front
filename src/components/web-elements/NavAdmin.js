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
  //   const dispatch = useDispatch();

  //   const userToken = localStorage.getItem("token");
  //   const decodedToken = userToken ? jwtDecode(userToken) : null;

  // const userData = useSelector((state) => state.userProfileReducer);
  // console.log("userId", userData);

  //   const [searchState, setSearchState] = useState({
  // name: "",
  //   });

  //   const changeSearch = (event) => {
  //     setSearchState({
  //       ...searchState,
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  const logoutFunction = (event, history) => {
    event.preventDefault();
    localStorage.clear();
    pushHome();
  };

  const pushHome = () => {
    document.location.href = "/";
  };
  //   const toProfile = () => {
  //     document.location.href = `/profile/${decodedToken._id}`;
  //   };

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
              <Nav.Link as={Link} to="/admin/product" className="link-kategori">
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/article" className="link-kategori">
                Article
              </Nav.Link>
            </Nav>
            {/* <Nav className="mx-auto my-1 ">
              <Form
                autoComplete="off"
                onSubmit={(event) => {
                  setShowLoading(true);
                  dispatch(getSearchActions(searchState, event, history));
                }}
                inline
              >
                <InputGroup className="search-group">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <Search size={15} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    size="sm"
                    className="input-search nunito"
                    name="name"
                    type="text"
                    placeholder=""
                    //   className="mr-sm-2"
                    onChange={(event) => changeSearch(event)}
                    value={searchState.name}
                  />
                </InputGroup>
              </Form>
            </Nav> */}
            <Nav>
              <Button
                className="button-daftar nunito"
                size="sm"
                onClick={(event) => {
                  setShowLoading(true);
                  logoutFunction(event, history);
                }}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
