import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../../styles/NewsTabList.css";
import TabListExample from "../../assets/carousel-test2.png";
// import TabListExample2 from '../../assets/carousel-test1.png'

function NewsTabList(props) {
  return (
    <Container className="NewsTabList-articles">
      <Row>
        <Col lg={4}>
          <img src={TabListExample} className="tabListImage-articles" alt="" />
        </Col>
        <Col lg={8}>
          <Container className="tabListDateRelease-articles">
            {props.dateRelease}
          </Container>
          <Container className="tabListNewsTitle-articles">
            {props.title}
          </Container>
          <Container className="tabListPharagraphReview-articles">
            {props.review}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsTabList;
