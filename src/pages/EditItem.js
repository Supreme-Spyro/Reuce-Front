import React from "react";
import {  Container, Button, Form } from "react-bootstrap";
import "../styles/EditItem.css";
function EditItem() {
  return (
    <div>
      <Container className="container-edititem">
        <Form>
          <Form.Group>
            <Form.Row>
              <Form.File id="exampleFormControlFile1" label="Add image" />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Item's Name</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="ex: karung bekas, gelas pelastik"
              />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Quantity measurement</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="ex: Kg / Rim / pcs"
              />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Price per Quantity</Form.Label>
              <Form.Control size="lg" type="number" placeholder="3000" />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Will be sent from :</Form.Label>
              <Form.Control size="lg" type="text" placeholder="ex : Bandung" />
            </Form.Row>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default EditItem;
