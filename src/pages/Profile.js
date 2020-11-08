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

// styling
import "../styles/Profile.css";

//pic import
import blankAva from "../assets/blank-avatar.png";

//component import
import MyShopCard from "../components/web-elements/MyshopCard";

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

  //opbtaining user data from redux
  useEffect(() => {
    dispatch(getUserRequestById(decodedToken._id));
  }, [dispatch]);

  function alertClicked() {
    history.push("/myshop");
  }

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

  console.log("profileState", profileState);

  return (
    <div>
      <Container className="profileContainer-profile ">
        {userData !== undefined ? (
          <Row className="m-5">
            <Col lg={3}>
              <Container>
                <Row>
                  <img src={blankAva} className="blankAva-profile" />
                </Row>
                <Row className="rowAva-profile">
                  <ul className="listAva-profile">
                    <li>{userData.username}</li>
                    <li>{userData.email}</li>
                    <li>id :{userData._id}</li>
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
                      onClick={alertClicked}
                      className="subListTabMyProfile-profile"
                    >
                      My Profile
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      onClick={alertClicked}
                      className="subListTabMyShop-profile"
                    >
                      My Shop
                    </ListGroup.Item>
                  </ListGroup>
                </Row>
              </Container>
            </Col>
            <Col lg={9}>
              <Form className="form-profile">
                <Container>
                  <Form.Group controlId="username" as={Row}>
                    <Form.Label>username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      onChange={(event) => handleChange(event)}
                      value={profileState.username}
                    />
                  </Form.Group>

                  <Form.Group controlId="fullName" as={Row}>
                    <Form.Label>full name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullname"
                      onChange={(event) => handleChange(event)}
                      value={profileState.fullname}
                    />
                  </Form.Group>

                  <Form.Group controlId="email" as={Row}>
                    <Form.Label>email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={(event) => handleChange(event)}
                      value={profileState.email}
                    />
                  </Form.Group>

                  <Form.Group controlId="Address" as={Row}>
                    <Form.Label>Address</Form.Label>
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
                  <Form.Control type="password" name="newPassword" />
                </Form.Group>

                <Form.Group controlId="confirmNewPassword" as={Row}>
                  <Form.Label>re-type new password</Form.Label>
                  <Form.Control type="password" name="newPassword" />
                </Form.Group> */}

                  <Form.Group as={Row}>
                    <Button
                      type="submit"
                      className="saveChangeButton-profile text-light"
                    >
                      Save Changes
                    </Button>
                  </Form.Group>
                </Container>
              </Form>
            </Col>
          </Row>
        ) : (
          <Spinner className="mx-auto " animation="border" variant="info" />
        )}
      </Container>

      <Container className="myShop-profile">
        <Row>
          <Col lg={12} className="myShopTitle-profile">
            Your Shop
          </Col>
        </Row>
        <Row className="rowMyShop-profile">
          <Col className="colMyShop-profile" lg={12}>
            <MyShopCard />
            <MyShopCard />
            <MyShopCard />
            <MyShopCard />
          </Col>
        </Row>
        <Row className="addMoreItem-profile">
          <Col lg={12} className="colAddMoreItem-profile">
            <Button className="addMoreItemButton-profile">Add more item</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
