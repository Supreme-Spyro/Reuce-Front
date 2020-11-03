import React from "react";
import { Col, Row, Carousel, Container } from "react-bootstrap";
import ArticleCarousel from "../components/web-elements/ArticleCarousel";
import FeaturedCard from "../components/web-elements/FeaturedCard";

//styling
import "../styles/Articles.css";

function Articles() {
  return (
    <div>
      <Row className="carouselRow-articles">
        <Container>
          <ArticleCarousel />
        </Container>
      </Row>
      <Row className="featuredRow-articles">
          <Container className="featuredRowTitle-articles">  Featured News</Container>
        <Container className="featuredContainer-articles">
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
        </Container>
      </Row>

      <Row className="editorPickerRow-articles"></Row>
    </div>
  );
}

export default Articles;
