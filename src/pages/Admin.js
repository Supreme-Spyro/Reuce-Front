import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Admin() {
  return (
    <div>
      <div>
        <Row className="">
          <Col  xs={2} className=" bg-dark">2</Col>
          <Col xs={10} className="bg-dark">10</Col>
        </Row>
      </div>
    </div>
  );
}
