import React, { useEffect, useState } from "react";
import {
  Modal,
  Container,
  Button,
  Row,
  Col,
  Spinner,
  Form,
} from "react-bootstrap";
import {
  useParams,
  useHistory,
  // Link
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductActions } from "../redux/actions/product.action";
import jwtDecode from "jwt-decode";
import {
  postOrderItem,
  // updateDataOrderItem,
  // getDataOrderItem,
} from "../redux/actions/cart.action";
// import plasticBottle from "../assets/plastic-bottle.jpg";
// import NavbarBootstrap from "../components/web-elements/NavbarBootstrap";

import "../styles/ProductDetails.scss";

export default function ProductDetails() {
  const history = useHistory();

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

  // let [num, setNum] = useState(1);
  // // console.log("data num", num)

  // const increment = (id, num) => {
  //   setNum(num + 1);
  //   // console.log("id increment: ", id)
  //   // console.log("quantity increment: ", quantity)

  //   dispatch(updateDataOrderItem(id, num));
  // };

  // const decrement = (id, num) => {
  //   if (num < 1) {
  //     return 1;
  //   } else if (num > 1) {
  //     setNum(num - 1);
  //   }
  // };

  const handleClick = (id) => {
    dispatch(postOrderItem(id));
  };

  // loading modal variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div>
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
        <br />
        <br />
        <br />
        {detailProductData ? (
          <Row className="popularSection mt-3 pb-5">
            <Col className="my-4 colDetailLeft" sm={12} md={6}>
              {/* gambar */}
              <img
                className="prodDetailImage"
                alt="product-img"
                src={`http://reuce-back.herokuapp.com/${detailProductData.image}`}
              />
              <br />
              <br />
              <div className="text-left ml-2">
                <p>
                  <strong>Penjual: </strong>
                  {`${detailProductData.user.fullname}`} <br />
                  <strong>Category: </strong>
                  {`${detailProductData.category.name}`} <br />
                  <strong>Berat: </strong>
                  {`${detailProductData.weight} Kg`}
                </p>
              </div>
            </Col>
            <Col className="mt-md-4 mt-0 details-right" sm={12} md={6}>
              <Container>
                <div className="ml-2 mb-4">
                  <Row>
                    <h3>{`${detailProductData.name}`}</h3>
                  </Row>
                  <Row className="p-2">
                    <strong>Deskripsi:</strong>
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
                {decodedToken ? (
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
                      variant="info"
                      type="submit"
                      onClick={() => {
                        setShow(true);
                        handleClick(id);
                      }}
                    >
                      <strong>+ Keranjang</strong>
                    </Button>
                  </Form>
                ) : (
                  <div>
                    <h4 className="lato">Daftar terlebih dahulu</h4>
                    <Button variant="secondary" disabled>
                      <strong>+ Keranjang</strong>
                    </Button>
                  </div>
                )}
              </Container>
            </Col>
          </Row>
        ) : (
          <div className="align-item-center text-center mt-5">
            <br />
            <br />
            <Spinner animation="border" variant="info" size="lg" />
          </div>
        )}
      </Container>
    </div>
  );
}
