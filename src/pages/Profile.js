import React from "react";
import { Container, Row, Col, Form, Button, ListGroup} from "react-bootstrap";

function Profile() {
  return (
    <div>
      <Container>
        <Row className="m-5">
          <Col lg={3}>
            <Row>Pic here</Row>
            <Row>
              <ListGroup variant="flush">
                <ListGroup.Item>My Profile</ListGroup.Item>
                <ListGroup.Item>My Shop</ListGroup.Item>
                <ListGroup.Item>My Article</ListGroup.Item>
              </ListGroup>
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

              <Form.Group controlId="currentPassword" as={Col}>
                <Col xs={6}>
                  <Form.Label>current password</Form.Label>
                  <Form.Control type="password" name="currentPassword" />
                </Col>
              </Form.Group>

              <Form.Group controlId="newPassword" as={Col}>
                <Col xs={6}>
                  <Form.Label>new password</Form.Label>
                  <Form.Control type="password" name="newPassword" />
                </Col>
              </Form.Group>

              <Form.Group controlId="confirmNewPassword" as={Col}>
                <Col xs={6}>
                  <Form.Label>re-type the password</Form.Label>
                  <Form.Control type="password" name="newPassword" />
                </Col>
              </Form.Group>

              <Form.Group controlId="Address" as={Row}>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="Address" />
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
