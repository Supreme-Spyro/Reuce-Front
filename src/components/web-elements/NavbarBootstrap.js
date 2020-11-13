import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
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
  const toProfile = () => {
    document.location.href = `/profile/${decodedToken._id}`;
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
            onClick={() => {
              setShowLoading(true);
              window.location.href = `/`;
            }}
            to="/"
          >
            <img
              src={reuceLogo}
              width="150"
              // height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>{" "}
          {/* </Link> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {/* <LinkContainer to="/category"> */}
              <Nav.Link as={Link} to="/category" className="link-kategori">
                Kategori
              </Nav.Link>
              {/* </LinkContainer> */}
            {/* </Nav> */}
            {/* <Nav> */}
              {/* <LinkContainer to="/articles"> */}
              <Nav.Link as={Link} to="/articles/home" className="link-kategori">
                Artikel
              </Nav.Link>
              {/* </LinkContainer> */}
            </Nav>
            <Nav className="mx-auto my-1 ">
              <Form
                autoComplete="off"
                onSubmit={(event) => {
                  event.preventDefault();
                  // setShowLoading(true);
                  history.push(`/search/${searchState.name}`)
                  // dispatch(getSearchActions(searchState, event, history));
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
                    className="link-kategori"
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        setShowLoading(true);
                        toProfile();
                      }}
                      // to={`/profile/${decodedToken._id}`}
                      className="nunito"
                      // onClick={(event)=>{dispatch(getUserRequestbyId(event,history))}}
                    >
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="nunito"
                      onClick={(event) => {
                        setShowLoading(true);
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
                    <Cart2 className="ml-1 text-dark mt-2" size={26} />
                  </NavLink>
                </Nav>
              ) : (
                <Nav.Link className="button-masuk montserrat">
                  {/* <LinkContainer className="text-dark" to="/login"> */}
                  <Button as={Link} to="/login" size="sm" variant="light">
                    Masuk
                  </Button>
                  {/* </LinkContainer> */}
                  &nbsp; &nbsp;
                  {/* <LinkContainer className="text-dark " to="/register"> */}
                  <Button
                    as={Link}
                    to="/register"
                    size="sm"
                    className="button-daftar"
                  >
                    Daftar
                  </Button>
                  {/* </LinkContainer> */}
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
