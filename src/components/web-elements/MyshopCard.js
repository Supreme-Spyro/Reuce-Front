import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import Bottle from '../../assets/plastic-bottle.jpg'


function MyshopCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Bottle} />
      <Card.Body>
        <Card.Title>Botol Air Mineral</Card.Title>
        <Card.Text>
          Rp. 7.000,- /Kg
        </Card.Text>
        <Button variant="primary">Edit Item</Button>
      </Card.Body>
    </Card>
  );
}

export default MyshopCard;
