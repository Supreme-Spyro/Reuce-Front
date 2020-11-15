import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link} from "react-router-dom";
import "../../styles/NewsTabList.css";
import TabListExample from "../../assets/carousel-test2.png";
// import TabListExample2 from '../../assets/carousel-test1.png'

function NewsTabList(props) {
  return (
    <Container className="NewsTabList-articles">
      <Row>
        <Col lg={5}>
          <img 
           src={`http://reuce-back.herokuapp.com/${props.image}`} 
          className="tabListImage-articles" alt="" />
        </Col>
        <Col lg={7}>
          <Container className="tabListNewsTitle-articles">
          <Link to={`${props.id}`}>{props.title}</Link>
          <div className="tabListDateRelease-articles">
            by {props.admin}
          </div>
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
