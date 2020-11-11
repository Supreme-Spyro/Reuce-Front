import React from "react";

import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

import "../styles/Search.scss";
import botolplastik from "../assets/plastic-bottle.jpg";

export default function Search() {
  let params = useParams ();
  let searchName = decodeURIComponent(params.id);
  const history = useHistory();

  const dataSearch = useSelector((state) => state.searchReducer.data);

  // const cardDataDummy = [
  //   "data1",
  //   "data2",
  //   "data3",
  //   "data4",
  //   "data5",
  //   "data6",
  //   "data7",
  //   "data8",
  //   "data9",
  //   "data10",
  // ];

  

  return (
    <div>
      <Container>
        {dataSearch ? (
          <Row>
          <Col className="card-col " sm={12} md={12}>
            <Row>
              <h4 className="my-3">Search: {`${searchName}`}</h4>
            </Row>
            <br />
            <Row className="justify-content-center mt-4">
              {dataSearch.map((item, index) => (
                <div key={index}>
                  <Col sm={12} md={4}>
                    <Link>
                      <Card
                        onClick={() => {
                          history.push(`/product/${item.id}`);
                        }}
                        className="search-card bg-light text-dark mb-3"
                      >
                        <Card.Img
                          className="card-img"
                          variant="top"
                          src={item.image || botolplastik}
                        />
                        <Card.Body className="">
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>{item.grade}</Card.Text>
                          <Card.Text>{item.price}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                </div>
              ))}
            </Row>
          </Col>
        </Row>

        ):(
          <div className="align-item-center text-center mt-5">
            <br />
            <br />
            <Spinner animation="border" variant="warning" size="lg" />
          </div>
        )}
      </Container>
    </div>
  );
}
