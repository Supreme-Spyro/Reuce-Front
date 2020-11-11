import React from "react";
import { Carousel } from "react-bootstrap";

//styling manual
import "../../styles/Carousel.css";

import picTest1 from "../../assets/carousel-test1.png";
import picTest2 from "../../assets/carousel-test2.png";
import picTest3 from "../../assets/carousel-test3.png";

function ArticleCarousel(props) {
  return (
    <Carousel className="carousel-articles">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={picTest1} alt="First slide" />
        <Carousel.Caption>
          <h3>{props.title1}</h3>
          <p>{props.review1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={picTest2} alt="Third slide" />
        <Carousel.Caption>
          <h3>{props.title2}</h3>
          <p>{props.review2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={picTest3} alt="Third slide" />
        <Carousel.Caption>
          <h3>{props.review3}</h3>
          <p>
          {props.review3}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ArticleCarousel;
