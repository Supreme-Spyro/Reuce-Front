import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";

import { deleteProductActions} from "../../redux/actions/product.action";
import "../../styles/MyShopList.css";
import plasticBottle from '../../assets/plastic-bottle.jpg';

import jwtDecode from "jwt-decode";

function MyShopList(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const userToken = localStorage.getItem("token");
  const decodedToken = userToken ? jwtDecode(userToken) : "none";

  return (
    <div className="MyShopListContainer montserrat">
      <Row>
        <Col lg={4}>
          <img
            alt=""
            className="ListImage-MyShopList"
            src={props.image !== undefined ? `http://reuce-back.herokuapp.com/${props.image}` : plasticBottle}
          />
        </Col>
        <Col lg={8}>
          <Row>
            <Container>
              <div className="productName-MyShopList">{props.name}</div>
              <table className="table-MyShopList">
                <tr>
                  <td className="tdTable-MyShopList">Berat produk</td>
                  <td>{props.weight} Kg</td>
                </tr>
                <tr>
                  <td className="tdTable-MyShopList">Harga</td>
                  <td>Rp {props.price}</td>
                </tr>
                <tr>
                  <td className="tdTable-MyShopList">Deskripsi produk :</td>
                  <td className="tdTable-MyShopList"></td>
                </tr>
                <tr className="trTable-MyShopList">{props.description}</tr>
              </table>

            </Container>
          </Row>
          <Row>
            <Container>
              <Button
                className="buttonEdit-MyShopList"
                variant="success"
                onClick={() => history.push(`/myshop/${props.id}/edititem`)}
              >
                Edit Produk
              </Button>
              <Button className="buttonSoldOut-MyShopList" variant="danger" onClick={(event) => dispatch(deleteProductActions(props.id,decodedToken._id , event, history))}>
                Hapus Produk
              </Button>
            </Container>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MyShopList;
