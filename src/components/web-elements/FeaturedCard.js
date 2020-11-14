import React from "react";
import plasticStop from "../../assets/featuredNews-test1.png";
import { Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router";
// import { Row, Col, Container, Card } from "react-bootstrap";

//styling
import "../../styles/FeaturedNewsCard.css";
import "../../styles/Font.scss";

function FeaturedCard(props) {
  return (
    <div className="featuredCard-articles">
      <Container>

      <Row>
        <Col>
          <img
            style={{ maxHeight: "40vh" }}
            alt="altImage"
            src={`http://reuce-back.herokuapp.com/${props.image}`}
            className="featuredCardPic-articles"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="buttonAndArticleFeatured-article">
            <Row>
              <Col>
              <h5 className="lato">{props.title}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
              <button onClick={props.link} className="buttonFeatured-article">
                baca lebih lanjut
              </button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="newsLetterReview-articles"> {props.desc}</div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default FeaturedCard;
