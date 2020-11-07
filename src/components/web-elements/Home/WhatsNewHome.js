import React from "react";

import { Col } from "react-bootstrap";

import "../../../styles/Font.scss";
import "../../../styles/popularHome.scss";

import cardboardImg from "../../../assets/cardboard-img.jfif";
import ProductCard from "./ProductCardHome";

export default function PopularHome() {
  const dummyPopular = [
    {
      image: cardboardImg,
      title: "Kardus bekas bersih",
      text: "Rp 5.000/Kg",
      buttonOnclick: ``,
      buttonVariant: `success`,
      buttonText: `+ Keranjang`,
      productRole: "jual",
    },
    {
      image: cardboardImg,
      title: "Kardus bekas bersih",
      text: "Rp 5.000/Kg",
      buttonOnclick: ``,
      buttonVariant: `success`,
      buttonText: `+ Keranjang`,
      productRole: "beli",
    },
    {
      image: cardboardImg,
      title: "Kardus bekas bersih",
      text: "Rp 5.000/Kg",
      buttonOnclick: ``,
      buttonVariant: `success`,
      buttonText: `+ Keranjang`,
      productRole: "beli",
    },
    {
      image: cardboardImg,
      title: "Kardus bekas bersih",
      text: "Rp 5.000/Kg",
      buttonOnclick: ``,
      buttonVariant: `success`,
      buttonText: `+ Keranjang`,
      productRole: "jual",
    },
    {
      image: cardboardImg,
      title: "Kardus bekas bersih",
      text: "Rp 5.000/Kg",
      buttonOnclick: ``,
      buttonVariant: `success`,
      buttonText: `+ Keranjang`,
      productRole: "beli",
    },
    {
      image: cardboardImg,
      title: "Kardus bekas bersih",
      text: "Rp 5.000/Kg",
      buttonOnclick: ``,
      buttonVariant: `success`,
      buttonText: `+ Keranjang`,
      productRole: "beli",
    },
  ];
  return dummyPopular.map((item, index) => (
    <Col
      className="colStyle align-item-center justify-content-center"
      xs={8}
      sm={8}
      md={3}
      key={index}
    >
      <ProductCard
        imageSource={item.image}
        title={item.title}
        text={item.text}
        buttonOnclick={item.buttonOnclick}
        buttonText={item.buttonText}
        variant={item.buttonVariant}
        productRole={item.productRole}
      />
    </Col>
  ));
}
