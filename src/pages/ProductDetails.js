import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col, Spinner, Form } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductActions } from "../redux/actions/product.action";
import jwtDecode from "jwt-decode";
import {
  postOrderItem,
  updateDataOrderItem,
} from "../redux/actions/cart.action";
// import plasticBottle from "../assets/plastic-bottle.jpg";
// import NavbarBootstrap from "../components/web-elements/NavbarBootstrap";

import "../styles/ProductDetails.scss";

export default function ProductDetails() {
  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : null;
  // console.log("data decode", decodedToken)

  let { id } = useParams();
  const dispatch = useDispatch();

  const detailProductData = useSelector(
    (state) => state.getProductReducer.data.Products
  );
  console.log("detail produk", detailProductData);
  // let productId = params.id;
  // console.log("productid", productId)

  useEffect(() => {
    dispatch(getProductActions(id));
  }, [dispatch]);

  let [num, setNum] = useState(1);
  // console.log("data num", num)

  const increment = (id, num) => {
    setNum(num + 1);
    // console.log("id increment: ", id)
    // console.log("quantity increment: ", quantity)

    dispatch(updateDataOrderItem(id, num));
  };

  const decrement = (id, num) => {
    if (num < 1) {
      return 1;
    } else if (num > 1) {
      setNum(num - 1);
    }
  };

  const handleClick = (id) => {
    dispatch(postOrderItem(id));
  };

  return (
    <div>
      <Container>
        <br />
        <br />
        <br />
        {detailProductData ? (
          <Row className="popularSection mt-3">
            <Col className="my-4 colDetailLeft" sm={12} md={6}>
              {/* gambar */}
              <img
                className="prodDetailImage"
                alt="product-img"
                src={`http://reuce-back.herokuapp.com/${detailProductData.image}`}
              />
              <br />
              <br />
              <div className="text-left">
                <p>
                  <strong>Category: </strong>{`${detailProductData.category.name}`} <br />
                  <strong>Berat: </strong>{`${detailProductData.weight} Kg`}
                </p>
              </div>
            </Col>
            <Col className="mt-md-4 mt-0 " sm={12} md={6}>
              <Container>
                <div className="pl-3 mb-4">
                  <Row>
                    <h3>{`${detailProductData.name}`}</h3>
                  </Row>
                  <Row>
                    <p>{`${detailProductData.description}`}</p>
                  </Row>
                  <Row>
                    <strong>
                      <h4>{`Rp ${detailProductData.price}`}</h4>
                    </strong>
                  </Row>
                </div>
                {/* <div className="container-counter-quantity">
                <Button
                  onClick={() => decrement(id, num)}
                  className="button-details"
                  variant="secondary"
                >
                  -
                </Button>
                <p className="num">{num}</p>
                <Button
                  onClick={() => increment(id, num)}
                  className="button"
                  variant="secondary"
                >
                  +
                </Button>
              </div> */}
                <Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    dispatch(
                      postOrderItem(decodedToken._id, detailProductData._id)
                    );
                  }}
                >
                  <Button
                    className="addtocart w-100"
                    variant="success"
                    type="submit"
                    onClick={() => handleClick(id)}
                  >
                    <strong>+ Keranjang</strong>
                  </Button>
                </Form>
              </Container>
            </Col>
          </Row>
        ) : (
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
