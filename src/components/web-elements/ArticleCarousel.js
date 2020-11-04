import React from "react";
import { Carousel, Container } from "react-bootstrap";

//styling manual
import "../../styles/Carousel.css";

import picTest1 from "../../assets/carousel-test1.png";
import picTest2 from "../../assets/carousel-test2.png";
import picTest3 from "../../assets/carousel-test3.png";

function ArticleCarousel() {
  return (
    <Carousel className='carousel-articles'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={picTest1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={picTest2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={picTest3}          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ArticleCarousel;