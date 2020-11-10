import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  // Accordion,
  // Form,
  // Button,
  Container,
  Row,
  Col,
  Card,
  // Spinner,
} from "react-bootstrap";

import "../styles/Font.scss";
import "../styles/Category.scss";
import botolplastik from "../assets/plastic-bottle.jpg";

export default function Category() {
  const cardDataDummy = [
    "data1",
    "data2",
    "data3",
    "data4",
    "data5",
    "data6",
    "data7",
    "data8",
    "data9",
    "data10",
  ];

  const history = useHistory();

  return (
    <div>
      <Container>
        <br />
        <br />
        <br />
        {/* <Row> */}
        {/* <Col className="card-col " sm={12} md={12}> */}
        <Row>
          <h4 className="ml-2 my-3 lato">Category: Botol Plastik</h4>
        </Row>
        <br />
        <Row className="justify-content-center mt-4">
          {cardDataDummy.map((item, index) => (
            <Col key={index} sm={12} md={4} lg= {3}>
              <Card
                onClick={() => {
                  history.push(`/productdetails/`);
                }}
                className="category-card bg-light text-dark mb-3"
              >
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={botolplastik}
                />
                <Card.Body className="">
                  <Card.Title>Botol Plastik</Card.Title>
                  <Card.Text>Grade: A </Card.Text>
                  <Card.Text>Rp 2.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* </Col> */}
        {/* </Row> */}
      </Container>
    </div>
  );
}
