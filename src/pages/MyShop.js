import React from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";

// styling
import "../styles/Profile.css";
import "../styles/MyShop.css";

//pic import
import blankAva from "../assets/blank-avatar.png";

//component import
import MyShopList from "../components/web-elements/MyShopList";
import Footer from "../components/web-elements/Footer";

function Profile() {
  let history = useHistory();

  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : "none";

  function goToProfile() {
    history.push(`/profile/${decodedToken._id}`);
  }

  return (
    <div>
      <Container className="profileContainer-profile mb-5">
        <Row className="m-5">
          <Col lg={3}>
            <Container>
              <Row>
                <img src={blankAva} className="blankAva-profile" />
              </Row>
              <Row className="rowAva-profile">
                <ul className="listAva-profile">
                  <li>hi! username</li>
                  <li>xxxx@mail.com</li>
                  <li>id :12345678</li>
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
                    onClick={goToProfile}
                    className="subListTabMyProfile-MyShop"
                  >
                    Profil
                  </ListGroup.Item>
                  <ListGroup.Item action className="subListTabMyShop-MyShop">
                    Toko Anda
                  </ListGroup.Item>
                </ListGroup>
              </Row>
            </Container>
          </Col>
          <Col lg={9}>
            <MyShopList />
            <MyShopList />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Profile;
