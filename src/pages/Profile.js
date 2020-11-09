import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import { getUserRequestById } from "../redux/actions/getUserData.action";
import { editUserDataActions } from "../redux/actions/getUserData.action";
// styling
import "../styles/Profile.css";
import "../styles/Font.scss";

//pic import
import blankAva from "../assets/blank-avatar.png";

//component import
import MyShopCard from "../components/web-elements/MyshopCard";
import MyShopCardSection from "../components/web-elements/MyShopCardSection";
import Footer from "../components/web-elements/Footer";

function Profile() {
  //requirement
  const history = useHistory();
  const dispatch = useDispatch();

  //get data from navbar redux
  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : "none";
  console.log("decoded token", decodedToken);

  //get data from reducer
  const userData = useSelector((state) => state.getUserDataReducer.data);
  
  
  console.log("userData", userData);

  //useState
  const [profileState, setProfileState] = useState({
    username: userData.username,
    fullname: userData.fullname,
    email: userData.email,
    // password: userData.password,
    address: userData.address,
  });

  const handleChange = (event) => {
    setProfileState({
      ...profileState,
      [event.target.name]: event.target.value,
    });
  };

  // opbtaining user data from redux
  useEffect(() => {
    dispatch(getUserRequestById(decodedToken._id));
  }, [dispatch]);

  console.log("userData", userData);

  function alertClicked() {
    history.push(`/myshop/${decodedToken._id}`);
  }

  console.log("profileState", profileState);

  // const handleSubmit = (event) => {
  //   if (

  //   )
  // }

  return (
    <div>
      {userData._id !== undefined ? (
        <div>
          <Container className="profileContainer-profile bg-light">
            <Row className="m-5">
              <Col lg={3}>
                <Container className=" nunito">
                  <Row>
                    <img src={blankAva} className="blankAva-profile" />
                  </Row>
                  <Row className="rowAva-profile">
                    <ul className="listAva-profile">
                      <li>{userData.username}</li>
                      <li>{userData.email}</li>
                      {/* <li>id :{userData._id}</li> */}
                    </ul>
                  </Row>

                  <Row>
                    <ListGroup
                      defaultActiveKey="#link1"
                      variant="flush"
                      mt={5}
                      className="listTab-profile"
                    >
                      <ListGroup.Item
                        action
                        // onClick={alertClicked}
                        className="subListTabMyProfile-profile"
                      >
                        Profil
                      </ListGroup.Item>
                      <ListGroup.Item
                        action
                        onClick={alertClicked}
                        className="subListTabMyShop-profile"
                      >
                        Toko Anda
                      </ListGroup.Item>
                    </ListGroup>
                  </Row>
                </Container>
              </Col>
              <Col lg={9} className="lato">
                <h4 className="nunito">Ubah Profil</h4>
                <hr />
                <Form
                  autoComplete="off"
                  className="form-profile"
                  onSubmit={(event) => {
                    dispatch(
                      editUserDataActions(profileState, event, decodedToken._id)
                    );
                  }}
                  // onSubmit={setProfileState.newPassword === setProfileState.confirmNewPassword ? setProfileState.newPassword
                  // }
                >
                  <Container>
                    <Form.Group controlId="username" as={Row}>
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        onChange={(event) => handleChange(event)}
                        value={profileState.username}
                      />
                    </Form.Group>

                    <Form.Group controlId="fullName" as={Row}>
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullname"
                        onChange={(event) => handleChange(event)}
                        value={profileState.fullname}
                      />
                    </Form.Group>

                    <Form.Group controlId="email" as={Row}>
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={(event) => handleChange(event)}
                        value={profileState.email}
                      />
                    </Form.Group>

                    <Form.Group controlId="Address" as={Row}>
                      <Form.Label>Alamat</Form.Label>
                      <Form.Control
                        type="text"
                        name="Address"
                        onChange={(event) => handleChange(event)}
                        value={profileState.address}
                      />
                    </Form.Group>

                    {/* <Form.Group controlId="currentPassword" as={Row}>
                      <Form.Label>current password</Form.Label>
                      <Form.Control
                        type="password"
                        name="currentPassword"
                        onChange={(event) => handleChange(event)}
                        value={profileState.password}
                      />
                    </Form.Group>

                    <Form.Group controlId="newPassword" as={Row}>
                      <Form.Label>new password</Form.Label>
                      <Form.Control
                        type="password"
                        name="newPassword"
                        onChange={(event) => handleChange(event)}
                      />
                    </Form.Group>

                    <Form.Group controlId="confirmNewPassword" as={Row}>
                      <Form.Label>re-type new password</Form.Label>
                      <Form.Control
                        type="password"
                        name="newPasswordConfirm"
                        onChange={(event) => handleChange(event)}
                      />
                    </Form.Group> */}

                    <Form.Group as={Row}>
                      <Button
                        type="submit"
                        className="montserrat text-light saveChangeButton-profile"
                      >
                        Simpan
                      </Button>
                    </Form.Group>
                  </Container>
                </Form>
              </Col>
            </Row>
          </Container>
          <Container className="myShop-profile bg-light px-4 mt-5 mb-3">
            <Row>
              <Col lg={12} className="myShopTitle-profile">
                Toko Anda
              </Col>
            </Row>
            <Row className="rowMyShop-profile ">
              {/* <Col className='colMyShop-profile' lg={12}> */}
              <Container className=" horizontalMenuProfile">
                <MyShopCardSection />
              </Container>
              {/* </Col> */}
            </Row>
            <Row className="addMoreItem-profile">
              <Col lg={12} className="colAddMoreItem-profile">
                <Button variant="light" className="addMoreItemButton-profile">
                  + Tambah produk
                </Button>
              </Col>
            </Row>
          </Container>
          <br />
          <Footer />
        </div>
      ) : (
        <Spinner className="mx-auto " animation="border" variant="info" />
      )}
    </div>
  );
}

export default Profile;
