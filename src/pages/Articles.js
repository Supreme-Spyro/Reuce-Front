import React from "react";
import { Col, Row, Carousel, Container } from "react-bootstrap";
import ArticleCarousel from "../components/web-elements/ArticleCarousel";
import FeaturedCard from "../components/web-elements/FeaturedCard";
import NewsTabList from "../components/web-elements/NewsTabList";
import ArticleGuide from "../components/web-elements/ArticleGuide";
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
        <Container className="featuredRowTitle-articles">
          {" "}
          Featured News
        </Container>
        <Container className="featuredContainer-articles">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
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
