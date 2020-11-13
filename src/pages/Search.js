import React, { useEffect } from "react";

import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

import { getSearchActions } from "../redux/actions/search.action";

import ProductCard from "../components/web-elements/Home/ProductCardHome";
import "../styles/Search.scss";
import botolplastik from "../assets/plastic-bottle.jpg";

export default function Search() {
  let params = useParams();
  let dispatch = useDispatch();
  let searchName = decodeURIComponent(params.id);
  console.log("hasil", searchName);
  const history = useHistory();

  useEffect(() => {
    dispatch(getSearchActions(searchName));
  }, [dispatch]);

  const dataSearch = useSelector((state) => state.searchReducer.data);
  const searchLoading = useSelector((state) => state.searchReducer.isLoading);
  console.log("data", dataSearch);

  return (
    <div>
      <br />
      <br />
      <br />
      <Container>
        {searchLoading === false ? (
          <div>
            <Row>
              <h4 className="mt-3 ml-4">Search: {`${searchName}`}</h4>
            </Row>
            <Row className="mx-auto justify-content-center align-item-center mx-auto">
              {dataSearch.map((item, index) => (
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
