import React from "react";
import plasticStop from "../../assets/featuredNews-test1.png";
import { Row, Col, Container, Card } from "react-bootstrap";

//styling
import "../../styles/FeaturedNewsCard.css";

function FeaturedCard() {
  return (
    <div className="featuredCard-articles">
          <img src={plasticStop} className="featuredCardPic-articles" />
          <div><a href='google.com'>link to proceed</a></div>
          <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of t</div>
    </div>
  );
}

export default FeaturedCard;
