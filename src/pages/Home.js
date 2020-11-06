import React from "react";

import { Container, Row, Col, Carousel } from "react-bootstrap";

import NavbarBootstrap from "../components/web-elements/NavbarBootstrap";
import CarouselHome from "../components/web-elements/CarouselHome";
import PopularHome from "../components/web-elements/PopularHome";
import ProductCard from "../components/web-elements/ProductCard";

export default function Home() {
  return (
    <div>
      <NavbarBootstrap />
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
            <h5 className="lato" >Populer Minggu ini</h5>
          </Row>
          <Row className="justify-content-center">
            <PopularHome />
          </Row>
        </div>
        <div className="popularSection">
          <Row className="">
            <h5 className="lato">Baru Hadir</h5>
          </Row>
          <Row className="justify-content-center">
            <PopularHome />
          </Row>
        </div>
        <br/>
        <br/>
        {/* </Container> */}
      </Container>
    </div>
  );
}
