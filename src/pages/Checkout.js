import React, { useEffect } from 'react'

import jwtDecode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getDataOrderItem, deleteDataOrderItem } from "../redux/actions/cart.action"

import {
  Accordion,
  Form,
  Button,
  Container,
  // DropdownButton,
  // Dropdown,
  Row,
  // Col,
  Card,
  Spinner,
  Table
} from "react-bootstrap";

import { CartCheck, TrashFill } from "react-bootstrap-icons";

import plasticBottle from '../assets/plastic-bottle.jpg';
import '../styles/Checkout.scss'

export default function Checkout() {
    const jasaPengirimanDummy = ["Dijemput Pengepul", "JNE", "Tiki", "Pos Indonesia", "Wahana"]
    const paymentMethodDummy = ["COD", "OVO", "Mandiri", "BRI", "BNI"]

    const userToken = localStorage.getItem("token");
    const decodedToken = userToken ? jwtDecode(userToken) : null;
    // console.log("data token: ", decodedToken)

    const dataCheckout = useSelector((state) => state.showDataOrderItem.data.OrderItemsUser);
    console.log("data checkout: ", dataCheckout)

    const dispatch = useDispatch();
    const {id} = useParams()

  useEffect(() => {
    dispatch(getDataOrderItem(id));
  }, [dispatch]);

  //   const handleClick = (id) => {
  //     dispatch(postOrderItem(id));
  //   };

    return (
        <div>
            <br/>
            <br/>
            <Container>
              <Row>
                <Table>
                  <th>
                    <tr><h4>Alamat</h4></tr>
                  </th>
                  <tbody>
                    <td><p>{decodedToken.address}</p></td>
                  </tbody>
                </Table>
              </Row>
                {/* <div className="address-container">
                    
                    
                 </div> */}
                <hr/>
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
                {/* {dataCheckout ? ( */}
            <div>
              <Row>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item</th>
                      <th>Harga</th>
                      <th>Jumlah</th>
                      <th>Berat (kg)</th>
                      <th>Sub-total</th>
                      {/* <th></th> */}
                    </tr>
                  </thead>
                  <tbody>
                  
                    </tbody>
                    </Table>
              </Row>
              <Row className="justify-content-end text-right mt-4 mb-2">
                <Button className="px-5" variant="success" type="submit">
                  <CartCheck size={28} /> &nbsp;
                  <strong>Beli</strong>
                </Button>
              </Row>
            </div>
          {/* ) : (
            <Row>
              <Spinner
                className="mx-auto"
                animation="border"
                variant="info"
                size="lg"
              />
            </Row>
          )}       */}
            </Container>

      </div>
    )
}
