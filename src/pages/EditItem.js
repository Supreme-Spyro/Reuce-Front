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

//get actions redux
import { getProductActions } from "../redux/actions/product.action";
import { updateProductActions } from "../redux/actions/product.action";

//styling
import "../styles/EditItem.css";
function EditItem() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  //userToken
  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : "none";

  //get data from reducer
  const productData = useSelector((state) => state.getProductReducer.data);
  console.log('productData',productData)
  //useState
  const [productState, setProductState] = useState({
    name: "",
    weight: "",
    price: "",
    address: "",
  });

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
      {productData._id !== undefined ? (
      <Container className="container-edititem">
        <Form
        autoComplete='off'
        onSubmit={(event) => {
          dispatch(
            updateProductActions(productState, event, id)
          );
        }}
        >
          <Form.Group>
            <Form.Row>
              <Form.File id="exampleFormControlFile1" label="Add image" />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                name='name'
                value={productData.name}
                onChange={(event)=>handleChange(event)}
              />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Berat (Dalam kg)</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                name='weight'
               value={productData.weight}
               onChange={(event)=>handleChange(event)} 
              />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Harga</Form.Label>
              <Form.Control 
              size="lg" 
              type="number"
              name='price'
              value={productData.price}
              onChange={(event)=>handleChange(event)} 
              />
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Alamat pengiriman</Form.Label>
              <Form.Control 
              size="lg" 
              type="text" 
              name='address'
              value={productData.address}
              onChange={(event)=>handleChange(event)} 
              />
            </Form.Row>
          </Form.Group>
          <Link to={`/myshop/edititem/${decodedToken._id}`}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Link>
        </Form>
      </Container>
       ) : (
        <Spinner className="mx-auto " animation="border" variant="info" />
      )}
    </div>
  );
}

export default EditItem;
