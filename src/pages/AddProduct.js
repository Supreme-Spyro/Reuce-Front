import React,{ useState } from "react";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import ReactFilestack from 'filestack-react';

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
  
  const API_KEY = 'AWTkko3WRFm2oNQLXzLkkz'
  
  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : "none";

   //useState
   const [addProductState, setAddProductState] = useState({
    name: "",
    price: Number,
    description: "",
    category:"",
    grade:"",
    weight:Number,
    user:decodedToken._id,
    image: undefined,
  });
  console.log('addproduct state: ', addProductState)

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
            <Form
              autoComplete="off"
              className="form-profile"
              onSubmit={(event) => {
                dispatch(
                  postProductActions(
                    addProductState,
                    decodedToken._id,
                    event,
                    history
                  )
                );
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

                <Form.Group as={Row}>
                  <Form.Label>Kategori</Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="category"
                    custom
                    name="category"
                    onChange={(event) => handleChange(event)}
                    value={addProductState.category}
                  >
                    <option value={undefined}>Pilih Kategori anda</option>
                    <option value="5fb09dd728e92d24ebf0ac8f">
                      Botol Plastik Bening
                    </option>
                    <option value="5fb09f6caf97d5275a0f4861">
                      Botol plastik Berwarna
                    </option>
                    <option value="5fb0a08344fea22a0ce687a8">Elektronik</option>
                    <option value="5fb0a11b44fea22a0ce687aa">
                      Gelas Plastik
                    </option>
                    <option value="5fb0a1f744fea22a0ce687ac">Kardus</option>
                    <option value="5fb0a25144fea22a0ce687ae">Kertas HVS</option>
                    <option value="5fb0a2a044fea22a0ce687b0">
                      Plastik Lembaran Bening
                    </option>
                    <option value="5fb0a32044fea22a0ce687b2">
                      Plastik Lembaran Berwarna
                    </option>
                    <option value="5fb0a4b244fea22a0ce687b4">Popular</option>
                    
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label>Grade</Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="grade"
                    custom
                    name="grade"
                    onChange={(event) => handleChange(event)}
                    value={addProductState.grade}
                  >
                    <option value={undefined}>Pilih Grade anda</option>
                    <option value="5fa0d5708c197d3be61f12ef">A</option>
                    <option value="5fa4048a9e69757dbf3a08cb">B</option>
                    <option value="5fa404959e69757dbf3a08cc">C</option>
                  </Form.Control>
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
                <Form.Group controlId="image" as={Row}>
                  <Form.Label>Gambar</Form.Label>

                  <ReactFilestack
                    name="image"
                    apikey={API_KEY}
                    onSuccess={
                      (res) => {
                        console.log("ini ada dari response filestack: ",res)
                        setAddProductState({
                          ...addProductState,
                          image : res.filesUploaded[0].url
                        })
                      }
                    }
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
