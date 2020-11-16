import React, {useEffect, useState} from "react";
import { Carousel, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// redux
import { getArticleDataForHome } from "../../redux/actions/article.action";

//styling manual
import "../../styles/Carousel.css";


function ArticleCarousel() {
  const dispatch = useDispatch();

  const articleData = useSelector(
    (state) => state.articleDataReducer.data.result
  );

  const [article, setArticle] = useState([]);

  useEffect(() => {
    if (articleData === undefined) {
      dispatch(getArticleDataForHome());
    } else {
      setArticle(articleData);
    }
  }, [dispatch, articleData]);

  console.log("articleData", articleData);

  return (
    <Carousel className="carousel-articles">
      {articleData ? (
        articleData.map((item, index) => (
          <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 carouselPic-articles"
          src={`http://reuce-back.herokuapp.com/${item.image}`}
          alt="First slide"
        />
        <Carousel.Caption className="montserrat carouselCaption-articles px-3">
          <h3>
            <Link to={`${item._id}`}>{item.title}</Link>
          </h3>
          {/* <p>{props.review1}</p> */}
        </Carousel.Caption>
      </Carousel.Item>
        ))
      ) : (
        <Spinner variant="info" />
      )}

      
    </Carousel>
  );
}

export default ArticleCarousel;
