import React from 'react'

import { useParams, Link, useHistory } from "react-router-dom";
import {
  Accordion,
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Spinner,
} from "react-bootstrap";

import '../styles/Search.scss'
import botolplastik from '../assets/plastic-bottle.jpg'

export default function Search() {

    const cardDataDummy = ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10"];

    const history = useHistory();
    
    return (
        <div>
            <Row>
            <Col className="card-col " sm={12} md={12}>
              <Row>
                <h3 className="my-3">Search result: Botol Plastik</h3>
              </Row>
              <br />
              <Row className="justify-content-center mt-4">
                {cardDataDummy.map((item, index) => (
                  <div key={index}>
                    <Col sm={12} md={4}>
                      <Link>
                        <Card
                          onClick={() => {
                            history.push(`/productdetails/`);
                          }}
                          className="search-card bg-dark text-light mb-3"
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
                      </Link>
                    </Col>
                  </div>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
    )
}
