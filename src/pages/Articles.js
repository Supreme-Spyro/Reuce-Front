import React, { useEffect, useState } from "react";
import { Col, Row, Container, Spinner } from "react-bootstrap";
import ArticleCarousel from "../components/web-elements/ArticleCarousel";
import FeaturedCard from "../components/web-elements/FeaturedCard";
import NewsTabList from "../components/web-elements/NewsTabList";
import ArticleGuide from "../components/web-elements/ArticleGuide";
import { useSelector, useDispatch } from "react-redux";
import { useHistory} from "react-router-dom";

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


  useEffect(() => {
    if (articleData === undefined) {
      dispatch(getArticleDataForHome());
    } else {
      setArticle(articleData);
    }
  }, [dispatch, articleData]);


  const [article, setArticle] = useState([]);
  let searchRegex = /lorem ipsum/gi;

  let articleGuide = article.filter((item) => {
    return item.content.match(searchRegex);
  });

  console.log("articleGuide", articleGuide);
  console.log("articleData", articleData);

  console.log("article", article);

  return (
    <div>
      <Row className="carouselRow-articles">
        <Container className='carouselContainer-articles'>
          <ArticleCarousel/>
        </Container>
      </Row>
      <Row className="featuredRow-articles">
        <Container className="featuredRowTitle-articles">
          Featured News
        </Container>
        <Container className="featuredContainer-articles">
          {articleData ? (
            articleData.map((item, index) => (
              <FeaturedCard
                key={index}
                link={() => history.push(`/articles/${item._id}`)}
                image={item.image}
                title={item.title}
                desc={item.content}
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
            {articleData ? (
              articleData.map((item, index) => (
                <NewsTabList
                  key={index}
                  dateRelease={item.admin.updatedAt}
                  admin={item.admin.fullname}
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  review={item.content}
                />
              ))
            ) : (
              <Spinner variant="info" />
            )}
          </Col>
          <Col lg={4} md={12} className="sellerGuideCol-articles">
            <Container className="sellerGuideContainer-articles">
              Guide for seller and buyer
              {articleGuide ? (
                articleGuide.map((item, index) => (
                  <ArticleGuide
                    key={index}
                    dateRelease={item.updatedAt}
                    link={item._id}
                    image={item.image}
                    title={item.title}
                  />
                ))
              ) : (
                <Spinner variant="info" />
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Articles;
