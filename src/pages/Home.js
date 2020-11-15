import React from "react";
import { Link } from "react-router-dom";

import { Container, Row } from "react-bootstrap";

import NavbarBootstrap from "../components/web-elements/NavbarBootstrap";
import CarouselHome from "../components/web-elements/Home/CarouselHome";
import PopularHome from "../components/web-elements/Home/PopularHome";
// import WhatsNewHome from "../components/web-elements/Home/WhatsNewHome";
import ArticlesHome from "../components/web-elements/Home/ArticlesHome";
import WhyUs from "../components/web-elements/Home/WhyUs";
import JoinUs from "../components/web-elements/Home/JoinUs";
import Footer from "../components/web-elements/Footer";

export default function Home() {
  return (
    <div>
      <NavbarBootstrap />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <CarouselHome />
        </Row>
        {/* <Container className="justify-content-around popular-section"> */}
        <br />
        <div className="popularSection">
          <Row className="sectionTitle">
            <h5 className="lato">Populer Minggu ini</h5>
          </Row>
          <Row className="flex-row flex-nowrap horizontalMenu">
            <PopularHome />
          </Row>
        </div>
        {/* <div className="popularSection">
          <Row className="sectionTitle">
            <h5 className="lato">Baru Hadir</h5>
          </Row>
          <Row className="flex-row flex-nowrap horizontalMenu">
            <WhatsNewHome />
          </Row>
        </div> */}
        <Row>
          <h5 className="ml-4 lato sectionTitle">Kenapa Kami?</h5>
        </Row>
        <div>
          <WhyUs />
        </div>
        <hr/>
        <Row>
          <h5 className="ml-4 lato sectionTitle">Bergabung Menjadi Mitra</h5>
        </Row>
        <div>
          <JoinUs />
        </div>
        <div className="popularSection">
          <Row className="sectionTitle">
            <Link to="/articles/home">
              <h5 className="lato">Artikel</h5>
            </Link>
          </Row>
          <Row className="flex-row flex-nowrap horizontalMenu">
            <ArticlesHome />
          </Row>
        </div>
        {/* </Container> */}
      </Container>
      <Footer />
    </div>
  );
}
