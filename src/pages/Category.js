import React, { useEffect, useState } from "react";

import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
  // Accordion,
  // Form,
  // Button,
  Container,
  Row,
  Col,
  Card,
  Spinner,
} from "react-bootstrap";

import { getAllCategory, getCategoryId } from '../redux/actions/category.action'

import "../styles/Font.scss";
import "../styles/Category.scss";
import botolplastik from "../assets/plastic-bottle.jpg";

export default function Category() {
  const dispatch = useDispatch();
  let params = useParams ();
  let categoryName = decodeURIComponent(params.id);
  const history = useHistory();

  const dataCategory = useSelector((state) => state.getCategoryReducer.data);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (dataCategory.length === 0){
      dispatch(getAllCategory());
    } else {
      setProduct(dataCategory)
    }
  }, [dispatch, dataCategory]);
  // console.log(product);

  // useEffect(() => {
  //   dispatch(getCategoryId());
  // }, [dispatch]);

  // console.log("data", dataCategory)


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
      <br/>
        {product.result !== undefined ? (
        <Row>
        <Col className="card-col " sm={12} md={12}>
          <Row>
            <h4 className="name ml-2 mt-5">Category</h4>
          </Row>
          <Row className="justify-content-center mt-3">
            {product.result.map((item, index) => (
                <Col key={index} sm={12} md={4}>
                  <Link>
                    <Card
                      onClick={() => {
                        history.push(`/productdetails/${item.id}`);
                      }}
                      className="Category-card bg-light text-dark mb-3"
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
            ))}
          </Row>
        </Col>
      </Row>
        ):(
          <div className="align-item-center text-center mt-5">
            <br />
            <br />
            <Spinner animation="border" variant="success" size="lg" />
          </div>
        )}
      </Container>
    </div>
  );
}
