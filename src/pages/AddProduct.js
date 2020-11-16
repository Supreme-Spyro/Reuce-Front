import React,{ useState } from "react";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";

// redux
import { postProductActions } from "../redux/actions/product.action";
import { useDispatch } from "react-redux";

// styling
import "../styles/Profile.css";
import "../styles/MyShop.css";

//pic import
import blankAva from "../assets/blank-avatar.png";

//component import
import Footer from "../components/web-elements/Footer";

function AddProduct() {
  let history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();
  
  
  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : "none";

   //useState
   const [addProductState, setAddProductState] = useState({
    name: "",
    price: Number,
    description: "",
    category:"5fb0a32044fea22a0ce687b2",
    grade:"5fa404959e69757dbf3a08cc",
    weight:Number,
    user:decodedToken._id,
    image: undefined,
  });
  // console.log('addproduct state: ', addProductState)

  function goToProfile() {
    history.push(`/profile/${decodedToken._id}`);
  }
  function alertClicked() {
    history.push(`/myshop/${id}`);
  }

  const handleChange = (event) => {
    setAddProductState({
      ...addProductState,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <div>
      <Container className="profileContainer-profile mb-5">
        <Row className="m-5">
          <Col lg={3}>
            <Container>
              <Row>
                <img alt="altImg" src={blankAva} className="blankAva-profile" />
              </Row>
              <Row className="rowAva-profile">
                <ul className="listAva-profile">
                  <li>{decodedToken.username}</li>
                  <li>{decodedToken.email}</li>
                </ul>
              </Row>

              <Row>
                <ListGroup
                  defaultActiveKey="#link1"
                  variant="flush"
                  mt={5}
                  className="listTab-profile"
                >
                  <ListGroup.Item
                    action
                    onClick={goToProfile}
                    className="subListTabMyProfile-MyShop"
                  >
                    Profil
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={alertClicked}
                    className="subListTabMyShop-MyShop"
                  >
                    Toko Anda
                  </ListGroup.Item>
                </ListGroup>
              </Row>
            </Container>
          </Col>
          <Col lg={9}>
            <hr className="d-lg-none d-md-block" />
            <h4 className="mt-md-4 mt-4 nunito">Tambahkan Produk</h4>
            <hr />
            {/* <form
            method="post"
            enctype="multipart/form-data"
            action="/product"
            onSubmit={(event) => {
              dispatch(postProductActions(addProductState, event, history));
            }}
            >
              <input type="text" name="name"
              onChange={(event) => handleChange(event)}
              value={addProductState.name}/>
              <input type="file" name="image"
              onChange={(event) => handleChange(event)}
              value={addProductState.image}/>
              <button type="submit"/>
            </form> */}
            <Form
              // method="post"
              // enctype="multipart/form-data"
              // action="/product"
              autoComplete="off"
              className="form-profile"
              onSubmit={(event) => {
                dispatch(postProductActions(addProductState, decodedToken._id, event, history));
              }}
            >
              <Container>
                <Form.Group controlId="username" as={Row}>
                  <Form.Label>Nama Produk</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={(event) => handleChange(event)}
                    value={addProductState.name}
                  />
                </Form.Group>

                <Form.Group controlId="price" as={Row}>
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    onChange={(event) => handleChange(event)}
                    value={addProductState.price}
                  />
                </Form.Group>

                <Form.Group controlId="description" as={Row}>
                  <Form.Label>Deskripsi Produk</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    onChange={(event) => handleChange(event)}
                    value={addProductState.description}
                  />
                </Form.Group>

                <Form.Group controlId="category" as={Row}>
                  <Form.Label>Kategori</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    // onChange={(event) => handleChange(event)}
                    // value={addProductState.category}
                  />
                </Form.Group>
                <Form.Group controlId="grade" as={Row}>
                  <Form.Label>Grade</Form.Label>
                  <Form.Control
                    type="text"
                    name="grade"
                    // onChange={(event) => handleChange(event)}
                    // value={addProductState.grade}
                  />
                </Form.Group>
                <Form.Group controlId="weight" as={Row}>
                  <Form.Label>Berat</Form.Label>
                  <Form.Control
                    type="number"
                    name="weight"
                    onChange={(event) => handleChange(event)}
                    value={addProductState.weight}
                  />
                </Form.Group>
                <Form.Group 
             controlId="image" 
             as={Row}>
                  <Form.Label>Gambar</Form.Label>
                  <Form.File
                    type="file"
                    name="images"
                    // onChange={(event) => handleChange(event)}
                    // value={addProductState.image}
                  />
                </Form.Group>
                <Form.Group as={Row}>
                  <Button
                    type="submit"
                    className="montserrat text-light saveChangeButton-profile"
                  >
                    Tambahkan
                  </Button>
                </Form.Group>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default AddProduct;
