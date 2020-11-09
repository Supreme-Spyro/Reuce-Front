import React from "react";
import plasticStop from "../../assets/featuredNews-test1.png";
// import { Row, Col, Container, Card } from "react-bootstrap";

//styling
import "../../styles/FeaturedNewsCard.css";

function FeaturedCard(props) {
  return (
    <div className="featuredCard-articles">
      <img
        alt="altImage"
        src={plasticStop}
        className="featuredCardPic-articles"
      />
      <div>
        <a href="google.com">{props.title}</a>
      </div>
      <div className="newsLetterReview-articles"> {props.description}</div>
    </div>
  );
}

export default FeaturedCard;
