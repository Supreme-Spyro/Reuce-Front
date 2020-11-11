import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { getProductActions } from '../redux/actions/product.action'
import { postOrderItem, updateDataOrderItem } from '../redux/actions/cart.action'
import plasticBottle from "../assets/plastic-bottle.jpg";
// import NavbarBootstrap from "../components/web-elements/NavbarBootstrap";

import "../styles/ProductDetails.scss";

export default function ProductDetails() {
  let params = useParams();
  const dispatch = useDispatch();

  let productId = params.id;

  useEffect(() => {
    dispatch(getProductActions(productId));
  }, [dispatch]);

  const detailProductData = useSelector(
    (state) => state.getProductReducer.data.Products);

  let [num, setNum] = useState(1);

  const increment = (id, quantity) => {
    setNum((num = quantity + 1));
    
    dispatch(updateDataOrderItem(id, num));
  };


  const decrement = (id, quantity) => {
    if (num < 0) {
      return 0;
    } else if (num > 0) {
      setNum((num = quantity - 1));
    }
    dispatch(updateDataOrderItem(id,num));
  };

  const handleClick = (id) => {
    dispatch(postOrderItem(id));
  };

  return (
    <div>
      <Container>
        {detailProductData ? (
          <Row>
          <Col sm={0} md={2}></Col>
          <Col className="my-4 ml-sm-5" sm={10} md={4}>
            {/* gambar */}
            <img alt="product-img" src={detailProductData.image} width={200} height={200} />
            <br />
            <br />
            <Row>
              <div>
                {/* detailproduk */}
                <h4>Detail Produk</h4>
                {/* grade barang */}
                <p>{`${detailProductData.grade}`}</p>
                {/* kategori barang */}
                <p>{`${detailProductData.category}`}</p>
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
                onClick={() => decrement()}
                className="button"
                variant="secondary"
              >
                -
              </Button>
              <p className="num">{num}</p>
              <Button
                onClick={() => increment()}
                className="button"
                variant="secondary"
              >
                +
              </Button>
            </div>
            <Row>
              <Button className="addtocart" variant="success" type="submit"
              onClick={() => handleClick(detailProductData._id)}
              >
                <Link to="/checkout"></Link>
                <strong>Masukkan ke Keranjang</strong>
              </Button>
            </Row>
          </Col>

          <Col sm={0} md={2}></Col>
        </Row>
        ) : (
          <div className="align-item-center text-center mt-5">
            <br />
            <br />
            <Spinner animation="border" variant="warning" size="lg" />
          </div>
        )}
        
      </Container>
    </div>
  );
}
