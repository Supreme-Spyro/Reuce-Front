import  React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import jwtDecode from 'jwt-decode'

import {getUserRequestById} from '../redux/actions/getUserData.action'

// styling
import "../styles/Profile.css";

//pic import
import blankAva from "../assets/blank-avatar.png";

//component import
import MyShopCard from '../components/web-elements/MyshopCard'

function Profile() {

  //requirement
  const history = useHistory()
  const dispatch = useDispatch();

  //select data
  const userData = useSelector((state)=>state.getUserDataReducer.data)
  console.log('userData',userData)

  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : "none";
  console.log("decoded token", decodedToken);


  //opbtaining user data from redux
  useEffect(() => {
    dispatch(getUserRequestById(decodedToken._id))
  },[dispatch]);

  function alertClicked() {
    history.push('/myshop')
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
                  {userData.username}
                </li>
                <li>
                  {userData.email}
                </li>
                <li>
                  id :{userData._id}
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
            <Form className='form-profile'>
              <Container>
              <Form.Group controlId="username" as={Row}>
                <Form.Label>username</Form.Label>
                <Form.Control type="text" name="username" />
              </Form.Group>

              <Form.Group controlId="fullName" as={Row}>
                <Form.Label>full name</Form.Label>
                <Form.Control type="text" name="fullname" />
              </Form.Group>

              <Form.Group controlId="email" as={Row}>
                <Form.Label>email</Form.Label>
                <Form.Control type="email" name="email" />
              </Form.Group>

              <Form.Group controlId="Address" as={Row}>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="Address" />
              </Form.Group>

              <Form.Group controlId="currentPassword" as={Row}>
                <Form.Label>current password</Form.Label>
                <Form.Control type="password" name="currentPassword" />
              </Form.Group>

              <Form.Group controlId="newPassword" as={Row}>
                <Form.Label>new password</Form.Label>
                <Form.Control type="password" name="newPassword" />
              </Form.Group>

              <Form.Group controlId="confirmNewPassword" as={Row}>
                <Form.Label>re-type new password</Form.Label>
                <Form.Control type="password" name="newPassword" />
              </Form.Group>

              <Form.Group  as={Row}>
              <Button type="submit" className='saveChangeButton-profile'>Save Changes</Button>

              </Form.Group>
              </Container>

            </Form>
          </Col>
        </Row>
      </Container>

      <Container className='myShop-profile'>
        <Row>
          <Col lg={12} className='myShopTitle-profile'>
          Your Shop
          </Col>
        </Row>
        <Row className='rowMyShop-profile'>
          <Col className='colMyShop-profile' lg={12}>
          <MyShopCard />
          <MyShopCard />
          <MyShopCard />
          <MyShopCard />
          </Col>
        </Row>
        <Row className='addMoreItem-profile'>
          <Col lg={12} className='colAddMoreItem-profile'>
          <Button className='addMoreItemButton-profile'>Add more item</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
