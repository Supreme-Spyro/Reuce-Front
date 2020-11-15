import React, { useEffect } from "react";
import "../../styles/admin.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getAllUserAction } from "../../redux/actions/user.action";
import { getAllProductActions } from "../../redux/actions/product.action";
import { getArticleDataForHome } from "../../redux/actions/article.action";

import { Container, Row, Col, Spinner } from "react-bootstrap";

export default function Admin() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userReducer.data.result);
  const productData = useSelector(
    (state) => state.getProductReducer.data.result
  );
  const articleData = useSelector(
    (state) => state.articleDataReducer.data.result
  );

  useEffect(() => {
    dispatch(getAllUserAction());
    dispatch(getAllProductActions());
    dispatch(getArticleDataForHome());
  }, [dispatch]);

  let adminData =
    userData !== undefined &&
    productData !== undefined &&
    articleData !== undefined
      ? {
          user: userData.length,
          product: productData.length,
          article: articleData.length,
          isLoading: false,
        }
      : {
          user: null,
          product: null,
          article: null,
          isLoading: true,
        };

  // console.log("userData", userData);
  // console.log("articleData", articleData);

  return (
    <div>
      <br />
      <br />
      <br />
      <Container>
        {adminData.isLoading === false ? (
          <div className="popularSection">
            <Row className="sectionTitle">
              <Col xs={12}>
                <h3>Overview</h3>
                <hr />
                <h5>Users: {adminData.user}</h5>
                <h5>Products: {adminData.product}</h5>
                <h5>Article: {adminData.article}</h5>
              </Col>
            </Row>
          </div>
        ) : (
          <div className="popularSection">
            <Row>
              <br />
              <Spinner className="mx-auto" animation="border" variant="info" />
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
}
