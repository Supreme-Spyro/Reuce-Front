import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import {Link} from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import ReactFilestack from 'filestack-react';

//get actions redux
import { getProductActions } from "../redux/actions/product.action";
import { updateProductActions } from "../redux/actions/product.action";

//styling
import "../styles/EditItem.css";
function EditItem() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const API_KEY = 'AWTkko3WRFm2oNQLXzLkkz'

  //userToken
  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : "none";

  //get data from reducer
  const productData = useSelector((state) => state.getProductReducer.data.Products);
  // console.log('productData',productData)
  //useState
  const [productState, setProductState] = useState({
    name: "",
    weight: "",
    price: "",
    address: "",
    image:undefined,
  });

  // console.log('productState', productState)

  //handleChange
  const handleChange = (event) => {
    setProductState({
      ...productState,
      [event.target.name]: event.target.value,
    });
  };

  // opbtaining user data from redux
  useEffect(() => {
    if (productData === undefined) {
      dispatch(getProductActions(id));
    } else {
      setProductState({
        ...productData,
      });
    }
  }, [dispatch, productData, id]);

  return (
    <div>
      <Container className="container-edititem">
        <Form
          autoComplete="off"
          onSubmit={(event) => {
            dispatch(
              updateProductActions(productState, event, id, decodedToken._id)
            );
          }}
        >
          <Form.Group>
            <Form.Row>
              <Form.Label>Gambar</Form.Label>

              <ReactFilestack
                name="image"
                apikey={API_KEY}
                onSuccess={(res) => {
                  console.log("ini ada dari response filestack: ", res);
                  setProductState({
                    ...productState,
                    image: res.filesUploaded[0].url,
                  });
                }}
              />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                name="name"
                value={productState.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Berat (Dalam kg)</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                name="weight"
                value={productState.weight}
                onChange={(event) => handleChange(event)}
              />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Harga</Form.Label>
              <Form.Control
                size="lg"
                type="number"
                name="price"
                value={productState.price}
                onChange={(event) => handleChange(event)}
              />
            </Form.Row>
          </Form.Group>
          {/* <Form.Group>
            <Form.Row>
              <Form.Label>Alamat pengiriman</Form.Label>
              <Form.Control 
              size="lg" 
              type="text" 
              name='address'
              value={productState.user.address}
              onChange={(event)=>handleChange(event)} 
              />
            </Form.Row>
          </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default EditItem;
