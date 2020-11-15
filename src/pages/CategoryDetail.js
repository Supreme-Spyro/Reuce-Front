import React, { useEffect } from "react";

import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Col, Spinner } from "react-bootstrap";

import { getCategoryId } from "../redux/actions/category.action";

import ProductCard from "../components/web-elements/Home/ProductCardHome";
import "../styles/Search.scss";
import botolplastik from "../assets/plastic-bottle.jpg";
import UndifinedHandler from "../components/web-elements/UndifinedHandler"

export default function CategoryDetail() {
  const {id} = useParams();
  const dispatch = useDispatch();

  const categoryByIdData = useSelector(
    (state) => state.getCategoryReducer.data.Categories
  );
  console.log("data category id: ",categoryByIdData)

  useEffect(() => {
    dispatch(getCategoryId(id));
  }, [dispatch]);

  return (
    <div>
      <br />
      <br />
      <br />
      <Container>
        {categoryByIdData !== undefined ? (
          <div>
            <Row>
              <h4 className="mt-3 ml-4">Category: {`${categoryByIdData.name}`}</h4>
            </Row>
            <Row className="mx-auto justify-content-center align-item-center mx-auto">
              {categoryByIdData.product.length === 0 ? <UndifinedHandler/> : categoryByIdData.product.map((item, index) => (
                <Col
                  className="px-sm-4 colStyle align-item-center justify-content-center"
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={index}
                >
                  <Link to={`/product/${item._id}`}>
                    <ProductCard
                      // propsClassName="mx-auto ml-4"
                      imageSource={
                        `http://reuce-back.herokuapp.com/${item.image}` ||
                        botolplastik
                      }
                      title={item.name}
                      text={`Rp ${item.price}`}
                      productRole={item.role}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <div className="align-item-center mx-auto text-center mt-5">
            <br />
            <br />
            <Row>
              <Spinner
                className="mx-auto"
                animation="border"
                variant="info"
                size="lg"
              />
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
}