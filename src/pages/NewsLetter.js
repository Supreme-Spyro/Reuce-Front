import React, { useEffect } from "react";
import { Container, Row, Carousel, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getArticleDataByIdForPage } from "./../redux/actions/getArticleDataById.action";

//styling
import "../styles/NewsLetter.css";

function NewsLetter() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articleByIdData = useSelector(
    (state) => state.articleDataByIdReducer.data.Artikels
  );
  const authorData = useSelector((state) => state.articleDataByIdReducer.admin);
  console.log("articleByIdData", articleByIdData);
  console.log("authorData", authorData);

  useEffect(() => {
    dispatch(getArticleDataByIdForPage(id));
  }, [dispatch]);

  return (
    <div className="container-newsletter">
      {articleByIdData ? (
        <Container>
          <Row>
            <img
              width="80%"
              className="image-newsLetter mx-auto"
              src={`http://reuce-back.herokuapp.com/${articleByIdData.image}`}
            />
          </Row>
          <Row>
            <h4>{articleByIdData.title}</h4>
          </Row>
          <br />
          <Row>
            <p>{articleByIdData.content}</p>
          </Row>
        </Container>
      ) : (
        <div className="text-center">
          <Spinner variant="info" animation="border" />
        </div>
      )}
    </div>
  );
}

export default NewsLetter;
