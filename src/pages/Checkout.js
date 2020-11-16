import React, { useEffect, useState } from 'react'

import jwtDecode from "jwt-decode";

import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getDataOrderItem, deleteAllDataOrderItem } from "../redux/actions/cart.action"

import {
  // Accordion,
  Form,
  Button,
  Container,
  // DropdownButton,
  // Dropdown,
  Row,
  // Col,

  Modal,

  Card,
  Spinner,
  Table
} from "react-bootstrap";


import { CartCheck, BagCheckFill } from "react-bootstrap-icons";


import plasticBottle from '../assets/plastic-bottle.jpg';
import '../styles/Checkout.scss'

export default function Checkout() {
    const jasaPengirimanDummy = ["Dijemput Pengepul", "JNE", "Tiki", "Pos Indonesia", "Wahana"]
    const paymentMethodDummy = ["COD", "OVO", "Mandiri", "BRI", "BNI"]

    const userToken = localStorage.getItem("token");
    const decodedToken = userToken ? jwtDecode(userToken) : null;


    const dataCheckout = useSelector((state) => state.showDataOrderItem.data.OrderItemsUser);
    

    const [total, setTotal] = useState(0)

    const dispatch = useDispatch();
    const {id} = useParams()

    const history = useHistory()

  useEffect(() => {
    dispatch(getDataOrderItem(id));
    
  }, [dispatch, id]);

  useEffect(() => {
    let totalAmount = 0;
    for(let i=0; i < dataCheckout.length; i++)
    totalAmount += dataCheckout[i].amount
    // console.log("data totalAmount dalam: ", totalAmount)
    // console.log("data checkout dalam: ", dataCheckout)
    // setTotal(()=>{
    //   let totalAmount = 0;
    // for(let i=0; i < dataCheckout.length; i++){
    //   return totalAmount += dataCheckout[i].amount
    // }
    // })
    setTotal(totalAmount)
  }, [dataCheckout])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const handleCloseSuccess = () => setShowSuccess(false);
  // const handleShowSuccess = (history) => {
  //   setShowSuccess(true)
  //   history.push('/')
  // };


  //   const handleClick = (id) => {
  //     dispatch(postOrderItem(id));
  //   };


    return (
      <div style={{ marginTop: 50 }}>
        <br />
        <br />
        {/* loading modal */}
        <Modal
          style={{ position: "fixed", left: "25%", top: "25%" }}
          show={show}
          onHide={handleClose}
          className="w-50"
        >
          <Modal.Header>
            <Modal.Title className="text-center">Please Wait...</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Spinner className="mx-auto " animation="border" variant="info" />
          </Modal.Body>
        </Modal>
        {/* loading modal */}
        <Container>
          <Row>
            <Table className="address w-50">
              <th>
                <tr>
                  <h4>Alamat</h4>
                </tr>
              </th>
              <tbody>
                <td>
                  <p>{decodedToken.address}</p>
                </td>
              </tbody>
            </Table>
          </Row>
          {/* <div className="address-container">
                    
                    
                 </div> */}
          <hr />

          <Form>
            <Form.Group className="jasa-pengiriman w-50">
              <Form.Label>Jasa Pengiriman</Form.Label>
              <Form.Control as="select" custom>
                {jasaPengirimanDummy.map((item, index) => (
                  <option className="container-list-jasa-pengiriman-checkout"
                  key={index}>{item}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="payment-method w-50">
              <Form.Label>Metode Pembayaran</Form.Label>
              <Form.Control as="select" custom>
                {paymentMethodDummy.map((item, index) => (
                  <option className="container-list-jasa-pengiriman-checkout"
                  key={index}>{item}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
          
          {/* <Accordion defaultActiveKey="0">
            <Card className="jasa-pengiriman w-50">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Jasa Pengiriman
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {jasaPengirimanDummy.map((item, index) => (
                    <div
                      className="container-list-jasa-pengiriman-checkout"
                      key={index}
                    >
                      <input type="radio">{item}</input>
                      <hr />
                    </div>
                  ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <br />
            <Card className="payment-method w-50">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Metode Pembayaran
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {paymentMethodDummy.map((item, index) => (
                    <div
                      className="container-payment-method-checkout"
                      key={index}
                    >
                      <a>{item}</a>
                      <hr />
                    </div>
                  ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion> */}
          <br />
          <br />
          {dataCheckout ? (

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

                    {dataCheckout.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            className="rounded"
                            style={{ maxWidth: "200px", maxHeight: "100px" }}
                            src={`http://reuce-back.herokuapp.com/${item.product.image}`}
                            alt=""
                          />
                          <br />
                          <br />
                          {item.product.name}
                        </td>
                        <td>Rp {item.product.price}</td>
                        <td>
                          {/* <Form.Control
            style={{width:"40px"}}
              name="quantity"
              size="sm"
              type="number"
              onChange={(event) => handleChange(event)}
              value={item.quantity}
            /> */}
                          {item.quantity}
                        </td>
                        <td>{item.product.weight}</td>
                        <td>Rp {item.amount}</td>
                        {/* <td>
                          <Button
                            onClick={(event) => {
                              setShow(true);
                              dispatch(
                                deleteDataOrderItem(item._id, decodedToken._id)
                              );
                            }}
                            variant="danger"
                            size="sm"
                          >
                            <TrashFill size={19} />
                          </Button>
                        </td> */}
                      </tr>
                      
                    ))}
                    
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><strong>Total</strong></td>
                        <td>Rp {total}</td>
                      </tr>
                  </tbody>
                </Table>
              </Row>
              <Row className="justify-content-end text-right mt-4 mb-2">
                <Button className="px-5" variant="success" type="submit" onClick={()=>{
                  setShowSuccess(true)
                  dispatch(deleteAllDataOrderItem(decodedToken._id))
                }}>

                  <CartCheck size={28} /> &nbsp;
                  <strong>Beli</strong>
                </Button>
              </Row>

              {/* success payment modal */}
              <Modal
                style={{ position: "fixed", left: "25%", top: "25%" }}
                show={showSuccess}
                onHide={handleCloseSuccess}
                className="w-50"
              >
                <Modal.Header>
                  <Modal.Title className="text-center">
                    Terimakasih Telah Ikut Menyelamatkan Bumi 😉
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <BagCheckFill size={100}/>
                </Modal.Body>
              </Modal>
              {/* success payment modal */}
            </div>
          ) : (

            <Row>
              <Spinner
                className="mx-auto"
                animation="border"
                variant="info"
                size="lg"
              />
            </Row>

          )}
        </Container>
      </div>
    );

}
