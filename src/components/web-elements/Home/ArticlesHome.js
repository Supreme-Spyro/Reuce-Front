import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { Row, Spinner, Col } from "react-bootstrap";

import { getArticleDataForHome } from "../../../redux/actions/article.action";

import "../../../styles/Font.scss";
import "../../../styles/popularHome.scss";

import placeholder from "../../../assets/placeholder.jpg";
import ProductCard from "./ProductCardHome";

export default function PopularHome() {
  const dispatch = useDispatch();
  const history = useHistory();

  const articleData = useSelector(
    (state) => state.articleDataReducer.data.result
  );

  useEffect(() => {
    dispatch(getArticleDataForHome());
  }, [dispatch]);

  function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str;
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + "...";
  }

  // const dummyPopular = [
  //   {
  //     image: wasteBox,
  //     title: "Article Title",
  //     text: "",
  //   },
  //   {
  //     image: wasteBox,
  //     title: "Article Title",
  //     text: "",
  //   },
  // ];
  return articleData ? (
    articleData.map((item, index) => (
      <Col
        className="colStyle align-item-center justify-content-center"
        xs={8}
        sm={4}
        md={4}
        key={index}
      >
        <Link to={`/articles/${item._id}`}>
          <ProductCard
            className="pb-3"
            imageSource={
              `http://reuce-back.herokuapp.com/${item.image}` || placeholder
            }
            title={truncateString(item.title, 23)}
            text={item.text}
            productRole={item.productRole}
          />
        </Link>
      </Col>
    ))
  ) : (
    <Row className="justify-content-center text-center">
      <br />
      <br/>
      <Spinner className="mx-auto" animation="border" variant="info" />
    </Row>
  );
}
