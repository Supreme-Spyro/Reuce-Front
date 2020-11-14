import React, { useEffect } from 'react'

import jwtDecode from "jwt-decode";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams, Link, useHistory } from "react-router-dom";

// import { getDataOrderItem } from "../redux/actions/cart.action"

import {
  Accordion,
  Form,
  Button,
  Container,
  // DropdownButton,
  // Dropdown,
  Row,
  Col,
  Card,
  // Spinner,
} from "react-bootstrap";

import plasticBottle from '../assets/plastic-bottle.jpg';
import '../styles/Checkout.scss'

export default function Checkout() {
    const jasaPengirimanDummy = ["Dijemput Pengepul", "JNE", "Tiki", "Pos Indonesia", "Wahana"]
    const paymentMethodDummy = ["COD", "OVO", "Mandiri", "BRI", "BNI"]

    const userToken = localStorage.getItem("token");
    const decodedToken = userToken ? jwtDecode(userToken) : null;
    console.log("data token: ", decodedToken)

  //   const dataCheckout = useSelector((state) => state.showDataOrderItem);
  //   console.log("data checkout: ", dataCheckout)

  //   const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getDataOrderItem());
  // }, [dispatch]);

    // const handleClick = (id) => {
    //   dispatch(postOrderItem(id));
    // };

    return (
        <div>
            <br/>
            <br/>
            <Container>
                <div className="address-container">
                    <h4>Alamat</h4>
                    <p>{decodedToken.address}</p>
                </div>
                <br/>
                <br/>
                <Accordion defaultActiveKey="0">
                    <Card className="jasa-pengiriman w-50">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Jasa Pengiriman
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {jasaPengirimanDummy.map((item, index) => (
                                <div className="container-list-jasa-pengiriman-checkout" key={index}>
                                <a>{item}</a>
                                <hr />
                                </div>
                            ))}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <br/>
                    <Card className="payment-method w-50">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Metode Pembayaran
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        {paymentMethodDummy.map((item, index) => (
                            <div className="container-payment-method-checkout" key={index}>
                            <a>{item}</a>
                            <hr />
                            </div>
                        ))}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br/>
                <br/>
                <Row>
                <Col md={12}><div className="select-product-profile">
                <div className="photo-seller"></div>
                <p>nama seller</p>
              </div>
              <Form.Group className="select-product">
                <div className="select-product-header">
                  <p className="header-item">item</p>
                  <p className="header-price">price package</p>
                  <p className="header-quantity">quantity</p>
                  <p className="header-amount">amount</p>
                </div>
                <div className="select-product-content">
                  <div className="img-product">
                      <img 
                      alt="altimage"
                      src={plasticBottle}
                      width={50}
                      height={50}/>
                  </div>
                  <Form.Text className="product-name">botol plastik</Form.Text>
                  <Form.Text className="price">Rp 2.000</Form.Text>
                  <div className="container-counter-quantity">
                    <p className="num">1x</p>
                  </div>
                  <Form.Text className="amount">Rp 2.000</Form.Text>
                </div>
              </Form.Group>
                </Col>
                </Row>
              <br/>
              <br/>
                <Row>
                    <Button
                      className="buy-now"
                      variant="success"
                      type="submit"
                    >
                    <strong>Beli</strong>
                    </Button>
                </Row>
            </Container>
            

        </div>
    )
}
