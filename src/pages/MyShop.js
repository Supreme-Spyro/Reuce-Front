import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

//redux
import { getUserRequestById } from "../redux/actions/getUserData.action";

// styling
import "../styles/Profile.css";
import "../styles/MyShop.css";

//pic import
import blankAva from "../assets/blank-avatar.png";

//component import
import MyShopList from "../components/web-elements/MyShopList";
import Footer from "../components/web-elements/Footer";

function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : "none";

  //get product data
  const shopData = useSelector((state) => state.getUserDataReducer.data.product);
  const userData = useSelector((state) => state.getUserDataReducer.data);

  console.log("shopData", shopData);

  //usestate
  //useState
  const [shopState, setShopState] = useState({
    name: "",
    image: "",
    price: "",
  });

  // opbtaining user data from redux
  useEffect(() => {
    if (shopData === undefined) {
      dispatch(getUserRequestById(id));
    } else {
      setShopState({
        ...shopData,
      });
    }
  }, [dispatch, shopData, id]);

  //navigation

  function goToProfile() {
    history.push(`/profile/${decodedToken._id}`);
  }

  return (
    <div>
      <Container className="profileContainer-profile bg-light">
        <Row className="m-5">
          <Col lg={3}>
            <Container className=" nunito">
              <Row>
                <img alt="" src={blankAva} className="blankAva-profile" />
              </Row>
              <Row className="rowAva-profile">
                <ul className="listAva-profile">
                  <li>{userData.username}</li>
                  <li>{userData.email}</li>
                  {/* <li>id :{userData._id}</li> */}
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
                    action
                    onClick={() => {
                      history.push(`/profile/${id}`);
                    }}
                    className="subListTabMyShop-profile"
                  >
                    Profil
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={() => {
                      history.push(`/myshop/${id}`);
                    }}
                    className="subListTabMyProfile-profile"
                  >
                    Toko Anda
                  </ListGroup.Item>
                </ListGroup>
              </Row>
            </Container>
          </Col>
          <Col lg={9}>
            {shopData ? (
              shopData.map((item, index) => (
                <MyShopList
                  key={index}
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  weight={item.weight}
                  id={item._id}
                  
                />
              ))
            ) : (
              <Spinner variant="info" />
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Profile;
