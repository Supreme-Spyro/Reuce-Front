import React from "react";
import plasticStop from "../../assets/featuredNews-test1.png";
import {useHistory} from 'react-router'
// import { Row, Col, Container, Card } from "react-bootstrap";

//styling
import "../../styles/FeaturedNewsCard.css";
import "../../styles/Font.scss";

function FeaturedCard(props) {
  return (
    <div className="featuredCard-articles">
      <img
        alt="altImage"
        src={`http://reuce-back.herokuapp.com/${props.image}`}
        className="featuredCardPic-articles"
      />
      <div>
        <h5 className="lato">{props.title}</h5>
        <button onClick = {props.link}>baca lebih lanjut</button>
      </div>
      <div className="newsLetterReview-articles"> {props.desc}</div>
    </div>
  );
}

export default FeaturedCard;
