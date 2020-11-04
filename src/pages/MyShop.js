import React from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

// styling
import "../styles/Profile.css";

//pic import
import blankAva from "../assets/blank-avatar.png";

//component import
import MyShopList from '../components/web-elements/MyShopList'

function Profile() {
  function alertClicked() {
    alert("You clicked the third ListGroupItem");
  }

  return (
    <div>
      <Container className="profileContainer-profile ">
        <Row className="m-5">
          <Col lg={3}>
            <Container>
            <Row>
              <img src={blankAva} className="blankAva-profile" />
            </Row>
            <Row className='rowAva-profile'>
              <ul className="listAva-profile">
                <li>
                  hi! username
                </li>
                <li>
                  xxxx@mail.com
                </li>
                <li>
                  id :12345678
                </li>
              </ul>
            </Row>

            <Row>
              
                <ListGroup
                  defaultActiveKey="#link1"
                  variant="flush"
                  mt={5}
                  className='listTab-profile'
                >
                  <ListGroup.Item action onClick={alertClicked} className='subListTabMyProfile-profile'>
                    My Profile
                  </ListGroup.Item>
                  <ListGroup.Item action onClick={alertClicked} className='subListTabMyShop-profile'>
                    My Shop
                  </ListGroup.Item>
                </ListGroup>
            </Row>
            </Container>
          </Col>
          <Col lg={9}>
            <MyShopList />
          </Col>
        </Row>
      </Container>

     
    </div>
  );
}

export default Profile;
