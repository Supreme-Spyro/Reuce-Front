import React from "react";
import plasticStop from "../../assets/featuredNews-test1.png";
// import { Row, Col, Container, Card } from "react-bootstrap";

//styling
import "../../styles/FeaturedNewsCard.css";
import "../../styles/Font.scss";

function FeaturedCard(props) {
  return (
    <div className="featuredCard-articles">
      <img
        alt="altImage"
        src={plasticStop}
        className="featuredCardPic-articles"
      />
      <div>
        <h5 className="lato">{props.title}</h5>
      </div>
      <div className="newsLetterReview-articles"> {props.desc}</div>
    </div>
  );
}

export default FeaturedCard;
