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
          <div className='newsLetterReview-articles'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ... </div>
    </div>
  );
}

export default FeaturedCard;
