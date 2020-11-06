import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Search, Cart2 } from "react-bootstrap-icons";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  InputGroup,
  Modal,
  Spinner,
} from "react-bootstrap";

import { getSearchActions } from "../../redux/actions/search.action";

import "../../styles/navbar.scss";
import reuceLogo from "../../assets/reuce-logo.png";

export default function NavbarBootstrap() {
  const history = useHistory();
  const dispatch = useDispatch();

  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : null;

  // const userData = useSelector((state) => state.userProfileReducer);
  // console.log("userId", userData);

  const [searchState, setSearchState] = useState({
    name: "",
  });

  const changeSearch = (event) => {
    // console.log("event", event);
    setSearchState({
      ...searchState,
      [event.target.name]: event.target.value,
    });
  };

  const dataOrder = useSelector((state) => state.showDataOrderItem);

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
  const handleShow = () => setShowLoading(true);
  // loading modal variables

  return (
    <div>
      <Navbar className="lato" fixed="top" bg="light" expand="lg">
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
          <Link
            onClick={() => {
              setShowLoading(true);
              window.location.href=`/`
            }}
            // to="/"
          >
            <Navbar.Brand>
              <img
                src={reuceLogo}
                width="150"
                // height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>{" "}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="link-kategori">Kategori</Nav.Link>
            </Nav>
            {/* <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
            <Nav className="mx-auto my-1 ">
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
            </Nav>
            <Nav>
              {decodedToken ? (
                <Nav className="lato">
                  <NavDropdown
                    title={`${decodedToken.username}`}
                    id="profile-nav-dropdown"
                  >
                    <NavDropdown.Item
                      as={Link}
                      onClick={() => {
                        setShowLoading(true);
                      }}
                      to={`/profile/${decodedToken._id}`}
                      className="nunito"
                      // onClick={(event)=>{dispatch(getUserRequestbyId(event,history))}}
                    >
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="nunito"
                      onClick={(event) => {
                        logoutFunction(event, history);
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavLink to="/shopcart">
                    {/* {console.log("data order diluar:",dataOrder)} */}
                    {dataOrder !== undefined ? (
                      dataOrder.length > 0 ? (
                        <Nav.Link>
                          {/* <div className=""> */}
                          {/* <span className=""> */}
                          {dataOrder.length}
                          {/* {console.log("quantity data: ", dataOrder)} */}
                          {/* </span> */}
                          {/* </div> */}
                        </Nav.Link>
                      ) : null
                    ) : (
                      "loading"
                    )}
                    <Cart2 className="ml-1 text-dark" size={30} />
                  </NavLink>
                </Nav>
              ) : (
                <Nav.Link className="button-masuk">
                  <Link className="text-dark" to="/login">
                    <Button size="sm" variant="light">
                      Masuk
                    </Button>
                  </Link>
                  &nbsp; &nbsp;
                  <Link className="text-dark " to="/register">
                    <Button size="sm" className="button-daftar">
                      Daftar
                    </Button>
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
