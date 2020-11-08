import React from "react";
import { useHistory } from "react-router-dom";

import "../../../styles/Home.scss";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

import plasticSun from "../../../assets/plastic-seasun.jpg";
import moneySweep from "../../../assets/money-sweep.jpg";

export default function CarouselHome() {
  const history = useHistory();

  const userToken = localStorage.getItem("token");

  const carouselItems = [
    {
      img: plasticSun,
      title: `Ini bukanlah fenomena alam`,
      caption: `Waktunya kita mengambil tindakan`,
      buttonText: `Pelajari`,
      onClick: () => {
        history.push(`/articles`);
      },
    },
    {
      img: moneySweep,
      title: `Ubah sampah jadi rupiah`,
      caption: `Maksimalkan potensi dari sekitar anda`,
      buttonText: `Gabung`,
      onClick: () => {
        userToken ? history.push(`/category`) : history.push(`/register`);
      },
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
          <img
            className="d-block w-100 rounded-lg"
            style={{ height: "60vh" }}
            src={item.img}
            alt="First slide"
          />
          <div className="carousel-overlay"></div>
          <Carousel.Caption className="text-right">
            <h3 className="carouselTitle montserrat">{item.title}</h3>
            <p className="carouselText montserrat">
              {item.caption}
              <br />
              <Button
                size="sm"
                className="buttonCarousel m-1 p-1"
                variant="info"
                onClick={item.onClick}
              >
                {item.buttonText}
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    // </div>
  );
}
