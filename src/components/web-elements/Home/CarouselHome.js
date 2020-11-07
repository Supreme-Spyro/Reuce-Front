import React from "react";


import '../../../styles/Home.scss'
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

import plasticSun from "../../../assets/plastic-seasun.jpg";
import moneySweep from "../../../assets/money-sweep.jpg";

export default function CarouselHome() {
  const carouselItems = [
    {
      img: plasticSun,
      title: `title1`,
      caption: ``,
      onClick: `{()=>{}}`,
    },
    {
      img: moneySweep,
      title: `title2`,
      caption: ``,
      onClick: `{()=>{}}`,
    },
    // {
    //   img: plasticSun,
    //   title: ``,
    //   caption: ``,
    //   onClick: `{()=>{}}`,
    // },
  ];

  return (
    // <div>
    <Carousel className="">
      {carouselItems.map((item, index) => (
        <Carousel.Item className="" key={index}>
          <img className="d-block w-100 rounded-lg" style={{height:"60vh"}} src={item.img} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-right montserrat">{item.title}</h3>
            <p>{item.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    // </div>
  );
}
