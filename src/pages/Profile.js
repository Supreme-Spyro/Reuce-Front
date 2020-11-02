import React from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";


// styling
import '../styles/Profile.css'

//pic import
import blankAva from '../assets/blank-avatar.png'

function Profile() {
    function alertClicked() {
        alert('You clicked the third ListGroupItem');
      }




  return (
    <div >
      <Container className='profileContainer-profile'>
        <Row className="m-5">
          <Col lg={3}>
            <Row >
                <img 
                src={blankAva}
                className="blankAva-profile"
                />
                </Row>
                <Row className='rowAva-profile'>
                <div>
                    xxx@mail.com
                    <br />
                    id : xxxxxxx
                </div>
                </Row>

            <Row >
                <Col lg={12}>
              <ListGroup defaultActiveKey="#link1" variant='flush' mt={5}>
                <ListGroup.Item action onClick={alertClicked} disabled >
                  My Profile
                </ListGroup.Item>
                <ListGroup.Item action onClick={alertClicked}>
                  My Shop
                </ListGroup.Item>
              </ListGroup>
                </Col>
            </Row>
          </Col>
          <Col lg={9}>
            <Form>
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

              <Button type="submit">Save Changes</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
