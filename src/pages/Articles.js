import React, { useEffect, useState } from "react";
import { Col, Row, Container, Spinner } from "react-bootstrap";
import ArticleCarousel from "../components/web-elements/ArticleCarousel";
import { Link} from "react-router-dom";
// import FeaturedCard from "../components/web-elements/FeaturedCard";
import NewsTabList from "../components/web-elements/NewsTabList";
import ArticleGuide from "../components/web-elements/ArticleGuide";
import { useSelector, useDispatch } from "react-redux";
import { useHistory} from "react-router-dom";

// redux
import { getArticleDataForHome } from "../redux/actions/article.action";
// import { getArticleDataByIdForPage } from "../redux/actions/getArticleDataById.action";
//component
import ProductCard from "../components/web-elements/Home/ProductCardHome";
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

  function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str;
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + "...";
  }

  return (
    <div>
      <br />
      <br />
      <br />
      {articleData ? (
        <div>
          <Row className="carouselRow-articles">
            <Container>
              <ArticleCarousel
              />
            </Container>
          </Row>
          <Row className="featuredRow-articles">
            <Container className="featuredRowTitle-articles">
              Featured News
              <Row className="p-3 flex-row flex-nowrap horizontalMenu">
                {articleData ? (
                  articleData.map((item, index) => (
                    <Col key={index} xs={12} md={8} lg={4}>
                      <Link to={`/articles/${item._id}`}>
                        <ProductCard
                          propsTitleStyle={{ fontSize: "0.5em" }}
                          propsClassName="pb-2"
                          imageSource={`http://reuce-back.herokuapp.com/${item.image}`}
                          title={truncateString(item.title, 37)}
                        />
                        {/* <FeaturedCard
          key={index}
          link={() => history.push(`/articles/${item._id}`)}
          image={item.image}
          title={item.title}
        /> */}
                      </Link>
                    </Col>
                  ))
                ) : (
                  <Spinner variant="info" />
                )}
              </Row>
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
                        id={item._id}
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
      ) : (
        <div className="align-item-center text-center mt-5">
          <br />
          <br />
          <Spinner animation="border" variant="info" size="lg" />
        </div>
      )}
    </div>
  );
}

export default Articles;
