import React from "react";

import { Button, Container, Row, Col, Card, Spinner } from "react-bootstrap";

import "../../styles/Font.scss";

import trashSack from "../../assets/trash-sack.jpg";
import ProductCard from "./ProductCard";

export default function PopularHome() {
  const dummyPopular = [
    {
      image: trashSack,
      title: "Botol Plastik",
      text: "Rp 10.000/Kg",
      buttonOnclick: ``,
      buttonVariant: `success`,
      buttonText: `+ Keranjang`,
    },
    {
      image: trashSack,
      title: "Botol Plastik",
      text: "text1",
      buttonOnclick: ``,
      buttonVariant: `success`,
      buttonText: `+ Keranjang`,
    },
    {
      image: trashSack,
      title: "Botol Plastik",
      text: "text1",
      buttonOnclick: ``,
      buttonVariant: `success`,
      buttonText: `+ Keranjang`,
    },
    {
      image: trashSack,
      title: "Botol Plastik",
      text: "text1",
      buttonOnclick: ``,
      buttonVariant: `success`,
      buttonText: `+ Keranjang`,
    },
  ];
  return dummyPopular.map((item, index) => (
    <Col xs={12} sm={6} md={3} key={index}>
      <ProductCard
        imageSource={item.image}
        title={item.title}
        text={item.text}
        buttonOnclick={item.buttonOnclick}
        buttonText={item.buttonText}
        variant={item.buttonVariant}
      />
    </Col>
  ));
}
