import React, { useEffect } from "react";
import { Col, Row, Container, Spinner } from "react-bootstrap";
import ArticleCarousel from "../components/web-elements/ArticleCarousel";
import FeaturedCard from "../components/web-elements/FeaturedCard";
import NewsTabList from "../components/web-elements/NewsTabList";
import ArticleGuide from "../components/web-elements/ArticleGuide";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// redux
import { getArticleDataForHome } from "../redux/actions/article.action";
import { getArticleDataByIdForPage } from "../redux/actions/getArticleDataById.action";
//styling
import "../styles/Articles.css";

function Articles() {
  const history = useHistory();
  const dispatch = useDispatch();

  //get article from data
  const articleData = useSelector(
    (state) => state.articleDataReducer.data.result
  );

  const articleDataById = useSelector(
    (state) => state.articleDataByIdReducer.data.Artikels
  );

  const linkToArticle = (id) => {
    history.push(`/articles/${id}`);
  };

  
  console.log("articleData", articleData);
  console.log("articleDataById", articleDataById);

  useEffect(() => {
    dispatch(getArticleDataForHome());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getArticleDataByIdForPage(`5fa3c3cb9e69757dbf3a08b3`));
  // }, [dispatch]);

  return (
    <div>
      <Row className="carouselRow-articles">
        <Container>
          <ArticleCarousel
          // title1 = {articleDataById.title}
          />
        </Container>
      </Row>
      <Row className="featuredRow-articles">
        <Container className="featuredRowTitle-articles">
          {" "}
          Featured News
        </Container>
        <Container className="featuredContainer-articles">
          {articleData ? (
            articleData.map((item, index) => (
              <FeaturedCard
                key={index}
                link={()=>history.push(`/articles/${item._id}`)}
                image={item.image}
                title={item.title}
              />
            ))
          ) : (
            <Spinner variant="info" />
          )}
        </Container>
      </Row>
      <Container>
        <Row className="editorPickerRow-articles">
          <Col lg={8} md={12}>
            <NewsTabList />
          </Col>
          <Col lg={4} md={12} className="sellerGuideCol-articles">
            <Container className="sellerGuideContainer-articles">
              Guide for seller and buyer
            </Container>
            <ArticleGuide />
            <ArticleGuide />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Articles;
