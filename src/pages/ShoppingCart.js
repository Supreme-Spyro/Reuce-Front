import React, { useState, useEffect } from "react";
import {
  Modal,
  Spinner,
  Table,
  Container,
  Button,
  Row,
  // Col,
} from "react-bootstrap";
import {
  getDataOrderItem,
  deleteDataOrderItem,
  // updateDataOrderItem,
  // postOrderItem,
} from "../redux/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";
import {
  // Link,
  useHistory,
  useParams,
} from "react-router-dom";
import jwtDecode from "jwt-decode";

import { CartCheck, TrashFill } from "react-bootstrap-icons";
import "../styles/ShoppingCart.scss";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  

  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : null;

  const dataOrderItem = useSelector(
    (state) => state.showDataOrderItem.data.OrderItemsUser
  );

  console.log("dataOrderItem", dataOrderItem);

  useEffect(() => {
    dispatch(getDataOrderItem(id));
  }, [dispatch, id]);

  // let [num, setNum] = useState(1);

  // const increment = (id, quantity) => {
  //   setNum((num = quantity + 1));

  //   dispatch(updateDataOrderItem(id, num));
  // };

  // const decrement = (id, quantity) => {
  //   if (num < 1) {
  //     return 1;
  //   } else if (num > 1) {
  //     setNum((num = quantity - 1));
  //   }
  //   dispatch(updateDataOrderItem(id, num));
  // };

  // const [numberState, setNumberState] = useState({
  //   num: null,
  // });

  // const handleChange = (event) => {
  //   setNumberState({
  //     ...numberState,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // sisaan sebelumnya
  // dataOrderItem.data.result.map((item, index) => (
  //   <Row key={index}>
  //     <Col xs={12}>
  //       <Form.Group className="select-product">
  //         <div className="select-product-header">
  //           <p className="header-item">item</p>
  //           <p className="header-price">price package</p>
  //           <p className="header-quantity">quantity</p>
  //           <p className="header-amount">amount</p>
  //         </div>
  //         <div className="select-product-content">
  //           <Form.Check type="checkbox" className="check-product" />
  //           <div className="img-product">
  //             <img src={plasticBottle} width={50} alt="" height={50} />
  //           </div>
  //           <Form.Text className="product-name">
  //             {dataOrderItem.name}
  //           </Form.Text>
  //           <Form.Text className="price">
  //             {dataOrderItem.price}
  //           </Form.Text>
  //           <div className="container-counter-quantity">
  //             <Button
  //               onClick={decrement}
  //               className="button"
  //               variant="secondary"
  //             >
  //               -
  //             </Button>
  //             <p className="num">{num}</p>
  //             <Button
  //               onClick={increment}
  //               className="button"
  //               variant="secondary"
  //             >
  //               +
  //             </Button>
  //           </div>
  //           <Form.Text className="amount">
  //             {dataOrderItem.amount}
  //           </Form.Text>
  //           <Button className="delete-product" variant="danger">
  //             <strong>x</strong>
  //           </Button>
  //         </div>
  //       </Form.Group>

  //     </Col>
  //   </Row>
  // ))

  // loading modal variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // loading modal variables

  return (
    <div>
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
      <Container className="container-cart popularSection">
        <div className="p-2">
          <h3>Keranjang Belanja</h3>
          <hr />
          {dataOrderItem ? (
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
                    {dataOrderItem.map((item, index) => (
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
                        <td>
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
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
              <Row className="justify-content-end text-right mt-4 mb-2">
                <Button className="px-5" variant="success" type="submit" onClick={() => {
                        history.push(`/checkout/${decodedToken._id}`);
                        // console.log("id item: ",item.id)
                      }}>
                  <CartCheck size={28} /> &nbsp;
                  <strong>Beli</strong>
                </Button>
              </Row>
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
        </div>
      </Container>
    </div>
  );
}
