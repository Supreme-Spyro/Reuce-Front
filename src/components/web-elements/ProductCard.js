import React from "react";

import "../../styles/productCard.scss";
import "../../styles/Font.scss";
import { Container, Row, Col, Card, Spinner, Button } from "react-bootstrap";

export default function ProductCard(props) {
  return (
    <Card className="cardClass lato">
      <Card.Img className="cardImage" variant="top" src={props.imageSource} />
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle nunito">{props.title}</Card.Title>
        <Card.Text className="cardText lato">{props.text}</Card.Text>
        {/* <Button
          style={{ fontSize: "0.8em" }}
          className="montserrat card-button"
          onClick={props.buttonOnClick}
          variant={props.buttonVariant}
        >
          {props.buttonText}
        </Button> */}
      </Card.Body>
    </Card>
  );
}
