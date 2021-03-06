import React from "react";
import {useHistory} from 'react-router-dom'
import "../../styles/productCard.scss";
import '../../styles/MyShopCard.css'
import {
  Card,
  Badge,
} from "react-bootstrap";
import plasticBottle from '../../assets/plastic-bottle.jpg';


export default function MyShopCard(props) {
  const history = useHistory()
  return (
    <Card className="cardClass lato">
      <Card.Img className="cardImage" variant="top" src={props.imageSource !== undefined ? props.imageSource : plasticBottle} />
      <Card.Body className="cardBody">
        <Card.Text className="cardText lato">
          {props.productRole ? (
            props.productRole === "beli" ? (
              <Badge variant="warning">Beli</Badge>
            ) : (
              <Badge variant="info">Jual</Badge>
            )
          ) : (
            <div></div>
          )}
        </Card.Text>
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
        <button className='editItemButton-MyShopCard' onClick={()=>{history.push(`/myshop/${props.id}/edititem`)}}>
          Edit Item
        </button>
      </Card.Body>
    </Card>
  );
}