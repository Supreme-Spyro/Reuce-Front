import React from "react";

import { Col } from "react-bootstrap";

import "../../../styles/Font.scss";
import "../../../styles/popularHome.scss";

import wasteBox from "../../../assets/waste-box.jpg";
import ProductCard from "./ProductCardHome";

export default function PopularHome() {
  const dummyPopular = [
    {
      image: wasteBox,
      title: "Article Title",
      text: "",
    },
    {
      image: wasteBox,
      title: "Article Title",
      text: "",
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
        productRole={item.productRole}
      />
    </Col>
  ));
}
