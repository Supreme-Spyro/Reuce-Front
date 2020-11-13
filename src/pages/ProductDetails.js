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
          <Row>
            <Col sm={0} md={2}></Col>
            <Col className="my-4 ml-sm-5" sm={10} md={4}>
              {/* gambar */}
              <img
                alt="product-img"
                src={`http://reuce-back.herokuapp.com/${detailProductData.image}`}
                width={200}
                height={200}
              />
              <br />
              <br />
              <Row>
                <div>
                  {/* detailproduk */}
                  <h4>Detail Produk</h4>
                  {/* grade barang */}
                  <p>{`${detailProductData.grade.name}`}</p>
                  {/* kategori barang */}
                  <p>{`${detailProductData.category.name}`}</p>
                  {/* <p>Conditon: Bersih</p> */}
                  {/* berat */}
                  <p>{`${detailProductData.weight}`}</p>
                </div>
              </Row>
            </Col>
            <Col className="my-4 ml-sm-5" sm={10} md={4}>
              {/* Nama barang */}
              <Row>
                <h3>{`${detailProductData.name}`}</h3>
              </Row>
              {/* deskripsi barang */}
              <Row>
                <p>{`${detailProductData.description}`}</p>
              </Row>
              {/* harga */}
              <Row>
                <strong>
                  <h3>{`${detailProductData.price}`}</h3>
                </strong>
              </Row>
              <div className="container-counter-quantity">
                <Button
                  onClick={() => decrement(id, num)}
                  className="button"
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
              </div>
              <Row>
                <Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    dispatch(
                      postOrderItem(
                        decodedToken._id,
                        detailProductData._id
                      )
                    );
                  }}
                >
                  <Button
                    className="addtocart"
                    variant="success"
                    type="submit"
                    onClick={() => handleClick(id)}
                  >
                    <strong>Masukkan ke Keranjang</strong>
                  </Button>
                </Form>
              </Row>
            </Col>

            <Col sm={0} md={2}></Col>
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
