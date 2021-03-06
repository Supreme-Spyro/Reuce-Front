import React from "react";

import "../../../styles/productCard.scss";
import "../../../styles/Font.scss";
import { Card, Badge } from "react-bootstrap";

export default function ProductCard(props) {
  return (
    <Card  className={`cardClass lato ${props.propsClassName}`} onClick={props.propsOnClick}>
      <Card.Img className="cardImage" variant="top" src={props.imageSource} />
      <Card.Body className="cardBody">
        <Card.Text className="cardText lato">
          {props.productRole ? (
            props.productRole === "beli" ? (
              <Badge variant="warning">Beli</Badge>
            ) : (
              <Badge variant="info">Jual</Badge>
            )
          ) : (
            <span></span>
          )}
        </Card.Text>
        <Card.Title style={props.propsTitleStyle} className="cardTitle nunito">{props.title}</Card.Title>
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
