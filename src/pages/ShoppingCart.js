import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import {
  getDataOrderItem,
  deleteDataOrderItem,
  updateDataOrderItem,
  postOrderItem,
} from "../redux/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from 'react-router-dom'
import jwtDecode from "jwt-decode";
// import { CartCheck, TrashFill } from "react-bootstrap-icons";
import plasticBottle from "../assets/plastic-bottle.jpg";

import "../styles/ShoppingCart.scss";

export default function ShoppingCart() {
  //redux

  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : null;

  const dataOrderItem = useSelector((state) => state.showDataOrderItem);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataOrderItem());
  }, [dispatch]);

  let [num, setNum] = useState(1);

  const increment = (id, quantity) => {
    setNum((num = quantity + 1));

    dispatch(updateDataOrderItem(id, num));
  };

  const decrement = (id, quantity) => {
    if (num < 1) {
      return 1;
    } else if (num > 1) {
      setNum((num = quantity - 1));
    }
    dispatch(updateDataOrderItem(id, num));
  };

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


  return (
    <div>
      <Container className="container-cart">
        <h3>Shopping Cart</h3>
        {dataOrderItem.data.result !== undefined ? (
          <Row>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                dispatch(postOrderItem(decodedToken._id, dataOrderItem._id));
              }}
            >
              <Button className="buy-now" variant="success" type="submit">
                <strong>Beli</strong>
              </Button>
            </Form>
          </Row>
        ) : (
          <h4 className="text-center mx-auto mt-4 pb-4">
            Your cart is empty, please order first
            <br />
          </h4>
        )}
        <Row>
          <Col md={12}>
            {/* <div className="select-product-profile">
                <div className="photo-seller"></div>
                <p>nama seller</p>
              </div> */}
            {/* <Form.Group className="select-product">
                <div className="select-product-header">
                  <p className="header-item">item</p>
                  <p className="header-price">price package</p>
                  <p className="header-quantity">quantity</p>
                  <p className="header-amount">amount</p>
                </div>
                <div className="select-product-content">
                  <Form.Check type="checkbox" className="check-product" />
                  <div className="img-product">
                      <img 
                      src={plasticBottle}
                      width={50}
                      alt=""
                      height={50}/>
                  </div>
                  <Form.Text className="product-name">botol plastik</Form.Text>
                  <Form.Text className="price">Rp 2.000</Form.Text>
                  <div className="container-counter-quantity">
                    <Button
                      onClick={decrement}
                      className="button"
                      variant="secondary"
                    >
                      -
                    </Button>
                    <p className="num">{num}</p>
                    <Button
                      onClick={increment}
                      className="button"
                      variant="secondary"
                    >
                      +
                    </Button>
                  </div>
                  <Form.Text className="amount">Rp 2.000</Form.Text>
                  <button className="delete-product">x</button>
                </div>
              </Form.Group> */}
          </Col>
        </Row>
        <Row>
          <Button className="buy-now" variant="success" type="submit">
            <strong>Beli</strong>
          </Button>
        </Row>
      </Container>
    </div>
  );
}
