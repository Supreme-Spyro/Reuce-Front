import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { getDataOrderItem, deleteDataOrderItem, updateDataOrderItem } from '../redux/actions/cart.action'
import { useDispatch, useSelector } from 'react-redux'
// import { CartCheck, TrashFill } from "react-bootstrap-icons";
import plasticBottle from '../assets/plastic-bottle.jpg';

import '../styles/ShoppingCart.scss'


export default function ShoppingCart() {
  //redux
  const dataOrderItem = useSelector((state) => state.showDataOrderItem);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  // const history = useHistory();

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

    return (
        <div>
            <Container className="container-cart">

              {dataOrderItem.data.result !== undefined ? (
                dataOrderItem.data.result.map((item, index) => (
                <Row key={index}>
                  <Col md ={12}>
                  <Form.Group className="select-product">
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
                  </Form.Group>
                  <Row>
                    <Button
                    className="buy-now"
                    variant="success"
                    type="submit"
                    >
                    <strong>Beli</strong>
                    </Button>
                  </Row>
                  </Col>
                </Row>  
                ))
              ):(
                <h4 className="text-center mx-auto mt-4 pb-4">
                  Your cart is empty, please order first
                <br/>
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
